"use client";

import { Globe } from "lucide-react";
import StepperHorizontal from "../validator/StepperHorizontal";

interface GoLiveFormProps {
  onBack?: () => void;
  onGoToDashboard?: () => void;
}

// Sample log entries for the terminal display
const LOG_ENTRIES = [
  { type: "INFO", message: "Initializing Krown Validator v2.4.0..." },
  { type: "INFO", message: "Loaded configuration from /etc/krown/config.toml" },
  { type: "INFO", message: "Connecting to peers... [12/50 connected]" },
  { type: "INFO", message: "Syncing block 12,450,231 / 12,450,231" },
  { type: "SUCCESS", message: "Node is active and participating in consensus" },
];

export default function GoLiveForm({
  onBack,
  onGoToDashboard,
}: GoLiveFormProps) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Stepper Section */}
      <div className="flex justify-center py-8 px-6">
        <StepperHorizontal currentStep={4} />
      </div>

      {/* Main Form Container */}
      <div className="flex justify-center px-6 pb-8">
        <div className="box-border w-full max-w-284 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center">
          {/* Globe Icon */}
          <div className="w-[50.76px] h-[50.76px] rounded-full bg-[rgba(0,196,140,0.05)] border-[1.5px] border-[rgba(0,196,140,0.1)] flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-[#00C48C]" strokeWidth={2} />
          </div>

          {/* Title */}
          <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white mb-2 text-center">
            Node is now Live!
          </h2>

          {/* Subtitle */}
          <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] text-center mb-8 max-w-165">
            Congratulations! Your validator node is now active and participating
            in the Krown Network consensus.
          </p>

          {/* Terminal Console */}
          <div className="w-full max-w-2xl bg-[#1F222B] border border-[#3A3A3A] rounded-2xl overflow-hidden mb-6">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0D0F17] border-b border-[#3A3A3A]">
              {/* Traffic light buttons */}
              <div className="w-3 h-3 rounded-full bg-[#FB2C36]" />
              <div className="w-3 h-3 rounded-full bg-[#F0B100]" />
              <div className="w-3 h-3 rounded-full bg-[#00C48C]" />
              {/* Terminal title */}
              <span className="ml-2 font-vietnam font-normal text-xs leading-4 text-[#94A3B8]">
                node-logs — bash
              </span>
            </div>

            {/* Terminal Body */}
            <div className="flex flex-col gap-1 p-4">
              {LOG_ENTRIES.map((log, index) => (
                <div key={index} className="flex items-start gap-1">
                  <span
                    className={`font-inter font-normal text-base leading-6 ${
                      log.type === "SUCCESS"
                        ? "text-[#00C48C]"
                        : "text-[#00C48C]"
                    }`}
                  >
                    [{log.type}]
                  </span>
                  <span className="font-fira font-normal text-base leading-6 text-[#94A3B8]">
                    {log.message}
                  </span>
                </div>
              ))}
              {/* Blinking cursor */}
              <div className="flex items-start opacity-86">
                <span className="font-inter font-normal text-base leading-6 text-[#94A3B8] animate-pulse">
                  _
                </span>
              </div>
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

            {/* Go to Dashboard Button */}
            <button
              type="button"
              onClick={onGoToDashboard}
              className="flex items-center justify-center px-4.5 py-2 h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white capitalize hover:bg-[#0C7D5D] transition-colors"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
