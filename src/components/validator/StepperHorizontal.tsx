"use client";

import { User, HardDrive, Wallet, Globe } from "lucide-react";

export interface Step {
  id: number;
  label: string;
  icon: React.ReactNode;
}

interface StepperHorizontalProps {
  currentStep: number;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    id: 1,
    label: "Profile",
    icon: <User className="w-6 h-6" strokeWidth={2} />,
  },
  {
    id: 2,
    label: "Node Setup",
    icon: <HardDrive className="w-6 h-6" strokeWidth={2} />,
  },
  {
    id: 3,
    label: "Deposit Stake",
    icon: <Wallet className="w-6 h-6" strokeWidth={2} />,
  },
  {
    id: 4,
    label: "Go Live",
    icon: <Globe className="w-6 h-6" strokeWidth={2} />,
  },
];

export default function StepperHorizontal({
  currentStep = 1,
  steps = defaultSteps,
}: StepperHorizontalProps) {
  return (
    <div className="flex-row hidden sm:flex justify-center items-start gap-3">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Item */}
          <div className="flex flex-col items-center gap-3">
            <span
              className={`font-vietnam font-medium text-base leading-5 text-center whitespace-nowrap ${
                step.id <= currentStep ? "text-white" : "text-[#AAB3D0]"
              }`}
            >
              Step {step.id}
            </span>
            {/* Step Circle */}
            <div
              className={`w-[50.76px] h-[50.76px] rounded-full flex items-center justify-center ${
                step.id <= currentStep
                  ? "bg-linear-to-br from-[#00C48C] to-[#0E966F] shadow-[0px_4px_20px_rgba(0,196,140,0.41)]"
                  : "bg-white/5 border-[1.5px] border-white/10"
              }`}
            >
              <span
                className={
                  step.id <= currentStep ? "text-white" : "text-[#AAB3D0]"
                }
              >
                {step.icon}
              </span>
            </div>
            {/* Step Label */}
            <span
              className={`font-vietnam font-medium text-base leading-5 text-center whitespace-nowrap ${
                step.id <= currentStep ? "text-white" : "text-[#AAB3D0]"
              }`}
            >
              {step.label}
            </span>
          </div>

          {/* Trail Line (not after last step) */}
          {index < steps.length - 1 && (
            <div
              className={`w-50 h-[3.17px] mx-2 ${step.id <= currentStep - 1 ? "bg-[#0E966F]" : "bg-white/10"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
