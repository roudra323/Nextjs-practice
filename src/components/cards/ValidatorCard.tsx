import { ArrowRightIcon } from "../icons";

interface ValidatorCardProps {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  minStake: string;
  fees: string;
  who: string;
  estApr: string;
  description: string;
  ctaText: string;
}

export default function ValidatorCard({
  icon,
  iconColor,
  title,
  minStake,
  fees,
  who,
  estApr,
  description,
  ctaText,
}: ValidatorCardProps) {
  return (
    <div className="relative flex flex-col items-start p-4 sm:p-5 w-full mx-auto max-w-[389px] md:max-w-none bg-white/5 border border-white/10 shadow-[0px_2px_8px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden">
      {/* Glow effect */}
      <div className="absolute w-[273px] h-[211px] -left-[117px] -top-[159px] bg-white mix-blend-overlay blur-[61px] rotate-[30deg]" />

      <div className="relative z-10 flex flex-col gap-6 w-full">
        {/* Header with icon and title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-xl">
            <div className={`w-6 h-6 ${iconColor}`}>{icon}</div>
          </div>
          <h3 className="font-medium text-xl leading-7 tracking-[-0.45px] text-white">
            {title}
          </h3>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              Min Stake
            </span>
            <span className="font-medium text-sm leading-5 tracking-[-0.15px] text-white text-right">
              {minStake}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              Fees
            </span>
            <span className="font-medium text-sm leading-5 tracking-[-0.15px] text-white text-right">
              {fees}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              Who
            </span>
            <span className="font-medium text-sm leading-5 tracking-[-0.15px] text-white text-right">
              {who}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              Est APR
            </span>
            <span className="font-medium text-sm leading-5 tracking-[-0.15px] text-[#00C48C] text-right">
              {estApr}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-[23px] tracking-[-0.15px] text-[#AAB3D0]">
          {description}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* CTA */}
        <button className="flex items-center gap-2 text-[#00C48C] font-medium text-sm leading-5 tracking-[-0.15px] hover:opacity-80 transition-opacity">
          {ctaText}
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
