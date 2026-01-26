"use client";

import { useState } from "react";
import { PoolManagementContent } from "@/components/sections";
import {
  CreateSharedNodeModal,
  RequestPoolCreationModal,
} from "@/components/modals";

export default function PoolManagementPage() {
  const [isCreateNodeModalOpen, setIsCreateNodeModalOpen] = useState(false);
  const [isCreatePoolModalOpen, setIsCreatePoolModalOpen] = useState(false);

  const handleCreatePool = () => {
    setIsCreatePoolModalOpen(true);
  };

  const handleCreateSharedNode = () => {
    setIsCreateNodeModalOpen(true);
  };

  const handleSubmitSharedNode = (data: {
    nodeName: string;
    region: string;
  }) => {
    console.log("Creating shared node:", data);
    setIsCreateNodeModalOpen(false);
    // TODO: Handle actual node creation logic
  };

  const handleSubmitPoolRequest = (data: {
    poolName: string;
    initialCapacity: string;
    managerFee: string;
    selfStake: string;
    description: string;
  }) => {
    console.log("Submitting pool request:", data);
    setIsCreatePoolModalOpen(false);
    // TODO: Handle actual pool creation logic
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <PoolManagementContent
        onCreatePool={handleCreatePool}
        onCreateSharedNode={handleCreateSharedNode}
      />

      <CreateSharedNodeModal
        isOpen={isCreateNodeModalOpen}
        onClose={() => setIsCreateNodeModalOpen(false)}
        onSubmit={handleSubmitSharedNode}
      />

      <RequestPoolCreationModal
        isOpen={isCreatePoolModalOpen}
        onClose={() => setIsCreatePoolModalOpen(false)}
        onSubmit={handleSubmitPoolRequest}
      />
    </div>
  );
}
