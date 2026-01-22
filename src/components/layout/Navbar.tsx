"use client";

import { WalletConnectButton } from "../wallet";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 justify-between">
      <nav className="mx-auto h-12 flex items-center justify-between px-4 sm:px-6 mt-4 sm:mt-6">
        {/* Logo */}
        <div className="font-bold text-xl sm:text-2xl leading-6 tracking-[-0.02em]">
          <span className="text-[#0E966F]">K</span>
          <span className="text-[#F9FFFD]"> Launchpad</span>
        </div>

        {/* Connect Button */}
        <WalletConnectButton />
      </nav>
    </header>
  );
}
