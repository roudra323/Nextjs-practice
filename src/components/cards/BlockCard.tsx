interface BlockCardProps {
  blockNumber: string;
  proposer: string;
  proposerInitials: string;
  round: string;
  txCount: string;
}

export default function BlockCard({
  blockNumber,
  proposer,
  proposerInitials,
  round,
  txCount,
}: BlockCardProps) {
  return (
    <div className="flex items-center justify-between px-3 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl">
      {/* Left - Block info */}
      <div className="flex items-center gap-3">
        {/* Proposer Avatar */}
        <div className="flex items-center justify-center w-10 h-10 bg-[#34394D] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl">
          <span className="font-grotesk font-bold text-sm leading-5 text-white">
            {proposerInitials}
          </span>
        </div>

        {/* Block Details */}
        <div className="flex flex-col">
          <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
            Block #{blockNumber}
          </span>
          <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
            {proposer}
          </span>
        </div>
      </div>

      {/* Right - Round info */}
      <div className="flex flex-col items-end">
        <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
          Round {round}
        </span>
        <span className="font-grotesk font-medium text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
          {txCount} txs
        </span>
      </div>
    </div>
  );
}
