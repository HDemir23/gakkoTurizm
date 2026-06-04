import { StatusPage } from "@/components/StatusPage";
import { BRAND_CONTACT_WHATSAPP_HREF, BRAND_SHORT_NAME } from "@/lib/brand";
import { FileQuestion, Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <StatusPage
      status="404"
      eyebrow="Sayfa bulunamadı"
      title="Aradığınız sayfa bulunamadı."
      lead={`${BRAND_SHORT_NAME} bağlantısı değişmiş olabilir. Taşıma hizmetleri, rota bilgileri ve teklif formu için ana sayfaya dönebilirsiniz.`}
      icon={FileQuestion}
      points={[
        "URL adresini kontrol edin.",
        "Ana sayfadan hizmet ve rota bilgilerine ulaşın.",
        "Acil taşıma talepleri için WhatsApp kanalını kullanın."
      ]}
      actions={[
        { href: "/", label: "Ana sayfa", icon: Home, variant: "primary" },
        { href: "/#contact", label: "Teklif alanı", icon: MessageCircle },
        { href: BRAND_CONTACT_WHATSAPP_HREF, label: "WhatsApp", icon: MessageCircle }
      ]}
    />
  );
}
