import React from "react";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const POSTS: Post[] = [
  {
    title: "New Oracle & Workday modules, built by AI — up to 50% funded.",
    excerpt:
      "A Singapore government co-funding program will cover up to half the cost of agentic AI delivery work for eligible enterprises.",
    date: "Jul 1, 2026",
    category: "Company",
  },
  {
    title: "Athena is live.",
    excerpt:
      "Hero v2.0 is generally available: governed Oracle and Workday support that resolves tickets end-to-end, answers data questions in plain English, and configures systems by conversation.",
    date: "Jun 18, 2026",
    category: "Product",
  },
  {
    title:
      "Singapore Just Defined Agentic AI. The Economics Behind the Definition Are What Matter.",
    excerpt:
      "Singapore's tech regulator published a technical definition of agentic AI, citing Dayos as one of several industry case studies.",
    date: "May 22, 2026",
    category: "Finance",
  },
  {
    title: "The Configuration Collapse: Why Legacy ERP Falls Next.",
    excerpt:
      "A look at why configuration-bound enterprise software is running out of road as agentic systems take over the work around it.",
    date: "May 13, 2026",
    category: "IT Management",
  },
  {
    title: "Dayos AI Agent Passes All 10 OWASP Agentic Security Checks.",
    excerpt:
      "How Hero was evaluated against the OWASP framework for agentic AI security, and what passing all ten checks actually means.",
    date: "Apr 27, 2026",
    category: "IT Management",
  },
  {
    title:
      "Building Persistent Memory for an Enterprise AI Agent: How We Went From Mem0 to LangMem.",
    excerpt:
      "The engineering story behind Hero's memory layer, and why we migrated from Mem0 to LangMem to keep long-running agent context reliable.",
    date: "Apr 20, 2026",
    category: "Finance",
  },
  {
    title: "The Glasswing Gap.",
    excerpt:
      "Enterprise applications turned out to be undefended, not just overlooked, once agentic AI started probing them at scale.",
    date: "Apr 20, 2026",
    category: "IT Management",
  },
  {
    title: "MCP is a Convenience, Not an Architecture.",
    excerpt:
      "Why the Model Context Protocol is a useful connector standard, but not, on its own, a substitute for a real agent architecture.",
    date: "Apr 4, 2026",
    category: "IT Management",
  },
  {
    title: "Every Enterprise System Has AI Agents Now. None of Them Work Together.",
    excerpt:
      "Vendors have shipped agents into every corner of the enterprise stack independently, leaving orchestration as the unsolved problem.",
    date: "Mar 27, 2026",
    category: "Human Resources",
  },
  {
    title: "Can AI Rebuild Your Enterprise UI? Try It.",
    excerpt:
      "Legacy enterprise platforms predate AI's ability to generate better interfaces quickly. Our 'Vibecode Test' puts that gap on display.",
    date: "Mar 16, 2026",
    category: "Accounting",
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
            Thoughts on the future of work, from the people building it.
          </h1>
          <p className="type-body-headline text-[#444444] max-w-2xl mt-8">
            Notes on agentic AI, enterprise systems, and what changes when
            software starts doing the work instead of just recording it.
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
