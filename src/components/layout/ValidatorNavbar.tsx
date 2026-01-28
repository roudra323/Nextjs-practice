"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { WalletConnectButton } from "../wallet";
import { NotificationPanel, Notification, NodeSetupModal } from "../modals";
import { Notifications } from "../icons";

interface ValidatorNavbarProps {
  onMenuClick?: () => void;
}

// Sample notifications data
const sampleNotifications: Notification[] = [
  {
    id: "1",
    type: "warning",
    title: "Application Under Review",
    description:
      "We've received your application and the Krown team is reviewing...",
    time: "08:30 AM",
    isRead: true,
  },
  {
    id: "2",
    type: "success",
    title: "Application Approved",
    description: "Your application has been approved. You can move forward...",
    time: "08:30 AM",
    isRead: true,
  },
  {
    id: "3",
    type: "success",
    title: "Node Timeout",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus quisque.",
    time: "08:30 AM",
    isRead: false,
  },
  {
    id: "4",
    type: "info",
    title: "Not Eligible",
    description: "You don't meet all requirements to apply as a self-hosted...",
    time: "08:30 AM",
    isRead: false,
  },
  {
    id: "5",
    type: "success",
    title: "Eligible for Validation",
    description:
      "You meet all requirements to apply as a self-hosted validator.",
    time: "08:30 AM",
    isRead: false,
  },
  {
    id: "6",
    type: "payment",
    title: "Balance Update",
    description: "Your KROWN balance has changed. Current: 125,000,000 KRO...",
    time: "08:30 AM",
    isRead: false,
  },
];

export default function ValidatorNavbar({ onMenuClick }: ValidatorNavbarProps) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isNodeSetupOpen, setIsNodeSetupOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  return (
    <>
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
            <button
              onClick={() => setIsNotificationOpen(true)}
              className="relative flex items-center justify-center w-9 h-9 sm:w-10.5 sm:h-10.5 bg-[#1F222B] border border-[#3A3A3A] rounded-xl hover:bg-[#2a2d38] transition-colors"
            >
              <Notifications />
              {/* Notification Badge */}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-4.5 h-4.5 px-1 bg-[#0E966F] rounded-full text-white text-[10px] font-medium">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>

            {/* Node Setup Instruction Button - hidden on small screens */}
            <button
              onClick={() => setIsNodeSetupOpen(true)}
              className="hidden md:flex items-center justify-center px-3 lg:px-4.5 py-2 gap-1.5 bg-[#0E966F] rounded-xl shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] hover:opacity-90 transition-opacity"
            >
              <span className="font-vietnam font-medium text-sm lg:text-base leading-6 tracking-[-0.3125px] text-white text-center">
                Node Setup Instruction
              </span>
            </button>

            {/* Wallet Address */}
            {/* Connect Button */}
            <WalletConnectButton />
          </div>
        </div>
      </header>

      {/* Notification Panel */}
      <NotificationPanel
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        notifications={notifications}
        unreadCount={unreadCount}
        onMarkAllRead={handleMarkAllRead}
      />

      {/* Node Setup Modal */}
      <NodeSetupModal
        isOpen={isNodeSetupOpen}
        onClose={() => setIsNodeSetupOpen(false)}
      />
    </>
  );
}
