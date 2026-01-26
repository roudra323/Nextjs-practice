"use client";

import { useState } from "react";
import { ValidatorSidebar, ValidatorNavbar } from "@/components";

export default function PoolManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C0E19]">
      <ValidatorNavbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <ValidatorSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="lg:ml-[255px] pt-14 sm:pt-16 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
