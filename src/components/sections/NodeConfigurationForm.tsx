"use client";

import { useState } from "react";
import { Code } from "lucide-react";
import StepperHorizontal from "../validator/StepperHorizontal";
import FormInput from "../validator/FormInput";
import CodeBlock from "../validator/CodeBlock";
import ApplicationBanner from "../banners/ApplicationBanner";

interface NodeConfigurationFormProps {
  onBack?: () => void;
  onContinue?: () => void;
}

type Platform = "windows" | "mac";

const CLI_COMMANDS = {
  windows: {
    download:
      "Invoke-WebRequest -Uri https://get.krown.network/krown-cli.exe -OutFile krown-cli.exe",
    generate: ".\\krown-cli.exe wallet create --mnemonic",
  },
  mac: {
    download:
      "curl -O https://get.krown.network/krown-cli && chmod +x krown-cli",
    generate: "./krown-cli wallet create --mnemonic",
  },
};

export default function NodeConfigurationForm({
  onBack,
  onContinue,
}: NodeConfigurationFormProps) {
  const [platform, setPlatform] = useState<Platform>("windows");
  const [publicKey, setPublicKey] = useState("");
  const [withdrawalRoot, setWithdrawalRoot] = useState("");
  const [signature, setSignature] = useState("");
  const [depositRoot, setDepositRoot] = useState("");

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Stepper Section */}
      <div className="flex justify-center py-8 px-6">
        <StepperHorizontal currentStep={2} />
      </div>

      {/* Main Form Container */}
      <div className="flex justify-center px-6 pb-8 border border-red-500">
        <div className="box-border w-full max-w-284 bg-white/5 border border-white/10 rounded-3xl p-6">
          {/* Form Header */}
          <div className="mb-6">
            <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white mb-2">
              Node Configuration
            </h2>
            <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              Generate and configure your validator keys
            </p>
          </div>

          {/* Generate Validator Keys Section */}
          <div className="box-border p-4 bg-white/5 border border-white/10 rounded-xl mb-6">
            {/* Section Header with Platform Toggle */}
            <div className="flex items-center justify-between mb-5">
              {/* Title with Icon */}
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#00C48C]" strokeWidth={1.5} />
                <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-white">
                  Generate Validator Keys
                </span>
              </div>

              {/* Platform Toggle */}
              <div className="flex items-center p-1 bg-[#0D0F17] border border-[#3A3A3A] rounded-xl">
                <button
                  onClick={() => setPlatform("windows")}
                  className={`px-3 py-1.5 rounded-[10px] font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] transition-all ${
                    platform === "windows"
                      ? "bg-[#1F222B] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.1)]"
                      : "text-[#AAB3D0]"
                  }`}
                >
                  Windows
                </button>
                <button
                  onClick={() => setPlatform("mac")}
                  className={`px-3 py-1.5 rounded-[10px] font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] transition-all ${
                    platform === "mac"
                      ? "bg-[#1F222B] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.1)]"
                      : "text-[#AAB3D0]"
                  }`}
                >
                  Mac / Linux
                </button>
              </div>
            </div>

            {/* Step 1: Download CLI */}
            <div className="flex flex-col gap-3 mb-4">
              <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-white">
                1. Download the Krown Validator CLI tool:
              </p>
              <CodeBlock code={CLI_COMMANDS[platform].download} />

              {/* Step 2: Generate Mnemonic */}

              <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-white">
                2. Generate your new mnemonic phrase:
              </p>
              <CodeBlock code={CLI_COMMANDS[platform].generate} />
            </div>

            {/* Info Banner */}
            <ApplicationBanner
              status="approved"
              title="Save your Mnemonic Phrase!"
              description="The CLI will output a 24-word phrase. Write this down on paper and store it securely. You will need it to recover your validator funds."
            />
          </div>

          {/* Deposit Parameters Section */}
          <div className="mb-6">
            <h3 className="font-vietnam text-lg leading-5 tracking-[-0.15px] text-white mb-6">
              Deposit Parameters
            </h3>

            {/* Parameters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Public Key"
                placeholder="0x..."
                value={publicKey}
                onChange={setPublicKey}
              />
              <FormInput
                label="Withdrawal Root"
                placeholder="0x..."
                value={withdrawalRoot}
                onChange={setWithdrawalRoot}
              />
              <FormInput
                label="Signature"
                placeholder="0x..."
                value={signature}
                onChange={setSignature}
              />
              <FormInput
                label="Deposit Root"
                placeholder="0x..."
                value={depositRoot}
                onChange={setDepositRoot}
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            {/* Back Button */}
            <button
              type="button"
              onClick={onBack}
              className="box-border flex items-center justify-center px-4 py-2 h-12 bg-white/5 border border-white/10 rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-white/10 transition-colors"
            >
              Back
            </button>

            {/* Continue Button */}
            <button
              type="button"
              onClick={onContinue}
              className="flex items-center justify-center px-4.5 py-2 h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white capitalize hover:bg-[#0C7D5D] transition-colors"
            >
              Verify Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
