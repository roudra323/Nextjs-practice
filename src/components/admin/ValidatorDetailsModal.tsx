"use client";

import { IncreaseIcon } from "../icons";

interface ValidatorData {
  id: number;
  name: string;
  address: string;
  initials: string;
  country: string;
}

interface ValidatorDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  validator: ValidatorData | null;
}

// Stats for the modal
const validatorStats = [
  { label: "Blocks Produced", value: "2,847.3", change: "+12.4%" },
  { label: "Stake", value: "2,847.3", change: "+12.4%" },
  { label: "Timeouts (24h)", value: "0", change: "+12.4%" },
  { label: "Total Transactions", value: "65,000", change: "+12.4%" },
  { label: "Total Tips (Krown)", value: "2,847.3", change: "+12.4%" },
  { label: "Total Base Fees", value: "2,847.3", change: "+12.4%" },
  { label: "Avg Tx/Block", value: "0", change: "+12.4%" },
  { label: "Avg Tip/Tx", value: "65,000", change: "+12.4%" },
  { label: "Avg Gas/Block", value: "2,847.3", change: "+12.4%" },
  { label: "Avg Gas/Block", value: "2,847.3", change: "+12.4%" },
  { label: "Max Tx in Block", value: "0", change: "+12.4%" },
  { label: "Min Tx in Block", value: "65,000", change: "+12.4%" },
];

export default function ValidatorDetailsModal({
  isOpen,
  onClose,
  validator,
}: ValidatorDetailsModalProps) {
  if (!isOpen || !validator) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-253.75 max-h-[90vh] overflow-y-auto">
        <div className="relative bg-[#0B0E17] border border-[rgba(255,255,255,0.1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl p-6 overflow-hidden">
          {/* Decorative blur ellipse */}
          <div className="absolute -left-36 -top-40 w-121.5 h-119 bg-white mix-blend-overlay blur-[61px] rotate-30 opacity-90 pointer-events-none" />

          {/* Close button - always in top right */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-10 flex items-center justify-center w-4 h-4 opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="white"
                strokeWidth="1.33"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3 pr-8">
            <div>
              {/* Validator Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="flex items-center justify-center w-10 h-10 bg-[#34394D] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl shrink-0">
                  <span className="font-grotesk font-bold text-[15px] leading-4.75 text-white">
                    {validator.initials}
                  </span>
                </div>
                {/* Name & Address */}
                <div className="flex flex-col gap-1">
                  <span className="font-vietnam font-medium text-base leading-5 tracking-[-0.15px] text-white">
                    {validator.name}
                  </span>
                  <span className="font-vietnam font-normal text-xs leading-4 text-[#AAB3D0]">
                    {validator.address}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="relative font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] my-4">
                High-performance validator built for the Monad community,
                reinvesting into open data.
              </p>
            </div>

            {/* Right side info */}
            <div className="flex flex-col items-start sm:items-end gap-2">
              <div className="flex items-center gap-3">
                {/* Country flag */}
                <span className="text-xl">{validator.country}</span>
                {/* Live indicator */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0E966F] rounded-full" />
                  <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#0E966F]">
                    LIVE
                  </span>
                </div>
              </div>
              <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-white">
                Validator ID : {validator.id}
              </span>
              <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-white">
                Commission : 10%
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[rgba(255,255,255,0.1)] mb-5" />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {validatorStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-vietnam font-medium text-sm leading-4.75 text-[#AAB3D0]">
                    {stat.label}
                  </span>
                  <div className="flex items-center gap-0 px-1.5 h-5 bg-[rgba(14,150,111,0.1)] rounded-full">
                    <IncreaseIcon size={12} />
                    <span className="font-grotesk font-medium text-xs leading-4 text-[#0E966F]">
                      {stat.change}
                    </span>
                  </div>
                </div>
                <span className="font-grotesk font-medium text-xl leading-7.75 text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
