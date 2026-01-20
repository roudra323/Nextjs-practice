"use client";

import { useState } from "react";
import { WalletModal } from "../modals";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="max-w-[1232px] mx-auto h-12 flex items-center justify-between px-4 mt-6">
          {/* Logo */}
          <div className="font-bold text-2xl leading-6 tracking-[-0.02em]">
            <span className="text-[#0E966F]">K</span>
            <span className="text-[#F9FFFD]"> Launchpad</span>
          </div>

          {/* Connect Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center px-4.5 py-2 gap-1.5 bg-[#0E966F] rounded-xl shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] hover:opacity-90 transition-opacity"
          >
            <span className="font-medium text-base leading-[150%] text-white">
              Connect
            </span>
          </button>
        </nav>
      </header>

      {/* Wallet Modal */}
      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
