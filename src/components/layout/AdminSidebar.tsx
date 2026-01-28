"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DashboardIcon,
  ValidatorApplicationIcon,
  PoolRequestIcon,
  NodeRequestIcon,
  ManagementIcon,
} from "@/components/icons/navigation";

const adminMenuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Val. Applications",
    href: "/admin/applications",
    icon: <ValidatorApplicationIcon />,
  },
  {
    name: "Pool Requests",
    href: "/admin/pool-requests",
    icon: <PoolRequestIcon />,
  },
  {
    name: "Node Requests",
    href: "/admin/node-requests",
    icon: <NodeRequestIcon />,
  },
  {
    name: "Management",
    href: "/admin/management",
    icon: <ManagementIcon />,
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
        className={`fixed left-0 top-14 sm:top-16 w-63.75 h-[calc(100vh-56px)] sm:h-[calc(100vh-64px)] border-r border-[rgba(255,255,255,0.14)] bg-[#0C0E19] z-50 transition-transform duration-300 ${
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
