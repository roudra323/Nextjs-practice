import { TelegramIcon, DiscordIcon, TwitterIcon, LinkedInIcon } from "../icons";

const socialLinks = [
  { href: "#", icon: <TelegramIcon />, label: "Telegram" },
  { href: "#", icon: <DiscordIcon />, label: "Discord" },
  { href: "#", icon: <TwitterIcon />, label: "Twitter" },
  { href: "#", icon: <LinkedInIcon />, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative w-full mt-auto border-t border-white/10">
      <div className="max-w-308.25 mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col h-50 lg:h-auto lg:flex-row justify-between items-center lg:items-start gap-8 sm:gap-10">
          {/* Left section */}
          <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4">
            <h3 className="font-bold text-xl sm:text-2xl leading-6 tracking-[-0.02em]">
              <span className="text-[#0E966F]">K</span>
              <span className="text-[#F9FFFD]"> Launchpad</span>
            </h3>
            <p className="max-w-87.75 text-sm leading-4.5 text-[#AAB3D0] text-center lg:text-left">
              Connecting networks, liquidity, and traders through innovative
              trading tools.
            </p>
          </div>

          {/* Right section */}
          <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4">
            <span className="font-medium text-base leading-6 text-[#A7ADBE]">
              Socials
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-8 h-8 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-6 sm:my-8" />

        {/* Copyright */}
        <p className="text-center text-xs sm:text-sm leading-4.5 text-[#AAB3D0]">
          © 2025 Krown Launchpad. All rights reserved • Built on the Krown
          Blockchain
        </p>
      </div>
    </footer>
  );
}
