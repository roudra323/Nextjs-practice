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
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.31558 12.5295H11.1614"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.75 10.5108C0.75 5.81833 1.26167 6.14583 4.01583 3.59167C5.22083 2.62167 7.09583 0.75 8.715 0.75C10.3333 0.75 12.2458 2.6125 13.4617 3.59167C16.2158 6.14583 16.7267 5.81833 16.7267 10.5108C16.7267 17.4167 15.0942 17.4167 8.73833 17.4167C2.3825 17.4167 0.75 17.4167 0.75 10.5108Z"
          stroke="white"
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
          d="M8.74167 1.85836L4.58333 3.42503C3.625 3.78336 2.84167 4.9167 2.84167 5.93336V12.125C2.84167 13.1084 3.49167 14.4 4.28333 14.9917L7.86667 17.6667C9.04167 18.55 10.975 18.55 12.15 17.6667L15.7333 14.9917C16.525 14.4 17.175 13.1084 17.175 12.125V5.93336C17.175 4.90836 16.3917 3.77503 15.4333 3.4167L11.275 1.85836C10.5667 1.60003 9.43333 1.60003 8.74167 1.85836Z"
          stroke="#AAB3D0"
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
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.875 6.875H9.375V5H10C10.3315 5 10.6495 4.8683 10.8839 4.63388C11.1183 4.39946 11.25 4.08152 11.25 3.75V1.25C11.25 0.918479 11.1183 0.600537 10.8839 0.366116C10.6495 0.131696 10.3315 0 10 0H7.5C7.16848 0 6.85054 0.131696 6.61612 0.366116C6.3817 0.600537 6.25 0.918479 6.25 1.25V3.75C6.25 4.08152 6.3817 4.39946 6.61612 4.63388C6.85054 4.8683 7.16848 5 7.5 5H8.125V6.875H0.625C0.45924 6.875 0.300268 6.94085 0.183058 7.05806C0.065848 7.17527 0 7.33424 0 7.5C0 7.66576 0.065848 7.82473 0.183058 7.94194C0.300268 8.05915 0.45924 8.125 0.625 8.125H3.125V10.625H2.5C2.16848 10.625 1.85054 10.7567 1.61612 10.9911C1.3817 11.2255 1.25 11.5435 1.25 11.875V14.375C1.25 14.7065 1.3817 15.0245 1.61612 15.2589C1.85054 15.4933 2.16848 15.625 2.5 15.625H5C5.33152 15.625 5.64946 15.4933 5.88388 15.2589C6.1183 15.0245 6.25 14.7065 6.25 14.375V11.875C6.25 11.5435 6.1183 11.2255 5.88388 10.9911C5.64946 10.7567 5.33152 10.625 5 10.625H4.375V8.125H13.125V10.625H12.5C12.1685 10.625 11.8505 10.7567 11.6161 10.9911C11.3817 11.2255 11.25 11.5435 11.25 11.875V14.375C11.25 14.7065 11.3817 15.0245 11.6161 15.2589C11.8505 15.4933 12.1685 15.625 12.5 15.625H15C15.3315 15.625 15.6495 15.4933 15.8839 15.2589C16.1183 15.0245 16.25 14.7065 16.25 14.375V11.875C16.25 11.5435 16.1183 11.2255 15.8839 10.9911C15.6495 10.7567 15.3315 10.625 15 10.625H14.375V8.125H16.875C17.0408 8.125 17.1997 8.05915 17.3169 7.94194C17.4342 7.82473 17.5 7.66576 17.5 7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875ZM7.5 1.25H10V3.75H7.5V1.25ZM5 14.375H2.5V11.875H5V14.375ZM15 14.375H12.5V11.875H15V14.375Z"
          fill="#AAB3D0"
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
          stroke="#AAB3D0"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66666 10.7334V9.26669C1.66666 8.40003 2.375 7.68336 3.25 7.68336C4.75833 7.68336 5.375 6.6167 4.61666 5.30836C4.18333 4.55836 4.44166 3.58336 5.2 3.15003L6.64166 2.32503C7.3 1.93336 8.15 2.1667 8.54166 2.82503L8.63333 2.98336C9.38333 4.2917 10.6167 4.2917 11.375 2.98336L11.4667 2.82503C11.8583 2.1667 12.7083 1.93336 13.3667 2.32503L14.8083 3.15003C15.5667 3.58336 15.825 4.55836 15.3917 5.30836C14.6333 6.6167 15.25 7.68336 16.7583 7.68336C17.625 7.68336 18.3417 8.39169 18.3417 9.26669V10.7334C18.3417 11.6 17.6333 12.3167 16.7583 12.3167C15.25 12.3167 14.6333 13.3834 15.3917 14.6917C15.825 15.45 15.5667 16.4167 14.8083 16.85L13.3667 17.675C12.7083 18.0667 11.8583 17.8334 11.4667 17.175L11.375 17.0167C10.625 15.7084 9.39166 15.7084 8.63333 17.0167L8.54166 17.175C8.15 17.8334 7.3 18.0667 6.64166 17.675L5.2 16.85C4.44166 16.4167 4.18333 15.4417 4.61666 14.6917C5.375 13.3834 4.75833 12.3167 3.25 12.3167C2.375 12.3167 1.66666 11.6 1.66666 10.7334Z"
          stroke="#AAB3D0"
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
          d="M3.125 7.5C2.46196 7.5 1.82607 7.76339 1.35723 8.23223C0.888392 8.70107 0.625 9.33696 0.625 10V12.5C0.625 13.163 0.888392 13.7989 1.35723 14.2678C1.82607 14.7366 2.46196 15 3.125 15H3.75C3.91576 15 4.07473 14.9342 4.19194 14.8169C4.30915 14.6997 4.375 14.5408 4.375 14.375V8.125C4.375 7.95924 4.30915 7.80027 4.19194 7.68306C4.07473 7.56585 3.91576 7.5 3.75 7.5H3.125ZM3.125 7.5C3.125 5.67664 3.84933 3.92795 5.13864 2.63864C6.42795 1.34933 8.17664 0.625 10 0.625C11.8234 0.625 13.572 1.34933 14.8614 2.63864C16.1507 3.92795 16.875 5.67664 16.875 7.5M16.875 15H16.25C16.0842 15 15.9253 14.9342 15.8081 14.8169C15.6908 14.6997 15.625 14.5408 15.625 14.375V8.125C15.625 7.95924 15.6908 7.80027 15.8081 7.68306C15.9253 7.56585 16.0842 7.5 16.25 7.5H16.875M16.875 15C17.538 15 18.1739 14.7366 18.6428 14.2678C19.1116 13.7989 19.375 13.163 19.375 12.5V10C19.375 9.33696 19.1116 8.70107 18.6428 8.23223C18.1739 7.76339 17.538 7.5 16.875 7.5M16.875 15V15.625C16.875 16.288 16.6116 16.9239 16.1428 17.3928C15.6739 17.8616 15.038 18.125 14.375 18.125H12.5"
          stroke="#AAB3D0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 6.87502C7.50001 6.30005 7.69821 5.74266 8.06119 5.29676C8.42418 4.85086 8.92977 4.54371 9.49278 4.42706C10.0558 4.31041 10.6418 4.39138 11.1521 4.65634C11.6624 4.92131 12.0657 5.35406 12.2942 5.88169C12.4758 6.30252 12.5392 6.76502 12.4758 7.21919C12.4129 7.67308 12.2264 8.10093 11.9367 8.456C11.647 8.81107 11.2653 9.07969 10.8333 9.23252C10.5895 9.31872 10.3784 9.47842 10.2292 9.68961C10.0799 9.9008 9.99986 10.1531 10 10.4117V10.625M11.25 19.375H10C9.66848 19.375 9.35054 19.2433 9.11612 19.0089C8.8817 18.7745 8.75 18.4565 8.75 18.125C8.75 17.7935 8.8817 17.4756 9.11612 17.2411C9.35054 17.0067 9.66848 16.875 10 16.875H11.25C11.5815 16.875 11.8995 17.0067 12.1339 17.2411C12.3683 17.4756 12.5 17.7935 12.5 18.125C12.5 18.4565 12.3683 18.7745 12.1339 19.0089C11.8995 19.2433 11.5815 19.375 11.25 19.375Z"
          stroke="#AAB3D0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13.75C9.91712 13.75 9.83763 13.7171 9.77903 13.6585C9.72042 13.5999 9.6875 13.5204 9.6875 13.4375C9.6875 13.3546 9.72042 13.2751 9.77903 13.2165C9.83763 13.1579 9.91712 13.125 10 13.125M10 13.75C10.0829 13.75 10.1624 13.7171 10.221 13.6585C10.2796 13.5999 10.3125 13.5204 10.3125 13.4375C10.3125 13.3546 10.2796 13.2751 10.221 13.2165C10.1624 13.1579 10.0829 13.125 10 13.125"
          stroke="#AAB3D0"
          strokeWidth="1.5"
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
