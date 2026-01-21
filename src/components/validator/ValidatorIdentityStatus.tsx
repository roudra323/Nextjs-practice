import { CheckCircle, Server, Key, Calendar, Copy } from "lucide-react";
import { InfoCard } from "../cards";

const cardData = [
  {
    label: "Validator Status",
    value: "Accepted",
    icon: <CheckCircle className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    label: "Node Mode",
    value: "Self-Hosted",
    icon: <Server className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    label: "Validator Key",
    value: "0xchf..364",
    icon: <Key className="w-5 h-5" strokeWidth={1.5} />,
    secondaryContent: (
      <Copy
        className="w-5 h-5 text-[#AAB3D0] opacity-40 cursor-pointer hover:opacity-80"
        strokeWidth={1.5}
      />
    ),
  },
  {
    label: "Approved On",
    value: "Nov 25, 2025",
    icon: <Calendar className="w-5 h-5" strokeWidth={1.5} />,
  },
];

export default function ValidatorIdentityStatus() {
  return (
    <div className="flex flex-col p-4 sm:p-6 w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl sm:rounded-3xl">
      {/* Header */}
      <h2 className="font-vietnam font-medium text-lg sm:text-xl leading-6 tracking-[-0.3125px] text-white mb-4 sm:mb-6">
        Validator Identity & Status
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        {cardData.map((card, index) => (
          <InfoCard
            key={index}
            label={card.label}
            value={card.value}
            icon={card.icon}
            secondaryContent={card.secondaryContent}
          />
        ))}
      </div>
    </div>
  );
}
