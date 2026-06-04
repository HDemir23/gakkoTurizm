import { StatusPage } from "@/components/StatusPage";
import {
  BRAND_CONTACT_EMAIL,
  BRAND_CONTACT_PHONE_HREF,
  BRAND_CONTACT_WHATSAPP_HREF,
  BRAND_FULL_NAME
} from "@/lib/brand";
import { Construction, Mail, MessageCircle, Phone } from "lucide-react";
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
  return (
    <StatusPage
      status="Bakım"
      eyebrow="Planlı bakım"
      title="Site kısa süreliğine bakımda."
      lead="Web sitesi üzerinde kısa süreli teknik düzenleme yapılıyor. Taşıma talebi, evrak veya rota bilgisi için doğrudan iletişim kanalları açıktır."
      icon={Construction}
      points={[
        "Telefon ve WhatsApp üzerinden operasyon iletişimi devam ediyor.",
        "Yük, güzergah ve evrak bilgileri e-posta ile alınabilir.",
        "Site aynı domain üzerinden tekrar yayına alınacak."
      ]}
      actions={[
        { href: BRAND_CONTACT_WHATSAPP_HREF, label: "WhatsApp'tan yaz", icon: MessageCircle, variant: "primary" },
        { href: BRAND_CONTACT_PHONE_HREF, label: "Ara", icon: Phone },
        { href: `mailto:${BRAND_CONTACT_EMAIL}`, label: "E-posta gönder", icon: Mail }
      ]}
    />
  );
}
