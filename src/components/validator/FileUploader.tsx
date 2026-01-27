"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImageIcon, UploadIcon } from "../icons";

interface FileUploaderProps {
  label: string;
  accept?: string;
  maxSizeMB?: number;
  description?: string;
  variant?: "logo" | "key";
  onFileSelect?: (file: File | null) => void;
}

export default function FileUploader({
  label,
  accept = "*",
  maxSizeMB = 5,
  description,
  variant = "key",
  onFileSelect,
}: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(`File size must be less than ${maxSizeMB}MB`);
        return;
      }
      setFileName(file.name);

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }

      onFileSelect?.(file);
    }
  };

  if (variant === "logo") {
    return (
      <div className="flex flex-col items-start gap-3 w-full">
        {/* Label */}
        <label className="font-vietnam font-medium text-base leading-3.5 tracking-[-0.15px] text-white">
          {label}
        </label>

        {/* Logo Upload Area */}
        <div className="flex flex-row justify-start items-start gap-6 w-full">
          {/* Thumbnail Preview */}
          <div className="box-border flex items-center justify-center w-24 h-24 bg-white/5 border border-white/10 rounded-xl">
            {preview ? (
              <Image
                src={preview}
                alt="Logo preview"
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <ImageIcon className="w-8 h-8 text-[#AAB3D0]" />
            )}
          </div>

          {/* Upload Zone */}
          <div
            onClick={handleClick}
            className="box-border flex-1 flex flex-col items-center justify-center gap-3 py-8 bg-white/2 border border-dashed border-white/10 rounded-xl cursor-pointer hover:bg-white/4 transition-colors"
          >
            <span className="font-vietnam font-medium text-base leading-5 tracking-[-0.01em] text-white">
              Upload validator logo
            </span>
            <span className="font-vietnam font-normal text-base leading-5 tracking-[-0.01em] text-[#AAB3D0]">
              {description || "PNG, JPG or SVG, max 2MB"}
            </span>
            <button
              type="button"
              className="flex items-center justify-center px-4 py-1.5 bg-[#0E966F] shadow-[inset_0px_0px_10.74px_rgba(255,255,255,0.25)] rounded-[10.74px] font-vietnam font-medium text-[13.42px] leading-[150%] text-white cursor-pointer"
            >
              Choose File
            </button>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
        {fileName && (
          <span className="font-vietnam text-sm text-[#AAB3D0]">
            {fileName}
          </span>
        )}
      </div>
    );
  }

  // Default "key" variant
  return (
    <div className="flex flex-col items-start gap-3 w-full">
      {/* Label */}
      <label className="font-vietnam font-medium text-base leading-3.5 tracking-[-0.15px] text-white">
        {label}
      </label>

      {/* Upload Zone */}
      <div
        onClick={handleClick}
        className="box-border flex flex-col items-center justify-center gap-4 w-full py-10 bg-white/2 border border-white/10 rounded-xl cursor-pointer hover:bg-white/4 transition-colors"
      >
        {/* Upload Icon */}
        <div className="w-11 h-11 flex items-center justify-center">
          <UploadIcon className="w-10 h-10 text-[#0E966F]" />
        </div>

        <span className="font-vietnam font-medium text-base leading-5 tracking-[-0.01em] text-white">
          Upload your validator key file
        </span>
        <span className="font-vietnam font-normal text-base leading-5 tracking-[-0.01em] text-[#AAB3D0]">
          {description || "Max file size 5 mb. Only JSON format allowed"}
        </span>
        <button
          type="button"
          className="flex items-center justify-center px-4 py-1.5 bg-[#0E966F] shadow-[inset_0px_0px_10.74px_rgba(255,255,255,0.25)] rounded-[10.74px] font-vietnam font-medium text-[13.42px] leading-[150%] text-white cursor-pointer"
        >
          Choose File
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
      {fileName && (
        <span className="font-vietnam text-sm text-[#AAB3D0]">{fileName}</span>
      )}
    </div>
  );
}
