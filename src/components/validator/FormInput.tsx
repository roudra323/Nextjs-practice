"use client";

interface FormInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  required?: boolean;
}

export default function FormInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: FormInputProps) {
  return (
    <div className="flex flex-col items-start gap-3.5 w-full">
      {/* Label */}
      <label className="font-vietnam font-medium text-base leading-3.5 tracking-[-0.15px] text-white">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="box-border flex items-center px-5 py-3 w-full h-12 bg-white/5 border border-white/10 rounded-xl font-vietnam font-normal text-sm leading-4.5 tracking-[-0.15px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 transition-colors"
      />
    </div>
  );
}
