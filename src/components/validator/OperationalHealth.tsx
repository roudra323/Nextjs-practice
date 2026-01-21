import { Clock, Activity } from "lucide-react";
import { InfoCard } from "../cards";

const cardData = [
  {
    label: "Up Time",
    value: "99.99%",
    icon: <Clock className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    label: "Wallet Age",
    value: "63",
    valueSuffix: "Days",
    icon: <Clock className="w-5 h-5" strokeWidth={1.5} />,
  },
];

export default function OperationalHealth() {
  return (
    <div className="flex flex-col p-6 w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl">
      {/* Header */}
      <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.3125px] text-white mb-6">
        Operational Health
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-5">
        {cardData.map((card, index) => (
          <InfoCard
            key={index}
            label={card.label}
            value={card.value}
            valueSuffix={card.valueSuffix}
            icon={card.icon}
          />
        ))}

        {/* Transaction Count - spans full width */}
        <InfoCard
          label="Transaction Count"
          value="18"
          icon={<Activity className="w-5 h-5" strokeWidth={1.5} />}
        />
      </div>
    </div>
  );
}
