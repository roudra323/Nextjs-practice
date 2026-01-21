"use client";

import { Wallet, Shield } from "lucide-react";
import { InfoCard } from "../cards";

export default function StakeHoldings() {
  return (
    <div className="flex flex-col p-6 w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl">
      {/* Header */}
      <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.3125px] text-white mb-6">
        Stake & Holdings
      </h2>

      {/* Cards Row */}
      <div className="flex gap-5 mb-6">
        <InfoCard
          label="Balance"
          value="128.67K"
          valueSuffix="KROWN"
          icon={<Wallet className="w-5 h-5" strokeWidth={1.5} />}
        />

        <InfoCard
          label="Total Stake"
          value="128.67K"
          valueSuffix="KROWN"
          icon={<Shield className="w-5 h-5" strokeWidth={1.5} />}
          actionText="Unstake"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 mt-auto">
        <button className="flex items-center justify-center px-4 py-1 h-8 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-colors">
          <span className="font-vietnam font-medium text-sm leading-6 tracking-[-0.3125px] text-white text-center">
            Add Stake
          </span>
        </button>
        <button className="flex items-center justify-center px-4 py-1 h-8 bg-[#0E966F] rounded-xl hover:opacity-90 transition-opacity">
          <span className="font-vietnam font-medium text-sm leading-6 tracking-[-0.3125px] text-white text-center">
            Unstake
          </span>
        </button>
      </div>
    </div>
  );
}
