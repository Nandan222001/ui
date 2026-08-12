import React from "react";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const POSTS: Post[] = [
  {
    title: "5 Signs Your Business Is Ready for an AI Chatbot",
    excerpt:
      "If your team is answering the same questions over and over, or support tickets pile up after hours, an AI chatbot trained on your own data can carry more of the load than you'd expect.",
    date: "2025",
    category: "AI & LLM",
  },
  {
    title: "RAG vs. Fine-Tuning: Which Fits Your Project",
    excerpt:
      "Two common ways to make an LLM 'know' your business, and why we default to retrieval-augmented generation for most client projects before reaching for fine-tuning.",
    date: "2025",
    category: "AI & LLM",
  },
  {
    title: "Why We Build Chatbots on Top of Your Own Data, Not the Open Internet",
    excerpt:
      "A general-purpose model answers general questions. A useful support or sales assistant needs to be grounded in your docs, your policies, and your product, not the wider web.",
    date: "2025",
    category: "AI & LLM",
  },
  {
    title: "Inside an AI Automation Agent: What It Can and Can't Do Yet",
    excerpt:
      "AI agents can now chain together steps, call tools, and handle multi-step workflows, but they still need guardrails. Here's an honest look at where the line sits today.",
    date: "2025",
    category: "AI & LLM",
  },
  {
    title: "Picking Between GPT, Claude, and Gemini for Your Product",
    excerpt:
      "There's no single 'best' model. We walk through how cost, latency, context length, and task type usually decide which provider fits a given feature.",
    date: "Jan 2026",
    category: "AI & LLM",
  },
  {
    title: "The Real Cost of a Custom Software Build (And Why Templates Don't Cut It)",
    excerpt:
      "Off-the-shelf tools are cheap until they aren't. A look at when a custom build actually pays for itself versus stretching a template past its limits.",
    date: "2025",
    category: "Custom Software",
  },
  {
    title: "Cross-Platform vs. Native: Choosing the Right Mobile App Approach",
    excerpt:
      "Cross-platform frameworks get you to market faster; native still wins on performance-heavy features. How we help clients decide which trade-off actually matters for their app.",
    date: "2025",
    category: "Mobile Apps",
  },
  {
    title: "5 Business Processes You Didn't Know Could Be Automated",
    excerpt:
      "From invoice matching to internal approvals, a lot of manual busywork is more automatable than teams assume, often with tools they already have.",
    date: "Jan 2026",
    category: "Business IT",
  },
  {
    title: "What Makes a Final-Year AI Project Actually Original",
    excerpt:
      "We see a lot of student project ideas built around the same three tutorials. Here's how we help students scope something original enough to defend confidently.",
    date: "2025",
    category: "Academic Projects",
  },
  {
    title: "How We Scope an Academic AI Project From a Rough Idea",
    excerpt:
      "Most students come to us with a topic, not a spec. A look at how a vague idea like 'an AI app for X' turns into a buildable, gradeable final-year project.",
    date: "2025",
    category: "Academic Projects",
  },
];

export const BlogView: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="w-full bg-[#e5e5e5] text-[#000000]">
        <div className="site-grid section-block">
          <span className="mint-tag mb-6">BLOG</span>
          <h1 className="type-h1 max-w-4xl">
            Notes from the people building your next project.
          </h1>
          <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
            Thoughts on AI, custom software, and mobile apps, written by the
            engineers who actually ship them, for founders, businesses, and
            students alike.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="w-full bg-[#e5e5e5] text-[#000000] pt-0">
        <div className="site-grid pb-16 sm:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <div
                key={post.title}
                className="cursor-default bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/50 flex flex-col h-full"
              >
                <span className="font-mono-tag bg-[#d1ffca] text-[#000000] rounded-full px-3 py-1 self-start mb-4">
                  {post.category}
                </span>
                <h3 className="type-h4 mb-3">{post.title}</h3>
                <p className="type-body-medium text-[#444444] flex-1">
                  {post.excerpt}
                </p>
                <span className="font-mono-tag text-[#979797] block mt-6">
                  {post.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
