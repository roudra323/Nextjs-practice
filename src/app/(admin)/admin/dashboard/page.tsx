"use client";

import { useState } from "react";
import { AdminStatCard, BlockCard } from "@/components";
import ValidatorsPerformanceTable from "@/components/admin/ValidatorsPerformanceTable";

// Stats data for the dashboard
const topRowStats = [
  { label: "Total Fees (24h)", value: "2,847.3 KROWN", change: "+12.4%" },
  { label: "Blocks (24h)", value: "7,234", change: "+12.4%" },
  { label: "Active Validators", value: "847", change: "+12.4%" },
  { label: "Timeouts (24h)", value: "12", change: "+12.4%" },
];

const bottomRowStats = [
  { label: "Total validators", value: "1,756", change: "+12.4%" },
  { label: "Managed validators", value: "123", change: "+12.4%" },
  { label: "Shared Nodes", value: "8", change: "+12.4%" },
  { label: "Pending Requests", value: "17", change: "+12.4%" },
];

// Metrics data
const metricsData = [
  {
    label: "TPS (Live)",
    value: "1,247",
    change: "+12.4%",
    showSparkline: true,
  },
  {
    label: "Peak TPS (7d)",
    value: "1,247",
    change: "+12.4%",
    showSparkline: true,
  },
  {
    label: "Median Fee (1m)",
    value: "0.024 KROWN",
    change: "+12.4%",
    showSparkline: true,
  },
  {
    label: "Gas Price (1m)",
    value: "12.5 gwei",
    change: "+12.4%",
    showSparkline: true,
  },
  {
    label: "Highest Fee (60m)",
    value: "24.8 KROWN",
    change: "+12.4%",
    showSparkline: true,
  },
  {
    label: "Block Time (avg 1m)",
    value: "2.3 s",
    change: "+12.4%",
    showSparkline: true,
  },
  {
    label: "Block Fullness (60m)",
    value: "68.4 %",
    change: "+12.4%",
    showSparkline: true,
  },
  {
    label: "Largest Block (60m)",
    value: "15.2 MB",
    change: "+12.4%",
    showSparkline: true,
  },
  {
    label: "Pending Stake",
    value: "24.8 KROWN",
    change: "+12.4%",
    showProgress: true,
    progressValue: 65,
    progressLabel: "65% of next epoch",
  },
  {
    label: "Total Staked",
    value: "24.8 KROWN",
    change: "+12.4%",
    showSparkline: true,
  },
  {
    label: "APY (current)",
    value: "68.4 %",
    change: "-0.2%",
    isPositive: false,
    showSparkline: true,
  },
  {
    label: "Network Health",
    value: "99.9 %",
    change: "+12.4%",
    showSparkline: true,
  },
];

