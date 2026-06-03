"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Languages, MapPinned, Truck } from "lucide-react";
import { useMemo } from "react";

const icons = [Truck, Languages, MapPinned];

export function Services() {
  const { dictionary } = useLanguage();
  const items = useMemo(
    () =>
      dictionary.services.items.map((item, index) => ({
        ...item,
        Icon: icons[index] ?? Truck,
        key: `service-${index}`
      })),
    [dictionary.services.items]
  );

  return (
    <section className="section section-burgundy" id="services">
      <div className="section-inner service-layout">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{dictionary.services.eyebrow}</p>
          <h2>{dictionary.services.title}</h2>
          <p>{dictionary.services.text}</p>
        </div>

        <div className="service-list">
          {items.map(({ Icon, key, text, title }) => (
            <article key={key} data-reveal>
              <div className="service-icon">
                <Icon size={21} aria-hidden="true" />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
