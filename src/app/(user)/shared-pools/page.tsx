"use client";

import { useState } from "react";
import { SharedPoolsContent } from "@/components/sections";
import { StakePoolModal } from "@/components/modals";
import { StakeSuccessToast } from "@/components/toasts";

interface PoolData {
  id: string;
  name: string;
  manager: string;
}

// Pool data lookup
const poolsData: Record<string, PoolData> = {
  "atlas-01": { id: "atlas-01", name: "Atlas-01", manager: "ValidatorX" },
  "atlas-02": { id: "atlas-02", name: "Atlas-02", manager: "ValidatorX" },
  "atlas-03": { id: "atlas-03", name: "Atlas-03", manager: "ValidatorX" },
  "atlas-04": { id: "atlas-04", name: "Atlas-04", manager: "ValidatorX" },
};

export default function SharedPoolsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPool, setSelectedPool] = useState<PoolData | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [stakedAmount, setStakedAmount] = useState("");
  const [stakedPoolName, setStakedPoolName] = useState("");

  const handleViewAndJoin = (poolId: string) => {
    const pool = poolsData[poolId];
    if (pool) {
      setSelectedPool(pool);
      setIsModalOpen(true);
    }
  };

  const handleStake = (amount: string) => {
    console.log(`Staking ${amount} KROWN to pool: ${selectedPool?.name}`);
    setStakedAmount(amount);
    setStakedPoolName(selectedPool?.name || "");
    setIsModalOpen(false);
    setShowToast(true);
    // TODO: Handle actual staking logic
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <SharedPoolsContent onViewAndJoin={handleViewAndJoin} />

      <StakePoolModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStake={handleStake}
        pool={selectedPool}
      />

      {/* Success Toast - rendered at page level so it persists after modal closes */}
      <StakeSuccessToast
        isVisible={showToast}
        onClose={handleCloseToast}
        amount={stakedAmount}
        poolName={stakedPoolName}
      />
    </div>
  );
}
