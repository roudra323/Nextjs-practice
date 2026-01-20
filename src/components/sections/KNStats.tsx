import { StatCard } from "../cards";
import { ValidatorsIcon, StakedIcon, APRIcon } from "../icons";

const stats = [
  {
    icon: <ValidatorsIcon />,
    iconColor: "text-[#00C48C]",
    label: "Active Validators",
    value: "1,247",
  },
  {
    icon: <StakedIcon />,
    iconColor: "text-[#D4AF37]",
    label: "Total Staked",
    value: "2.4B KROWN",
  },
  {
    icon: <APRIcon />,
    iconColor: "text-[#00C48C]",
    label: "Current APR",
    value: "12.9%",
  },
];

export default function KNStats() {
  return (
    <section className="relative w-full py-12">
      {/* Section Title */}
      <h2 className="font-medium text-[32px] leading-[44px] tracking-[-0.02em] text-[#DEFFF5] text-center mb-10">
        KROWN Network at a glance
      </h2>

      {/* Stats Grid */}
      <div className="max-w-[1216px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}
