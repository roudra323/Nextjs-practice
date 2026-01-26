"use client";

import { X, Download, Upload, Play, Check } from "lucide-react";

interface NodeSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NodeSetupModal({
  isOpen,
  onClose,
}: NodeSetupModalProps) {
  if (!isOpen) return null;

  const handleDownloadDocker = () => {
    console.log("Downloading Docker Compose...");
    // TODO: Implement download
  };

  const handleDownloadEnv = () => {
    console.log("Downloading Environment File...");
    // TODO: Implement download
  };

  const handleUploadKey = () => {
    console.log("Uploading Validator Key...");
    // TODO: Implement file upload
  };

  const handleStartNode = () => {
    console.log("Starting Node...");
    // TODO: Implement node start
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[576px] bg-[#0B0E17] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden">
        {/* Background Blur Effect */}
        <div className="absolute w-[486.25px] h-[376.09px] -left-[144.35px] -top-[156.04px] bg-white mix-blend-overlay blur-[61.2187px] rotate-[30deg]" />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <h2 className="font-vietnam font-semibold text-lg leading-[18px] tracking-[-0.44px] text-white">
              Node Setup Instructions
            </h2>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-white" strokeWidth={1.33} />
            </button>
          </div>

          {/* Subtitle */}
          <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] mb-8">
            Follow these steps to set up your self-hosted validator node
          </p>

          {/* Steps Grid - 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-8">
            {/* Step 1: Download Docker Compose */}
            <div className="flex flex-col gap-3">
              <h3 className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-white">
                1. Download Docker Compose
              </h3>
              <button
                onClick={handleDownloadDocker}
                className="flex items-center justify-center gap-1.5 px-4.5 py-2 w-[95px] h-7 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl"
              >
                <span className="font-vietnam font-medium text-xs leading-[135%] tracking-[-0.03em] capitalize text-white">
                  Download
                </span>
                <Download className="w-3 h-3 text-white" strokeWidth={1.5} />
              </button>
            </div>

            {/* Step 2: Configure Environment File */}
            <div className="flex flex-col gap-3">
              <h3 className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-white">
                2. Configure Environment File
              </h3>
              <button
                onClick={handleDownloadEnv}
                className="flex items-center justify-center gap-1.5 px-4.5 py-2 w-[95px] h-7 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl"
              >
                <span className="font-vietnam font-medium text-xs leading-[135%] tracking-[-0.03em] capitalize text-white">
                  Download
                </span>
                <Download className="w-3 h-3 text-white" strokeWidth={1.5} />
              </button>
            </div>

            {/* Step 3: Upload Validator Key JSON File */}
            <div className="flex flex-col gap-3">
              <h3 className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-white">
                3. Upload Validator Key JSON File
              </h3>
              <button
                onClick={handleUploadKey}
                className="flex items-center justify-center gap-1.5 px-4.5 py-2 w-[95px] h-7 bg-[#8A38F5] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl"
              >
                <span className="font-vietnam font-medium text-xs leading-[135%] tracking-[-0.03em] capitalize text-white">
                  Upload
                </span>
                <Upload className="w-3 h-3 text-white" strokeWidth={1.5} />
              </button>
            </div>

            {/* Step 4: Start Node */}
            <div className="flex flex-col gap-3">
              <h3 className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-white">
                4. Start Node
              </h3>
              <button
                onClick={handleStartNode}
                className="flex items-center justify-center gap-1.5 px-4.5 py-2 w-[125px] h-7 bg-[#EAB308] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl"
              >
                <span className="font-vietnam font-medium text-xs leading-[135%] tracking-[-0.03em] capitalize text-[#131839]">
                  Start Node
                </span>
                <Play
                  className="w-3.5 h-3.5 text-[#131839] fill-[#131839]"
                  strokeWidth={1.33}
                />
              </button>
            </div>
          </div>

          {/* Command Snippets Section */}
          <div className="flex flex-col gap-3">
            {/* Section Header */}
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00C48C]" strokeWidth={1.33} />
              <h3 className="font-vietnam font-medium text-sm leading-6 tracking-[-0.3125px] text-white">
                Command Snippets
              </h3>
            </div>

            {/* Command Box */}
            <div className="box-border w-full bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex flex-col gap-3">
                {/* Command 1 */}
                <div className="flex items-start gap-3">
                  <span className="font-inter font-normal text-sm leading-5 text-[#00C48C]">
                    $
                  </span>
                  <code className="font-mono text-sm leading-5 text-[#94A3B8] break-all">
                    curl -L https://krown.network/validator/docker-compose.yml
                    -o docker-compose.yml
                  </code>
                </div>
                {/* Command 2 */}
                <div className="flex items-start gap-3">
                  <span className="font-inter font-normal text-sm leading-5 text-[#00C48C]">
                    $
                  </span>
                  <code className="font-mono text-sm leading-5 text-[#94A3B8]">
                    docker compose up -d
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
