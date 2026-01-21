"use client";

import { useState } from "react";
import {
  QastleIcon,
  MetaMaskIcon,
  WalletConnectIcon,
  CoinbaseIcon,
  InfoIcon,
  CheckIcon,
  CloseIcon,
} from "../icons";

interface WalletOption {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  isConnected?: boolean;
}

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const wallets: WalletOption[] = [
    {
      id: "qastle",
      name: "Qastle Wallet",
      description: "Connect to your Qastle wallet",
      icon: <QastleIcon />,
      isConnected: true,
    },
    {
      id: "metamask",
      name: "MetaMask",
      description: "Connect to your MetaMask wallet",
      icon: <MetaMaskIcon />,
    },
    {
      id: "walletconnect",
      name: "WalletConnect",
      description: "Scan with WalletConnect to connect",
      icon: <WalletConnectIcon />,
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      description: "Connect to your Coinbase wallet",
      icon: <CoinbaseIcon />,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 ">
      <div className="relative w-full max-w-lg bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-2xl sm:rounded-[24px] overflow-hidden">
        {/* Glow effect */}
        <div className="absolute w-[486.25px] h-[376.09px] -left-[144.35px] -top-[156.04px] bg-white mix-blend-overlay blur-[61.22px] rotate-30" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-[17px] right-3 sm:right-[17px] w-4 h-4 opacity-70 hover:opacity-100 transition-opacity z-20 rounded-[2px]"
        >
          <CloseIcon />
        </button>

        {/* Header */}
        <div className="relative px-4 sm:px-6 pt-5 sm:pt-6 pb-3 flex flex-col gap-2 z-10">
          <h2 className="font-semibold text-base sm:text-[18px] leading-4.5 tracking-[-0.44px] text-white">
            Connect a wallet
          </h2>
          <p className="font-medium text-[13px] sm:text-[14px] leading-5 tracking-[-0.15px] text-[#AAB3D0]">
            Choose a wallet to connect to Krown DEX
          </p>
        </div>

        {/* Wallet options */}
        <div className="relative px-4 sm:px-6 pb-4 flex flex-col gap-2 sm:gap-3 z-10">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => setSelectedWallet(wallet.id)}
              className={`relative flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 w-full rounded-xl sm:rounded-[14px] border transition-all isolate ${
                wallet.isConnected
                  ? "bg-white/10 border-white/10"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex flex-row items-center gap-3 sm:gap-4">
                {/* Icon container */}
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#34394D] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-lg sm:rounded-xl">
                  {wallet.icon}
                </div>

                {/* Wallet info */}
                <div className="flex flex-col items-start">
                  <span className="font-medium text-[14px] sm:text-[16px] leading-5 tracking-[-0.15px] text-white">
                    {wallet.name}
                  </span>
                  <span className="font-medium text-[12px] sm:text-[14px] leading-5 tracking-[-0.15px] text-[#AAB3D0] text-left">
                    {wallet.description}
                  </span>
                </div>
              </div>

              {/* Connected indicator */}
              {wallet.isConnected && (
                <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-1">
                  <CheckIcon />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Footer info */}
        <div className="relative mx-4 sm:mx-6 mb-4 sm:mb-6 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl sm:rounded-[14px] isolate z-10">
          <InfoIcon />
          <p className="font-normal text-[12px] sm:text-[14px] leading-5 tracking-[-0.15px] text-[#AAB3D0] text-center">
            You will be asked to sign a message.
          </p>
        </div>
      </div>
    </div>
  );
}
