import type { Metadata } from "next";
import {
  BRAND_FAVICON_PATH,
  BRAND_CONTACT_EMAIL,
  BRAND_CONTACT_PHONE_DISPLAY,
  BRAND_FULL_NAME,
  BRAND_LOGO_PATH,
  BRAND_METADATA_DESCRIPTION,
  BRAND_METADATA_TITLE,
  BRAND_SITE_URL,
  BRAND_SOCIAL_IMAGE_PATH
} from "@/lib/brand";
import "./site.css";

function withProtocol(value: string) {
  return /^https?:\/\//.test(value) ? value : `https://${value}`;
}

function getSiteUrl() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredSiteUrl) {
    return withProtocol(configuredSiteUrl);
  }

  const railwayDomain = process.env.RAILWAY_PUBLIC_DOMAIN?.trim();
  if (railwayDomain) {
    return withProtocol(railwayDomain);
  }

  const vercelDomain =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ?? process.env.VERCEL_URL?.trim();
  if (vercelDomain) {
    return withProtocol(vercelDomain);
  }

  return process.env.NODE_ENV === "development" ? "http://localhost:3000" : BRAND_SITE_URL;
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: BRAND_FULL_NAME,
  title: BRAND_METADATA_TITLE,
  description: BRAND_METADATA_DESCRIPTION,
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
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
    url: "/",
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

function getStructuredData() {
  const siteUrl = getSiteUrl();
  const organizationId = `${siteUrl}/#organization`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: BRAND_FULL_NAME,
      alternateName: ["GAKGO TRANSPORT23", "GakgoTransport23", "gakgotransport23"],
      url: siteUrl,
      logo: new URL(BRAND_LOGO_PATH, siteUrl).toString(),
      email: BRAND_CONTACT_EMAIL,
      telephone: BRAND_CONTACT_PHONE_DISPLAY,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: BRAND_CONTACT_EMAIL,
          telephone: BRAND_CONTACT_PHONE_DISPLAY,
          areaServed: ["TR", "GR", "RS", "XK", "AL", "ME", "MK", "BA"],
          availableLanguage: ["tr", "el", "en", "ru", "de", "ro"]
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: BRAND_FULL_NAME,
      alternateName: ["GAKGO TRANSPORT23", "GakgoTransport23", "gakgotransport23"],
      url: siteUrl,
      inLanguage: ["tr", "el", "en", "ru", "de", "ro"],
      publisher: {
        "@id": organizationId
      }
    }
  ];
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="tr">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
