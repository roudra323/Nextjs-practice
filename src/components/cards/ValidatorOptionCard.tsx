interface ValidatorOptionCardProps {
  title: string;
  icon: React.ReactNode;
  iconBgColor: string;
  requiredStake: string;
  details: {
    label: string;
    value: string;
    isEligible?: boolean;
  }[];
  fees: string;
  description: string;
  buttonText: string;
  onApply: () => void;
}

export default function ValidatorOptionCard({
  title,
  icon,
  iconBgColor,
  requiredStake,
  details,
  fees,
  description,
  buttonText,
  onApply,
}: ValidatorOptionCardProps) {
  return (
    <div className="flex flex-col items-start p-5 w-full max-w-90.75 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0px_2px_8px_rgba(0,0,0,0.3)] rounded-2xl">
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-xl">
            <div className={`w-6 h-6 ${iconBgColor}`}>{icon}</div>
          </div>
          <h3 className="font-medium text-xl leading-7 tracking-[-0.45px] text-white">
            {title}
          </h3>
        </div>

        {/* Details Section */}
        <div className="flex flex-col items-start gap-4 w-full h-32">
          {/* Required Stake */}
          <div className="flex flex-row justify-between items-start w-full">
            <span className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              Required Stake
            </span>
            <span className="font-grotesk font-medium text-sm leading-5 tracking-[-0.15px] text-white text-right">
              {requiredStake}
            </span>
          </div>

          {/* Dynamic Details */}
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-start w-full"
            >
              <span className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                {detail.label}
              </span>
              <div className="flex items-center gap-2">
                {detail.isEligible && (
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="6.67"
                        stroke="#0E966F"
                        strokeWidth="1.33"
                      />
                      <circle cx="8" cy="8" r="2" fill="#0E966F" />
                    </svg>
                  </div>
                )}
                <span
                  className={`font-${detail.isEligible ? "vietnam" : "grotesk"} font-medium text-sm leading-5 tracking-[-0.15px] text-right ${detail.isEligible ? "text-[#0E966F]" : "text-white"}`}
                >
                  {detail.value}
                </span>
              </div>
            </div>
          ))}

          {/* Fees */}
          <div className="flex flex-row justify-between items-start w-full">
            <span className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              Fees
            </span>
            <span className="font-grotesk font-medium text-sm leading-5 tracking-[-0.15px] text-white text-right">
              {fees}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0] w-full">
          {description}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-[rgba(255,255,255,0.1)]" />

        {/* Action Button */}
        <button
          onClick={onApply}
          className="w-full h-10 bg-[#0E966F] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.31px] text-white text-center hover:bg-[#0C7D5D] transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
