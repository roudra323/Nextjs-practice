import { Activity, Banknote, Coins } from "lucide-react";
import { InfoCard } from "../cards";

const cardData = [
  {
    label: "Total Earned",
    value: "245K",
    valueSuffix: "KROWN",
    icon: <Activity className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    label: "Fees Paid",
    value: "24,500",
    icon: <Banknote className="w-5 h-5" strokeWidth={1.5} />,
  },
];

export default function RewardsPerformance() {
  return (
    <div className="flex flex-col p-4 sm:p-6 w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl sm:rounded-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="font-vietnam font-medium text-lg sm:text-xl leading-6 tracking-[-0.3125px] text-white">
          Rewards & Performance
        </h2>
        {/* Krown Foundation Badge */}
        <div className="flex items-center gap-1.75">
          <div className="flex items-center justify-center w-5 h-5 bg-[#00C48C] shadow-[inset_0px_0px_6px_rgba(255,255,255,0.25)] rounded-md">
            <span className="font-grotesk font-bold text-xs leading-3.75 text-white">
              KF
            </span>
          </div>
          <span className="font-vietnam font-medium text-sm sm:text-base leading-5 tracking-[-0.15px] text-[#AAB3D0]">
            Krown Foundation
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        {cardData.map((card) => (
          <InfoCard key={card.label} {...card} />
        ))}

        {/* Net Rewards - spans full width */}
        <InfoCard
          label="Net Rewards"
          value="220,500"
          icon={<Coins className="w-5 h-5" strokeWidth={1.5} />}
        />
      </div>
    </div>
  );
}
