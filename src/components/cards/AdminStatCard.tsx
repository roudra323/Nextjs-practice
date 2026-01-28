import { DecreaseIcon, IncreaseIcon } from "../icons";

interface AdminStatCardProps {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  showSparkline?: boolean;
  showProgress?: boolean;
  progressValue?: number;
  progressLabel?: string;
  className?: string;
}

export default function AdminStatCard({
  label,
  value,
  change,
  isPositive = true,
  showSparkline = false,
  showProgress = false,
  progressValue = 0,
  progressLabel,
  className = "",
}: AdminStatCardProps) {
  return (
    <div
      className={`relative box-border bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 ${className}`}
    >
      {/* Label and Change Badge */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-vietnam font-medium text-sm leading-5 text-[#AAB3D0]">
          {label}
        </span>
        {change && (
          <div
            className={`flex items-center gap-0 px-1.5 py-0 h-5 rounded-full ${
              isPositive
                ? "bg-[rgba(14,150,111,0.1)]"
                : "bg-[rgba(254,80,88,0.1)]"
            }`}
          >
            {/* Arrow Icon */}
            {isPositive ? <IncreaseIcon /> : <DecreaseIcon />}
            <span
              className={`font-grotesk font-medium text-xs leading-4 ${
                isPositive ? "text-[#0E966F]" : "text-[#FE5058]"
              }`}
            >
              {change}
            </span>
          </div>
        )}
      </div>

      {/* Value */}
      <div className="font-grotesk font-medium text-xl leading-8 text-white">
        {value}
      </div>

      {/* Sparkline */}
      {showSparkline && (
        <div className="mt-3 h-6">
          <svg
            width="100%"
            height="24"
            viewBox="0 0 231 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M4 18L20 12L36 15L52 8L68 13L84 6L100 10L116 4L132 14L148 9L164 12L180 5L196 11L212 7L227 16"
              stroke="#0E966F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* Progress Bar */}
      {showProgress && (
        <div className="mt-3 flex flex-col gap-1.5">
          <div className="h-1.5 bg-[#1F222B] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0E966F] rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressValue, 100)}%` }}
            />
          </div>
          {progressLabel && (
            <span className="font-vietnam font-normal text-xs leading-4 text-[#AAB3D0]">
              {progressLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
