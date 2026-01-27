import { TrendingUp } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  showChange?: boolean;
}

export default function MetricCard({
  label,
  value,
  change = "+12.4%",
  showChange = true,
}: MetricCardProps) {
  return (
    <div className="flex flex-col p-4 w-full h-auto justify-between items-center sm:items-start bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full">
        <span className="font-vietnam font-medium text-sm leading-[19px] text-[#AAB3D0]">
          {label}
        </span>
        {showChange && (
          <div className="flex items-center gap-1 px-1.5 py-0.5 bg-[rgba(14,150,111,0.1)] rounded-full">
            <TrendingUp className="w-3 h-3 text-[#00C48C]" strokeWidth={1} />
            <span className="font-grotesk font-medium text-xs leading-4 text-[#00C48C]">
              {change}
            </span>
          </div>
        )}
      </div>
      <span className="font-grotesk font-medium text-lg leading-[31px] text-white mt-2.5">
        {value}
      </span>
    </div>
  );
}
