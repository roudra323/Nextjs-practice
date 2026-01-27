"use client";

import { X, Calendar, CheckCircle } from "lucide-react";
import { UnbondingEndIcon } from "../icons";

interface UnstakeDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  unstakeAmount: number;
  unbondingStartDate: string;
  unbondingEndDate: string;
  timeRemaining: string;
}

export default function UnstakeDetailsModal({
  isOpen,
  onClose,
  unstakeAmount,
  unbondingStartDate,
  unbondingEndDate,
  timeRemaining,
}: UnstakeDetailsModalProps) {
  if (!isOpen) return null;

  const formatAmount = (amount: number) => {
    return amount.toLocaleString();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative flex flex-col items-start p-[1px] w-full max-w-[712px] bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl">
        {/* Inner Card */}
        <div className="relative flex flex-col items-start p-6 pb-4 gap-4 w-full bg-[#0C0F18] border border-white/10 shadow-[0px_2px_8px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden">
          {/* Background Blur Effect */}
          <div className="absolute w-[486.25px] h-[376.09px] -left-[154px] -top-[127px] bg-white mix-blend-overlay blur-[61.2187px] rotate-[30deg] z-0" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <h2 className="font-vietnam font-medium text-lg leading-6 tracking-[-0.3125px] text-white">
              Unstake Details
            </h2>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-white" strokeWidth={1.33} />
            </button>
          </div>

          {/* Details List */}
          <div className="relative z-10 flex flex-col gap-4 w-full">
            {/* Unstake Amount */}
            <div className="flex justify-between items-center py-2 border-b border-[#1F222B]">
              <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                Unstake Amount
              </span>
              <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
                {formatAmount(unstakeAmount)} KROWN
              </span>
            </div>

            {/* Unbonding Start */}
            <div className="flex justify-between items-center py-2 border-b border-[#1F222B]">
              <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                Unbonding Start
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar
                  className="w-4 h-4 text-[#AAB3D0]"
                  strokeWidth={1.32}
                />
                <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
                  {unbondingStartDate}
                </span>
              </div>
            </div>

            {/* Unbonding End */}
            <div className="flex justify-between items-center py-2">
              <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                Unbonding End
              </span>
              <div className="flex items-center gap-1.5">
                <UnbondingEndIcon className="w-4 h-4 text-[#00C48C]" />
                <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
                  {unbondingEndDate}
                </span>
              </div>
            </div>

            {/* Time Remaining */}
            <div className="flex justify-between items-center py-2">
              <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                Time Remaining
              </span>
              <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-[#F4CD4D]">
                {timeRemaining}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
