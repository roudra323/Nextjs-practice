"use client";

import { useState } from "react";
import { EligibilityCheckModal } from "@/components/modals";
import {
  HowItWorks,
  ValidatorSelection,
  ValidatorApplicationForm,
} from "@/components/sections";

type PageView = "select" | "how-it-works" | "application-form";

// Mock eligibility data
const eligibilityData = [
  {
    number: 1,
    title: "Wallet Connected",
    value: "0x742d...9c4a",
    isPassed: true,
  },
  {
    number: 2,
    title: "Balance ≥ 100M KROWN",
    value: "Current: 125,000,000 KROWN",
    isPassed: true,
  },
  {
    number: 3,
    title: "Wallet Age",
    value: "423 days (minimum 30 days)",
    isPassed: true,
  },
  {
    number: 4,
    title: "Transaction History",
    value: "1,847 transactions (minimum 5)",
    isPassed: true,
  },
];

export default function BecomeValidatorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<PageView>("select");

  const handleApply = (type: string) => {
    console.log(`Applying as ${type} validator`);

    if (type === "Self-Hosted") {
      setIsModalOpen(true);
    } else {
      console.log(`Opening application for ${type}`);
    }
  };

  const handleContinue = () => {
    setIsModalOpen(false);
    setCurrentView("how-it-works");
  };

  const handleStartOnboarding = () => {
    console.log("Starting onboarding process...");
    setCurrentView("application-form");
  };

  const handleBackFromApplication = () => {
    setCurrentView("how-it-works");
  };

  const handleContinueToNodeSetup = () => {
    console.log("Continuing to node setup...");
    // Add navigation to next step
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {currentView === "select" && <ValidatorSelection onApply={handleApply} />}
      {currentView === "how-it-works" && (
        <div className="px-6 py-6">
          <HowItWorks onStartOnboarding={handleStartOnboarding} />
        </div>
      )}
      {currentView === "application-form" && (
        <ValidatorApplicationForm
          onBack={handleBackFromApplication}
          onContinue={handleContinueToNodeSetup}
        />
      )}

      <EligibilityCheckModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onContinue={handleContinue}
        walletAddress="0x742d...9c4a"
        eligibilityData={eligibilityData}
      />
    </div>
  );
}
