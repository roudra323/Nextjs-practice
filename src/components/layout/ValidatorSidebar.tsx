"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ContactFormPanel } from "../modals";
import {
  DashboardIcon,
  BecomeValidatorIcon,
  SharedPoolsIcon,
  PoolManagementIcon,
  ContactIcon,
} from "../icons";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
  },
  {
    name: "Become Validator",
    href: "/become-validator",
    icon: BecomeValidatorIcon,
  },
  {
    name: "Shared Pools",
    href: "/shared-pools",
    icon: SharedPoolsIcon,
  },
  {
    name: "Pool Management",
    href: "/pool-management",
    icon: PoolManagementIcon,
  },
  {
    name: "Contact us",
    href: "/contact",
    icon: ContactIcon,
  },
];

interface ValidatorSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ValidatorSidebar({
  isOpen = false,
  onClose,
}: ValidatorSidebarProps) {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleMenuClick = (item: (typeof menuItems)[0]) => {
    if (item.name === "Contact us") {
      setIsContactOpen(true);
      onClose?.();
      return true; // Prevent navigation
    }
    return false;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-14 sm:top-16 w-63.75 h-[calc(100vh-56px)] sm:h-[calc(100vh-64px)] border-r border-[rgba(255,255,255,0.14)] bg-[#0C0E19] z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-4 lg:p-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const isContactItem = item.name === "Contact us";
            const IconComponent = item.icon;

            if (isContactItem) {
              return (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item)}
                  className={`flex items-center gap-2.5 px-3.5 py-3.5 rounded-[14px] transition-colors font-vietnam font-medium text-base leading-5 text-left ${
                    isContactOpen
                      ? "bg-[#131839] text-white"
                      : "text-[#AAB3D0] hover:bg-[#131839]/50 hover:text-white"
                  }`}
                >
                  <span
                    className={isContactOpen ? "text-white" : "text-[#AAB3D0]"}
                  >
                    <IconComponent />
                  </span>
                  {item.name}
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-2.5 px-3.5 py-3.5 rounded-[14px] transition-colors font-vietnam font-medium text-base leading-5 ${
                  isActive
                    ? "bg-[#131839] text-white"
                    : "text-[#AAB3D0] hover:bg-[#131839]/50 hover:text-white"
                }`}
              >
                <span className={isActive ? "text-white" : "text-[#AAB3D0]"}>
                  <IconComponent />
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Contact Form Panel */}
      <ContactFormPanel
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
