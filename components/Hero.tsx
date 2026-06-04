"use client";

import { BrandWordmark } from "@/components/BrandWordmark";
import { useLanguage } from "@/components/LanguageProvider";
import { BRAND_SHORT_NAME } from "@/lib/brand";
import { ArrowDown, ArrowUpRight, Languages, Route, ShieldCheck } from "lucide-react";
import { useMemo } from "react";

const statIcons = [ShieldCheck, Route, Languages];

export function Hero() {
  const { dictionary } = useLanguage();
  const stats = useMemo(
    () =>
      dictionary.stats.map((stat, index) => ({
        ...stat,
        Icon: statIcons[index] ?? ShieldCheck,
        key: `stat-${index}`
      })),
    [dictionary.stats]
  );

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">{dictionary.hero.eyebrow}</p>
          <h1 id="hero-title">
            {dictionary.hero.title === BRAND_SHORT_NAME ? (
              <BrandWordmark className="hero-title-wordmark" />
            ) : (
              dictionary.hero.title
            )}
          </h1>
          <p className="hero-lead">{dictionary.hero.lead}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              <ArrowUpRight size={18} />
              <span>{dictionary.hero.primaryCta}</span>
            </a>
            <a className="button button-secondary" href="#capabilities">
              <ArrowDown size={18} />
              <span>{dictionary.hero.secondaryCta}</span>
            </a>
          </div>
        </div>

        <div className="hero-stats" aria-label="Company highlights" data-reveal>
          {stats.map(({ Icon, key, label, value }) => (
            <div className="hero-stat" key={key}>
              <Icon size={19} aria-hidden="true" />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="signal-strip" aria-label="Service signals" data-reveal>
        {dictionary.signals.map((signal, index) => (
          <span key={`signal-${index}`}>{signal}</span>
        ))}
      </div>
    </section>
  );
}
