import React, { useState } from "react";
import { ArrowUpRight, Mail, MapPin, CheckCircle2 } from "lucide-react";
import {
  CONTACT_CHANNELS,
  OFFICE_LOCATIONS,
  CONTACT_FAQS,
} from "../data/mockData";

interface ContactViewProps {
  onOpenDemo: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenDemo }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-grid py-12 min-h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="mb-8 pb-4 border-b border-[#c6c6c6]">
        <span className="mint-tag mb-2">GET IN TOUCH</span>
        <h1 className="type-h3">Let's talk about your rollout</h1>
        <p className="type-body-medium text-[#444444] max-w-lg mt-2">
          Tell us about your ERP stack and the workflow costing you the most
          time. A solution engineer will follow up directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form */}
        <div className="lg:col-span-5 bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6] h-fit">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#d1ffca] text-[#000000] flex items-center justify-center mx-auto font-bold text-xl">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="type-h4 text-[#000000]">Message sent</h3>
              <p className="type-body-medium text-[#444444] max-w-xs mx-auto">
                Our team will reach out to{" "}
                <span className="voltage-highlight">{email}</span> within one
                business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#000000] text-[#ffffff] px-6 py-3 rounded-lg font-neo text-sm font-medium cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-neo font-bold uppercase tracking-tight text-xl text-[#000000] mb-4">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono-tag text-[#000000] block mb-1">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  />
                </div>

                <div>
                  <label className="font-mono-tag text-[#000000] block mb-1">
                    WORK EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m.vance@enterprise.com"
                    className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  />
                </div>

                <div>
                  <label className="font-mono-tag text-[#000000] block mb-1">
                    ORGANIZATION / COMPANY
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Global Logistics"
                    className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  />
                </div>

                <div>
                  <label className="font-mono-tag text-[#000000] block mb-1">
                    HOW CAN WE HELP?
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the workflow or system you want Hero to take on..."
                    className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] py-4 rounded-xl font-neo text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer mt-4"
                >
                  <span>Send Message</span>
                  <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
                </button>
              </form>
            </>
          )}
        </div>

        {/* Right Column: Channels, offices, FAQ */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Contact Channels */}
          <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]">
            <span className="font-mono-tag text-[#000000] block mb-4">
              CONTACT CHANNELS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CONTACT_CHANNELS.map((channel) => (
                <div
                  key={channel.email}
                  className="bg-[#f3f3f3] p-4 rounded-xl border border-[#c6c6c6]/40"
                >
                  <Mail className="w-4 h-4 text-[#000000] mb-2" />
                  <h3 className="font-neo font-bold text-sm text-[#000000] mb-1">
                    {channel.label}
                  </h3>
                  <p className="type-body-medium text-[#444444] text-sm mb-2">
                    {channel.description}
                  </p>
                  <a
                    href={`mailto:${channel.email}`}
                    className="font-mono text-xs text-[#000000] hover:underline break-all"
                  >
                    {channel.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]">
            <span className="font-mono-tag text-[#000000] block mb-4">
              WHERE WE OPERATE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OFFICE_LOCATIONS.map((office) => (
                <div key={office.city} className="flex gap-3">
                  <MapPin className="w-4 h-4 text-[#979797] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-neo font-bold text-sm text-[#000000]">
                      {office.city}
                    </h3>
                    <p className="type-body-medium text-[#444444] text-sm">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]">
            <span className="font-mono-tag text-[#000000] block mb-4">
              FREQUENTLY ASKED
            </span>
            <div className="space-y-4">
              {CONTACT_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="pb-4 border-b border-[#f3f3f3] last:border-0 last:pb-0"
                >
                  <h3 className="font-neo font-bold text-sm text-[#000000] mb-1">
                    {faq.question}
                  </h3>
                  <p className="type-body-medium text-[#444444] text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inline CTA */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#000000] rounded-[24px] p-6 sm:p-8">
            <span className="type-body-headline text-[#ffffff]">
              Prefer to talk it through live?
            </span>
            <button
              onClick={onOpenDemo}
              className="bg-[#ffffff] hover:bg-[#e5e5e5] text-[#000000] px-5 py-3 rounded-lg font-neo font-medium text-sm flex items-center gap-2 cursor-pointer transition-colors shrink-0 w-fit"
            >
              <span>Schedule a Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
