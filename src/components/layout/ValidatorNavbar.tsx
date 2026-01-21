"use client";

import { Bell, Menu } from "lucide-react";

interface ValidatorNavbarProps {
  onMenuClick?: () => void;
}

export default function ValidatorNavbar({ onMenuClick }: ValidatorNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 sm:h-16 bg-[#0C0E19] border-b border-[rgba(255,255,255,0.14)] z-50">
      <div className="flex items-center justify-between h-full px-4 sm:px-7">
        {/* Left - Mobile Menu Button + Title */}
        <div className="flex items-center gap-3 lg:w-63.75">
          {/* Mobile menu button - only visible on mobile */}
          <button
            onClick={onMenuClick}
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-[#1F222B] border border-[#3A3A3A] rounded-xl hover:bg-[#2a2d38] transition-colors"
          >
            <Menu className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
          <h1 className="font-vietnam font-medium text-sm sm:text-xl leading-7.5 tracking-[-0.45px] text-white">
            Validator Portal
          </h1>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notification Bell */}
          <button className="flex items-center justify-center w-9 h-9 sm:w-10.5 sm:h-10.5 bg-[#1F222B] border border-[#3A3A3A] rounded-xl hover:bg-[#2a2d38] transition-colors">
            <Bell
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              strokeWidth={1.5}
            />
          </button>

          {/* Node Setup Instruction Button - hidden on small screens */}
          <button className="hidden md:flex items-center justify-center px-3 lg:px-4.5 py-2 gap-1.5 bg-[#0E966F] rounded-xl shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] hover:opacity-90 transition-opacity">
            <span className="font-vietnam font-medium text-sm lg:text-base leading-6 tracking-[-0.3125px] text-white text-center">
              Node Setup Instruction
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
