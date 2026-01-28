"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { AdminProfileModalIcon, ClockIcon, LogoutIcon } from "../icons";

interface AdminProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef?: React.RefObject<HTMLElement | null>;
}

export default function AdminProfileModal({
  isOpen,
  onClose,
  anchorRef,
}: AdminProfileModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        anchorRef?.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Get current date/time for last login display
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div
      ref={modalRef}
      className="fixed z-[60] flex flex-col items-start p-4 gap-[9px] w-auto bg-[#030213] border border-[rgba(255,255,255,0.2)] rounded-2xl shadow-lg"
      style={{
        top: "60px",
        right: "16px",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
      >
        <X size={16} />
      </button>

      {/* Admin Info Card */}
      <div className="relative flex flex-row items-center px-[14px] mt-5 gap-2.5 w-full h-[67px] bg-[#131839] rounded-[10px]">
        {/* Avatar */}
        <div className="flex items-center justify-center w-11 h-11 bg-[#0E966F] rounded-lg">
          <span className="font-grotesk font-bold text-xl text-white">A</span>
        </div>

        {/* Name and Email */}
        <div className="flex flex-col justify-center">
          <span className="font-vietnam font-medium text-base text-white">
            Admin
          </span>
          <span className="font-vietnam font-medium text-sm text-[#AAB3D0]">
            admin@krowndex.com
          </span>
        </div>

        {/* Admin Badge */}
        <div className="absolute right-[14px] top-1/3 -translate-y-1/2 flex flex-row justify-center items-center px-2 py-0.5 gap-1 bg-[#133C39] border border-[rgba(14,150,111,0.3)] rounded-lg">
          <AdminProfileModalIcon />
          <span className="font-vietnam font-medium text-xs text-[#0E966F]">
            Admin
          </span>
        </div>
      </div>

      {/* Last Login Card */}
      <div className="flex flex-row items-center px-[14px] gap-2 w-full h-[52px] border border-[rgba(170,179,208,0.37)] rounded-[10px]">
        <ClockIcon />
        <span className="font-vietnam font-medium text-sm text-white">
          Last logging : {formattedDate} | {formattedTime}
        </span>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => {
          // Handle logout logic here
          console.log("Logout clicked");
          onClose();
        }}
        className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full h-[41px] bg-[rgba(251,44,54,0.2)] border border-[rgba(251,44,54,0.5)] rounded-lg hover:bg-[rgba(251,44,54,0.3)] transition-colors"
      >
        <LogoutIcon />
        <span className="font-vietnam font-medium text-sm tracking-[-0.15px] text-[#FE5058]">
          Logout
        </span>
      </button>
    </div>
  );
}
