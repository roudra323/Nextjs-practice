"use client";

import { ValidatorOptionCard } from "@/components/cards";
import { ShieldIcon, ServerIcon, UsersIcon } from "../../components/icons";
export default function BecomeValidatorPage() {
  const handleApply = (type: string) => {
    console.log(`Applying as ${type} validator`);
    // Add your application logic here
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 pt-6 px-6">
        <h1 className="font-vietnam font-medium text-3xl leading-6 tracking-[-0.31px] text-white text-center">
          Choose Your Validator Path
        </h1>
        <p className="font-vietnam font-medium text-base leading-[30px] tracking-[-0.04em] text-[#AAB3D0] text-center max-w-xl">
          Select the option that best matches your stake and technical
          expertise.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-6 mt-12 pb-10">
        {/* Self-Hosted Validator Card */}
        <ValidatorOptionCard
          title="Self-Hosted"
          icon={<ServerIcon />}
          iconBgColor=""
          requiredStake="100,000,000 KROWN"
          details={[
            {
              label: "Your Balance",
              value: "128,450,230 KROWN",
            },
            {
              label: "Eligibility",
              value: "Eligible",
              isEligible: true,
            },
          ]}
          fees="0%"
          description=""
          buttonText="Apply as Self-Hosted Validator"
          onApply={() => handleApply("Self-Hosted")}
        />

        {/* Managed Validator Card */}
        <ValidatorOptionCard
          title="Managed Validator"
          icon={<ShieldIcon />}
          iconBgColor=""
          requiredStake="100,000,000 KROWN"
          details={[
            {
              label: "Infrastructure",
              value: "Managed by Krown",
            },
          ]}
          fees="10%"
          description=""
          buttonText="Apply as Managed Validator"
          onApply={() => handleApply("Managed")}
        />

        {/* Shared Node Pool Card */}
        <ValidatorOptionCard
          title="Shared Node Pool"
          icon={<UsersIcon />}
          iconBgColor=""
          requiredStake="10,000 KROWN"
          details={[
            {
              label: "Available Nodes",
              value: "8",
            },
          ]}
          fees="13%"
          description=""
          buttonText="Join a Shared Pool"
          onApply={() => handleApply("Shared Pool")}
        />
      </div>
    </div>
  );
}
