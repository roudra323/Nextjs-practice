"use client";

import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface CreateSharedNodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { nodeName: string; region: string }) => void;
}

const regions = [
  "Virginia",
  "California",
  "Oregon",
  "Frankfurt",
  "London",
  "Singapore",
  "Sydney",
  "Tokyo",
];

export default function CreateSharedNodeModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateSharedNodeModalProps) {
  const [nodeName, setNodeName] = useState("");
  const [region, setRegion] = useState("Virginia");
  const [isRegionOpen, setIsRegionOpen] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ nodeName, region });
    setNodeName("");
    setRegion("Virginia");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[448px] h-auto min-h-[422px] bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden">
        {/* Background Blur Effect */}
        <div className="absolute w-[486.25px] h-[376.09px] -left-[144.35px] -top-[156.04px] bg-white mix-blend-overlay blur-[61.2187px] rotate-[30deg]" />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-inter font-semibold text-lg leading-[18px] tracking-[-0.44px] text-white">
                Create Shared Node
              </h2>
              <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                Configure your new shared node settings
              </p>
            </div>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-white" strokeWidth={1.33} />
            </button>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-5 mt-4">
            {/* Node Name */}
            <div className="flex flex-col gap-2">
              <label className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                Node Name
              </label>
              <input
                type="text"
                value={nodeName}
                onChange={(e) => setNodeName(e.target.value)}
                placeholder="Enter node name"
                className="box-border w-full h-[50px] px-4 py-3 bg-[#1A1D28] border border-white/10 rounded-2xl font-inter font-normal text-base leading-[19px] tracking-[-0.3125px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#0E966F]"
              />
            </div>

            {/* Region Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                Region
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRegionOpen(!isRegionOpen)}
                  className="box-border w-full h-[50px] px-4 py-3 bg-[#1A1D28] border border-white/10 rounded-2xl flex items-center justify-between cursor-pointer"
                >
                  <span className="font-inter font-normal text-base leading-[19px] tracking-[-0.3125px] text-white">
                    {region}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#AAB3D0] opacity-50 transition-transform ${
                      isRegionOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.33}
                  />
                </button>

                {/* Dropdown Menu */}
                {isRegionOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A1D28] border border-white/10 rounded-2xl overflow-hidden z-20 max-h-48 overflow-y-auto">
                    {regions.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => {
                          setRegion(r);
                          setIsRegionOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left font-inter font-normal text-base leading-[19px] tracking-[-0.3125px] hover:bg-white/5 transition-colors cursor-pointer ${
                          region === r ? "text-[#0E966F]" : "text-white"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mt-8 mb-6" />

          {/* Footer Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="box-border flex items-center justify-center px-4 py-2 w-[150px] h-12 bg-white/5 border border-white/10 rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!nodeName.trim()}
              className="flex items-center justify-center px-4.5 py-2 w-auto h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-[#0C7D5D] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
