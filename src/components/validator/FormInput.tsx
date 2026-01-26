"use client";

import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: FieldError;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    { label, placeholder, type = "text", required = false, error, ...rest },
    ref,
  ) => {
    return (
      <div className="flex flex-col items-start gap-3.5 w-full">
        {/* Label */}
        <label className="font-vietnam font-medium text-base leading-3.5 tracking-[-0.15px] text-white">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {/* Input */}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`box-border flex items-center px-5 py-3 w-full h-12 bg-white/5 border rounded-xl font-vietnam font-normal text-sm leading-4.5 tracking-[-0.15px] text-white placeholder:text-white/40 focus:outline-none transition-colors ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-white/10 focus:border-white/20"
          }`}
          {...rest}
        />
        {/* Error Message */}
        {error && (
          <span className="font-vietnam text-sm text-red-500">
            {error.message}
          </span>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;
