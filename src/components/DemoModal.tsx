import React, { useState } from "react";
import { X, CheckCircle2, ArrowUpRight } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [erpStack, setErpStack] = useState("SAP S/4HANA");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/60 backdrop-blur-xs">
      <div className="bg-[#ffffff] rounded-[32px] max-w-lg w-full p-6 sm:p-8 border border-[#c6c6c6] relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#f3f3f3] text-[#000000] flex items-center justify-center hover:bg-[#000000] hover:text-[#ffffff] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#d1ffca] text-[#000000] flex items-center justify-center mx-auto font-bold text-xl">
              ✓
            </div>
            <h3 className="type-h4 text-[#000000]">
              Demo confirmed
            </h3>
            <p className="type-body-medium text-[#444444] max-w-xs mx-auto">
              Our enterprise solution engineering team will reach out to <span className="voltage-highlight">{email}</span> within 2 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#000000] text-[#ffffff] px-6 py-3 rounded-lg font-neo text-sm font-medium cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="mint-tag mb-2">SCHEDULE ENTERPRISE DEMO</span>
              <h3 className="type-h4 text-[#000000]">
                Schedule architecture audit
              </h3>
              <p className="type-body-medium text-[#444444] mt-1">
                Direct 30-minute consultation with a Dayos system architect.
              </p>
            </div>

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
                  PRIMARY ERP / CRM SYSTEM
                </label>
                <select
                  value={erpStack}
                  onChange={(e) => setErpStack(e.target.value)}
                  className="w-full bg-[#f3f3f3] border border-[#c6c6c6] rounded-xl p-3 type-body-medium text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#000000]"
                >
                  <option>SAP S/4HANA</option>
                  <option>Oracle Fusion GL</option>
                  <option>Workday Human Capital</option>
                  <option>Salesforce Enterprise CRM</option>
                  <option>NetSuite / Microsoft Dynamics</option>
                  <option>Custom / Legacy REST</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#000000] hover:bg-[#2f2f2f] text-[#ffffff] py-4 rounded-xl font-neo text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer mt-4"
              >
                <span>Confirm Demo Appointment</span>
                <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
