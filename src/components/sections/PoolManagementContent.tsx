"use client";

import {
  ArrowRight,
  Plus,
  Star,
  CheckCircle,
  Settings,
  Users,
  TrendingUp,
  DollarSign,
  Play,
  ExternalLink,
} from "lucide-react";
import { APRIcon, ShieldFilledIcon, StakedIcon, TikIcon } from "../icons";

// Requirement Card Component
interface RequirementCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function RequirementCard({ icon, title, value }: RequirementCardProps) {
  return (
    <div className="box-border w-full sm:w-47 h-auto sm:h-25.5 items-start justify-center flex flex-col  bg-white/5 border border-white/10 rounded-2xl p-4 relative">
      <div className="text-[#00C48C]">{icon}</div>
      <div className="mt-3">
        <span className="font-vietnam font-medium text-sm leading-6 tracking-[-0.3125px] text-white">
          {title}
        </span>
      </div>
      <span className="font-grotesk font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] mt-1 block">
        {value}
      </span>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconColor: string;
}

function StatCard({ label, value, icon, iconColor }: StatCardProps) {
  return (
    <div className="flex flex-col w-full sm:w-52 h-auto sm:h-25.25 bg-white/5 border border-white/10 rounded-2xl p-4">
      <span className="font-vietnam font-medium text-sm leading-4.75 text-[#AAB3D0]">
        {label}
      </span>
      <div className="flex flex-row mt-3 sm:mt-5 justify-between items-center">
        <span className="font-grotesk font-medium text-base sm:text-lg leading-7.75 text-white">
          {value}
        </span>
        <div className={`w-5 h-5 ${iconColor}`}>{icon}</div>
      </div>
    </div>
  );
}

// Pool Details Card
interface PoolDetailsData {
  poolName: string;
  capacityUsed: string;
  participants: string;
  fees: string;
  feesEarned: string;
  totalStaked: string;
  status: "active" | "inactive";
}

interface PoolDetailsCardProps {
  pool: PoolDetailsData;
  onCreateSharedNode: () => void;
}

function PoolDetailsCard({ pool, onCreateSharedNode }: PoolDetailsCardProps) {
  return (
    <div className="box-border w-full bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-10">
        <div className="flex items-center gap-5">
          <h3 className="font-vietnam font-medium text-lg sm:text-xl leading-7 tracking-[-0.44px] text-white">
            Pool Details
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <div className="flex items-center gap-1.5">
            <span className="font-vietnam font-normal text-xs sm:text-[13px] leading-4.75 text-[#00C48C]">
              All requirements are met
            </span>
            <CheckCircle className="w-4 h-4 text-[#00C48C]" strokeWidth={1.5} />
          </div>
          <button
            onClick={onCreateSharedNode}
            className="flex items-center justify-center gap-1.5 px-3 sm:px-4.5 py-2 h-8 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-xs sm:text-sm leading-5 tracking-[-0.15px] text-white hover:bg-[#0C7D5D] transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
            Create Shared Node
          </button>
        </div>
      </div>

      {/* Stats Grid - Responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-8">
        {/* Pool Name */}
        <div className="flex flex-col gap-1.5">
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-4 text-[#94A3B8]">
            Pool Name
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
              {pool.poolName}
            </span>
          </div>
        </div>

        {/* Capacity Used */}
        <div className="flex flex-col gap-1.5">
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-4 text-[#94A3B8]">
            Capacity Used
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
              {pool.capacityUsed}
            </span>
            <button className="box-border flex items-center justify-center w-5 h-5 bg-white/5 border border-white/10 rounded-md">
              <ExternalLink className="w-4 h-4 text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Participants */}
        <div className="flex flex-col gap-1.5">
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-4 text-[#94A3B8]">
            Participants
          </span>
          <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
            {pool.participants}
          </span>
        </div>

        {/* Fees */}
        <div className="flex flex-col gap-1.5">
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-4 text-[#94A3B8]">
            Fees
          </span>
          <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
            {pool.fees}
          </span>
        </div>

        {/* Fees Earned */}
        <div className="flex flex-col gap-1.5">
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-4 text-[#94A3B8]">
            Fees Earned
          </span>
          <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
            {pool.feesEarned}
          </span>
        </div>

        {/* Total Staked */}
        <div className="flex flex-col gap-1.5">
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-4 text-[#94A3B8]">
            Total Staked
          </span>
          <span className="font-grotesk font-medium text-sm sm:text-base leading-5 tracking-[-0.3125px] text-white">
            {pool.totalStaked}
          </span>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1.5">
          <span className="font-vietnam font-medium text-xs sm:text-sm leading-4 text-[#94A3B8]">
            Status
          </span>
          {pool.status === "active" && (
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-fit px-2 py-0.5 bg-[rgba(14,150,111,0.2)] rounded-lg font-vietnam font-medium text-xs leading-4 text-[#0E966F]">
                Active
              </span>
              <button className="box-border flex items-center justify-center w-5 h-5 bg-white/5 border border-white/10 rounded-md">
                <Play
                  className="w-2.5 h-2.5 text-[#00C48C]"
                  strokeWidth={0.9375}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Requirements data
const requirementsData = [
  {
    icon: <Star className="w-5 h-5" strokeWidth={2} />,
    title: "Min self-stake",
    value: "1,000,000 KROWN",
  },
  {
    icon: <Star className="w-5 h-5" strokeWidth={2} />,
    title: "Experience",
    value: "6+ Months Ops",
  },
  {
    icon: <Star className="w-5 h-5" strokeWidth={2} />,
    title: "SLA",
    value: "≥99% uptime",
  },
];

// Stats data
const statsData = [
  {
    label: "Pools Manager Status",
    value: "Approved",
    icon: <TikIcon className="w-5 h-5" />,
    iconColor: "text-[#0E966F]",
  },
  {
    label: "Pools managed",
    value: "1",
    icon: <Settings className="w-5 h-5" strokeWidth={1.5} />,
    iconColor: "text-[#0E966F]",
  },
  {
    label: "Total stake",
    value: "18,500,000",
    icon: <StakedIcon className="w-5 h-5" />,
    iconColor: "text-[#EAB308]",
  },
  {
    label: "Participants",
    value: "412",
    icon: <Users className="w-5 h-5" strokeWidth={1.5} />,
    iconColor: "text-[#966DFF]",
  },
  {
    label: "Monthly fees earned",
    value: "18,200 KROWN",
    icon: <APRIcon className="w-5 h-5" />,
    iconColor: "text-[#00C48C]",
  },
];

// Pool data
const poolData: PoolDetailsData = {
  poolName: "Atlas-01",
  capacityUsed: "47,500/50,000",
  participants: "4/4",
  fees: "3%",
  feesEarned: "18,200",
  totalStaked: "18,200 KROWN",
  status: "active",
};

interface PoolManagementContentProps {
  onCreatePool?: () => void;
  onCreateSharedNode?: () => void;
}

export default function PoolManagementContent({
  onCreatePool,
  onCreateSharedNode,
}: PoolManagementContentProps) {
  const handleCreatePool = () => {
    console.log("Creating pool...");
    onCreatePool?.();
  };

  const handleCreateSharedNode = () => {
    console.log("Creating shared node...");
    onCreateSharedNode?.();
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 w-full">
      {/* Banner Section */}
      <div className="box-border w-full bg-white/5 border border-white/10 rounded-4xl p-4 sm:p-5 relative overflow-hidden">
        {/* Background Blur Effect */}
        <div className="absolute w-[272.59px] h-[210.83px] -left-29.25 -top-39.75 bg-white mix-blend-overlay blur-[61.2187px] rotate-30" />

        {/* Header Row */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Shield Icon */}
            <div className="shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-[#00C48C] to-[#0E966F] border border-white/10 shadow-[0px_4px_20px_rgba(0,196,140,0.41)] rounded-xl">
              <ShieldFilledIcon />
            </div>
            <div>
              <h2 className="font-vietnam font-medium text-base sm:text-xl leading-5 sm:leading-6 tracking-[-0.45px] text-white">
                Apply to Become Pool Manager
              </h2>
              <p className="font-vietnam font-normal text-xs sm:text-sm leading-5 sm:leading-6 tracking-[-0.45px] text-[#AAB3D0] mt-1">
                Run a shared node, earn manager fees, and contribute to the
                network.
              </p>
            </div>
          </div>
          <button
            onClick={handleCreatePool}
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-1 h-8 bg-[#0E966F] rounded-xl font-vietnam font-medium text-xs sm:text-sm leading-6 tracking-[-0.3125px] text-white hover:bg-[#0C7D5D] transition-colors cursor-pointer whitespace-nowrap"
          >
            Create Pool
            <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>
        </div>

        {/* Requirements Cards - Responsive Grid */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
          {requirementsData.map((req, index) => (
            <RequirementCard
              key={index}
              icon={req.icon}
              title={req.title}
              value={req.value}
            />
          ))}
        </div>
      </div>

      {/* Stats Row - Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
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

      {/* Pool Details Card */}
      <PoolDetailsCard
        pool={poolData}
        onCreateSharedNode={handleCreateSharedNode}
      />
    </div>
  );
}
