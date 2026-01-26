"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validatorFormSchema, type ValidatorFormData } from "@/lib/validations";
import { useState } from "react";
import {
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Square,
  CheckSquare,
} from "lucide-react";
import StepperHorizontal from "../validator/StepperHorizontal";
import FormInput from "../validator/FormInput";
import FormSelect from "../validator/FormSelect";
import FileUploader from "../validator/FileUploader";
import ApplicationBanner from "../banners/ApplicationBanner";

interface ValidatorApplicationFormProps {
  onBack?: () => void;
  onContinue?: (data: ValidatorFormData) => void;
}

const technicalRequirements = [
  {
    icon: <Server className="w-5 h-5 text-[#0E966F]" strokeWidth={1.67} />,
    text: "Dedicated server or VPS",
    met: true,
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#0E966F]" strokeWidth={1.67} />,
    text: "4+ CPU cores",
    met: true,
  },
  {
    icon: <HardDrive className="w-5 h-5 text-[#0E966F]" strokeWidth={1.67} />,
    text: "500GB+ SSD storage",
    met: true,
  },
  {
    icon: <Wifi className="w-5 h-5 text-[#0E966F]" strokeWidth={1.67} />,
    text: "Stable internet (100Mbps+)",
    met: true,
  },
];

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "sg", label: "Singapore" },
  { value: "au", label: "Australia" },
  { value: "ca", label: "Canada" },
  { value: "bd", label: "Bangladesh" },
];

export default function ValidatorApplicationForm({
  onBack,
  onContinue,
}: ValidatorApplicationFormProps) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [country, setCountry] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ValidatorFormData>({
    resolver: zodResolver(validatorFormSchema),
    defaultValues: {
      validatorName: "",
      country: "",
    },
  });

  const handleCountryChange = (value: string) => {
    setCountry(value);
    setValue("country", value);
  };

  const onSubmit = (data: ValidatorFormData) => {
    if (!termsAccepted) return;
    onContinue?.(data);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Stepper Section */}
      <div className="flex justify-center py-8 px-6">
        <StepperHorizontal currentStep={1} />
      </div>

      {/* Main Form Container */}
      <div className="flex justify-center px-6 pb-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="box-border w-full max-w-284 bg-white/5 border border-white/10 rounded-3xl p-6"
        >
          {/* Form Header */}
          <div className="mb-6">
            <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white mb-2">
              Self-Hosted Validator Application
            </h2>
            <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              Complete the form below to apply as a self-hosted validator on the
              Krown network.
            </p>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Validator Name */}
            <FormInput
              label="Validator Name"
              placeholder="e.g. Krown"
              required
              error={errors.validatorName}
              {...register("validatorName")}
            />
            {/* Country */}
            <FormSelect
              label="Country"
              placeholder="Select Country"
              value={country}
              onChange={handleCountryChange}
              options={countries}
              error={errors.country?.message}
            />
          </div>

          {/* Validator Logo */}
          <div className="mb-6">
            <FileUploader
              label="Validator Logo (Optional)"
              variant="logo"
              accept="image/png, image/jpeg, image/svg+xml"
              maxSizeMB={2}
              description="PNG, JPG or SVG, max 2MB"
            />
          </div>

          {/* Validator Key */}
          <div className="mb-6">
            <FileUploader
              label="Validator Key"
              variant="key"
              accept=".json, application/json"
              maxSizeMB={5}
              description="Max file size 5 mb. Only JSON format allowed"
            />
          </div>

          {/* Technical Requirements */}
          <div className="mb-6">
            <h3 className="font-vietnam font-medium text-base leading-3.5 tracking-[-0.15px] text-white mb-3">
              Technical Requirements
            </h3>
            <div className="flex flex-col gap-3">
              {technicalRequirements.map((req, index) => (
                <div
                  key={index}
                  className="box-border flex items-center gap-3 px-3 py-3 bg-white/5 border border-white/10 rounded-xl"
                >
                  {/* Icon */}
                  <div className="w-5 h-5">{req.icon}</div>
                  {/* Text */}
                  <span className="flex-1 font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                    {req.text}
                  </span>
                  {/* Status Indicator */}
                  <div className="w-2 h-2 bg-[#0E966F] rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-center gap-2 mb-6">
            <button
              type="button"
              onClick={() => setTermsAccepted(!termsAccepted)}
              className="w-4 h-4 flex items-center justify-center cursor-pointer"
            >
              {termsAccepted ? (
                <CheckSquare className="w-4 h-4 text-[#0E966F]" />
              ) : (
                <Square className="w-4 h-4 text-[#AAB3D0]" />
              )}
            </button>
            <span className="font-vietnam font-normal text-base leading-5 tracking-[-0.3125px] text-[#AAB3D0]">
              I confirm I will operate my own node, including maintaining 99.9%
              uptime and following network governance rules.
            </span>
          </div>

          {/* Warning Banner */}
          <div className="mb-6">
            <ApplicationBanner
              status="pending"
              title="Important"
              description="Ensure your hardware meets all requirements before starting the onboarding process."
            />
          </div>

          {/* Footer Actions */}
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            {/* Back Button */}
            <button
              type="button"
              onClick={onBack}
              className="box-border flex items-center justify-center px-4 py-2 h-12 bg-white/5 border border-white/10 rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white hover:bg-white/10 transition-colors"
            >
              Back
            </button>

            {/* Continue Button */}
            <button
              type="submit"
              disabled={!termsAccepted}
              className="flex items-center justify-center px-4.5 py-2 h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white capitalize hover:bg-[#0C7D5D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to node setup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
