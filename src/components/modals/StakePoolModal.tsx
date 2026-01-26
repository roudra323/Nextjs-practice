"use client";

import { ArrowLeft, ArrowRight, X, CheckCircle, Layers } from "lucide-react";

interface PoolData {
  id: string;
  name: string;
  manager: string;
}

interface StakePoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStake: (amount: string) => void;
  pool: PoolData | null;
}

export default function StakePoolModal({
  isOpen,
  onClose,
  onStake,
  pool,
}: StakePoolModalProps) {
  if (!isOpen || !pool) return null;

  const handleStake = () => {
    const input = document.getElementById("stake-amount") as HTMLInputElement;
    onStake(input?.value || "25000");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[760px] h-[555px] bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden">
        {/* Background Blur Effect */}
        <div className="absolute w-[486.25px] h-[376.09px] -left-[144.35px] -top-[156.04px] bg-white mix-blend-overlay blur-[61.2187px] rotate-[30deg]" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-4">
            {/* Back Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <ArrowLeft
                className="w-4 h-4 text-[#94A3B8]"
                strokeWidth={1.67}
              />
            </button>
            {/* Pool Info */}
            <div className="flex flex-col gap-1">
              <h2 className="font-vietnam font-semibold text-lg leading-[18px] tracking-[-0.44px] text-white">
                {pool.name}
              </h2>
              <span className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                Managed by {pool.manager}
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-white" strokeWidth={1.33} />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 mt-6">
          {/* Performance Section */}
          <h3 className="font-vietnam font-medium text-lg leading-7 tracking-[-0.45px] text-white mb-3">
            Performance
          </h3>

          <div className="flex gap-6">
            {/* Avg Uptime Card */}
            <div className="box-border flex items-center gap-4 p-4 w-[344px] h-[77px] bg-white/5 border border-white/10 shadow-[0px_2px_8px_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="flex items-center justify-center w-12 h-12 bg-[rgba(34,197,94,0.1)] rounded-2xl">
                <CheckCircle
                  className="w-6 h-6 text-[#00C48C]"
                  strokeWidth={2}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Avg Uptime (30d)
                </span>
                <span className="font-grotesk font-medium text-2xl leading-8 tracking-[0.07px] text-white">
                  99.3%
                </span>
              </div>
            </div>

            {/* Blocks Produced Card */}
            <div className="box-border flex items-center gap-4 p-4 w-[344px] h-[77px] bg-white/5 border border-white/10 shadow-[0px_2px_8px_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="flex items-center justify-center w-12 h-12 bg-[rgba(139,92,246,0.1)] rounded-2xl">
                <Layers className="w-6 h-6 text-[#966DFF]" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Blocks Produced (30d)
                </span>
                <span className="font-grotesk font-medium text-2xl leading-8 tracking-[0.07px] text-white">
                  420,000
                </span>
              </div>
            </div>
          </div>

          {/* Stake Panel Section */}
          <h3 className="font-vietnam font-medium text-lg leading-7 tracking-[-0.45px] text-white mt-6 mb-3">
            Stake Panel
          </h3>

          {/* Reward Breakdown */}
          <div className="grid grid-cols-4 gap-6 mt-5">
            {/* Minimum Stake */}
            <div className="flex flex-col gap-4">
              <span className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-[#AAB3D0]">
                Minimum Stake Amount
              </span>
              <span className="font-grotesk font-medium text-base leading-[14px] tracking-[-0.15px] text-white">
                2300 KROWN
              </span>
            </div>

            {/* Est. Daily Reward */}
            <div className="flex flex-col gap-4">
              <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                Est. Daily Reward
              </span>
              <span className="font-grotesk font-medium text-base leading-[14px] tracking-[-0.15px] text-white">
                7 KROWN
              </span>
            </div>

            {/* Platform Fee */}
            <div className="flex flex-col gap-4">
              <span className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-[#AAB3D0]">
                Platform
              </span>
              <span className="font-grotesk font-medium text-base leading-[14px] tracking-[-0.15px] text-white">
                2500 KROWN
              </span>
            </div>

            {/* Manager Fee */}
            <div className="flex flex-col gap-4">
              <span className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-[#AAB3D0]">
                Manager
              </span>
              <span className="font-grotesk font-medium text-base leading-[14px] tracking-[-0.15px] text-white">
                770 KROWN
              </span>
            </div>
          </div>

          {/* Stake Amount Input */}
          <div className="flex flex-col gap-3 mt-5">
            <label className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-[#AAB3D0]">
              Stake Amount (KROWN)
            </label>
            <input
              id="stake-amount"
              type="text"
              defaultValue="25000"
              className="box-border w-full h-12 px-6 py-1 bg-white/5 border border-white/10 rounded-xl font-grotesk font-normal text-base leading-6 tracking-[-0.3125px] text-white focus:outline-none focus:border-[#0E966F]"
            />
          </div>
        </div>

        {/* Stake Button */}
        <button
          onClick={handleStake}
          className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-1.5 h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-5 tracking-[-0.15px] text-white hover:bg-[#0C7D5D] transition-colors cursor-pointer"
        >
          Stake And Join
          <ArrowRight className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
}
