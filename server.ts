import express from "express";
import http from "http";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

// Origin of the standalone backend (d:\htdocs\UI\backend).
const BACKEND_ORIGIN = process.env.BACKEND_ORIGIN ?? "http://127.0.0.1:4000";
const BACKEND_HOST = new URL(BACKEND_ORIGIN).host;
// Safety cap for buffered proxy bodies (the backend enforces 100kb itself).
const MAX_PROXY_BODY_BYTES = 1024 * 1024;

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT ?? 3000);

  // Proxy /api/v1 to the secured backend service. Registered BEFORE
  // express.json() so the raw body stream stays intact for forwarding.
  // Implementation notes:
  // - The body is buffered and the outgoing request is ended explicitly
  //   (robust against client keep-alive/stream quirks).
  // - Hop-by-hop headers (connection, keep-alive, transfer-encoding, upgrade)
  //   are stripped in both directions — forwarding them corrupts framing.
  app.use("/api/v1", (req, res) => {
    const chunks: Buffer[] = [];
    let tooLarge = false;
    let answered = false;

    const respondBadGateway = () => {
      if (answered) return;
      answered = true;
      res.status(502).json({
        success: false,
        error: {
          code: "BACKEND_UNAVAILABLE",
          message: "Backend service is not reachable.",
        },
      });
    };

    req.on("data", (chunk: Buffer) => {
      if (tooLarge) return;
      chunks.push(chunk);
      let total = 0;
      for (const c of chunks) total += c.length;
      if (total > MAX_PROXY_BODY_BYTES) {
        tooLarge = true;
        chunks.length = 0;
      }
    });
    req.on("error", respondBadGateway);
    req.on("end", () => {
      if (answered) return;
      if (tooLarge) {
        answered = true;
        res.status(413).json({
          success: false,
          error: { code: "PAYLOAD_TOO_LARGE", message: "Request body too large." },
        });
        return;
      }

      const body = Buffer.concat(chunks);
      const headers: http.OutgoingHttpHeaders = { ...req.headers };
      delete headers.connection;
      delete headers["keep-alive"];
      delete headers["transfer-encoding"];
      delete headers.upgrade;
      headers.host = BACKEND_HOST;
      if (body.length > 0) headers["content-length"] = String(body.length);
      else delete headers["content-length"];

      const proxyReq = http.request(
        `${BACKEND_ORIGIN}${req.originalUrl}`,
        { method: req.method, headers },
        (proxyRes) => {
          const outHeaders: http.OutgoingHttpHeaders = { ...proxyRes.headers };
          delete outHeaders.connection;
          delete outHeaders["keep-alive"];
          delete outHeaders["transfer-encoding"];
          res.writeHead(proxyRes.statusCode ?? 502, outHeaders);
          proxyRes.pipe(res);
        }
      );
      proxyReq.on("error", respondBadGateway);
      if (body.length > 0) proxyReq.write(body);
      proxyReq.end();
    });
  });

  app.use(express.json());

  // Lazy initialize Gemini client securely
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured.");
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // Healthcheck API
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // 1. Analyze Use Case & Calculate ROI
  app.post("/api/gemini/analyze-usecase", async (req, res) => {
    try {
      const { industry, department, workflowDescription, teamSize, currentCost } = req.body;
      const ai = getGeminiClient();

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Analyze the following business workflow or project for AI/software automation, for NMT Solutions (an AI, custom software, and IT solutions company):
Industry: ${industry || "General Business"}
Project Type: ${department || "AI Chatbot / LLM Integration"}
Current Workflow / Pain Points: ${workflowDescription || "Manual, repetitive customer support and data entry work"}
Team Size: ${teamSize || "10 people"}
Current Monthly Operations Cost: ${currentCost || "$5,000"}

Provide a clear, confident project scoping report in JSON format with:
1. Executive Summary
2. Recommended Solution Architecture (Component Name, Capabilities, Trigger Mechanism, Tools/Integrations e.g. OpenAI/Anthropic/Slack/Zendesk)
3. Projected Time & Cost Savings (Hours saved per week, Monthly savings $, Estimated ROI %)
4. Implementation Milestones (Phase 1 to Phase 4 timeline)
5. Risk & Data Security Notes`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              executiveSummary: { type: Type.STRING },
              readinessScore: { type: Type.NUMBER },
              monthlySavingsEst: { type: Type.STRING },
              timeSavedPerWeekHours: { type: Type.NUMBER },
              roiPercentage: { type: Type.NUMBER },
              agentModules: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    role: { type: Type.STRING },
                    connectors: { type: Type.ARRAY, items: { type: Type.STRING } },
                    autonomyLevel: { type: Type.STRING },
                    description: { type: Type.STRING }
                  },
                  required: ["name", "role", "connectors", "autonomyLevel", "description"]
                }
              },
              milestones: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    phase: { type: Type.STRING },
                    duration: { type: Type.STRING },
                    deliverables: { type: Type.STRING }
                  },
                  required: ["phase", "duration", "deliverables"]
                }
              },
              governanceNotes: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: [
              "title", "executiveSummary", "readinessScore", "monthlySavingsEst",
              "timeSavedPerWeekHours", "roiPercentage", "agentModules", "milestones", "governanceNotes"
            ]
          }
        }
      });

      res.json(JSON.parse(response.text || "{}"));
    } catch (err: any) {
      console.error("Error analyzing usecase:", err);
      res.status(500).json({ error: err.message || "Failed to generate audit report" });
    }
  });

  // 2. Interactive Enterprise Agent Sandbox
  app.post("/api/gemini/agent-playground", async (req, res) => {
    try {
      const { agentType, userQuery, contextData } = req.body;
      const ai = getGeminiClient();

      const systemInstructions: Record<string, string> = {
        "nmt-chat-support": "You are NMT-CHAT-01, an AI customer support chatbot for an e-commerce or service business. You answer clearly and helpfully in plain language, referencing standard policy where relevant, and note when a question should be escalated to a human.",
        "nmt-code-review": "You are NMT-CHAT-02, an AI code review assistant. You review code for bugs, security issues, and style problems, explain your reasoning clearly, and flag anything that needs a senior engineer's judgment before merge.",
        "nmt-academic-assistant": "You are NMT-CHAT-03, an AI assistant for academic and final-year student projects. You help structure project briefs, summarize research, and check work against common evaluation criteria, encouraging original thinking rather than doing the work verbatim.",
        "nmt-it-helpdesk": "You are NMT-CHAT-04, an IT helpdesk automation agent. You triage incoming IT tickets, suggest likely causes and fixes for common issues, and note when a ticket needs to be routed to a human engineer.",
        "custom": "You are an NMT Solutions AI assistant, coordinating across chatbot, automation, and software support tasks for a client business."
      };

      const instruction = systemInstructions[agentType] || systemInstructions["custom"];

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `User Query / Event: ${userQuery}\nContext Data: ${JSON.stringify(contextData || {})}`,
        config: {
          systemInstruction: instruction,
          temperature: 0.3
        }
      });

      res.json({ output: response.text });
    } catch (err: any) {
      console.error("Error in agent playground:", err);
      res.status(500).json({ error: err.message || "Failed to execute agent task" });
    }
  });

  // 3. Enterprise Readiness Audit Quiz Evaluation
  app.post("/api/gemini/readiness-audit", async (req, res) => {
    try {
      const { answers } = req.body;
      const ai = getGeminiClient();

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Evaluate this business's AI/chatbot readiness assessment response set: ${JSON.stringify(answers)}.
Generate a clear readiness diagnosis containing:
- Readiness tier (e.g. "GETTING STARTED", "READY TO PILOT", "READY TO SCALE")
- Numerical readiness score (0 - 100)
- Core Strengths (array of strings)
- Key Gaps / Things to Address First (array of strings)
- Recommended First Project to Start With
- Concise Executive Summary`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              tier: { type: Type.STRING },
              score: { type: Type.NUMBER },
              strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
              vulnerabilities: { type: Type.ARRAY, items: { type: Type.STRING } },
              firstAction: { type: Type.STRING },
              summary: { type: Type.STRING }
            },
            required: ["tier", "score", "strengths", "vulnerabilities", "firstAction", "summary"]
          }
        }
      });

      res.json(JSON.parse(response.text || "{}"));
    } catch (err: any) {
      console.error("Error in readiness audit:", err);
      res.status(500).json({ error: err.message || "Failed to evaluate readiness audit" });
    }
  });

  // Vite middleware in dev mode / static serve in prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
