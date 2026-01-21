import { ValidatorCard } from "../cards";
import { ShieldIcon, ServerIcon, UsersIcon } from "../icons";

const validators = [
  {
    icon: <ServerIcon />,
    iconColor: "text-[#F4CD4D]",
    title: "Self-Hosted",
    minStake: "100,000,000 KROWN",
    fees: "0%",
    who: "DevOps/technical",
    estApr: "12.4%",
    description:
      "Run and manage your own validator infrastructure with complete control over your node operations.",
    ctaText: "View Details",
  },
  {
    icon: <ShieldIcon />,
    iconColor: "text-[#00C48C]",
    title: "Managed Validator",
    minStake: "100,000,000 KROWN",
    fees: "10% of rewards",
    who: "Non-Technical",
    estApr: "11.1% (after fee)",
    description:
      "Run and manage your own validator infrastructure with complete control over your node operations.",
    ctaText: "View Details",
  },
  {
    icon: <UsersIcon />,
    iconColor: "text-[#966DFF]",
    title: "Shared Node",
    minStake: "10,000 KROWN",
    fees: "13% total (10% platform + 3% manager)",
    who: "Small Holders",
    estApr: "10.2%",
    description:
      "Run and manage your own validator infrastructure with complete control over your node operations.",
    ctaText: "Explore Nodes",
  },
];

export default function VModels() {
  return (
    <section className="relative w-full py-8 sm:py-10 md:py-12">
      {/* Section Title */}
      <h2 className="font-medium text-2xl sm:text-[28px] md:text-[32px] leading-8 sm:leading-10 md:leading-11 tracking-[-0.02em] text-[#DEFFF5] text-center mb-6 sm:mb-8 md:mb-10 px-4">
        Validator Models
      </h2>

      {/* Cards Grid */}
      <div className="max-w-304 mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {validators.map((validator, index) => (
          <ValidatorCard key={index} {...validator} />
        ))}
      </div>
    </section>
  );
}
