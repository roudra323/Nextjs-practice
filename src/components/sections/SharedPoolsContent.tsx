"use client";

import {
  Network,
  Activity,
  Shield,
  CheckCircle,
  Info,
  ArrowRight,
} from "lucide-react";
import { LockIcon, PoolIcona, RewwardIcon } from "../icons";

// Stat Card Component
interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconColor: string;
}

function StatCard({ label, value, icon, iconColor }: StatCardProps) {
  return (
    <div className="box-border w-52 h-[101px] bg-white/5 border border-white/10 rounded-2xl p-4 relative">
      <span className="font-vietnam font-medium text-sm leading-[19px] text-[#AAB3D0]">
        {label}
      </span>
      <div className="mt-5">
        <span className="font-grotesk font-medium text-lg leading-[31px] text-white">
          {value}
        </span>
      </div>
      <div className={`absolute right-4 bottom-5 w-5 h-5 ${iconColor}`}>
        {icon}
      </div>
    </div>
  );
}

// Pool Card Component
interface PoolData {
  id: string;
  name: string;
  manager: string;
  uptime: string;
  totalStaked: string;
  availableCapacity: string;
  totalFees: string;
  feeBreakdown: string;
  apr: string;
  status: "active" | "inactive";
}

interface SharedPoolCardProps {
  pool: PoolData;
  onViewAndJoin: (poolId: string) => void;
}

function SharedPoolCard({ pool, onViewAndJoin }: SharedPoolCardProps) {
  return (
    <div className="box-border w-full bg-white/5 border border-white/10 rounded-3xl">
      {/* Header */}

      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="felx flex-col">
          <div className="flex items-center gap-3">
            <h3 className="font-vietnam font-medium text-lg leading-7 tracking-[-0.44px] text-white">
              {pool.name}
            </h3>
            {pool.status === "active" && (
              <span className="flex items-center justify-center px-2 py-0.5 bg-[rgba(14,150,111,0.2)] rounded-lg">
                <span className="font-vietnam font-medium text-xs leading-4 text-[#00C48C]">
                  Active
                </span>
              </span>
            )}
          </div>
          {/* Pool Manager */}

          <span className="font-vietnam font-medium text-sm leading-6 tracking-[-0.44px] text-[#AAB3D0]">
            Pool Manager: {pool.manager}
          </span>
        </div>

        <button
          onClick={() => onViewAndJoin(pool.id)}
          className="flex items-center justify-center gap-1.5 px-4.5 py-2 h-9 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-white hover:bg-[#0C7D5D] transition-colors cursor-pointer"
        >
          View And Join
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stats Row */}
      <div className="flex items-start gap-8 px-5 py-4">
        {/* Uptime */}
        <div className="flex flex-col gap-1.5">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            Uptime
          </span>
          <div className="flex items-center gap-1.5">
            <CheckCircle
              className="w-3.5 h-3.5 text-[#00C48C]"
              strokeWidth={1.17}
            />
            <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
              {pool.uptime}
            </span>
          </div>
        </div>

        {/* Total Staked */}
        <div className="flex flex-col gap-1.5 ml-32">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            Total Staked
          </span>
          <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
            {pool.totalStaked}
          </span>
        </div>

        {/* Available Capacity */}
        <div className="flex flex-col gap-1.5 ml-32">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            Available Capacity
          </span>
          <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
            {pool.availableCapacity}
          </span>
        </div>

        {/* Total Fees */}
        <div className="flex flex-col gap-1.5 ml-32">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            Total Fees
          </span>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
                {pool.totalFees}
              </span>
              <Info className="w-3 h-3 text-[#94A3B8]" />
            </div>
            <span className="font-vietnam font-normal text-xs leading-[15px] tracking-[0.12px] text-[#94A3B8]">
              {pool.feeBreakdown}
            </span>
          </div>
        </div>

        {/* APR */}
        <div className="flex flex-col gap-1.5 ml-32">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            APR
          </span>
          <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
            {pool.apr}
          </span>
        </div>
      </div>
    </div>
  );
}

