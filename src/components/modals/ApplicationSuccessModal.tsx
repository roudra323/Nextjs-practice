"use client";

import { CheckCircle } from "lucide-react";
import { TikIcon } from "../icons";

interface ApplicationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToDashboard: () => void;
}

export default function ApplicationSuccessModal({
  isOpen,
  onClose,
  onGoToDashboard,
}: ApplicationSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[454px] h-[407px] bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden">
        {/* Background Blur Effect */}
        <div className="absolute w-[486.25px] h-[376.09px] -left-[202.35px] -top-[156.04px] bg-white mix-blend-overlay blur-[61.2187px] rotate-[30deg]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[17px] right-[17px] w-4 h-4 opacity-70 hover:opacity-100 transition-opacity z-15 cursor-pointer"
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
        <div className="relative z-10 flex flex-col items-center">
          {/* Success Icon */}
          <div className="flex items-center justify-center w-20 h-20 mt-[69px] bg-[rgba(14,150,111,0.2)] shadow-[0px_0px_40px_rgba(34,197,94,0.3)] rounded-full">
            <TikIcon className="w-12 h-12 text-[#0E966F]" />
          </div>

          {/* Title */}
          <h2 className="mt-[34px] font-vietnam font-semibold text-xl leading-[18px] tracking-[-0.44px] text-white">
            Application Submitted
          </h2>

          {/* Description */}
          <p className="mt-[21px] w-[361px] font-vietnam font-normal text-base leading-6 tracking-[-0.45px] text-center text-[#AAB3D0]">
            Your application is under review by the Krown team. Please check
            again for update.
          </p>

          {/* Dashboard Button */}
          <button
            onClick={onGoToDashboard}
            className="mt-[39px] flex items-center justify-center w-[262px] h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-[#0C7D5D] transition-colors cursor-pointer"
          >
            Go to Validator Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
