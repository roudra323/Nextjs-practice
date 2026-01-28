"use client";

import { use } from "react";
import Link from "next/link";
import {
  BackArrowIcon,
  CopyIcon,
  CheckCircleIcon,
  KeyIcon,
  DownloadIcon,
  ManagedIcon,
  SharedIcon,
  UptimeIcon,
  WalletIcon,
} from "@/components/icons";

// Application data types
type ApplicationStatus = "pending" | "approved" | "rejected";
type ValidatorType = "self-hosted" | "managed" | "shared";

interface ApplicationData {
  id: string;
  walletAddress: string;
  type: ValidatorType;
  status: ApplicationStatus;
  balance: string;
  staked: string;
  submitted: string;
  transactionCount: number;
  // Self-hosted specific
  eligibilityChecks?: {
    walletConnected: boolean;
    balanceCheck: boolean;
    walletAge: number;
    transactionHistory: number;
  };
  validatorKey?: {
    filename: string;
    status: "valid" | "invalid";
  };
  // Managed specific
  serviceSummary?: {
    infrastructure: string;
    fee: string;
    unbonding: string;
  };
  // Shared specific
  nodeOverview?: {
    name: string;
    poolManager: string;
    region: string;
    uptime: number;
    totalStaked: string;
    availableCapacity: string;
    totalFees: string;
    apr: string;
  };
}

// Mock data for different application types
const mockApplications: Record<string, ApplicationData> = {
  // 1. Self Hosted - Pending
  "VAL-2024-1847": {
    id: "VAL-2024-1847",
    walletAddress: "0x742d...9c4a",
    type: "self-hosted",
    status: "pending",
    balance: "125,000,000 KROWN",
    staked: "125,000,000 KROWN",
    submitted: "2 hours ago",
    transactionCount: 1847,
    eligibilityChecks: {
      walletConnected: true,
      balanceCheck: true,
      walletAge: 423,
      transactionHistory: 1847,
    },
    validatorKey: {
      filename: "validator_key_2024_11_24.json",
      status: "valid",
    },
  },
  // 2. Self Hosted - Pending (Duplicate scenario)
  "VAL-2024-1846": {
    id: "VAL-2024-1846",
    walletAddress: "0x742d...9c4a",
    type: "self-hosted",
    status: "pending",
    balance: "125,000,000 KROWN",
    staked: "125,000,000 KROWN",
    submitted: "2 hours ago",
    transactionCount: 1847,
    eligibilityChecks: {
      walletConnected: true,
      balanceCheck: true,
      walletAge: 423,
      transactionHistory: 1847,
    },
    validatorKey: {
      filename: "validator_key_2024_11_24.json",
      status: "valid",
    },
  },
  // 3. Managed - Approved (Node Not Assigned)
  "VAL-2024-1845": {
    id: "VAL-2024-1845",
    walletAddress: "0x742d...9c4a",
    type: "managed",
    status: "approved",
    balance: "125,000,000 KROWN",
    staked: "125,000,000 KROWN",
    submitted: "2 hours ago",
    transactionCount: 0,
    serviceSummary: {
      infrastructure: "Managed",
      fee: "10% of Rewards",
      unbonding: "21 days",
    },
  },
  // 4. Managed - Pending
  "VAL-2024-1844": {
    id: "VAL-2024-1844",
    walletAddress: "0x742d...9c4a",
    type: "managed",
    status: "pending",
    balance: "125,000,000 KROWN",
    staked: "125,000,000 KROWN",
    submitted: "2 hours ago",
    transactionCount: 0,
    serviceSummary: {
      infrastructure: "Managed",
      fee: "10% of Rewards",
      unbonding: "21 days",
    },
  },
  // 5. Managed - Approved (Node Provisioned)
  "VAL-2024-1843": {
    id: "VAL-2024-1843",
    walletAddress: "0x742d...9c4a",
    type: "managed",
    status: "approved",
    balance: "125,000,000 KROWN",
    staked: "125,000,000 KROWN",
    submitted: "2 hours ago",
    transactionCount: 142,
    serviceSummary: {
      infrastructure: "Managed",
      fee: "10% of Rewards",
      unbonding: "21 days",
    },
  },
  // 6. Shared - Rejected
  "VAL-2024-1842": {
    id: "VAL-2024-1842",
    walletAddress: "0x742d...9c4a",
    type: "shared",
    status: "rejected",
    balance: "125,000,000 KROWN",
    staked: "125,000,000 KROWN",
    submitted: "2 hours ago",
    transactionCount: 42,
    nodeOverview: {
      name: "Atlas-01",
      poolManager: "ValidatorX",
      region: "🇺🇸",
      uptime: 99.4,
      totalStaked: "18,500,000",
      availableCapacity: "1,500,000",
      totalFees: "13%",
      apr: "10.2%",
    },
  },
  // 7. Shared - Rejected
  "VAL-2024-1841": {
    id: "VAL-2024-1841",
    walletAddress: "0x742d...9c4a",
    type: "shared",
    status: "rejected",
    balance: "125,000,000 KROWN",
    staked: "125,000,000 KROWN",
    submitted: "2 hours ago",
    transactionCount: 42,
    nodeOverview: {
      name: "Atlas-02",
      poolManager: "ValidatorX",
      region: "🇪🇺",
      uptime: 98.9,
      totalStaked: "12,200,000",
      availableCapacity: "7,800,000",
      totalFees: "13%",
      apr: "9.8%",
    },
  },
  // 8. Shared - Rejected
  "VAL-2024-1840": {
    id: "VAL-2024-1840",
    walletAddress: "0x742d...9c4a",
    type: "shared",
    status: "rejected",
    balance: "125,000,000 KROWN",
    staked: "125,000,000 KROWN",
    submitted: "2 hours ago",
    transactionCount: 42,
    nodeOverview: {
      name: "Atlas-03",
      poolManager: "ValidatorX",
      region: "🇸🇬",
      uptime: 99.9,
      totalStaked: "19,900,000",
      availableCapacity: "100,000",
      totalFees: "13%",
      apr: "10.5%",
    },
  },
};

