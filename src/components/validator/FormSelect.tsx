"use client";

import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: Option[];
  required?: boolean;
}

export default function FormSelect({
  label,
  placeholder = "Select an option",
  value,
  onChange,
  options = [],
  required = false,
}: FormSelectProps) {
  return (
    <div className="flex flex-col items-start gap-3.5 w-full">
      {/* Label */}
      <label className="font-vietnam font-medium text-base leading-3.5 tracking-[-0.15px] text-white">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {/* Select Container */}
      <div className="relative w-full">
        <select
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="box-border appearance-none flex items-center px-5 py-3 w-full h-12 bg-white/5 border border-white/10 rounded-xl font-vietnam font-normal text-sm leading-4.5 tracking-[-0.15px] text-white focus:outline-none focus:border-white/20 transition-colors cursor-pointer"
        >
          <option value="" disabled className="bg-[#0C0E19] text-white/40">
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#0C0E19] text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        {/* Chevron Icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-[#94A3B8]" strokeWidth={1.67} />
        </div>
      </div>
    </div>
  );
}
