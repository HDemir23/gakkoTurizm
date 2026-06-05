import { LocalizedStatusPage } from "@/components/LocalizedStatusPage";
import { BRAND_FULL_NAME } from "@/lib/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Bakımdayız | ${BRAND_FULL_NAME}`,
  description: `${BRAND_FULL_NAME} web sitesi kısa süreli bakım modunda. Taşıma talepleri için telefon, e-posta ve WhatsApp kanalları açıktır.`,
  robots: {
    index: false,
    follow: false
  }
};

export default function MaintenancePage() {
  return <LocalizedStatusPage kind="maintenance" />;
}
