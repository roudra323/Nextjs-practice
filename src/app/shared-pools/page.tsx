"use client";

import { useState } from "react";
import { SharedPoolsContent } from "@/components/sections";
import { StakePoolModal } from "@/components/modals";

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

  const handleViewAndJoin = (poolId: string) => {
    const pool = poolsData[poolId];
    if (pool) {
      setSelectedPool(pool);
      setIsModalOpen(true);
    }
  };

  const handleStake = (amount: string) => {
    console.log(`Staking ${amount} KROWN to pool: ${selectedPool?.name}`);
    setIsModalOpen(false);
    // TODO: Handle actual staking logic
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
    </div>
  );
}
