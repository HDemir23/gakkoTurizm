import type { Metadata } from "next";
import { BRAND_FULL_NAME } from "@/lib/brand";
import "./globals.css";
import "../components/HeroMedia.css";
import "../components/Header.css";
import "../components/Hero.css";
import "../components/Capabilities.css";
import "../components/Services.css";
import "../components/Process.css";
import "../components/QuoteSection.css";

export const metadata: Metadata = {
  title: `${BRAND_FULL_NAME} | International Road Transport`,
  description:
    "Multilingual GakGo landing page for international road transport."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
