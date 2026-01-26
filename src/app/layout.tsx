import type { Metadata } from "next";
import { Space_Grotesk, Be_Vietnam_Pro, Fira_Code } from "next/font/google";
import { Web3Provider } from "@/providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const beVietnam = Be_Vietnam_Pro({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-vietnam",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "VOM - Validator Operations Manager",
  description: "Manage your validator operations with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${beVietnam.variable} ${firaCode.variable}`}
      >
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
