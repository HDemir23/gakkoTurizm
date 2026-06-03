"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useMemo } from "react";

export function Process() {
  const { dictionary } = useLanguage();
  const steps = useMemo(
    () =>
      dictionary.process.steps.map((step, index) => ({
        ...step,
        key: `process-${index}`,
        number: index + 1
      })),
    [dictionary.process.steps]
  );

  return (
    <section className="section section-light" id="process">
      <div className="section-inner">
        <div className="section-heading is-compact" data-reveal>
          <p className="eyebrow">{dictionary.process.eyebrow}</p>
          <h2>{dictionary.process.title}</h2>
        </div>

        <div className="timeline">
          {steps.map((step) => (
            <article key={step.key} data-reveal>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
