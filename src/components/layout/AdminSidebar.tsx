"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const adminMenuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.875 13.75H13.125"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.25 11.6786C1.25 6.46481 1.81944 6.82868 4.90694 3.99074C6.24028 2.91297 8.32917 0.833328 10.1292 0.833328C11.9292 0.833328 14.0618 2.90416 15.4076 3.99074C18.4951 6.82868 19.0632 6.46481 19.0632 11.6786C19.0632 19.3519 17.244 19.3519 10.1563 19.3519C3.06868 19.3519 1.25 19.3519 1.25 11.6786Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Val. Applications",
    href: "/admin/applications",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66667 5H13.3333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66667 9.16667H13.3333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66667 13.3333H10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 5.83333C2.5 3.33333 3.33333 2.5 5.83333 2.5H14.1667C16.6667 2.5 17.5 3.33333 17.5 5.83333V14.1667C17.5 16.6667 16.6667 17.5 14.1667 17.5H5.83333C3.33333 17.5 2.5 16.6667 2.5 14.1667V5.83333Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Pool Requests",
    href: "/admin/pool-requests",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.83333 2.08333V4.16667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 2.08333V4.16667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 10.8333H10.8333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 14.1667H8.33333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 17.9167H5.83333C3.33333 17.9167 2.5 16.8333 2.5 14.5833V7.91667C2.5 5.25 3.75 4.58333 5.83333 4.58333H12.5C14.5833 4.58333 15.8333 5.25 15.8333 7.91667V14.5833C15.8333 16.8333 15 17.9167 12.5 17.9167Z"
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
    name: "Node Requests",
    href: "/admin/node-requests",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66667 1.66667V4.16667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 1.66667V4.16667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 9.16667H12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 12.5H10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 2.91667H6.66667C4.16667 2.91667 2.91667 4.16667 2.91667 6.66667V14.1667C2.91667 16.6667 4.16667 18.3333 6.66667 18.3333H13.3333C15.8333 18.3333 17.0833 16.6667 17.0833 14.1667V6.66667C17.0833 4.16667 15.8333 2.91667 13.3333 2.91667Z"
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
    name: "Management",
    href: "/admin/management",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10C12.3012 10 14.1667 8.13452 14.1667 5.83333C14.1667 3.53215 12.3012 1.66667 10 1.66667C7.69882 1.66667 5.83334 3.53215 5.83334 5.83333C5.83334 8.13452 7.69882 10 10 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.0167 12.5417L12.625 14.9333C12.5333 15.025 12.4417 15.2 12.425 15.325L12.2917 16.3417C12.2417 16.7083 12.4917 16.9583 12.8583 16.9083L13.875 16.775C14 16.7583 14.1833 16.6667 14.2667 16.575L16.6583 14.1833C17.1 13.7417 17.3083 13.225 16.6583 12.575C16.0167 11.9333 15.5 12.1417 15.0167 12.5417Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6167 12.9417C14.8333 13.7 15.4167 14.2833 16.175 14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.84167 18.3333C2.84167 15.1083 6.05 12.5 10 12.5C10.8333 12.5 11.6333 12.625 12.375 12.8583"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminSidebar({
  isOpen = false,
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();

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
        className={`fixed left-0 top-14 sm:top-16 w-[255px] h-[calc(100vh-56px)] sm:h-[calc(100vh-64px)] border-r border-[rgba(255,255,255,0.14)] bg-[#0C0E19] z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-4 lg:p-6">
          {adminMenuItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

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
    </>
  );
}
