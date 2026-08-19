import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

const SOLUTIONS = [
  {
    name: "Chatbots",
    slug: "ai-chatbots-assistants",
    description:
      "Custom-built chatbots and virtual assistants that understand your business context, trained on your data, and deployed across web, mobile, or messaging channels.",
    video: "/media/ai_solutions-loop.webm",
  },
  {
    name: "Automation",
    slug: "ai-automation-agents",
    description:
      "AI agents that automate repetitive workflows and multi-step processes across your business, so your team spends time on the work that actually needs a human.",
    video: "/media/x_as_a_service-loop.webm",
  },
  {
    name: "LLM Integration",
    slug: "llm-integration",
    description:
      "Deep integration of OpenAI, Anthropic, and Google's models into your existing product, including retrieval-augmented pipelines that ground answers in your own data.",
    video: "/media/professional_services-loop.webm",
  },
];

export const SolutionsEntry: React.FC = () => {
  return (
    <section className="w-full bg-[#000000] text-[#ffffff]">
      <div className="site-grid section-block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="type-quote">
              Supercharge your product with AI, from chatbots to full LLM integration
            </h2>
          </Reveal>
          <p className="lg:col-span-4 type-body-large text-[#979797]">
            From conversational interfaces to autonomous automation, NMT
            builds the AI layer that fits your product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 lg:gap-24">
          {SOLUTIONS.map((sol) => (
            <Link key={sol.name} to={`/platform/${sol.slug}`} className="group cursor-pointer">
              {/* Real site: media-wrap has overflow:visible — the clip is
                  shifted -20% and spills past its own square, not clipped */}
              <div className="w-full aspect-square overflow-visible mb-6">
                <video
                  className="w-full h-full object-contain -translate-x-[20%] transition-transform duration-300 ease-in-out group-hover:-translate-x-[20%] group-hover:scale-125"
                  src={sol.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <h3 className="type-h3 mb-3">{sol.name}</h3>
              <p className="type-body-medium text-[#979797]">
                {sol.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
