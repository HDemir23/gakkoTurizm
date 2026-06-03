"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { FileCheck, PackageCheck, ShieldCheck, Wrench } from "lucide-react";
import { useMemo } from "react";

const icons = [PackageCheck, Wrench, FileCheck, ShieldCheck];

export function Capabilities() {
  const { dictionary } = useLanguage();
  const cards = useMemo(
    () =>
      dictionary.capabilities.cards.map((card, index) => ({
        ...card,
        Icon: icons[index] ?? PackageCheck,
        isAccent: index === 3,
        key: `capability-${index}`,
        number: String(index + 1).padStart(2, "0")
      })),
    [dictionary.capabilities.cards]
  );

  return (
    <section className="section section-light" id="capabilities">
      <div className="section-inner">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{dictionary.capabilities.eyebrow}</p>
          <h2>{dictionary.capabilities.title}</h2>
          <p>{dictionary.capabilities.text}</p>
        </div>

        <div className="capability-grid">
          {cards.map(({ Icon, isAccent, key, number, text, title }) => (
            <article className={isAccent ? "capability-card is-accent" : "capability-card"} key={key} data-reveal>
              <div className="card-topline">
                <span>{number}</span>
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
