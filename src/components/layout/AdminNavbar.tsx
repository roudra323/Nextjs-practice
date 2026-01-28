"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { NotificationPanel, Notification } from "../modals";
import { Notifications } from "../icons";

interface AdminNavbarProps {
  onMenuClick?: () => void;
}

// Sample admin notifications data
const sampleAdminNotifications: Notification[] = [
  {
    id: "1",
    type: "info",
    title: "New Validator Application",
    description: "A new validator application has been submitted for review.",
    time: "10:30 AM",
    isRead: false,
  },
  {
    id: "2",
    type: "warning",
    title: "Pool Request Pending",
    description: "3 pool requests are awaiting your approval.",
    time: "09:15 AM",
    isRead: false,
  },
  {
    id: "3",
    type: "success",
    title: "Node Approved",
    description: "Node #7234 has been successfully approved.",
    time: "08:45 AM",
    isRead: true,
  },
  {
    id: "4",
    type: "warning",
    title: "System Alert",
    description: "High network activity detected. Monitor closely.",
    time: "08:00 AM",
    isRead: true,
  },
];

export default function AdminNavbar({ onMenuClick }: AdminNavbarProps) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleAdminNotifications);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  return (
    <>
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
              Admin Panel
            </h1>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Notification Bell */}
            <button
              onClick={() => setIsNotificationOpen(true)}
              className="relative flex items-center justify-center w-9 h-9 sm:w-[36px] sm:h-[36px] rounded-xl hover:bg-[#1F222B] transition-colors"
            >
              <Notifications />
              {/* Notification Badge - Red for Admin */}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-[20px] px-1 bg-[#EF4444] rounded-full text-white text-[11px] font-grotesk font-medium">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>

            {/* Admin Profile */}
            <div className="flex items-center gap-1.75 px-1 py-2.5 sm:px-3 rounded-xl">
              <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#0E966F] rounded-md">
                <span className="font-grotesk font-bold text-[15px] leading-[19px] text-white">
                  A
                </span>
              </div>
              <span className="hidden sm:block font-vietnam font-medium text-base leading-5 text-white">
                Admin
              </span>
            </div>
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
    </>
  );
}
