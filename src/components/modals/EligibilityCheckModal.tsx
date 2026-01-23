"use client";

import { EligibilityTikIcon } from "../icons";

interface EligibilityCheckItem {
  number: number;
  title: string;
  value: string;
  isPassed: boolean;
}

interface EligibilityCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  walletAddress?: string;
  eligibilityData: EligibilityCheckItem[];
}

export default function EligibilityCheckModal({
  isOpen,
  onClose,
  onContinue,
  eligibilityData,
}: EligibilityCheckModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl h-165.25 bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl p-6 overflow-hidden">
        {/* Background Blur Effect */}
        <div className="absolute w-[486.25px] h-[376.09px] -left-[144.35px] -top-[159.04px] bg-white mix-blend-overlay blur-[61.2187px] rotate-30" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-4 h-4 opacity-70 hover:opacity-100 transition-opacity z-15 cursor-pointer"
          aria-label="Close"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4L12 12M4 12L12 4"
              stroke="white"
              strokeWidth="1.33"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <h2 className="font-vietnam font-semibold text-lg leading-[18px] tracking-[-0.44px] text-white mb-2">
            Validator Eligibility
          </h2>
          <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] mb-6">
            We&apos;ve checked your wallet against the requirements
          </p>

          {/* Eligibility Checks */}
          <div className="flex flex-col gap-4 mb-12">
            {eligibilityData.map((item) => (
              <div
                key={item.number}
                className="flex items-start gap-4 p-4 pt-4 pb-0 bg-white/5 border border-white/10 rounded-2xl min-h-[96px]"
              >
                {/* Number Badge */}
                <div className="box-border flex flex-row justify-center items-center px-4.5 py-2 gap-1.5 w-10 h-10 bg-[#34394D] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl shrink-0">
                  <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.15px] text-white">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 flex-grow pb-4">
                  {/* Title and Status Icon */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-vietnam font-medium text-base leading-6 tracking-[-0.31px] text-white">
                      {item.title}
                    </h3>
                    {/* Success Icon */}
                    <div className="w-[30px] h-[30px] flex items-center justify-center flex-shrink-0">
                      <EligibilityTikIcon />
                    </div>
                  </div>
                  {/* Value */}
                  <p className="font-grotesk font-medium text-base leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <button
              onClick={onClose}
              className="flex items-center justify-center px-4 py-2 h-12 bg-white/5 border border-white/10 rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.31px] text-white hover:bg-white/10 transition-colors"
            >
              Back
            </button>
            <button
              onClick={onContinue}
              className="flex items-center justify-center px-[18px] py-2 h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.31px] text-white hover:bg-[#0C7D5D] transition-colors"
            >
              Continue to Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
