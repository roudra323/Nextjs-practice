"use client";

import { useState } from "react";
import { X, AlertCircle, ChevronUp, ChevronDown } from "lucide-react";
import { InfoIcon, WarningIcon } from "../icons";

interface StakeRecord {
  id: string;
  amount: string;
  amountValue: number;
}

interface UnstakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnstake: (amount: number) => void;
  stake: StakeRecord | null;
}

export default function UnstakeModal({
  isOpen,
  onClose,
  onUnstake,
  stake,
}: UnstakeModalProps) {
  const [unstakeAmount, setUnstakeAmount] = useState<string>("0.00");
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen || !stake) return null;

  const totalStake = stake.amountValue;
  const currentAmount = parseFloat(unstakeAmount) || 0;
  const remaining = totalStake - currentAmount;
  const maxUnstake = totalStake;

  const handleIncrement = () => {
    const newValue = Math.min(currentAmount + 1000, maxUnstake);
    setUnstakeAmount(newValue.toString());
  };

  const handleDecrement = () => {
    const newValue = Math.max(currentAmount - 1000, 0);
    setUnstakeAmount(newValue.toString());
  };

  const handleUnstake = () => {
    if (isConfirmed && currentAmount > 0) {
      onUnstake(currentAmount);
      onClose();
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[448px] bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden">
        {/* Background Blur Effect */}
        <div className="absolute w-[486.25px] h-[376.09px] -left-[144.35px] -top-[156.04px] bg-white mix-blend-overlay blur-[61.2187px] rotate-[30deg]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[17px] right-[17px] w-4 h-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer z-20"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-white" strokeWidth={1.33} />
        </button>

        {/* Header */}
        <div className="relative z-10 flex flex-col gap-2 px-6 pt-6">
          <h2 className="font-inter font-semibold text-lg leading-[18px] tracking-[-0.44px] text-white">
            Unstake KROWN
          </h2>
          <p className="font-inter font-normal text-sm leading-5 tracking-[-0.15px] text-[#94A3B8]">
            Adjust the amount you wish to unstake from this node.
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 px-6 pt-4 pb-6">
          {/* Total Stake Display */}
          <div className="flex flex-col gap-3 pt-3.5">
            <div className="flex justify-between items-center">
              <span className="font-vietnam font-medium text-base leading-5 tracking-[-0.15px] text-white">
                Total Stake:
              </span>
              <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.15px] text-white">
                {formatNumber(totalStake)} KROWN
              </span>
            </div>
          </div>

          {/* Amount Input Section */}
          <div className="flex flex-col gap-2">
            <label className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              Amount to Unstake
            </label>

            <div className="relative">
              <input
                type="text"
                value={unstakeAmount}
                onChange={(e) =>
                  setUnstakeAmount(e.target.value.replace(/[^0-9.]/g, ""))
                }
                className="box-border w-full h-[50px] px-4 py-3 bg-[#0D0F17] border border-[#49405D] rounded-2xl font-grotesk font-normal text-base leading-5 tracking-[-0.3125px] text-white/50 focus:outline-none focus:border-[#0E966F] focus:text-white"
                placeholder="0.00"
              />

              {/* Spinner Controls */}
              <div className="absolute right-[88px] top-[15px] flex flex-col gap-[1px]">
                <button
                  onClick={handleIncrement}
                  className="flex items-center justify-center w-[9.5px] h-[9.5px] bg-white/5 rounded-sm hover:bg-white/10"
                >
                  <ChevronUp className="w-2.5 h-2.5 text-white" />
                </button>
                <button
                  onClick={handleDecrement}
                  className="flex items-center justify-center w-[9.5px] h-[9.5px] bg-white/5 rounded-sm hover:bg-white/10"
                >
                  <ChevronDown className="w-2.5 h-2.5 text-white" />
                </button>
              </div>

              {/* KROWN Label */}
              <span className="absolute right-4 top-[14px] font-inter font-medium text-sm leading-5 tracking-[-0.15px] text-[#94A3B8]">
                KROWN
              </span>
            </div>

            {/* Remaining and Max */}
            <div className="flex justify-between items-center">
              <span className="font-grotesk font-medium text-xs leading-4 text-[#AAB3D0]">
                Remaining: {formatNumber(Math.max(remaining, 0))}
              </span>
              <span className="font-grotesk font-normal text-xs leading-4 text-[#AAB3D0]">
                Max unstake: {formatNumber(maxUnstake)}
              </span>
            </div>
          </div>

          {/* Warning Box */}
          <div className="flex flex-col gap-2 p-4 bg-[rgba(254,80,88,0.1)] border border-[rgba(254,80,88,0.2)] rounded-2xl">
            <div className="flex items-start gap-2">
              <WarningIcon className="w-4 h-4 text-[#FE5058] mt-0.5 flex-shrink-0" />
              <p className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#FE5058]">
                Rewards will stop immediately after unstaking begins.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <WarningIcon className="w-4 h-4 text-[#FE5058] mt-0.5 flex-shrink-0" />
              <p className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#FE5058]">
                Tokens will be locked for 21 days.
              </p>
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="confirm-unstake"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
              className="w-[13px] h-[13px] mt-1 border border-[#AAB3D0] rounded bg-transparent cursor-pointer accent-[#0E966F]"
            />
            <label
              htmlFor="confirm-unstake"
              className="font-vietnam font-normal text-[13px] leading-5 tracking-[-0.15px] text-[#AAB3D0] cursor-pointer"
            >
              I understand my rewards will stop and tokens will be locked for 21
              days after unstaking.
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end items-center gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex items-center justify-center px-5 py-3 h-12 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer"
            >
              <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                Cancel
              </span>
            </button>
            <button
              onClick={handleUnstake}
              disabled={!isConfirmed || currentAmount <= 0}
              className="flex items-center justify-center px-6 py-3 h-12 bg-[#0E966F] rounded-2xl hover:bg-[#0C7D5D] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
                Unstake
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
