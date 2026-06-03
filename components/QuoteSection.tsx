"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Send } from "lucide-react";
import { FormEvent, useCallback, useMemo, useState } from "react";

const contactInfo = {
  phoneDisplay: "+90 555 023 00 23",
  phoneHref: "tel:+905550230023",
  email: "info@gakkotransport23.com",
  mapHref: "https://www.google.com/maps/search/?api=1&query=Elazig%20Turkiye",
  addressDisplay: "Elazig / Turkiye",
  whatsappHref: "https://wa.me/905550230023"
};

export function QuoteSection() {
  const { dictionary } = useLanguage();
  const [status, setStatus] = useState("");

  const footerContacts = useMemo(
    () => [
      {
        href: contactInfo.phoneHref,
        label: dictionary.contact.channels.phone.label,
        value: contactInfo.phoneDisplay
      },
      {
        href: `mailto:${contactInfo.email}`,
        label: dictionary.contact.channels.email.label,
        value: contactInfo.email
      },
      {
        href: contactInfo.whatsappHref,
        label: dictionary.contact.channels.whatsapp.label,
        value: "WhatsApp",
        external: true
      },
      {
        href: contactInfo.mapHref,
        label: dictionary.contact.channels.address.label,
        value: contactInfo.addressDisplay,
        external: true
      }
    ],
    [dictionary.contact.channels]
  );

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const body = [
        `${dictionary.quote.fields.name}: ${formData.get("name") ?? ""}`,
        `${dictionary.quote.fields.company}: ${formData.get("company") ?? ""}`,
        `${dictionary.quote.fields.contact}: ${formData.get("contact") ?? ""}`,
        `${dictionary.quote.fields.route}: ${formData.get("route") ?? ""}`,
        `${dictionary.quote.fields.cargo}: ${formData.get("cargo") ?? ""}`
      ].join("\n");
      const subject = encodeURIComponent(dictionary.contact.mailSubject);
      const encodedBody = encodeURIComponent(body);

      setStatus(dictionary.quote.success);
      event.currentTarget.reset();
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${encodedBody}`;
    },
    [
      dictionary.contact.mailSubject,
      dictionary.quote.fields.cargo,
      dictionary.quote.fields.company,
      dictionary.quote.fields.contact,
      dictionary.quote.fields.name,
      dictionary.quote.fields.route,
      dictionary.quote.success
    ]
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
              <input name="route" type="text" placeholder={dictionary.quote.fields.routePlaceholder} />
            </label>
            <label className="wide">
              <span>{dictionary.quote.fields.cargo}</span>
              <textarea name="cargo" rows={4} placeholder={dictionary.quote.fields.cargoPlaceholder} />
            </label>
            <button className="button button-primary wide" type="submit">
              <Send size={18} />
              <span>{dictionary.quote.button}</span>
            </button>
            <p className="form-status wide" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-copy">
            <span>GakkoTransport23</span>
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
