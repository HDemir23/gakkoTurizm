import type { Metadata } from "next";
import {
  BRAND_FAVICON_PATH,
  BRAND_FULL_NAME,
  BRAND_LOGO_PATH,
  BRAND_METADATA_DESCRIPTION,
  BRAND_METADATA_TITLE,
  BRAND_SOCIAL_IMAGE_PATH
} from "@/lib/brand";
import "./site.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: BRAND_METADATA_TITLE,
  description: BRAND_METADATA_DESCRIPTION,
  icons: {
    icon: [
      { url: BRAND_FAVICON_PATH, type: "image/svg+xml" },
      { url: BRAND_LOGO_PATH, type: "image/svg+xml" }
    ],
    shortcut: [{ url: BRAND_FAVICON_PATH, type: "image/svg+xml" }],
    apple: [{ url: BRAND_LOGO_PATH, type: "image/svg+xml" }]
  },
  openGraph: {
    title: BRAND_METADATA_TITLE,
    description: BRAND_METADATA_DESCRIPTION,
    type: "website",
    siteName: BRAND_FULL_NAME,
    images: [
      {
        url: BRAND_SOCIAL_IMAGE_PATH,
        width: 1200,
        height: 1200,
        alt: BRAND_FULL_NAME,
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: BRAND_METADATA_TITLE,
    description: BRAND_METADATA_DESCRIPTION,
    images: [BRAND_SOCIAL_IMAGE_PATH]
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
