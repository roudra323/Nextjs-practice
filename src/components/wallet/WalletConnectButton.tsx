"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import WalletModal from "../modals/WalletModal";
import { WalletInfoModal } from "../modals";
import { useState } from "react";

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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <path
                          d="M14.6667 5.33333V4C14.6667 2.66667 13.6667 1.66667 12.3333 1.66667H3.66667C2.33333 1.66667 1.33333 2.66667 1.33333 4V12C1.33333 13.3333 2.33333 14.3333 3.66667 14.3333H12.3333C13.6667 14.3333 14.6667 13.3333 14.6667 12V10.6667"
                          stroke="#00C48C"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.6667 5.33333H11.3333C10 5.33333 9.33333 6 9.33333 7.33333V8.66667C9.33333 10 10 10.6667 11.3333 10.6667H14.6667V5.33333Z"
                          stroke="#00C48C"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
