"use client";

import { PoolManagementContent } from "@/components/sections";

export default function PoolManagementPage() {
  const handleCreatePool = () => {
    console.log("Opening create pool flow...");
    // TODO: Navigate to create pool page or open modal
  };

  const handleCreateSharedNode = () => {
    console.log("Opening create shared node flow...");
    // TODO: Navigate to create shared node page or open modal
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <PoolManagementContent
        onCreatePool={handleCreatePool}
        onCreateSharedNode={handleCreateSharedNode}
      />
    </div>
  );
}
