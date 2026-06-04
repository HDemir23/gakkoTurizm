import { BrandWordmark } from "@/components/BrandWordmark";
import {
  BRAND_CONTACT_EMAIL,
  BRAND_CONTACT_PERSON,
  BRAND_CONTACT_PHONE_DISPLAY,
  BRAND_CONTACT_PHONE_HREF,
  BRAND_CONTACT_WHATSAPP_HREF,
  BRAND_LOGO_PATH,
  BRAND_SHORT_NAME
} from "@/lib/brand";
import { Mail, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type StatusPageAction = {
  href: string;
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
};

type StatusPageProps = {
  status: string;
  eyebrow: string;
  title: string;
  lead: string;
  icon: LucideIcon;
  actions: StatusPageAction[];
  points: string[];
};

export function StatusPage({
  status,
  eyebrow,
  title,
  lead,
  icon: StatusIcon,
  actions,
  points
}: StatusPageProps) {
  return (
    <main className="status-page" aria-labelledby="status-page-title">
      <img
        className="status-page-media"
        src="/hero-iveco-truck.png"
        alt=""
        aria-hidden="true"
      />

      <div className="status-shell">
        <a className="status-brand" href="/" aria-label={`${BRAND_SHORT_NAME} ana sayfa`}>
          <span className="status-brand-mark" aria-hidden="true">
            <img src={BRAND_LOGO_PATH} alt="" width="48" height="48" />
          </span>
          <span className="status-brand-copy">
            <BrandWordmark />
            <span>{BRAND_CONTACT_PERSON}</span>
          </span>
        </a>

        <section className="status-panel">
          <div className="status-code-row">
            <span className="status-code">{status}</span>
            <span className="status-icon" aria-hidden="true">
              <StatusIcon size={28} strokeWidth={2.4} />
            </span>
          </div>

          <p className="eyebrow status-eyebrow">{eyebrow}</p>
          <h1 id="status-page-title">{title}</h1>
          <p className="status-lead">{lead}</p>

          <ul className="status-points" aria-label="Durum bilgileri">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="status-actions" aria-label="Sayfa işlemleri">
            {actions.map((action) => {
              const ActionIcon = action.icon;
              const variant = action.variant ?? "secondary";

              return (
                <a
                  key={`${action.href}-${action.label}`}
                  className={`button status-action status-action-${variant}`}
                  href={action.href}
                >
                  <ActionIcon size={18} aria-hidden="true" />
                  <span>{action.label}</span>
                </a>
              );
            })}
          </div>
        </section>

        <div className="status-contact" aria-label="Hızlı iletişim">
          <a href={BRAND_CONTACT_PHONE_HREF}>
            <Phone size={18} aria-hidden="true" />
            <span>{BRAND_CONTACT_PHONE_DISPLAY}</span>
          </a>
          <a href={`mailto:${BRAND_CONTACT_EMAIL}`}>
            <Mail size={18} aria-hidden="true" />
            <span>{BRAND_CONTACT_EMAIL}</span>
          </a>
          <a href={BRAND_CONTACT_WHATSAPP_HREF}>
            <MessageCircle size={18} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
