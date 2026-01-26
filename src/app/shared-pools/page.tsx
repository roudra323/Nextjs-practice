"use client";

import { SharedPoolsContent } from "@/components/sections";

export default function SharedPoolsPage() {
  const handleViewAndJoin = (poolId: string) => {
    console.log(`Navigating to pool: ${poolId}`);
    // TODO: Navigate to pool detail/staking page
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <SharedPoolsContent onViewAndJoin={handleViewAndJoin} />
    </div>
  );
}
