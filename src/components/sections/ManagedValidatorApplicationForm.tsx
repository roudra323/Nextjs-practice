"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validatorFormSchema, type ValidatorFormData } from "@/lib/validations";
import { useState } from "react";
import {
  Square,
  CheckSquare,
  Server,
  RefreshCw,
  Shield,
  Check,
} from "lucide-react";
import FormInput from "../validator/FormInput";
import FormSelect from "../validator/FormSelect";
import FileUploader from "../validator/FileUploader";
import ApplicationBanner from "../banners/ApplicationBanner";
import { TikIcon } from "../icons";

interface ManagedValidatorApplicationFormProps {
  onBack?: () => void;
  onApply?: (data: ValidatorFormData) => void;
}

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

const serviceOverviewCards = [
  {
    icon: <Server className="w-6 h-6 text-[#00C48C]" strokeWidth={2} />,
    title: "Full Infrastructure",
    description: "Operated by Krown",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#00C48C]" strokeWidth={2} />,
    title: "Automated",
    description: "Updates & Monitoring",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#00C48C]" strokeWidth={2} />,
    title: "HSM Secured",
    description: "Validator Keys Protection",
  },
];

const feeBreakdown = [
  {
    label: "Gross Rewards (Est.)",
    value: "1,000 KROWN / day",
    color: "text-white",
  },
  {
    label: "Platform Fee (10%)",
    value: "-100 KROWN",
    color: "text-[#FE5058]",
  },
  {
    label: "Net Rewards",
    value: "900 KROWN",
    color: "text-[#00C48C]",
  },
];

const termsSummary = [
  "Fees auto-deducted on-chain",
  "No infrastructure access required",
  "21-day unbonding period applies",
];

export default function ManagedValidatorApplicationForm({
  onBack,
  onApply,
}: ManagedValidatorApplicationFormProps) {
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
    onApply?.(data);
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Main Form Container */}
      <div className="flex justify-center px-6 py-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="box-border w-full max-w-284 bg-white/5 border border-white/10 rounded-3xl p-6"
        >
          {/* Form Header */}
          <div className="mb-6">
            <h2 className="font-vietnam font-medium text-xl leading-6 tracking-[-0.15px] text-white mb-2">
              Managed Validator Application
            </h2>
            <p className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
              We&apos;ve checked your wallet against the requirements
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

          {/* Service Overview */}
          <div className="mb-6">
            <h3 className="font-vietnam font-medium text-base leading-3.5 tracking-[-0.15px] text-white mb-4">
              Service Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {serviceOverviewCards.map((card, index) => (
                <div
                  key={index}
                  className="box-border flex flex-col items-start p-5 gap-2.5 bg-white/5 border border-white/10 rounded-2xl"
                >
                  {/* Icon */}
                  <div className="w-6 h-6">{card.icon}</div>
                  {/* Title */}
                  <span className="font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white">
                    {card.title}
                  </span>
                  {/* Description */}
                  <span className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                    {card.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Breakdown */}
          <div className="mb-6">
            <h3 className="font-vietnam font-medium text-base leading-3.5 tracking-[-0.15px] text-white mb-4">
              Fee Breakdown
            </h3>
            <div className="box-border flex flex-col justify-center p-3 bg-white/5 border border-white/10 shadow-[0px_2px_8px_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="flex flex-col">
                {feeBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-row justify-between items-center py-1 ${
                      index + 1 < feeBreakdown.length
                        ? "border-b border-white/10 mt-1"
                        : ""
                    }`}
                  >
                    <span className="font-vietnam font-normal text-sm leading-5 tracking-[-0.15px] text-[#AAB3D0]">
                      {item.label}
                    </span>
                    <span
                      className={`font-grotesk font-medium text-sm leading-5 tracking-[-0.15px] text-right ${item.color}`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Terms Summary */}
          <div className="mb-6">
            <h3 className="font-vietnam font-medium text-base leading-3.5 tracking-[-0.15px] text-white mb-4">
              Terms Summary
            </h3>
            <div className="flex flex-col gap-3">
              {termsSummary.map((term, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Checkmark Icon */}
                  <div className="w-5 h-5 flex items-center justify-center">
                    <TikIcon />
                  </div>
                  {/* Term Text */}
                  <span className="font-vietnam font-normal text-base leading-6 tracking-[-0.3125px] text-[#AAB3D0]">
                    {term}
                  </span>
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
              I agree to the terms and conditions of operating a managed
              validator on the Krown network.
            </span>
          </div>

          {/* Warning Banner */}
          <div className="mb-6">
            <ApplicationBanner
              status="pending"
              title="Important"
              description="Ensure your hardware meets all requirements before submitting. Your application will be reviewed within 24-48 hours."
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

            {/* Apply Button */}
            <button
              type="submit"
              disabled={!termsAccepted}
              className="flex items-center justify-center px-4.5 py-2 h-12 bg-[#0E966F] shadow-[inset_0px_0px_12px_rgba(255,255,255,0.25)] rounded-xl font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] text-white capitalize hover:bg-[#0C7D5D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
