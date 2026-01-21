import { Check, Shield, ArrowRight } from "lucide-react";

export default function ValidatorQualifiedBanner() {
  return (
    <div className="relative flex flex-wrap items-start justify-between gap-4 p-[18px] w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[20px] overflow-hidden">
      {/* Glow effect */}
      <div className="absolute w-[273px] h-[211px] -left-[117px] -top-[159px] bg-gradient-to-br from-[#00C48C] to-[#0E966F] mix-blend-overlay blur-[77px] rotate-[30deg] opacity-30" />

      {/* Left Section */}
      <div className="relative z-10 flex items-start gap-4">
        {/* Shield Icon Container */}
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#00C48C] to-[#0E966F] border border-[rgba(255,255,255,0.1)] shadow-[0px_4px_20px_rgba(0,196,140,0.41)] rounded-xl">
          <Shield className="w-6 h-6 text-white fill-white" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-0.5">
          <h3 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.45px] text-white">
            Validator Qualified
          </h3>
          <p className="font-vietnam font-normal text-sm leading-6 tracking-[-0.45px] text-[#AAB3D0] max-w-[424px]">
            Your wallet meets all technical and financial criteria to operate a
            validator node.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 flex flex-col items-end gap-4">
        {/* Requirement Badges */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-3 px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl">
            <div className="w-5 h-5">
              <Check className="w-5 h-5 text-[#00C48C]" strokeWidth={1.67} />
            </div>
            <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-white">
              Wallet age requirement met
            </span>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl">
            <div className="w-5 h-5">
              <Check className="w-5 h-5 text-[#00C48C]" strokeWidth={1.67} />
            </div>
            <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-white">
              Transaction history sufficient
            </span>
          </div>
        </div>

        {/* Apply Button */}
        <button className="flex items-center justify-center gap-2 px-4 py-1 h-8 bg-[#0E966F] rounded-xl hover:opacity-90 transition-opacity">
          <span className="font-vietnam font-medium text-sm leading-6 tracking-[-0.3125px] text-white text-center">
            Apply as a validator
          </span>
          <ArrowRight
            className="w-[18px] h-[18px] text-white"
            strokeWidth={1.5}
          />
        </button>
      </div>
    </div>
  );
}
