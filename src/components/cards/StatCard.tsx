interface StatCardProps {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string;
}

export default function StatCard({
  icon,
  iconColor,
  label,
  value,
}: StatCardProps) {
  return (
    <div className="relative flex mx-auto flex-col p-6 w-full max-w-97.25 h-33.25 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      {/* Glow effect */}
      <div className="absolute w-40.5 h-31.25 -left-17.5 -top-18 bg-white mix-blend-overlay blur-[56px] rotate-30" />

      <div className="relative z-10 flex justify-between items-start">
        <div className="flex flex-col gap-6">
          <span className="font-medium text-lg leading-5 text-[#AAB3D0]">
            {label}
          </span>
          <span className="font-medium text-[32px] leading-8 text-white">
            {value}
          </span>
        </div>
        <div className={`w-8 h-8 ${iconColor}`}>{icon}</div>
      </div>
    </div>
  );
}
