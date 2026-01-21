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
      className={`flex flex-col justify-between p-4 w-full h-[101px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-vietnam font-medium text-sm leading-[19px] text-[#AAB3D0]">
          {label}
        </span>
        {actionText && (
          <button
            onClick={onAction}
            className="font-vietnam font-medium text-sm leading-[19px] text-[#00C48C] hover:underline"
          >
            {actionText}
          </button>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-grotesk font-medium text-lg leading-[31px] text-white">
            {value}
          </span>
          {valueSuffix && (
            <span className="font-grotesk text-sm text-[#AAB3D0]">
              {valueSuffix}
            </span>
          )}
          {secondaryContent}
        </div>
        <div className="w-5 h-5 text-[#00C48C]">{icon}</div>
      </div>
    </div>
  );
}
