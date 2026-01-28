"use client";

import { useState } from "react";
import { AdminSidebar, AdminNavbar } from "@/components";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C0E19]">
      <AdminNavbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="lg:ml-63.75 pt-14 sm:pt-16 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
