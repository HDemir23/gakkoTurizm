"use client";

import { BrandWordmark } from "@/components/BrandWordmark";
import { useLanguage } from "@/components/LanguageProvider";
import {
  BRAND_CONTACT_EMAIL,
  BRAND_CONTACT_PERSON,
  BRAND_FULL_NAME,
  BRAND_WEBSITE_SOURCE,
} from "@/lib/brand";
import { Send } from "lucide-react";
import { FormEvent, useCallback, useMemo, useState } from "react";

const formspreeEndpoint = "https://formspree.io/f/xgobvwza";

const contactInfo = {
  phoneDisplay: "+90 505 031 43 523",
  phoneHref: "tel:+9050503143523",
  email: BRAND_CONTACT_EMAIL,
  mapHref: "https://www.google.com/maps/search/?api=1&query=Elazig%20Turkiye",
  addressDisplay: "Tekirdag / Turkiye",
  whatsappHref: "https://wa.me/9050503143523",
};

export function QuoteSection() {
  const { dictionary } = useLanguage();
  const [status, setStatus] = useState("");
  const [statusTone, setStatusTone] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const footerContacts = useMemo(
    () => [
      {
        href: contactInfo.phoneHref,
        label: dictionary.contact.channels.phone.label,
        value: contactInfo.phoneDisplay,
      },
      {
        href: `mailto:${contactInfo.email}`,
        label: dictionary.contact.channels.email.label,
        value: contactInfo.email,
      },
      {
        href: contactInfo.whatsappHref,
        label: dictionary.contact.channels.whatsapp.label,
        value: "WhatsApp",
        external: true,
      },
      {
        href: contactInfo.mapHref,
        label: dictionary.contact.channels.address.label,
        value: contactInfo.addressDisplay,
        external: true,
      },
    ],
    [dictionary.contact.channels],
  );

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const formData = new FormData(form);

      formData.append("subject", dictionary.contact.mailSubject);
      formData.append("source", BRAND_WEBSITE_SOURCE);

      setIsSubmitting(true);
      setStatusTone("idle");
      setStatus(dictionary.quote.submitting);

      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Formspree request failed with ${response.status}`);
        }

        setStatusTone("success");
        setStatus(dictionary.quote.success);
        form.reset();
      } catch {
        setStatusTone("error");
        setStatus(dictionary.quote.error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      dictionary.contact.mailSubject,
      dictionary.quote.error,
      dictionary.quote.success,
      dictionary.quote.submitting,
    ],
  );

  return (
    <>
      <section className="quote-section" id="contact">
        <div className="section-inner quote-layout">
          <div className="quote-copy" data-reveal>
            <p className="eyebrow">{dictionary.quote.eyebrow}</p>
            <h2>{dictionary.quote.title}</h2>
            <p>{dictionary.quote.text}</p>
          </div>

          <form className="quote-form" onSubmit={onSubmit} data-reveal>
            <label>
              <span>{dictionary.quote.fields.name}</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>{dictionary.quote.fields.company}</span>
              <input name="company" type="text" autoComplete="organization" />
            </label>
            <label>
              <span>{dictionary.quote.fields.contact}</span>
              <input name="contact" type="text" autoComplete="email" required />
            </label>
            <label>
              <span>{dictionary.quote.fields.route}</span>
              <input
                name="route"
                type="text"
                placeholder={dictionary.quote.fields.routePlaceholder}
              />
            </label>
            <label className="wide">
              <span>{dictionary.quote.fields.cargo}</span>
              <textarea
                name="cargo"
                rows={4}
                placeholder={dictionary.quote.fields.cargoPlaceholder}
              />
            </label>
            <button
              className="button button-primary wide"
              type="submit"
              disabled={isSubmitting}
            >
              <Send size={18} />
              <span>
                {isSubmitting
                  ? dictionary.quote.submitting
                  : dictionary.quote.button}
              </span>
            </button>
            <p
              className={`form-status ${statusTone === "error" ? "is-error" : ""} wide`}
              aria-live="polite"
            >
              {status}
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-copy">
            <BrandWordmark className="footer-wordmark" />
            <span className="footer-contact-person">
              {BRAND_CONTACT_PERSON}
            </span>
            <span className="footer-legal-name">{BRAND_FULL_NAME}</span>
            <span>{dictionary.footer}</span>
          </div>
          <nav className="footer-contact-list" aria-label="Contact shortcuts">
            {footerContacts.map(({ external, href, label, value }) => (
              <a
                className="footer-contact-item"
                href={href}
                key={label}
                rel={external ? "noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                <span>{label}</span>
                <strong>{value}</strong>
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
