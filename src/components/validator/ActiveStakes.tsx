"use client";

import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { UnstakeModal, UnstakeDetailsModal } from "../modals";

interface StakeRecord {
  id: string;
  amount: string;
  amountValue: number;
  startDate: string;
  endDate: string;
  countdown: string;
}

interface UnstakeDetails {
  amount: number;
  unbondingStartDate: string;
  unbondingEndDate: string;
  timeRemaining: string;
}

// Sample mock data
const sampleStakes: StakeRecord[] = [
  {
    id: "1",
    amount: "10,000 KROWN",
    amountValue: 10000,
    startDate: "12 Dec, 2025",
    endDate: "12 Dec, 2025",
    countdown: "12 days",
  },
  {
    id: "2",
    amount: "10,000 KROWN",
    amountValue: 10000,
    startDate: "12 Dec, 2025",
    endDate: "12 Dec, 2025",
    countdown: "12 days",
  },
  {
    id: "3",
    amount: "10,000 KROWN",
    amountValue: 10000,
    startDate: "12 Dec, 2025",
    endDate: "12 Dec, 2025",
    countdown: "12 days",
  },
  {
    id: "4",
    amount: "10,000 KROWN",
    amountValue: 10000,
    startDate: "12 Dec, 2025",
    endDate: "12 Dec, 2025",
    countdown: "12 days",
  },
  {
    id: "5",
    amount: "10,000 KROWN",
    amountValue: 10000,
    startDate: "12 Dec, 2025",
    endDate: "12 Dec, 2025",
    countdown: "12 days",
  },
  {
    id: "6",
    amount: "10,000 KROWN",
    amountValue: 10000,
    startDate: "12 Dec, 2025",
    endDate: "12 Dec, 2025",
    countdown: "12 days",
  },
  {
    id: "7",
    amount: "10,000 KROWN",
    amountValue: 10000,
    startDate: "12 Dec, 2025",
    endDate: "12 Dec, 2025",
    countdown: "12 days",
  },
];

export default function ActiveStakes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStake, setSelectedStake] = useState<StakeRecord | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [unstakeDetails, setUnstakeDetails] = useState<UnstakeDetails | null>(
    null,
  );

  const filteredStakes = sampleStakes.filter(
    (stake) =>
      stake.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stake.startDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stake.endDate.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleUnstakeClick = (stake: StakeRecord) => {
    setSelectedStake(stake);
    setIsModalOpen(true);
  };

  const handleUnstakeConfirm = (amount: number) => {
    console.log("Unstaking", amount, "KROWN from stake:", selectedStake?.id);

    // Close the first modal
    setIsModalOpen(false);
    setSelectedStake(null);

    // Calculate dates (21 days unbonding period)
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 21);

    const formatDate = (date: Date) => {
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "short" });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    };

    // Set details and open details modal
    setUnstakeDetails({
      amount,
      unbondingStartDate: formatDate(today),
      unbondingEndDate: formatDate(endDate),
      timeRemaining: "20 days 14 hours",
    });
    setIsDetailsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStake(null);
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setUnstakeDetails(null);
  };

  return (
    <>
      <div className="flex flex-col w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl p-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
          <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white">
            Active Stakes
          </h2>

          {/* Search Input */}
          <div className="relative w-full sm:w-69.5">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgba(170,179,208,0.4)]">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Search ."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 pl-9 pr-4 py-3 bg-[#242630] border border-[rgba(255,255,255,0.1)] rounded-xl font-vietnam font-normal text-sm leading-[150%] text-[#AAB3D0] placeholder:text-[#AAB3D0] focus:outline-none focus:border-[rgba(255,255,255,0.2)]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-175">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.1)]">
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Amount
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Start Date
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  End Date
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Countdown
                </th>
                <th className="text-left py-2.5 px-2 font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStakes.map((stake) => (
                <tr
                  key={stake.id}
                  className="border-b border-[rgba(255,255,255,0.1)]"
                >
                  <td className="py-4 px-2">
                    <span className="font-grotesk font-medium text-sm leading-5 text-[rgba(255,255,255,0.8)]">
                      {stake.amount}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <span className="font-grotesk font-medium text-sm leading-5 text-white">
                      {stake.startDate}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <span className="font-grotesk font-medium text-sm leading-5 text-white">
                      {stake.endDate}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <span className="font-grotesk font-medium text-sm leading-5 text-white">
                      {stake.countdown}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <button
                      onClick={() => handleUnstakeClick(stake)}
                      className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                    >
                      <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#FE5058]">
                        Unstake
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-[#FE5058]"
                        strokeWidth={1.5}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStakes.length === 0 && (
            <div className="flex justify-center items-center py-10">
              <span className="font-vietnam text-sm text-[#AAB3D0]">
                No stakes found
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Unstake Modal */}
      <UnstakeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onUnstake={handleUnstakeConfirm}
        stake={selectedStake}
      />

      {/* Unstake Details Modal */}
      <UnstakeDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={handleCloseDetailsModal}
        unstakeAmount={unstakeDetails?.amount || 0}
        unbondingStartDate={unstakeDetails?.unbondingStartDate || ""}
        unbondingEndDate={unstakeDetails?.unbondingEndDate || ""}
        timeRemaining={unstakeDetails?.timeRemaining || ""}
      />
    </>
  );
}
