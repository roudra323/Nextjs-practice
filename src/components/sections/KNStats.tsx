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
    <section className="relative w-full py-8 sm:py-10 md:py-12">
      {/* Section Title */}
      <h2 className="font-medium text-2xl sm:text-[28px] md:text-[32px] leading-8 sm:leading-10 md:leading-11 tracking-[-0.02em] text-[#DEFFF5] text-center mb-6 sm:mb-8 md:mb-10 px-4">
        KROWN Network at a glance
      </h2>

      {/* Stats Grid */}
      <div className="max-w-304 mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}
