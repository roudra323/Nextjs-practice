"use client";

import { useAccount, useBalance, useDisconnect } from "wagmi";
import { CloseIcon } from "../icons";
import { MetaMaskIcon } from "../icons";

interface WalletInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletInfoModal({
  isOpen,
  onClose,
}: WalletInfoModalProps) {
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  if (!isOpen || !address) return null;

  const handleDisconnect = () => {
    disconnect();
    onClose();
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const copyToClipboard = () => {
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  console.log("Connector:", connector);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4">
      <div className="relative flex flex-col justify-center items-center p-4 gap-3.5 w-[290px] bg-[#030213] border border-white/20 rounded-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-4 h-4 opacity-70 hover:opacity-100 transition-opacity z-20 cursor-pointer"
        >
          <CloseIcon />
        </button>

        {/* Wallet Icon with Badge */}
        <div className="relative w-12 h-[50px]">
          {/* Background Circle */}
          <div className="absolute w-12 h-12 bg-[rgba(14,150,111,0.24)] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl" />

          {/* Wallet Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 7V5C22 2.5 20.5 1 18 1H6C3.5 1 2 2.5 2 5V17C2 19.5 3.5 21 6 21H18C20.5 21 22 19.5 22 17V15"
                stroke="#0E966F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 7H17C15 7 14 8 14 10V13C14 15 15 16 17 16H22V7Z"
                fill="#0E966F"
                stroke="#0E966F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="19" cy="11.5" r="1.5" fill="#00C48C" />
              <circle cx="15" cy="7" r="1.5" fill="#00C48C" />
              <circle cx="6" cy="7" r="1.5" fill="#00C48C" />
            </svg>
          </div>

          {/* MetaMask Badge (if MetaMask) */}
          {connector?.name === "MetaMask" && (
            <div className="absolute right-0 bottom-0 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <MetaMaskIcon />
            </div>
          )}
        </div>

        {/* Address with Copy Icon */}
        <div className="flex flex-row items-center gap-2.5">
          <span className="font-grotesk font-medium text-lg leading-5 tracking-[-0.15px] text-white">
            {formatAddress(address)}
          </span>
          <button
            onClick={copyToClipboard}
            className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 8.66667V11.3333C10.6667 13.3333 9.66667 14.3333 7.66667 14.3333H4.66667C2.66667 14.3333 1.66667 13.3333 1.66667 11.3333V8.33333C1.66667 6.33333 2.66667 5.33333 4.66667 5.33333H7.33333"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 8.66667H8.66667C7.66667 8.66667 7.33333 8.33333 7.33333 7.33333V5.33333L10.6667 8.66667Z"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 1.66667H11.3333"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.33333 4C5.33333 2.52667 6.52667 1.33333 8 1.33333H9.1"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 5.33333V9.42C14.3333 10.7667 13.2333 11.8667 11.8867 11.8667"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 5.33333H12.3333C10.96 5.33333 10.3333 4.70667 10.3333 3.33333V1.33333L14.3333 5.33333Z"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Balance */}
        <span className="font-grotesk font-medium text-2xl leading-10 tracking-[-0.15px] text-white">
          {balance
            ? `${(Number(balance.value) / 10 ** balance.decimals).toFixed(4)} ${balance.symbol}`
            : "0.0000 ETH"}
        </span>

        {/* Disconnect Button */}
        <button
          onClick={handleDisconnect}
          className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-full max-w-[257px] h-[41px] bg-[rgba(251,44,54,0.2)] border border-[rgba(251,44,54,0.5)] rounded-lg hover:bg-[rgba(251,44,54,0.3)] transition-colors cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41675 6.3C7.67508 3.3 9.21675 2.075 12.5917 2.075H12.7001C16.4251 2.075 17.9167 3.56667 17.9167 7.29167V12.725C17.9167 16.45 16.4251 17.9417 12.7001 17.9417H12.5917C9.24175 17.9417 7.70008 16.7333 7.42508 13.7833"
              stroke="#FF5C16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 10H3.01667"
              stroke="#FF5C16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.87508 7.20833L2.08341 10L4.87508 12.7917"
              stroke="#FF5C16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-vietnam font-medium text-sm leading-5 tracking-[-0.15px] text-[#FE5058]">
            Disconnect
          </span>
        </button>
      </div>
    </div>
  );
}
