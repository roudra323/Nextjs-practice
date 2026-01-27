import Link from "next/link";
import { LeftArrowIcon, ShieldFilledIcon, TikIcon } from "../icons";

export default function ValidatorQualifiedBanner() {
  return (
    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 sm:p-[18px] w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl sm:rounded-[20px] overflow-hidden">
      {/* Glow effect */}
      <div className="absolute w-[273px] h-[211px] -left-[117px] -top-[159px] bg-gradient-to-br from-[#00C48C] to-[#0E966F] mix-blend-overlay blur-[77px] rotate-[30deg] opacity-30" />

      {/* Left Section - Shield + Text */}
      <div className="relative z-10 flex items-start gap-3 sm:gap-4">
        {/* Shield Icon Container */}
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00C48C] to-[#0E966F] border border-[rgba(255,255,255,0.1)] shadow-[0px_4px_20px_rgba(0,196,140,0.41)] rounded-xl flex-shrink-0">
          <ShieldFilledIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-0.5">
          <h3 className="font-vietnam font-medium text-lg sm:text-xl leading-6 tracking-[-0.45px] text-white">
            Validator Qualified
          </h3>
          <p className="font-vietnam font-normal text-xs sm:text-sm leading-5 sm:leading-6 tracking-[-0.45px] text-[#AAB3D0] max-w-[424px]">
            Your wallet meets all technical and financial criteria to operate a
            validator node.
          </p>
        </div>
      </div>

      {/* Right Section - Badges + Button */}
      <div className="relative z-10 flex flex-col lg:items-end gap-3 sm:gap-4 lg:flex-shrink-0">
        {/* Badges Row (on lg) / Badges + Button Row (on sm/md) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:justify-end gap-3 sm:gap-3">
          {/* Requirement Badges */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                <TikIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C48C]" />
              </div>
              <span className="font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-white">
                Wallet age requirement met
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                <TikIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C48C]" />
              </div>
              <span className="font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-white">
                Transaction history sufficient
              </span>
            </div>
          </div>

          {/* Apply Button - shown inline on sm/md, separate row on lg */}
          <Link
            href="/become-validator"
            className="hidden sm:flex lg:hidden items-center justify-center gap-2 px-4 py-1 h-8 bg-[#0E966F] rounded-xl hover:opacity-90 transition-opacity flex-shrink-0"
          >
            <span className="font-vietnam font-medium text-sm leading-6 tracking-[-0.3125px] text-white text-center">
              Apply as a validator
            </span>
            <LeftArrowIcon className="w-[18px] h-[18px] text-white" />
          </Link>
        </div>

        {/* Apply Button - shown on mobile (xs) and large screens (lg+) */}
        <Link
          href="/become-validator"
          className="flex sm:hidden lg:flex items-center justify-center gap-2 px-4 py-1 h-8 bg-[#0E966F] rounded-xl hover:opacity-90 transition-opacity self-end lg:self-auto flex-shrink-0"
        >
          <span className="font-vietnam font-medium text-sm leading-6 tracking-[-0.3125px] text-white text-center">
            Apply as a validator
          </span>
          <LeftArrowIcon className="w-[18px] h-[18px] text-white" />
        </Link>
      </div>
    </div>
  );
}
