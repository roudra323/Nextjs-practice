"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  onCopy?: () => void;
}

export default function CodeBlock({ code, onCopy }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="box-border flex items-center justify-between px-3 py-3 w-full bg-[#0C0E19] border border-white/22 rounded-[11px]">
      {/* Code Text */}
      <span className="font-vietnam font-normal text-sm leading-5 text-[#0E966F] truncate">
        {code}
      </span>
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="flex items-center justify-center w-4 h-4 shrink-0 ml-3 hover:opacity-70 transition-opacity"
      >
        {copied ? (
          <Check className="w-4 h-4 text-[#0E966F]" strokeWidth={1.33} />
        ) : (
          <Copy className="w-4 h-4 text-[#94A3B8]" strokeWidth={1.33} />
        )}
      </button>
    </div>
  );
}
