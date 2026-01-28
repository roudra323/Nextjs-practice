"use client";

import { useState } from "react";
import { EyeIcon } from "../icons";

// Mock data for validators
const validatorsData = [
  {
    id: 1,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 99.8,
    country: "🇫🇷",
    status: "active",
  },
  {
    id: 2,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 99.8,
    country: "🇫🇷",
    status: "active",
  },
  {
    id: 3,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 99.8,
    country: "🇫🇷",
    status: "active",
  },
  {
    id: 4,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 99.8,
    country: "🇫🇷",
    status: "active",
  },
  {
    id: 5,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 99.8,
    country: "🇫🇷",
    status: "active",
  },
  {
    id: 6,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 99.8,
    country: "🇫🇷",
    status: "active",
  },
  {
    id: 7,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 97.8,
    country: "🇫🇷",
    status: "warning",
  },
  {
    id: 8,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 96.8,
    country: "🇫🇷",
    status: "warning",
  },
  {
    id: 9,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 98.8,
    country: "🇫🇷",
    status: "warning",
  },
  {
    id: 10,
    name: "Krown Foundation",
    address: "0x742d...9c4a",
    initials: "KF",
    stake: "125,000,000",
    successRate: 98.8,
    country: "🇫🇷",
    status: "warning",
  },
];

export default function ValidatorsPerformanceTable() {
  const [timePeriod, setTimePeriod] = useState<"24hrs" | "60mins">("24hrs");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = validatorsData.filter(
    (v) =>
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.address.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getSuccessRateColor = (rate: number) => {
    if (rate >= 99) return "text-[#0E966F]";
    if (rate >= 97) return "text-[#F4CD4D]";
    return "text-[#FE5058]";
  };

  const getStatusBadge = (status: string) => {
    if (status === "active") {
      return (
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-lg bg-[rgba(14,150,111,0.2)] text-[#0E966F] font-vietnam font-medium text-xs leading-4">
          Active
        </span>
      );
    }
    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-lg bg-[rgba(212,175,55,0.2)] text-[#F4CD4D] font-vietnam font-medium text-xs leading-4">
        Warning
      </span>
    );
  };

  return (
    <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
        <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white">
          Validator Performance
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          {/* Time Period Tabs */}
          <div className="relative flex items-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl h-9 p-1">
            <button
              onClick={() => setTimePeriod("24hrs")}
              className={`flex items-center justify-center px-2 py-1 h-7 rounded-lg font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] transition-colors ${
                timePeriod === "24hrs"
                  ? "bg-[#0E966F] text-white"
                  : "text-[#AAB3D0] hover:text-white"
              }`}
            >
              24 Hrs
            </button>
            <button
              onClick={() => setTimePeriod("60mins")}
              className={`flex items-center justify-center px-2 py-1 h-7 rounded-lg font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] transition-colors ${
                timePeriod === "60mins"
                  ? "bg-[#0E966F] text-white"
                  : "text-[#AAB3D0] hover:text-white"
              }`}
            >
              60 Mins
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-[280px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                  stroke="rgba(170, 179, 208, 0.4)"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 14L11.1 11.1"
                  stroke="rgba(170, 179, 208, 0.4)"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 pl-9 pr-4 bg-[#242630] border border-[rgba(255,255,255,0.1)] rounded-xl font-vietnam font-normal text-sm leading-[150%] text-white placeholder:text-[#AAB3D0] focus:outline-none focus:border-[#0E966F]"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.1)]">
              <th className="text-left py-2.5 px-2 w-[50px]">
                <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  ID
                </span>
              </th>
              <th className="text-left py-2.5 px-2">
                <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Validator Name
                </span>
              </th>
              <th className="text-left py-2.5 px-2">
                <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Stake (KROWN)
                </span>
              </th>
              <th className="text-left py-2.5 px-2">
                <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Success Rate
                </span>
              </th>
              <th className="text-left py-2.5 px-2">
                <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Country
                </span>
              </th>
              <th className="text-left py-2.5 px-2">
                <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Status
                </span>
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredData.map((validator) => (
              <tr
                key={validator.id}
                className="border-b border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.02)] transition-colors"
              >
                {/* ID */}
                <td className="py-3 px-2">
                  <span className="font-vietnam font-medium text-sm leading-5 text-[rgba(255,255,255,0.8)]">
                    {validator.id}
                  </span>
                </td>

                {/* Validator Name */}
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="flex items-center justify-center w-10 h-10 bg-[#34394D] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl">
                      <span className="font-grotesk font-bold text-[15px] leading-[19px] text-white">
                        {validator.initials}
                      </span>
                    </div>
                    {/* Name & Address */}
                    <div className="flex flex-col">
                      <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-white">
                        {validator.name}
                      </span>
                      <span className="font-vietnam font-normal text-xs leading-4 text-[#AAB3D0]">
                        {validator.address}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Stake */}
                <td className="py-3 px-2">
                  <span className="font-vietnam font-medium text-sm leading-5 text-[rgba(255,255,255,0.8)]">
                    {validator.stake}
                  </span>
                </td>

                {/* Success Rate */}
                <td className="py-3 px-2">
                  <span
                    className={`font-vietnam font-medium text-sm leading-5 ${getSuccessRateColor(
                      validator.successRate,
                    )}`}
                  >
                    {validator.successRate}%
                  </span>
                </td>

                {/* Country */}
                <td className="py-3 px-2">
                  <span className="text-xl">{validator.country}</span>
                </td>

                {/* Status */}
                <td className="py-3 px-2">
                  {getStatusBadge(validator.status)}
                </td>

                {/* Action */}
                <td className="py-3 px-2">
                  <button className="flex items-center justify-center w-4 h-4 text-[#0E966F] hover:opacity-80 transition-opacity">
                    <EyeIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="flex items-center justify-center py-12">
          <p className="font-vietnam font-medium text-base text-[#AAB3D0]">
            No validators found
          </p>
        </div>
      )}
    </div>
  );
}
