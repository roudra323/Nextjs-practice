"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ContactFormPanel } from "../modals";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.51667 2.36664L3.025 5.86664C2.275 6.44997 1.66667 7.69164 1.66667 8.63331V14.8083C1.66667 16.7416 3.24167 18.325 5.175 18.325H14.825C16.7583 18.325 18.3333 16.7416 18.3333 14.8166V8.74997C18.3333 7.74164 17.6583 6.44997 16.8333 5.87497L11.6833 2.26664C10.5167 1.44997 8.64167 1.49164 7.51667 2.36664Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 15V12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Become Validator",
    href: "/become-validator",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.63333 1.68331L4.275 3.43331C3.21667 3.85831 2.35 5.14164 2.35 6.27498V12.1833C2.35 13.275 3.075 14.7 3.95833 15.3666L7.7 18.1916C9.00833 19.1833 11.1167 19.1833 12.425 18.1916L16.1667 15.3666C17.05 14.7 17.775 13.275 17.775 12.1833V6.27498C17.775 5.14164 16.9083 3.85831 15.85 3.43331L11.4917 1.68331C10.6 1.32498 9.525 1.32498 8.63333 1.68331Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Shared Pools",
    href: "/shared-pools",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5.625C11.3807 5.625 12.5 4.50571 12.5 3.125C12.5 1.74429 11.3807 0.625 10 0.625C8.61929 0.625 7.5 1.74429 7.5 3.125C7.5 4.50571 8.61929 5.625 10 5.625Z"
          fill="currentColor"
        />
        <path
          d="M17.5 8.125C18.5355 8.125 19.375 7.28553 19.375 6.25C19.375 5.21447 18.5355 4.375 17.5 4.375C16.4645 4.375 15.625 5.21447 15.625 6.25C15.625 7.28553 16.4645 8.125 17.5 8.125Z"
          fill="currentColor"
        />
        <path
          d="M2.5 8.125C3.53553 8.125 4.375 7.28553 4.375 6.25C4.375 5.21447 3.53553 4.375 2.5 4.375C1.46447 4.375 0.625 5.21447 0.625 6.25C0.625 7.28553 1.46447 8.125 2.5 8.125Z"
          fill="currentColor"
        />
        <path
          d="M5.3125 12.5C5.3125 9.84375 7.34375 7.8125 10 7.8125C12.6562 7.8125 14.6875 9.84375 14.6875 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 10V15.625C17.5 17.5 15.9375 19.375 13.75 19.375H6.25C4.0625 19.375 2.5 17.5 2.5 15.625V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Pool Management",
    href: "/pool-management",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66667 10.7333V9.26665C1.66667 8.39998 2.375 7.68332 3.25 7.68332C4.75833 7.68332 5.375 6.61665 4.61667 5.30832C4.18333 4.55832 4.44167 3.58332 5.2 3.14998L6.64167 2.32498C7.3 1.93332 8.15 2.16665 8.54167 2.82498L8.63333 2.98332C9.38333 4.29165 10.6167 4.29165 11.375 2.98332L11.4667 2.82498C11.8583 2.16665 12.7083 1.93332 13.3667 2.32498L14.8083 3.14998C15.5667 3.58332 15.825 4.55832 15.3917 5.30832C14.6333 6.61665 15.25 7.68332 16.7583 7.68332C17.625 7.68332 18.3417 8.39165 18.3417 9.26665V10.7333C18.3417 11.6 17.6333 12.3167 16.7583 12.3167C15.25 12.3167 14.6333 13.3833 15.3917 14.6917C15.825 15.45 15.5667 16.4167 14.8083 16.85L13.3667 17.675C12.7083 18.0667 11.8583 17.8333 11.4667 17.175L11.375 17.0167C10.625 15.7083 9.39167 15.7083 8.63333 17.0167L8.54167 17.175C8.15 17.8333 7.3 18.0667 6.64167 17.675L5.2 16.85C4.44167 16.4167 4.18333 15.4417 4.61667 14.6917C5.375 13.3833 4.75833 12.3167 3.25 12.3167C2.375 12.3167 1.66667 11.6 1.66667 10.7333Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Contact us",
    href: "/contact",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.83333 18.3333C8.13333 18.3333 10 16.4667 10 14.1667C10 11.8667 8.13333 10 5.83333 10C3.53333 10 1.66667 11.8667 1.66667 14.1667C1.66667 15.0833 1.95 15.9333 2.43333 16.6333L1.875 18.125L3.36667 17.5667C4.06667 18.05 4.91667 18.3333 5.83333 18.3333Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1667 1.66667C11.8667 1.66667 10 3.53334 10 5.83334C10 6.75 10.2833 7.6 10.7667 8.3L10.2083 9.79167L11.7 9.23334C12.4 9.71667 13.25 10 14.1667 10C16.4667 10 18.3333 8.13334 18.3333 5.83334C18.3333 3.53334 16.4667 1.66667 14.1667 1.66667Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 10V10.0083"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
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
                    {item.icon}
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
                  {item.icon}
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
