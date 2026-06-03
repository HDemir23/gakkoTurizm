"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Send } from "lucide-react";
import { FormEvent, useCallback, useState } from "react";

export function QuoteSection() {
  const { dictionary } = useLanguage();
  const [status, setStatus] = useState("");

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus(dictionary.quote.success);
      event.currentTarget.reset();
    },
    [dictionary.quote.success]
  );

  return (
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
      <footer className="site-footer">
        <span>GakkoTransport23</span>
        <span>{dictionary.footer}</span>
      </footer>
    </section>
  );
}
