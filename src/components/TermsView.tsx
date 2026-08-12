import React from "react";

interface TermsSection {
  heading: string;
  body: string;
}

const TERMS_SECTIONS: TermsSection[] = [
  {
    heading: "Eligibility",
    body: "You must be at least 16 years old to use Dayos sites and products. If you're using the service on behalf of a company or another person, you're confirming you have the authority to do so, and you accept responsibility for any violations that result.",
  },
  {
    heading: "Prohibited Conduct and Content",
    body: "You agree not to harass other users, access accounts you don't own, infringe on intellectual property, scrape or harvest data from our sites, or attempt to bypass any of our security controls. We reserve the right to suspend access for conduct that puts the platform or other users at risk.",
  },
  {
    heading: "Ownership; Limited License",
    body: "Everything on our sites — text, design, software, and underlying models — belongs to Dayos or our licensors. Your agreement with us grants a limited, non-transferable license to use our products for evaluation or ordinary business purposes, and nothing here transfers ownership to you.",
  },
  {
    heading: "Trademarks",
    body: "The Dayos name, logo, and related marks are ours, and you may not use them without written permission. Any other company or product names referenced on our sites belong to their respective owners.",
  },
  {
    heading: "Repeat Infringer Policy; Copyright Complaints",
    body: "We respond to valid copyright takedown notices and will terminate the accounts of users who are found to repeatedly infringe on others' intellectual property, consistent with applicable copyright law.",
  },
  {
    heading: "Accounts",
    body: "You're responsible for keeping your account information accurate and your credentials secure. Sharing login access with people outside your organization isn't permitted, and you're responsible for activity that happens under your account.",
  },
  {
    heading: "Feedback",
    body: "If you send us suggestions, ideas, or feedback about our products, you agree we can use it to improve Dayos without owing you compensation or credit, and any resulting improvements belong to us.",
  },
  {
    heading: "Third-Party Content",
    body: "Our sites may link to or display content from third parties. We don't control that content and make no promises about its accuracy, safety, or availability, so you access it at your own discretion.",
  },
  {
    heading: "Credentialing",
    body: "Any digital badges, certificates, or completion credentials issued through our platform are recognitions of activity only — they don't constitute a job offer, guarantee, or binding contractual relationship with Dayos or any employer.",
  },
  {
    heading: "Indemnification",
    body: "You agree to cover reasonable costs and damages Dayos incurs from claims arising out of your misuse of the site, violation of these terms, or conduct that harms another party.",
  },
  {
    heading: "Disclaimers",
    body: "Our sites and products are provided as-is, without warranties of any kind. We don't guarantee that the service will be uninterrupted, error-free, or perfectly accurate, and you use it at your own risk.",
  },
  {
    heading: "Limitation of Liability",
    body: "To the extent permitted by law, Dayos isn't liable for indirect, incidental, or consequential damages arising from your use of the service, and our total liability for any claim is capped at a modest, defined amount.",
  },
  {
    heading: "Release",
    body: "You release Dayos from claims related to disputes you have with other users or with third parties whose products or services you access through our platform.",
  },
  {
    heading: "Processing Data",
    body: "Details about how we collect, use, and safeguard personal information are covered separately in our Privacy Statement, which forms part of your agreement with us.",
  },
  {
    heading: "Promotions",
    body: "From time to time we may run contests, giveaways, or promotional offers. Where a specific promotion has its own rules, those rules take precedence over anything that conflicts with these general terms.",
  },
  {
    heading: "Governing Law; Dispute Resolution; Binding Arbitration",
    body: "Most disputes between you and Dayos are resolved through individual binding arbitration rather than in court or as part of a class action. You may have a limited window after accepting these terms to opt out of arbitration in writing.",
  },
  {
    heading: "Governing Law",
    body: "These terms are governed by the laws of the jurisdiction in which Dayos is headquartered, and any claims not subject to arbitration are handled exclusively in the courts local to that jurisdiction.",
  },
  {
    heading: "Modifying and Terminating Our Sites",
    body: "We may update, suspend, or discontinue any part of our sites or products, including pricing, at our discretion. We'll make reasonable efforts to notify users of material changes in advance.",
  },
  {
    heading: "Severability",
    body: "If a court finds any part of these terms unenforceable, that provision is removed and the rest of the agreement continues to apply in full.",
  },
  {
    heading: "Export Control",
    body: "You agree to comply with applicable export control and trade sanctions laws, and confirm you are not located in, or a resident of, any embargoed country or on a restricted-party list.",
  },
  {
    heading: "Miscellaneous",
    body: "This section covers additional standard provisions, including how we handle regional consumer rights and your acknowledgment that we may communicate with you electronically.",
  },
];

export const TermsView: React.FC = () => {
  return (
    <div className="site-grid py-16 sm:py-24 max-w-3xl mx-auto">
      <span className="font-mono-tag text-[#979797] block mb-4">LEGAL</span>
      <h1 className="type-h2 mb-3">Terms of Service</h1>
      <p className="font-mono-tag text-[#979797] mb-12">Last updated: January 16, 2024</p>

      <p className="type-body-large text-[#444444] mb-12">
        These terms govern your access to and use of Dayos websites, products, and services. By
        using our sites, you agree to the terms summarized below. This page is a condensed,
        plain-language overview provided for demonstration purposes and is not a binding legal
        document.
      </p>

      <div className="space-y-10">
        {TERMS_SECTIONS.map((section, idx) => (
          <div key={section.heading} className="pb-10 border-b border-[#c6c6c6]/40 last:border-b-0 last:pb-0">
            <h2 className="type-h4 mb-3">
              <span className="text-[#979797] mr-2">{String(idx + 1).padStart(2, "0")}</span>
              {section.heading}
            </h2>
            <p className="type-body-large text-[#444444]">{section.body}</p>
          </div>
        ))}
      </div>

      <p className="type-body-large text-[#444444] mt-12">
        Questions about these terms can be sent to{" "}
        <a
          href="mailto:hello@dayos.com"
          className="text-[#000000] underline hover:no-underline"
        >
          hello@dayos.com
        </a>
        .
      </p>
    </div>
  );
};
