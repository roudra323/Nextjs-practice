"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import WalletModal from "../modals/WalletModal";
import { WalletInfoModal } from "../modals";
import { useState } from "react";
import { WalletIcon } from "../icons";

interface WalletConnectButtonProps {
  className?: string;
}

export function WalletConnectButton({ className }: WalletConnectButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  return (
    <>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
              className={className}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      type="button"
                      className="flex items-center justify-center px-3 sm:px-4.5 py-1.5 sm:py-2 gap-1.5 bg-[#0E966F] rounded-xl shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      <span className="font-medium font-vietnam text-sm sm:text-base leading-[150%] text-white">
                        Connect
                      </span>
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="flex items-center justify-center px-3 sm:px-4.5 py-1.5 sm:py-2 gap-1.5 bg-red-500 rounded-xl hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      <span className="font-medium text-sm sm:text-base leading-[150%] text-white">
                        Wrong network
                      </span>
                    </button>
                  );
                }

                return (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsInfoModalOpen(true)}
                      type="button"
                      className="flex items-center gap-2 px-3 sm:px-4 h-9 sm:h-10.5 bg-[#1F222B] border border-[#3A3A3A] rounded-xl cursor-pointer"
                    >
                      <WalletIcon />
                      <span className="font-grotesk font-medium text-sm sm:text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                        {account.displayName}
                      </span>
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>

      {/* Wallet Modal */}
      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <WalletInfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />
    </>
  );
}

// Also export the default RainbowKit ConnectButton for simpler use cases
export { ConnectButton } from "@rainbow-me/rainbowkit";