// Recent blocks data
const recentBlocks = [
  {
    blockNumber: "7234892",
    proposer: "Krown Foundation",
    proposerInitials: "KF",
    round: "142",
    txCount: "284",
  },
  {
    blockNumber: "7234891",
    proposer: "Krown Foundation",
    proposerInitials: "KF",
    round: "142",
    txCount: "284",
  },
  {
    blockNumber: "7234890",
    proposer: "Krown Foundation",
    proposerInitials: "KF",
    round: "142",
    txCount: "284",
  },
  {
    blockNumber: "7234889",
    proposer: "Krown Foundation",
    proposerInitials: "KF",
    round: "142",
    txCount: "284",
  },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<
    "nodeOverview" | "validatorsPerformance"
  >("nodeOverview");

  return (
    <div className="p-4 sm:p-6">
      {/* Top Row Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {topRowStats.map((stat, index) => (
          <AdminStatCard
            key={index}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            isPositive={true}
            className="w-full h-[87px]"
          />
        ))}
      </div>

      {/* Bottom Row Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {bottomRowStats.map((stat, index) => (
          <AdminStatCard
            key={index}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            isPositive={true}
            className="w-full h-[87px]"
          />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setActiveTab("nodeOverview")}
          className={`flex items-center justify-center px-4 h-9 rounded-xl font-vietnam font-medium text-base leading-[18px] tracking-[-0.44px] transition-colors ${
            activeTab === "nodeOverview"
              ? "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white"
              : "text-[#AAB3D0] hover:text-white"
          }`}
        >
          Node Overview
        </button>
        <button
          onClick={() => setActiveTab("validatorsPerformance")}
          className={`flex items-center justify-center px-4 h-9 rounded-xl font-vietnam font-medium text-base leading-[18px] tracking-[-0.44px] transition-colors ${
            activeTab === "validatorsPerformance"
              ? "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white"
              : "text-[#AAB3D0] hover:text-white"
          }`}
        >
          Validators Performance
        </button>
      </div>

      {/* Conditional Content Based on Active Tab */}
      {activeTab === "validatorsPerformance" ? (
        <ValidatorsPerformanceTable />
      ) : (
        <>
          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Proposal History */}
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white">
                  Proposal History
                </h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0E966F] rounded-full animate-pulse" />
                  <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#0E966F]">
                    LIVE
                  </span>
                </div>
              </div>
              <p className="font-vietnam font-normal text-[15px] leading-5 tracking-[-0.15px] text-[#AAB3D0] mb-4">
                Last 24 hours
              </p>

              {/* Bar Chart Placeholder */}
              <div className="h-auto sm:h-auto flex items-end justify-between gap-1 sm:gap-3 px-0 sm:px-4 mb-6 overflow-hidden">
                {[
                  { proposed: 93, finalized: 29, timeout: 33 },
                  { proposed: 31, finalized: 92, timeout: 45 },
                  { proposed: 128, finalized: 80, timeout: 34 },
                  { proposed: 117, finalized: 45, timeout: 57 },
                  { proposed: 117, finalized: 57, timeout: 45 },
                  { proposed: 117, finalized: 44, timeout: 57 },
                  { proposed: 117, finalized: 44, timeout: 57 },
                ].map((bar, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-0 items-center flex-1 min-w-0"
                  >
                    <div
                      className="w-full max-w-6 bg-[#0E966F] rounded-t-full transition-all"
                      style={{ height: `${bar.finalized * 1.2}px` }}
                    />
                    <div
                      className="w-full max-w-6 bg-[#8B5CF6] transition-all"
                      style={{ height: `${bar.proposed * 1}px` }}
                    />
                    <div
                      className="w-full max-w-6 bg-[#F4CD4D] rounded-b-full transition-all"
                      style={{ height: `${bar.timeout * 0.8}px` }}
                    />
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#8B5CF6] rounded" />
                    <span className="font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                      Proposed
                    </span>
                    <span className="font-grotesk font-medium text-sm sm:text-base leading-6 tracking-[-0.3125px] text-white">
                      456
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#0E966F] rounded" />
                    <span className="font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                      Finalized
                    </span>
                    <span className="font-grotesk font-medium text-sm sm:text-base leading-6 tracking-[-0.3125px] text-white">
                      442
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#EF4444] rounded" />
                    <span className="font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                      Timeout
                    </span>
                    <span className="font-grotesk font-medium text-sm sm:text-base leading-6 tracking-[-0.3125px] text-white">
                      14
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end">
                  <span className="font-vietnam font-normal text-xs sm:text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                    Success Rate
                  </span>
                  <span className="font-grotesk font-medium text-sm sm:text-base leading-6 tracking-[-0.3125px] text-[#0E966F]">
                    96.9%
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Blocks */}
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white">
                  Recent Blocks
                </h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0E966F] rounded-full animate-pulse" />
                  <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#0E966F]">
                    LIVE
                  </span>
                </div>
              </div>
              <p className="font-vietnam font-normal text-[15px] leading-5 tracking-[-0.15px] text-[#AAB3D0] mb-4">
                Latest proposed blocks
              </p>

              {/* Blocks List */}
              <div className="flex flex-col gap-2">
                {recentBlocks.map((block, index) => (
                  <BlockCard
                    key={index}
                    blockNumber={block.blockNumber}
                    proposer={block.proposer}
                    proposerInitials={block.proposerInitials}
                    round={block.round}
                    txCount={block.txCount}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {metricsData.map((metric, index) => (
              <AdminStatCard
                key={index}
                label={metric.label}
                value={metric.value}
                change={metric.change}
                isPositive={metric.isPositive !== false}
                showSparkline={metric.showSparkline}
                showProgress={metric.showProgress}
                progressValue={metric.progressValue}
                progressLabel={metric.progressLabel}
                className="w-full h-[126px]"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
