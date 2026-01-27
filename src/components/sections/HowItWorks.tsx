"use client";
import {
  InfoIconGreen,
  LeftArrowIcon,
  ProfileIcon,
  ServerIcon,
  TikIcon,
  WalletIcon,
} from "../icons";
import ApplicationBanner from "../banners/ApplicationBanner";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HowItWorksProps {
  onStartOnboarding?: () => void;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Select Profile",
    description: "Set up your public validator identity.",
    icon: <ProfileIcon className="w-6 h-6 text-[#00C48C]" />,
  },
  {
    number: 2,
    title: "Setup Node",
    description: "Configure your server and connection.",
    icon: <ServerIcon className="w-6 h-6 [&_path]:stroke-[#00C48C]" />,
  },
  {
    number: 3,
    title: "Deposit Stake",
    description: "Lock the required 100M KROWN stake.",
    icon: <WalletIcon className="w-6 h-6 [&_path]:stroke-[#00C48C]" />,
  },
  {
    number: 4,
    title: "Go Live",
    description: "Your node becomes active on the network.",
    icon: <TikIcon className="w-6 h-6 [&_path]:stroke-[#00C48C]" />,
  },
];

export default function HowItWorks({ onStartOnboarding }: HowItWorksProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-full lg:max-w-284 mx-auto px-4 sm:px-6 lg:px-0">
      {/* Main Container */}
      <div className="box-border w-full bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 pt-2 sm:pt-3 pb-6 sm:pb-8">
          {/* Info Icon */}
          <div className="w-10 h-10 sm:w-[50.76px] sm:h-[50.76px] rounded-full bg-[rgba(0,196,140,0.05)] border-[1.5px] border-[rgba(0,196,140,0.1)] flex items-center justify-center mb-3 sm:mb-4">
            <InfoIconGreen />
          </div>

          <h2 className="font-vietnam font-medium text-lg sm:text-xl leading-6 tracking-[-0.15px] text-white">
            How it Works
          </h2>
          <p className="font-vietnam font-normal text-xs sm:text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] text-center max-w-md">
            Becoming a self-hosted validator is a simple 4-step process. Here is
            what you need to do to get your node running.
          </p>
        </div>

        {/* Steps Grid - Vertical on mobile, Horizontal on lg+ */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-3 px-2 sm:px-4 lg:px-6 py-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col lg:flex-row items-center gap-3 lg:gap-3 w-full lg:w-auto"
            >
              {/* Step Card */}
              <div className="box-border w-full sm:w-auto min-w-50 sm:min-w-45 h-auto sm:h-35.5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center px-4 sm:px-3 py-4 sm:py-0">
                {/* Icon */}
                <div className="mb-2 sm:mb-3">{step.icon}</div>

                {/* Title */}
                <h3 className="font-vietnam font-medium text-sm sm:text-base leading-6 tracking-[-0.31px] text-white text-center">
                  {step.number}. {step.title}
                </h3>

                {/* Description */}
                <p className="font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] text-center mt-1">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps (not after last) */}
              {index < steps.length - 1 && (
                <>
                  {/* Vertical arrow (mobile) */}
                  <div className="lg:hidden rotate-90">
                    <LeftArrowIcon className="w-7 h-8 sm:w-9 sm:h-10 [&_path]:stroke-[#00C48C]" />
                  </div>
                  {/* Horizontal arrow (lg+) */}
                  <div className="hidden lg:block">
                    <LeftArrowIcon className="w-9 h-10 [&_path]:stroke-[#00C48C]" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="px-2 sm:px-4 lg:px-6 py-4 sm:py-6">
          <ApplicationBanner
            status="pending"
            title="Requirement"
            description="Ensure your hardware meets all requirements before starting the onboarding process."
          />
        </div>

        {/* Start Onboarding Button */}
        <div className="flex justify-center pb-4 sm:pb-6 px-4">
          <button
            onClick={onStartOnboarding}
            className="flex items-center justify-center px-4 sm:px-4.5 py-2 h-10 sm:h-12 w-full sm:w-auto bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-sm sm:text-base leading-6 tracking-[-0.31px] text-white hover:bg-[#0C7D5D] transition-colors cursor-pointer"
          >
            Start Onboarding
          </button>
        </div>
      </div>
    </div>
  );
}
