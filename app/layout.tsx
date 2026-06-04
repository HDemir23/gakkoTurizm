import type { Metadata } from "next";
import { BRAND_FULL_NAME } from "@/lib/brand";
import "./site.css";

export const metadata: Metadata = {
  title: `${BRAND_FULL_NAME} | International Road Transport`,
  description: `Multilingual ${BRAND_FULL_NAME} landing page for international road transport.`,
  icons: {
    icon: [{ url: "/caydacira.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/caydacira.svg", type: "image/svg+xml" }],
    apple: [{ url: "/caydacira.svg", type: "image/svg+xml" }]
  }
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
