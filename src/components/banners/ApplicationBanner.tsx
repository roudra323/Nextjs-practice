import { AlertTriangle, AlertCircle } from "lucide-react";
import { InfoIcon, TikIcon } from "../icons";

type ApplicationStatus = "pending" | "approved" | "rejected" | "info";

interface ApplicationBannerProps {
  status?: ApplicationStatus;
  title?: string;
  description?: string;
}

const statusConfig = {
  pending: {
    icon: AlertTriangle,
    bgColor: "bg-[rgba(234,179,8,0.1)]",
    borderColor: "border-[rgba(234,179,8,0.2)]",
    iconColor: "text-[#EAB308]",
    titleColor: "text-[#EAB308]",
    descriptionColor: "text-[#FFFBEF]",
    defaultTitle: "Application Under Review",
    defaultDescription:
      "We've received your application and the Krown team is reviewing it. Check back soon for updates.",
  },
  approved: {
    icon: TikIcon,
    bgColor: "bg-[rgba(14,150,111,0.1)]",
    borderColor: "border-[rgba(14,150,111,0.2)]",
    iconColor: "text-[#00C48C]",
    titleColor: "text-[#00C48C]",
    descriptionColor: "text-[#B4FFEA]",
    defaultTitle: "Application Approved!",
    defaultDescription:
      "Ensure your hardware meets all requirements before proceeding.",
  },
  rejected: {
    icon: AlertCircle,
    bgColor: "bg-[rgba(254,80,88,0.1)]",
    borderColor: "border-[rgba(254,80,88,0.2)]",
    iconColor: "text-[#FE5058]",
    titleColor: "text-[#FE5058]",
    descriptionColor: "text-[#FFCACD]",
    defaultTitle: "Unfortunately your application is rejected.",
    defaultDescription:
      "Ensure your hardware meets all requirements before reapplying.",
  },
  info: {
    icon: InfoIcon,
    bgColor: "bg-[rgba(14,150,111,0.1)]",
    borderColor: "border-[rgba(14,150,111,0.2)]",
    iconColor: "text-[#00C48C]",
    titleColor: "text-[#00C48C]",
    descriptionColor: "text-[#B4FFEA]",
    defaultTitle: "Information",
    defaultDescription: "Here is some helpful information for you.",
  },
};

export default function ApplicationBanner({
  status = "approved",
  title,
  description,
}: ApplicationBannerProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className={`flex items-start gap-3 p-4 w-full ${config.bgColor} border ${config.borderColor} rounded-xl`}
    >
      <div className="shrink-0 w-5 h-5 mt-0.5">
        <Icon className={`w-5 h-5 ${config.iconColor}`} strokeWidth={1.67} />
      </div>
      <div className="flex flex-col gap-1">
        <span
          className={`font-vietnam font-medium text-base leading-6 tracking-[-0.3125px] ${config.titleColor}`}
        >
          {title || config.defaultTitle}
        </span>
        <span
          className={`font-vietnam font-medium text-sm leading-6 tracking-[-0.3125px] ${config.descriptionColor}`}
        >
          {description || config.defaultDescription}
        </span>
      </div>
    </div>
  );
}
