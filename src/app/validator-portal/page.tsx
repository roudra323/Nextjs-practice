import {
  ApplicationBanner,
  ValidatorQualifiedBanner,
  ValidatorIdentityStatus,
  OperationalHealth,
  StakeHoldings,
  RewardsPerformance,
  NodePerformanceOverview,
} from "@/components";

export default function ValidatorPortalPage() {
  return (
    <div className="flex flex-col gap-6 p-5 max-auto">
      {/* Warning Banner */}
      <ApplicationBanner />

      {/* Qualified Banner */}
      <ValidatorQualifiedBanner />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <ValidatorIdentityStatus />

        {/* Right Column */}
        <OperationalHealth />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <StakeHoldings />

        {/* Right Column */}
        <RewardsPerformance />
      </div>

      {/* Node Performance Overview - Full Width */}
      <NodePerformanceOverview />
    </div>
  );
}
