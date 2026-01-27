"use client";

import { useEffect } from "react";

interface StakeSuccessToastProps {
  isVisible: boolean;
  onClose: () => void;
  amount: string;
  poolName: string;
  duration?: number; // auto dismiss duration in ms
}

export default function StakeSuccessToast({
  isVisible,
  onClose,
  amount,
  poolName,
  duration = 5000,
}: StakeSuccessToastProps) {
  // Auto dismiss after duration
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 right-6 z-100 animate-slide-in-right">
      <div className="flex items-start gap-2.5 w-94 h-[87px] p-[17px_17px_14px_17px] bg-[#0B0E17] border border-[rgba(255,255,255,0.1)] rounded-xl shadow-[0px_10px_25px_rgba(0,0,0,0.3)]">
        {/* Success Icon */}
        <div className="shrink-0">
          <div className="w-5 h-5 flex items-center justify-center bg-[#0E966F] rounded-full">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 6L5 8.5L9.5 3.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1">
          <span className="font-vietnam font-medium text-[13px] leading-5 tracking-[-0.076px] text-white">
            Staked and Joined Successfully!
          </span>
          <span className="font-vietnam font-normal text-[13px] leading-4.5 tracking-[-0.076px] text-[#AAB3D0]">
            You have staked {amount} KROWN and joined {poolName} successfully.
          </span>
        </div>
      </div>
    </div>
  );
}
