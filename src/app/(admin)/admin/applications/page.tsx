"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SearchIcon,
  FilterDropdownIcon,
  SelfHostedIcon,
  ManagedIcon,
  SharedIcon,
  ReviewIcon,
  CopyIcon,
} from "@/components/icons";

// Application status types
type ApplicationStatus = "pending" | "approved" | "rejected";
type ValidatorType = "self-hosted" | "managed" | "shared";

interface ValidatorApplication {
  id: string;
  walletAddress: string;
  type: ValidatorType;
  stakeAmount: string;
  status: ApplicationStatus;
  submittedTime: string;
  nodeStatus?: string;
}

// Sample data
const sampleApplications: ValidatorApplication[] = [
  // 1. Self Hosted - Pending
  {
    id: "VAL-2024-1847",
    walletAddress: "0x742d...9c4a",
    type: "self-hosted",
    stakeAmount: "125M KROWN",
    status: "pending",
    submittedTime: "2 hours ago",
  },
  // 2. Self Hosted - Pending (Duplicate scenario in screenshot)
  {
    id: "VAL-2024-1846",
    walletAddress: "0x742d...9c4a",
    type: "self-hosted",
    stakeAmount: "125M KROWN",
    status: "pending",
    submittedTime: "2 hours ago",
  },
  // 3. Managed - Approved (Node Not Assigned)
  {
    id: "VAL-2024-1845",
    walletAddress: "0x742d...9c4a",
    type: "managed",
    stakeAmount: "125M KROWN",
    status: "approved",
    submittedTime: "2 hours ago",
    nodeStatus: "Node Not Assigned",
  },
  // 4. Managed - Pending
  {
    id: "VAL-2024-1844",
    walletAddress: "0x742d...9c4a",
    type: "managed",
    stakeAmount: "125M KROWN",
    status: "pending",
    submittedTime: "2 hours ago",
  },
  // 5. Managed - Approved (Node Provisioned)
  {
    id: "VAL-2024-1843",
    walletAddress: "0x742d...9c4a",
    type: "managed",
    stakeAmount: "125M KROWN",
    status: "approved",
    submittedTime: "2 hours ago",
    nodeStatus: "Node Provisioned",
  },
  // 6. Shared - Rejected
  {
    id: "VAL-2024-1842",
    walletAddress: "0x742d...9c4a",
    type: "shared",
    stakeAmount: "125M KROWN",
    status: "rejected",
    submittedTime: "2 hours ago",
  },
  // 7. Shared - Rejected
  {
    id: "VAL-2024-1841",
    walletAddress: "0x742d...9c4a",
    type: "shared",
    stakeAmount: "125M KROWN",
    status: "rejected",
    submittedTime: "2 hours ago",
  },
  // 8. Shared - Rejected
  {
    id: "VAL-2024-1840",
    walletAddress: "0x742d...9c4a",
    type: "shared",
    stakeAmount: "125M KROWN",
    status: "rejected",
    submittedTime: "2 hours ago",
  },
];

// Status Badge Component
const StatusBadge = ({ status }: { status: ApplicationStatus }) => {
  const statusStyles = {
    pending: "bg-[rgba(212,175,55,0.2)] text-[#F4CD4D]",
    approved: "bg-[rgba(14,150,111,0.2)] text-[#0E966F]",
    rejected: "bg-[rgba(251,44,54,0.2)] text-[#FF5C16]",
  };

  const statusLabels = {
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-0.5 rounded-lg font-vietnam font-medium text-xs leading-4 ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
};

// Type Badge Component
const TypeBadge = ({ type }: { type: ValidatorType }) => {
  const typeConfig = {
    "self-hosted": {
      bg: "bg-[#44370E] border-[rgba(212,175,55,0.37)]",
      text: "text-[#F4CD4D]",
      icon: <SelfHostedIcon className="text-[#F4CD4D]" />,
      label: "Self Hosted",
    },
    managed: {
      bg: "bg-[#163333] border-[rgba(0,196,140,0.37)]",
      text: "text-[#00C48C]",
      icon: <ManagedIcon className="text-[#00C48C]" />,
      label: "Managed",
    },
    shared: {
      bg: "bg-[#331D69] border-[rgba(150,109,255,0.37)]",
      text: "text-[#966DFF]",
      icon: <SharedIcon className="text-[#966DFF]" />,
      label: "Shared",
    },
  };

  const config = typeConfig[type];

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg border ${config.bg} ${config.text}`}
    >
      {config.icon}
      <span className="font-vietnam font-medium text-xs leading-4">
        {config.label}
      </span>
    </span>
  );
};

// Node Status Badge
const NodeStatusBadge = ({ status }: { status: string }) => {
  const isProvisioned = status === "Node Provisioned";

  return (
    <span
      className={`flex w-full items-center justify-center px-2 py-0.5 rounded-lg font-vietnam font-medium text-xs leading-4  ${
        isProvisioned
          ? "bg-[#331D69] text-[#966DFF]"
          : "bg-[rgba(170,179,208,0.1)] text-[#AAB3D0]"
      }`}
    >
      {status}
    </span>
  );
};

export default function AdminApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [applications] = useState<ValidatorApplication[]>(sampleApplications);

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Main Container */}
      <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
          <h1 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white">
            Validator Applications
          </h1>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            {/* Filter Button */}
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-white">
                All
              </span>
              <FilterDropdownIcon className="text-white opacity-50" />
            </button>

            {/* Search Input */}
            <div className="relative flex-1 sm:flex-none">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon className="text-[rgba(170,179,208,0.4)]" />
              </div>
              <input
                type="text"
                placeholder="Search ."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-[278px] h-9 pl-9 pr-4 bg-[#242630] border border-[rgba(255,255,255,0.1)] rounded-xl font-vietnam font-normal text-sm text-white placeholder:text-[#AAB3D0] focus:outline-none focus:border-[rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.1)]">
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Application ID
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Wallet
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Type
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Stake Amount
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Status
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Submitted
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {applications.map((app, index) => (
                <tr
                  key={app.id + index}
                  className="border-b border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                >
                  {/* Application ID */}
                  <td className="py-4 px-2">
                    <div className="inline-flex flex-col gap-2 items-start">
                      {/* Wrapper that defines the width */}
                      <div className="inline-block space-y-1">
                        <span className="block font-vietnam font-medium text-sm leading-5 text-[rgba(255,255,255,0.8)]">
                          {app.id}
                        </span>

                        {app.nodeStatus && (
                          <NodeStatusBadge status={app.nodeStatus} />
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Wallet */}
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <span className="font-vietnam font-medium text-sm leading-5 text-[#AAB3D0]">
                        {app.walletAddress}
                      </span>
                      <button
                        onClick={() => handleCopyAddress(app.walletAddress)}
                        className="hover:opacity-70 transition-opacity"
                      >
                        <CopyIcon size={16} />
                      </button>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-4 px-2">
                    <TypeBadge type={app.type} />
                  </td>

                  {/* Stake Amount */}
                  <td className="py-4 px-2">
                    <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[rgba(255,255,255,0.8)]">
                      {app.stakeAmount}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-2">
                    <StatusBadge status={app.status} />
                  </td>

                  {/* Submitted */}
                  <td className="py-4 px-2">
                    <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[rgba(255,255,255,0.8)]">
                      {app.submittedTime}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-2">
                    <Link
                      href={`/admin/applications/${app.id}`}
                      className="flex items-center gap-2 text-[#0E966F] hover:opacity-80 transition-opacity"
                    >
                      <ReviewIcon className="text-[#0E966F]" />
                      <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px]">
                        Review
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