// Eligibility Check Item Component
const EligibilityCheckItem = ({
  label,
  passed,
}: {
  label: string;
  passed: boolean;
}) => (
  <div className="flex items-center justify-between px-4 py-5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl">
    <div className="flex items-center gap-3">
      <CheckCircleIcon className="text-[#0E966F]" size={20} />
      <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
        {label}
      </span>
    </div>
    <div
      className={`w-2 h-2 rounded-full ${passed ? "bg-[#0E966F]" : "bg-red-500"}`}
    />
  </div>
);

// Service Summary Row Component
const ServiceSummaryRow = ({
  label,
  value,
  icon,
  hasBorder = true,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  hasBorder?: boolean;
}) => (
  <div
    className={`flex items-center justify-between py-1.5 ${hasBorder ? "border-b border-[rgba(255,255,255,0.1)]" : ""}`}
  >
    <span className="font-vietnam font-normal text-base leading-5 tracking-[-0.15px] text-[#AAB3D0]">
      {label}
    </span>
    <div className="flex items-center gap-1">
      {icon}
      <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.15px] text-white text-right">
        {value}
      </span>
    </div>
  </div>
);

// Detail Item Component
const DetailItem = ({
  label,
  value,
  showCopy = false,
  showWalletIcon = false,
}: {
  label: string;
  value: string;
  showCopy?: boolean;
  showWalletIcon?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <span className="font-vietnam font-normal text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
      {label}
    </span>
    <div className="flex items-center gap-2">
      {showWalletIcon && <WalletIcon size={16} />}
      <span className="font-grotesk font-medium text-base leading-6 tracking-[-0.3125px] text-white">
        {value}
      </span>
      {showCopy && (
        <button className="opacity-23 hover:opacity-50 transition-opacity">
          <CopyIcon size={20} />
        </button>
      )}
    </div>
  </div>
);

export default function ApplicationReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap params using React.use()
  const { id } = use(params);

  // Get application data (in real app, fetch from API)
  const application = mockApplications[id] || mockApplications["VAL-2024-1847"];
  console.log(application);

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/applications"
          className="text-white hover:opacity-70 transition-opacity"
        >
          <BackArrowIcon size={20} />
        </Link>
        <h1 className="font-vietnam font-medium text-xl leading-7.5 tracking-[-0.45px] text-white">
          Application Review
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6">
        {/* Shared Node Overview (only for shared type) */}
        {application.type === "shared" && application.nodeOverview && (
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
            <h2 className="font-vietnam font-medium text-lg leading-6.75 tracking-[-0.44px] text-white mb-4">
              Node Overview
            </h2>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">
                {application.nodeOverview.region}
              </span>
              <span className="font-vietnam font-medium text-base leading-7 tracking-[-0.44px] text-white">
                {application.nodeOverview.name}
              </span>
              <div className="flex items-center gap-1 ml-auto">
                <span className="px-2 py-0.5 bg-[#331D69] rounded-lg flex items-center gap-1">
                  <SharedIcon className="text-[#966DFF]" size={12} />
                  <span className="font-vietnam font-medium text-xs leading-4 text-[#966DFF]">
                    Shared Node
                  </span>
                </span>
                <span className="px-2 py-0.5 bg-[rgba(14,150,111,0.2)] rounded-lg font-vietnam font-medium text-xs leading-4 text-[#00C48C]">
                  Active
                </span>
              </div>
            </div>
            <p className="font-vietnam font-medium text-sm leading-6 tracking-[-0.44px] text-[#AAB3D0] mb-4">
              Pool Manager: {application.nodeOverview.poolManager}
            </p>

            <div className="border-t border-[rgba(255,255,255,0.1)] pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="flex flex-col gap-1.5">
                  <span className="font-vietnam font-normal text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                    Uptime
                  </span>
                  <div className="flex items-center gap-1.5">
                    <UptimeIcon className="text-[#00C48C]" />
                    <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
                      {application.nodeOverview.uptime}%
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-vietnam font-normal text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                    Total Staked
                  </span>
                  <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
                    {application.nodeOverview.totalStaked}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-vietnam font-normal text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                    Available Capacity
                  </span>
                  <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
                    {application.nodeOverview.availableCapacity}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-vietnam font-normal text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                    Total Fees
                  </span>
                  <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
                    {application.nodeOverview.totalFees}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-vietnam font-normal text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                    APR
                  </span>
                  <span className="font-grotesk font-medium text-base leading-5 tracking-[-0.3125px] text-white">
                    {application.nodeOverview.apr}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Application Details Card */}
        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="font-vietnam font-medium text-lg leading-6.75 tracking-[-0.44px] text-white">
              Application Details
            </h2>
            <span className="font-grotesk font-medium text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
              {application.id}
            </span>
          </div>

          {/* Details Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${application.type === "self-hosted" ? 2 : 3} gap-x-6 gap-y-5`}
          >
            <DetailItem
              label="Wallet Address"
              value={application.walletAddress}
              showCopy
              showWalletIcon
            />
            <DetailItem
              label="Validator Type"
              value={
                application.type === "self-hosted"
                  ? "Self-Hosted"
                  : application.type === "managed"
                    ? "Managed"
                    : "Shared"
              }
            />
            {application.type === "managed" || application.type === "shared" ? (
              <DetailItem
                label="Transaction count"
                value={String(application.transactionCount)}
              />
            ) : null}
            <DetailItem
              label={
                application.type === "self-hosted" ? "Balance" : "Stake locked"
              }
              value={application.staked}
            />
            <DetailItem label="Submitted" value={application.submitted} />
          </div>
        </div>

        {/* Self-Hosted: Eligibility Checks */}
        {application.type === "self-hosted" &&
          application.eligibilityChecks && (
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
              <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white mb-5">
                Eligibility Checks
              </h2>

              <div className="flex flex-col gap-3">
                <EligibilityCheckItem
                  label="Wallet Connected"
                  passed={application.eligibilityChecks.walletConnected}
                />
                <EligibilityCheckItem
                  label="Balance ≥ 100M KROWN"
                  passed={application.eligibilityChecks.balanceCheck}
                />
                <EligibilityCheckItem
                  label={`Wallet Age (${application.eligibilityChecks.walletAge} days)`}
                  passed={application.eligibilityChecks.walletAge >= 30}
                />
                <EligibilityCheckItem
                  label={`Transaction History (${application.eligibilityChecks.transactionHistory.toLocaleString()})`}
                  passed={
                    application.eligibilityChecks.transactionHistory >= 100
                  }
                />
              </div>
            </div>
          )}

        {/* Self-Hosted: Validator Key */}
        {application.type === "self-hosted" && application.validatorKey && (
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
            <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white mb-4">
              Validator Key
            </h2>

            <div className="flex items-center justify-between px-4 py-5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl">
              <div className="flex items-center gap-3">
                <KeyIcon className="text-[#0E966F]" size={20} />
                <div className="flex flex-col">
                  <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
                    {application.validatorKey.filename}
                  </span>
                  <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-[#94A3B8]">
                    Uploaded and verified
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-[#183F34] border border-[rgba(14,150,111,0.2)] rounded-lg flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#0E966F] rounded-full" />
                  <span className="font-vietnam font-medium text-xs leading-6 tracking-[-0.3125px] text-[#0E966F]">
                    Valid
                  </span>
                </span>

                <button className="px-2 py-0.5 bg-[#181A25] border border-[rgba(255,255,255,0.2)] rounded-lg flex items-center gap-1 hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                  <DownloadIcon className="text-[#AAB3D0]" size={16} />
                  <span className="font-vietnam font-medium text-xs leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                    Download Key
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Managed: Service Summary */}
        {application.type === "managed" && application.serviceSummary && (
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
            <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white mb-5">
              Service Summary
            </h2>

            <div className="flex flex-col">
              <ServiceSummaryRow
                label="Infrastructure"
                value={application.serviceSummary.infrastructure}
                icon={<ManagedIcon className="text-white" size={16} />}
              />
              <ServiceSummaryRow
                label="Fee"
                value={application.serviceSummary.fee}
              />
              <ServiceSummaryRow
                label="Unbonding"
                value={application.serviceSummary.unbonding}
                hasBorder={false}
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
          <Link
            href="/admin/applications"
            className="flex items-center justify-center px-4 py-3 rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            Back to Applications
          </Link>
          <button className="flex items-center justify-center px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors">
            Reject Application
          </button>
          <button className="flex items-center justify-center px-4.5 py-3 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-[#0D8763] transition-colors">
            Approve Application
          </button>
        </div>
      </div>
    </div>
  );
}
