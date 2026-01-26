"use client";

import { X, Star } from "lucide-react";
import { useState } from "react";

interface RequestPoolCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    poolName: string;
    initialCapacity: string;
    managerFee: string;
    selfStake: string;
    description: string;
  }) => void;
}

// Prerequisite Card Component
interface PrerequisiteCardProps {
  title: string;
  value: string;
}

function PrerequisiteCard({ title, value }: PrerequisiteCardProps) {
  return (
    <div className="box-border w-full sm:w-[247px] h-[122px] bg-white/5 border border-white/10 rounded-2xl p-5">
      <Star className="w-6 h-6 text-[#00C48C]" strokeWidth={2} />
      <div className="mt-3.5">
        <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
          {title}
        </span>
      </div>
      <span className="font-grotesk font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] mt-1 block">
        {value}
      </span>
    </div>
  );
}

const prerequisites = [
  { title: "Min self-stake", value: "1,000,000 KROWN" },
  { title: "Experience", value: "6+ Months Ops" },
  { title: "SLA", value: "≥99% uptime" },
];

export default function RequestPoolCreationModal({
  isOpen,
  onClose,
  onSubmit,
}: RequestPoolCreationModalProps) {
  const [poolName, setPoolName] = useState("");
  const [initialCapacity, setInitialCapacity] = useState("");
  const [managerFee, setManagerFee] = useState("");
  const [selfStake, setSelfStake] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({
      poolName,
      initialCapacity,
      managerFee,
      selfStake,
      description,
    });
    // Reset form
    setPoolName("");
    setInitialCapacity("");
    setManagerFee("");
    setSelfStake("");
    setDescription("");
  };

  const isFormValid =
    poolName.trim() &&
    initialCapacity.trim() &&
    managerFee.trim() &&
    selfStake.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[821px] max-h-[90vh] overflow-y-auto bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#0B0E17] [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/30">
        {/* Background Blur Effect */}
        <div className="absolute w-[486.25px] h-[376.09px] -left-[144.35px] -top-[156.04px] bg-white mix-blend-overlay blur-[61.2187px] rotate-[30deg]" />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <h2 className="font-vietnam font-medium text-lg leading-[27px] tracking-[-0.45px] text-white">
              Request for Pool Creation
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
          <p className="font-vietnam font-normal text-sm leading-6 tracking-[-0.45px] text-[#AAB3D0] mb-6">
            Run a shared node, earn manager fees, and contribute to the network.
          </p>

          {/* Prerequisites Section */}
          <h3 className="font-vietnam font-medium text-base leading-[14px] tracking-[-0.15px] text-white mb-4">
            Prerequisites
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8">
            {prerequisites.map((prereq, index) => (
              <PrerequisiteCard
                key={index}
                title={prereq.title}
                value={prereq.value}
              />
            ))}
          </div>

          {/* Pool Details Section */}
          <h3 className="font-vietnam font-medium text-base leading-[14px] tracking-[-0.15px] text-white mb-6">
            Pool Details
          </h3>

          {/* Form Fields - 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {/* Pool Name */}
            <div className="flex flex-col gap-3.5">
              <label className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-[#AAB3D0]">
                Pool name
              </label>
              <input
                type="text"
                value={poolName}
                onChange={(e) => setPoolName(e.target.value)}
                placeholder="Atlas Pool"
                className="box-border w-full h-12 px-5 py-1 bg-white/5 border border-white/10 rounded-xl font-vietnam font-normal text-sm leading-[18px] tracking-[-0.15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#0E966F]"
              />
            </div>

            {/* Initial Capacity */}
            <div className="flex flex-col gap-3.5">
              <label className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-[#AAB3D0]">
                Initial capacity (KROWN)
              </label>
              <input
                type="text"
                value={initialCapacity}
                onChange={(e) => setInitialCapacity(e.target.value)}
                placeholder="20,000,000"
                className="box-border w-full h-12 px-5 py-1 bg-white/5 border border-white/10 rounded-xl font-vietnam font-normal text-sm leading-[18px] tracking-[-0.15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#0E966F]"
              />
            </div>

            {/* Manager Fee */}
            <div className="flex flex-col gap-3.5">
              <label className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-[#AAB3D0]">
                Manager Fee
              </label>
              <input
                type="text"
                value={managerFee}
                onChange={(e) => setManagerFee(e.target.value)}
                placeholder="3%"
                className="box-border w-full h-12 px-5 py-1 bg-white/5 border border-white/10 rounded-xl font-vietnam font-normal text-sm leading-[18px] tracking-[-0.15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#0E966F]"
              />
            </div>

            {/* Self Stake */}
            <div className="flex flex-col gap-3.5">
              <label className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-[#AAB3D0]">
                Self Stake (KROWN)
              </label>
              <input
                type="text"
                value={selfStake}
                onChange={(e) => setSelfStake(e.target.value)}
                placeholder="22,200"
                className="box-border w-full h-12 px-5 py-1 bg-white/5 border border-white/10 rounded-xl font-vietnam font-normal text-sm leading-[18px] tracking-[-0.15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#0E966F]"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-3.5 mb-6">
            <label className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-[#AAB3D0]">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your pool and why you want to become a pool manager..."
              rows={4}
              className="box-border w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl font-vietnam font-normal text-sm leading-[18px] tracking-[-0.15px] text-white placeholder:text-white/50 focus:outline-none focus:border-[#0E966F] resize-none"
            />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-6" />

          {/* Footer Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="box-border flex items-center justify-center px-4 py-2 w-[110px] h-12 bg-white/5 border border-white/10 rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className="flex items-center justify-center px-4.5 py-2 w-auto h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-[#0C7D5D] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Pool Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
