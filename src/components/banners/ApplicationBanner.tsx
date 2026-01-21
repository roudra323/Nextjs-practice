import { AlertTriangle } from "lucide-react";

export default function ApplicationBanner() {
  return (
    <div className="flex items-start gap-3 p-4 w-full bg-[rgba(234,179,8,0.1)] border border-[rgba(234,179,8,0.2)] rounded-xl">
      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
        <AlertTriangle className="w-5 h-5 text-[#EAB308]" strokeWidth={1.67} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-[#EAB308]">
          Application Under Review
        </span>
        <span className="font-vietnam font-medium text-sm leading-6 tracking-[-0.3125px] text-[#FFFBEF]">
          We&apos;ve received your application and the Krown team is reviewing
          it. Check back soon for updates.
        </span>
      </div>
    </div>
  );
}
