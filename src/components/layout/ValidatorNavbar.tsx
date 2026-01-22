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
        <div className="flex items-center gap-3 lg:w-[255px]">
          {/* Mobile menu button - only visible on mobile */}
          <button
            onClick={onMenuClick}
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-[#1F222B] border border-[#3A3A3A] rounded-xl hover:bg-[#2a2d38] transition-colors"
          >
            <Menu className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
          <h1 className="font-vietnam font-medium text-sm sm:text-xl leading-[30px] tracking-[-0.45px] text-white">
            Validator Portal
          </h1>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notification Bell */}
          <button className="flex items-center justify-center w-9 h-9 sm:w-[42px] sm:h-[42px] bg-[#1F222B] border border-[#3A3A3A] rounded-xl hover:bg-[#2a2d38] transition-colors">
            <Bell
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              strokeWidth={1.5}
            />
          </button>

          {/* Node Setup Instruction Button - hidden on small screens */}
          <button className="hidden md:flex items-center justify-center px-3 lg:px-[18px] py-2 gap-1.5 bg-[#0E966F] rounded-xl shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] hover:opacity-90 transition-opacity">
            <span className="font-vietnam font-medium text-sm lg:text-base leading-6 tracking-[-0.3125px] text-white text-center">
              Node Setup Instruction
            </span>
          </button>

          {/* Wallet Address */}
          <div className="flex items-center gap-2 px-3 sm:px-4 h-9 sm:h-[42px] bg-[#1F222B] border border-[#3A3A3A] rounded-xl">
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
              0x742d...9c4a
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
