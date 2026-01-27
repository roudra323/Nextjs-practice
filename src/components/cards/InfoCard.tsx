interface InfoCardProps {
  label: string;
  value: string;
  valueSuffix?: string;
  icon: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
  className?: string;
  secondaryContent?: React.ReactNode;
}

export default function InfoCard({
  label,
  value,
  valueSuffix,
  icon,
  actionText,
  onAction,
  className = "",
  secondaryContent,
}: InfoCardProps) {
  return (
    <div
      className={`flex flex-col justify-between p-3 sm:p-4 w-full min-h-22.5 sm:h-25.25 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl sm:rounded-2xl ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-vietnam font-medium text-xs sm:text-sm leading-4.75 text-[#AAB3D0]">
          {label}
        </span>
        {actionText && (
          <button
            onClick={onAction}
            className="font-vietnam font-medium text-xs sm:text-sm leading-4.75 text-[#00C48C] hover:underline"
          >
            {actionText}
          </button>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
          <span className="font-grotesk font-medium text-base sm:text-lg leading-7.75 text-white">
            {value}
          </span>
          {valueSuffix && (
            <span className="font-grotesk text-xs sm:text-sm text-[#AAB3D0]">
              {valueSuffix}
            </span>
          )}
          {secondaryContent}
        </div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C48C] shrink-0">
          {icon}
        </div>
      </div>
    </div>
  );
}
