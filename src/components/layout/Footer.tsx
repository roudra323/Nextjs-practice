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
      <div className="max-w-[1233px] mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl leading-6 tracking-[-0.02em]">
              <span className="text-[#0E966F]">K</span>
              <span className="text-[#F9FFFD]"> Launchpad</span>
            </h3>
            <p className="max-w-[351px] text-sm leading-[18px] text-[#AAB3D0]">
              Connecting networks, liquidity, and traders through innovative
              trading tools.
            </p>
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-4">
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
        <div className="w-full h-px bg-white/10 my-8" />

        {/* Copyright */}
        <p className="text-center text-sm leading-[18px] text-[#AAB3D0]">
          © 2025 Krown Launchpad. All rights reserved • Built on the Krown
          Blockchain
        </p>
      </div>
    </footer>
  );
}
