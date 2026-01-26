"use client";

import { Wallet, Info } from "lucide-react";
import StepperHorizontal from "../validator/StepperHorizontal";

interface DepositStakeFormProps {
  onBack?: () => void;
  onConfirm?: () => void;
  depositAmount?: string;
  gasFee?: string;
}

export default function DepositStakeForm({
  onBack,
  onConfirm,
  depositAmount = "100,000,000 KROWN",
  gasFee = "0.0025 ETH",
}: DepositStakeFormProps) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Stepper Section */}
      <div className="flex justify-center py-8 px-6">
        <StepperHorizontal currentStep={3} />
      </div>

      {/* Main Form Container */}
      <div className="flex justify-center px-6 pb-8">
        <div className="box-border w-full max-w-284 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center">
          {/* Wallet Icon */}
          <div className="w-[50.76px] h-[50.76px] rounded-full bg-[rgba(0,196,140,0.05)] border-[1.5px] border-[rgba(0,196,140,0.1)] flex items-center justify-center mb-4">
            <Wallet className="w-6 h-6 text-[#00C48C]" strokeWidth={2} />
          </div>

          {/* Title */}
          <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white mb-2 text-center">
            Required Stake Deposit
          </h2>

          {/* Subtitle */}
          <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] text-center mb-8 max-w-165">
            To activate your self-hosted validator node, a security deposit of
            100,000,000 KROWN is required.
          </p>

          {/* Deposit Details Card */}
          <div className="box-border w-full max-w-117 bg-white/5 border border-white/10 rounded-xl p-6 m-6 ">
            {/* Deposit Amount Row */}
            <div className="flex flex-row items-center justify-between pb-4 border-b border-[#3A3A3A]">
              <span className="font-vietnam font-normal text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                Deposit Amount
              </span>
              <span className="font-grotesk font-medium text-base leading-7 tracking-[-0.45px] text-white">
                {depositAmount}
              </span>
            </div>

            {/* Gas Fee Row */}
            <div className="flex items-center justify-between pt-4">
              <span className="font-vietnam font-normal text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                Gas Fee (Est.)
              </span>
              <span className="font-grotesk font-normal text-base leading-6 tracking-[-0.3125px] text-white">
                {gasFee}
              </span>
            </div>

            {/* Info Banner */}
            <div className="mt-4 flex items-start gap-3 p-4 bg-[rgba(0,196,140,0.1)] rounded-xl">
              <div className="shrink-0 w-5 h-5 mt-0.5">
                <Info className="w-5 h-5 text-[#00C48C]" strokeWidth={1.67} />
              </div>
              <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#B4FFEA]">
                This amount will be locked in the smart contract. You can
                withdraw after the unbonding period of 21 days.
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="w-full flex justify-between items-center pt-4 border-t border-white/10">
            {/* Back Button */}
            <button
              type="button"
              onClick={onBack}
              className="box-border flex items-center justify-center px-4 py-2 h-12 bg-white/5 border border-white/10 rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-white/10 transition-colors"
            >
              Back
            </button>

            {/* Confirm Button */}
            <button
              type="button"
              onClick={onConfirm}
              className="flex items-center justify-center px-4.5 py-2 h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white capitalize hover:bg-[#0C7D5D] transition-colors"
            >
              Confirm Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
