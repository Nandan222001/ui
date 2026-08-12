import React from "react";

interface PrivacySection {
  heading: string;
  body: string;
}

const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    heading: "About Dayos Privacy",
    body: "Dayos is an AI technology company that builds autonomous agents for enterprise workflows. This statement explains what personal information we collect, why we collect it, and how it's shared — and we don't sell or monetize user data as a business model.",
  },
  {
    heading: "Scope of This Privacy Statement",
    body: "This statement applies when Dayos determines how and why personal information is processed, such as on our marketing sites or during a sales relationship. It does not cover cases where Dayos processes data purely on a customer's behalf and under that customer's instructions.",
  },
  {
    heading: "How We Collect and Use Personal Information",
    body: "We collect information you provide directly, like contact details submitted through a form, as well as information gathered automatically, such as usage and device data. We use this information for purposes like operating our services, responding to inquiries, and improving our products, relying on the legal bases required by applicable data protection law.",
  },
  {
    heading: "AI-Specific Data Handling",
    body: "Our agent platform is designed so customer data stays within the customer's own environment and is not used to train, fine-tune, or otherwise improve underlying models. Additional technical and contractual safeguards apply to data processed through autonomous workflows.",
  },
  {
    heading: "Cookies and Tracking Technologies",
    body: "Our websites use strictly necessary cookies to function, along with optional analytics and marketing cookies to understand traffic and tailor content. You can manage or disable non-essential cookies through your browser or cookie preference settings.",
  },
  {
    heading: "Sharing Your Information",
    body: "We may share personal information with service providers who support our operations, affiliated entities, and authorities when required by law. We do not sell personal information to third parties for advertising purposes.",
  },
  {
    heading: "Your Privacy Rights",
    body: "Depending on where you live, you may have rights to access, correct, delete, or restrict use of your personal information, and to lodge a complaint with a supervisory authority. We aim to honor these requests promptly and provide a straightforward way to submit them.",
  },
  {
    heading: "Data Retention",
    body: "We keep personal information only for as long as needed to fulfill the purposes described in this statement or to meet legal and contractual obligations. Once that need ends, data is securely deleted or anonymized.",
  },
  {
    heading: "Security and Compliance",
    body: "We maintain administrative, technical, and physical safeguards designed to protect personal information, including encryption in transit, access controls, and independent security certifications. We also rely on recognized frameworks for handling data that crosses international borders.",
  },
  {
    heading: "Contact Us",
    body: "If you have questions about this statement or want to exercise a privacy right, you can reach our privacy team using the contact details at the bottom of this page.",
  },
  {
    heading: "Changes to This Privacy Statement",
    body: "We may update this statement from time to time as our practices or applicable laws evolve. Material changes will be reflected on this page, and we encourage you to check back periodically.",
  },
];

export const PrivacyView: React.FC = () => {
  return (
    <div className="site-grid py-16 sm:py-24 max-w-3xl mx-auto">
      <span className="font-mono-tag text-[#979797] block mb-4">LEGAL</span>
      <h1 className="type-h2 mb-3">Privacy Statement</h1>
      <p className="font-mono-tag text-[#979797] mb-12">Last updated: March 10, 2026</p>

      <p className="type-body-large text-[#444444] mb-12">
        This statement describes how Dayos collects, uses, and protects personal information
        across our websites and products. This page is a condensed, plain-language overview
        provided for demonstration purposes and is not a binding legal document.
      </p>

      <div className="space-y-10">
        {PRIVACY_SECTIONS.map((section, idx) => (
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
        Questions about this statement or your personal information can be sent to{" "}
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
