import { MetricCard } from "../cards";

const metrics = [
  // Row 1
  { label: "Blocks Produced", value: "2,847.3" },
  { label: "Stake", value: "125M KROWN" },
  { label: "Timeouts (24h)", value: "0" },
  { label: "Total Transactions", value: "65,000" },
  // Row 2
  { label: "Total Tips (Krown)", value: "2,847.3" },
  { label: "Total Base Fees", value: "2,847.3" },
  { label: "Avg Tx/Block", value: "0" },
  { label: "Avg Tip/Tx", value: "65,000" },
  // Row 3
  { label: "Avg Gas/Block", value: "2,847.3" },
  { label: "Avg Gas/Block", value: "2,847.3" },
  { label: "Max Tx in Block", value: "0" },
  { label: "Min Tx in Block", value: "65,000" },
  // Extra
  { label: "Rewards Earned", value: "2.3K KROWN" },
];

export default function NodePerformanceOverview() {
  return (
    <div className="flex flex-col p-4 sm:p-6 w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl sm:rounded-3xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-0 mb-4 sm:mb-6">
        <div className="flex flex-col gap-3 sm:gap-4 mr-3 lg:mr-0">
          <h2 className="font-vietnam font-medium text-lg sm:text-xl leading-6 tracking-[-0.3125px] text-white">
            Node Performance Overview
          </h2>

          {/* Admin Panel */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-[#34394D] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl">
              <span className="font-grotesk font-bold text-sm sm:text-[15px] leading-[19px] text-white">
                KF
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-vietnam font-medium text-sm sm:text-base leading-5 tracking-[-0.15px] text-white">
                Krown Foundation
              </span>
              <span className="font-vietnam font-normal text-xs leading-4 text-[#AAB3D0]">
                0x60D6...9fe4
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="font-vietnam font-normal text-xs sm:text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] max-w-[582px]">
            High-performance validator built for the Monad community,
            reinvesting into open data.
          </p>
        </div>

        {/* Right Side Info */}
        <div className="flex flex-col items-start lg:items-end gap-2 flex-wrap">
          {/* Live Status */}
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl">🇫🇷</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C48C] rounded-full" />
              <span className="font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-[#00C48C]">
                LIVE
              </span>
            </div>
          </div>
          {/* Validator Info */}
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-white whitespace-nowrap">
            Validator ID : 3
          </span>
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-white whitespace-nowrap">
            Commission : 10%
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
        {metrics.map((metric, index) => (
          <MetricCard key={index} label={metric.label} value={metric.value} />
        ))}
      </div>
    </div>
  );
}
