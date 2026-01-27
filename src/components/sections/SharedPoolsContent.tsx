"use client";

import { useState, useRef, useEffect } from "react";
import {
  Network,
  Activity,
  Shield,
  CheckCircle,
  Info,
  ArrowRight,
  Plus,
  Minus,
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
    <div className="box-border flex-1 min-w-35 sm:min-w-45 sm:max-w-52 h-22.5 sm:h-25.25 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 relative">
      <span className="font-vietnam font-medium text-xs sm:text-sm leading-4.75 text-[#AAB3D0]">
        {label}
      </span>
      <div className="mt-3 sm:mt-5">
        <span className="font-grotesk font-medium text-base sm:text-lg leading-7.75 text-white">
          {value}
        </span>
      </div>
      <div
        className={`absolute right-3 sm:right-4 bottom-3 sm:bottom-5 w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`}
      >
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
    <div className="box-border w-full bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 gap-3 sm:gap-0 border-b border-white/10">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 sm:gap-3">
            <h3 className="font-vietnam font-medium text-base sm:text-lg leading-7 tracking-[-0.44px] text-white">
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
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-6 tracking-[-0.44px] text-[#AAB3D0]">
            Pool Manager: {pool.manager}
          </span>
        </div>

        <button
          onClick={() => onViewAndJoin(pool.id)}
          className="flex items-center justify-center gap-1.5 px-3 sm:px-4.5 py-2 h-9 w-full sm:w-auto bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-white hover:bg-[#0C7D5D] transition-colors cursor-pointer"
        >
          View And Join
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stats Row - Grid layout for responsiveness */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-5 py-3 sm:py-4">
        {/* Uptime */}
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            Uptime
          </span>
          <div className="flex items-center gap-1.5">
            <CheckCircle
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00C48C]"
              strokeWidth={1.17}
            />
            <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
              {pool.uptime}
            </span>
          </div>
        </div>

        {/* Total Staked */}
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            Total Staked
          </span>
          <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
            {pool.totalStaked}
          </span>
        </div>

        {/* Available Capacity */}
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            Available Capacity
          </span>
          <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
            {pool.availableCapacity}
          </span>
        </div>

        {/* Total Fees */}
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            Total Fees
          </span>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
                {pool.totalFees}
              </span>
              <Info className="w-3 h-3 text-[#94A3B8]" />
            </div>
            <span className="font-vietnam font-normal text-[10px] sm:text-xs leading-3.75 tracking-[0.12px] text-[#94A3B8]">
              {pool.feeBreakdown}
            </span>
          </div>
        </div>

        {/* APR */}
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <span className="font-vietnam font-medium text-xs leading-4 text-[#94A3B8]">
            APR
          </span>
          <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
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
    <div className="flex flex-col w-full bg-white/5 border border-white/10 rounded-4xl p-4 sm:p-6">
      <h2 className="font-vietnam font-medium text-lg sm:text-xl leading-6 tracking-[-0.3125px] text-white mb-3">
        How it works
      </h2>

      {/* Mobile: Vertical layout, MD+: Horizontal layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-3 mb-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            {/* Step */}
            <div className="flex flex-col items-center max-w-35 md:max-w-none">
              <span className="font-vietnam font-medium text-sm sm:text-base leading-5 text-white/25 mb-3 md:mb-4">
                {step.stepNumber}
              </span>
              <div className="w-12 h-12 sm:w-[50.76px] sm:h-[50.76px] bg-[#0E966F] text-white rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <span className="font-vietnam font-medium text-sm sm:text-base leading-5 text-white text-center mt-3 md:mt-4 md:whitespace-nowrap">
                {step.label}
              </span>
            </div>

            {/* Connector - Vertical on mobile, Horizontal on md+ */}
            {index < steps.length - 1 && (
              <>
                {/* Vertical connector (mobile) */}
                <div className="md:hidden w-[3.17px] h-8 bg-white/10 my-2" />
                {/* Horizontal connector (md+) */}
                <div className="hidden md:block w-16 lg:w-24 xl:w-53 h-[3.17px] bg-white/10 mx-2" />
              </>
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [minUptime, setMinUptime] = useState(98);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close filter on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleViewAndJoin = (poolId: string) => {
    console.log(`View and join pool: ${poolId}`);
    onViewAndJoin?.(poolId);
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 w-full">
      {/* Stats Row */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
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
          <h2 className="font-vietnam font-medium text-lg sm:text-xl leading-6 tracking-[-0.15px] text-white">
            Shared Pools
          </h2>

          {/* Filter Button with Dropdown */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="box-border flex items-center justify-center gap-1.5 px-2 py-2 sm:py-3 h-8 sm:h-9 bg-[#242630] border border-white/10 rounded-xl"
            >
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#AAB3D0]"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M1 3h12M3 7h8M5 11h4" />
              </svg>
              <span className="font-vietnam font-normal text-xs sm:text-sm leading-[150%] text-[#AAB3D0]">
                Filter
              </span>
            </button>

            {/* Filter Dropdown Modal */}
            {isFilterOpen && (
              <div className="absolute right-0 top-full mt-2 w-71.25 h-32.75 bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-2xl z-50">
                {/* Min uptime */}
                <div className="absolute left-4.5 top-4.75 flex items-center gap-1.75">
                  <span className="font-vietnam font-medium text-base leading-5 text-white">
                    Min uptime
                  </span>
                </div>
                {/* Min uptime controls */}
                <div className="absolute right-3 top-4 flex items-center gap-1.5">
                  <button
                    onClick={() => setMinUptime(Math.max(0, minUptime - 1))}
                    className="box-border flex items-center justify-center w-6 h-6.5 bg-white/5 border border-white/10 rounded-lg"
                  >
                    <Minus className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </button>
                  <div className="box-border flex items-center justify-center w-12.75 h-6.5 border border-white/10 rounded-lg">
                    <span className="font-vietnam font-medium text-xs leading-4.5 tracking-[-0.44px] text-white">
                      {minUptime}%
                    </span>
                  </div>
                  <button
                    onClick={() => setMinUptime(Math.min(100, minUptime + 1))}
                    className="box-border flex items-center justify-center w-6 h-6.5 bg-white/5 border border-white/10 rounded-lg"
                  >
                    <Plus
                      className="w-4 h-4 text-[#AAB3D0]"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>

                {/* Max fee */}
                <div className="absolute left-4.5 top-14.25 flex items-center gap-1.75">
                  <span className="font-vietnam font-medium text-base leading-5 text-white">
                    Max fee
                  </span>
                </div>
                {/* Max fee value */}
                <div className="absolute right-3 top-13.5 flex items-center gap-1.5">
                  <div className="box-border flex items-center justify-center w-12.75 h-6.5 border border-white/10 rounded-lg">
                    <span className="font-vietnam font-medium text-xs leading-4.5 tracking-[-0.44px] text-white">
                      ≤ 15%
                    </span>
                  </div>
                </div>

                {/* Min capacity */}
                <div className="absolute left-4.5 top-23.75 flex items-center gap-1.75">
                  <span className="font-vietnam font-medium text-base leading-5 text-white">
                    Min capacity
                  </span>
                </div>
                {/* Min capacity value */}
                <div className="absolute right-3 top-23 flex items-center gap-1.5">
                  <div className="box-border flex items-center justify-center w-27.75 h-6.5 border border-white/10 rounded-lg">
                    <span className="font-vietnam font-medium text-xs leading-4.5 tracking-[-0.44px] text-white">
                      ≥ 50,000 KROWN
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
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
