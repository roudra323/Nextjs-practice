"use client";

import { useState } from "react";
import { X, ArrowLeft, User, Mail } from "lucide-react";

interface ContactFormPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormPanel({
  isOpen,
  onClose,
}: ContactFormPanelProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log("Submitting contact form:", { name, email, message });
    // TODO: Implement form submission
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  const handleCancel = () => {
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel - Slides from right, full height */}
      <div className="fixed top-0 right-0 z-[60] h-full w-full max-w-[588px] animate-slide-in-right">
        <div className="relative h-full w-full bg-[#0B0E17] border-l border-white/10 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden">
          {/* Background Blur Effect */}
          <div className="absolute w-[486.25px] h-[376.09px] -left-[144.35px] -top-[156.04px] bg-white mix-blend-overlay blur-[61.2187px] rotate-[30deg]" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-4 h-4 hover:opacity-80 transition-opacity"
                  aria-label="Go back"
                >
                  <ArrowLeft className="w-4 h-4 text-white" strokeWidth={1.5} />
                </button>
                <h2 className="font-vietnam font-medium text-lg leading-[18px] tracking-[-0.44px] text-white">
                  Contact Form
                </h2>
              </div>
              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" strokeWidth={1.33} />
              </button>
            </div>

            {/* Form */}
            <div className="flex-1 flex flex-col gap-6 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#0B0E17] [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="font-inter font-medium text-sm leading-[14px] tracking-[-0.15px] text-white">
                  Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#AAB3D0]"
                    strokeWidth={1.67}
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="box-border w-full h-12 pl-11 pr-3 bg-white/5 border border-white/10 rounded-xl font-inter font-normal text-sm leading-[17px] tracking-[-0.15px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#0E966F]"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="font-inter font-medium text-sm leading-[14px] tracking-[-0.15px] text-white">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#AAB3D0]"
                    strokeWidth={1.67}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@krowndex.com"
                    className="box-border w-full h-12 pl-11 pr-3 bg-white/5 border border-white/10 rounded-lg font-vietnam font-normal text-sm leading-[18px] tracking-[-0.15px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#0E966F]"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2 flex-1">
                <label className="font-vietnam font-medium text-sm leading-[14px] tracking-[-0.15px] text-white">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here"
                  className="box-border w-full flex-1 min-h-[400px] p-4 bg-white/5 border border-white/10 rounded-xl font-vietnam font-normal text-sm leading-[18px] tracking-[-0.15px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#0E966F] resize-none"
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-3 pt-6">
              <button
                onClick={handleCancel}
                className="flex items-center justify-center px-4 py-2 h-9 bg-white/5 border border-white/10 rounded-xl font-vietnam font-medium text-sm leading-[135%] tracking-[-0.03em] text-white hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center px-4.5 py-2 h-9 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-sm leading-[135%] tracking-[-0.03em] text-white hover:bg-[#0C7D5D] transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
