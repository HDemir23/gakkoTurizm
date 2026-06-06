import type { MetadataRoute } from "next";
import { BRAND_SITE_URL } from "@/lib/brand";

function absoluteUrl(pathname: string) {
  return new URL(pathname, BRAND_SITE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
