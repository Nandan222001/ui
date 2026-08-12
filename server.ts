import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

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
        contents: `Analyze the following enterprise workflow for AI agent automation for the Dayos platform:
Industry: ${industry || "General Enterprise"}
Department: ${department || "Operations"}
Current Workflow / Pain Points: ${workflowDescription || "Manual data reconciliation and reporting across ERPs"}
Team Size: ${teamSize || "25 people"}
Current Monthly Operations Cost: ${currentCost || "$50,000"}

Provide a comprehensive, high-authority brutalist enterprise audit report in JSON format with:
1. Executive Summary
2. Recommended AI Agent Architecture (Agent Name, Capabilities, Trigger Mechanism, Data Connectors e.g. SAP/Oracle/Workday/Salesforce)
3. Projected Time & Cost Savings (Hours saved per week, Monthly savings $, Estimated ROI %)
4. Implementation Milestones (Phase 1 to Phase 4 timeline)
5. Risk & Security Governance Notes`,
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
        "erp-auditor": "You are DAYOS ERP-01, an autonomous SAP/Oracle GL reconciliation agent. You speak in concise, technical, enterprise-grade terminology with structured markdown, bold key values, and clear audit trail verification step numbers.",
        "supply-predict": "You are DAYOS SCM-04, a predictive supply chain routing agent. You analyze inventory levels, logistics bottlenecks, supplier risk scores, and autonomous reorder thresholds.",
        "hr-synthesizer": "You are DAYOS HR-02, a Workday/Greenhouse workforce intelligence agent. You synthesize talent density, compensation equity, and cross-department staffing requirements.",
        "custom": "You are DAYOS-CORE, an enterprise multi-agent coordinator for enterprise systems."
      };

      const instruction = systemInstructions[agentType] || systemInstructions["custom"];

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `User Query / Enterprise Event: ${userQuery}\nContext Data: ${JSON.stringify(contextData || {})}`,
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
        contents: `Evaluate this enterprise AI readiness assessment response set: ${JSON.stringify(answers)}.
Generate a comprehensive readiness diagnosis containing:
- Readiness tier (e.g. "FOUNDATIONAL", "SCALING", "ENTERPRISE-READY")
- Numerical readiness score (0 - 100)
- Core Strengths (array of strings)
- Critical Vulnerabilities / Bottlenecks (array of strings)
- Recommended First Deployment Action Item
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
