"use client";

import { X, CheckCircle, AlertTriangle, CreditCard, Info } from "lucide-react";

export interface Notification {
  id: string;
  type: "success" | "warning" | "info" | "payment";
  title: string;
  description: string;
  time: string;
  isRead: boolean;
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  unreadCount: number;
  onMarkAllRead?: () => void;
}

// Get icon based on notification type
function getNotificationIcon(type: Notification["type"]) {
  switch (type) {
    case "success":
      return (
        <CheckCircle className="w-6 h-6 text-[#0E966F]" strokeWidth={1.5} />
      );
    case "warning":
      return (
        <AlertTriangle className="w-6 h-6 text-[#EAB308]" strokeWidth={1.67} />
      );
    case "info":
      return <Info className="w-6 h-6 text-[#F4CD4D]" strokeWidth={1.5} />;
    case "payment":
      return (
        <CreditCard className="w-6 h-6 text-[#0E966F]" strokeWidth={1.5} />
      );
    default:
      return (
        <CheckCircle className="w-6 h-6 text-[#0E966F]" strokeWidth={1.5} />
      );
  }
}

// Notification Item Component
function NotificationItem({ notification }: { notification: Notification }) {
  return (
    <div
      className={`box-border w-full p-4 rounded-xl border border-white/10 ${
        notification.isRead ? "bg-white/5" : "bg-white/10"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 bg-[#34394D] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl shrink-0">
          {getNotificationIcon(notification.type)}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-vietnam font-medium text-base leading-5 tracking-[-0.15px] text-white">
              {notification.title}
            </h4>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-vietnam font-medium text-xs leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                {notification.time}
              </span>
              {!notification.isRead && (
                <span className="w-2 h-2 bg-[#0E966F] rounded-full" />
              )}
            </div>
          </div>
          <p className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] mt-1 truncate">
            {notification.description}
          </p>
        </div>
      </div>
    </div>
  );
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

export default function NotificationPanel({
  isOpen,
  onClose,
  notifications = sampleNotifications,
  unreadCount = 4,
  onMarkAllRead,
}: NotificationPanelProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-transparent" onClick={onClose} />

      {/* Panel - Floating box positioned at top-right */}
      <div className="fixed top-20 right-4 sm:right-7 z-50 w-[calc(100vw-32px)] sm:w-[588px] max-h-[673px] animate-slide-in-right">
        <div className="relative w-full bg-[#0B0E17] border border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden">
          {/* Background Blur Effect */}
          <div className="absolute w-[486.25px] h-[376.09px] -left-[144.35px] -top-[156.04px] bg-white mix-blend-overlay blur-[61.2187px] rotate-[30deg]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <h2 className="font-vietnam font-semibold text-lg leading-[18px] tracking-[-0.44px] text-white">
                  Notifications
                </h2>
                <span className="font-grotesk font-medium text-xs leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                  {unreadCount} Unread
                </span>
              </div>
              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" strokeWidth={1.33} />
              </button>
            </div>

            {/* Subheader */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={onMarkAllRead}
                className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#00C48C] hover:text-[#00E6A0] transition-colors cursor-pointer"
              >
                Mark all as read
              </button>
              <span className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] cursor-pointer hover:text-white transition-colors">
                Clear all
              </span>
            </div>

            {/* Notifications List */}
            <div className="max-h-[500px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#0B0E17] [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/30">
              <div className="flex flex-col gap-4">
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
