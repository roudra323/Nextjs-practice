import { ValidatorSidebar, ValidatorNavbar } from "@/components";

export default function ValidatorPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0C0E19]">
      <ValidatorNavbar />
      <ValidatorSidebar />
      <main className="ml-[255px] pt-16">{children}</main>
    </div>
  );
}