// How It Works Stepper
function SharedPoolHowItWorks() {
  const steps = [
    { label: "Choose a Pool", stepNumber: "Step 1", icon: <PoolIcona /> },
    { label: "Stake Your Tokens", stepNumber: "Step 2", icon: <LockIcon /> },
    {
      label: "Earn Proportional Rewards",
      stepNumber: "Step 3",
      icon: <RewwardIcon />,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white/5 border border-white/10 rounded-[20px] p-6">
      <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.3125px] text-white mb-3">
        How it works
      </h2>

      <div className="flex items-start justify-center gap-3 mb-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step */}
            <div className="flex flex-col max-w-20 items-center">
              <span className="font-vietnam font-medium text-base leading-5 text-white/25 mb-4">
                {step.stepNumber}
              </span>
              <div className="w-[50.76px] h-[50.76px] bg-[#0E966F] text-white rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <span className="font-vietnam font-medium text-base leading-5 text-white text-center mt-4 whitespace-nowrap">
                {step.label}
              </span>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div className="w-[212px] h-[3.17px] bg-white/10 left-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Stats section
const statsData = [
  {
    label: "Total Shared Nodes",
    value: "8",
    icon: <Network className="w-5 h-5" />,
    iconColor: "text-[#00C48C]",
  },
  {
    label: "Avg Shared APR",
    value: "10.2%",
    icon: <Activity className="w-5 h-5" />,
    iconColor: "text-[#F4CD4D]",
  },
  {
    label: "Min Stake",
    value: "10,000 KROWN",
    icon: <Shield className="w-5 h-5" />,
    iconColor: "text-[#966DFF]",
  },
];

// Mock pool data
const poolsData: PoolData[] = [
  {
    id: "atlas-01",
    name: "Atlas-01",
    manager: "ValidatorX",
    uptime: "99.4%",
    totalStaked: "18,500,000",
    availableCapacity: "1,500,000",
    totalFees: "13%",
    feeBreakdown: "Platform:10% + Manager:3%",
    apr: "10.2%",
    status: "active",
  },
  {
    id: "atlas-02",
    name: "Atlas-02",
    manager: "ValidatorX",
    uptime: "99.4%",
    totalStaked: "18,500,000",
    availableCapacity: "1,500,000",
    totalFees: "13%",
    feeBreakdown: "Platform:10% + Manager:3%",
    apr: "10.2%",
    status: "active",
  },
  {
    id: "atlas-03",
    name: "Atlas-03",
    manager: "ValidatorX",
    uptime: "99.4%",
    totalStaked: "18,500,000",
    availableCapacity: "1,500,000",
    totalFees: "13%",
    feeBreakdown: "Platform:10% + Manager:3%",
    apr: "10.2%",
    status: "active",
  },
  {
    id: "atlas-04",
    name: "Atlas-04",
    manager: "ValidatorX",
    uptime: "99.4%",
    totalStaked: "18,500,000",
    availableCapacity: "1,500,000",
    totalFees: "13%",
    feeBreakdown: "Platform:10% + Manager:3%",
    apr: "10.2%",
    status: "active",
  },
];

interface SharedPoolsContentProps {
  onViewAndJoin?: (poolId: string) => void;
}

export default function SharedPoolsContent({
  onViewAndJoin,
}: SharedPoolsContentProps) {
  const handleViewAndJoin = (poolId: string) => {
    console.log(`View and join pool: ${poolId}`);
    onViewAndJoin?.(poolId);
  };

  return (
    <div className="flex flex-col gap-6 p-6 w-full">
      {/* Stats Row */}
      <div className="flex items-center gap-6">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      {/* How It Works Section */}
      <SharedPoolHowItWorks />

      {/* Pools Header */}
      <div className="flex">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white">
            Shared Pools
          </h2>
          <button className="box-border flex items-center justify-center gap-1.5 px-2 py-3 h-9 bg-[#242630] border border-white/10 rounded-xl">
            <svg
              className="w-3.5 h-3.5 text-[#AAB3D0]"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 3h12M3 7h8M5 11h4" />
            </svg>
            <span className="font-vietnam font-normal text-sm leading-[150%] text-[#AAB3D0]">
              Filter
            </span>
          </button>
        </div>
      </div>

      {/* Pool Cards */}
      <div className="flex flex-col gap-4">
        {poolsData.map((pool) => (
          <SharedPoolCard
            key={pool.id}
            pool={pool}
            onViewAndJoin={handleViewAndJoin}
          />
        ))}
      </div>
    </div>
  );
}
