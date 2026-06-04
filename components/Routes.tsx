"use client";

import { useLanguage } from "@/components/LanguageProvider";
import {
  ArrowRightLeft,
  Globe2,
  MapPinned,
  Route as RouteIcon,
  Star,
  Truck,
} from "lucide-react";
import { useMemo } from "react";

const laneIcons = [ArrowRightLeft, Globe2, MapPinned, Truck];
const visualNodes = ["TR", "GR", "EU"];

export function Routes() {
  const { dictionary } = useLanguage();
  const lanes = useMemo(
    () =>
      dictionary.routes.lanes.map((lane, index) => ({
        ...lane,
        Icon: laneIcons[index] ?? RouteIcon,
        key: `route-${index}`,
      })),
    [dictionary.routes.lanes],
  );

  return (
    <section className="section section-light routes-section" id="routes">
      <div className="section-inner routes-layout">
        <div className="routes-copy" data-reveal>
          <p className="eyebrow">{dictionary.routes.eyebrow}</p>
          <h2>{dictionary.routes.title}</h2>
          <p>{dictionary.routes.text}</p>

          <article className="route-highlight">
            <div className="route-highlight-top">
              <span className="route-badge">
                <Star size={15} aria-hidden="true" />
                {dictionary.routes.primary.badge}
              </span>
              <RouteIcon size={24} aria-hidden="true" />
            </div>
            <h3>{dictionary.routes.primary.title}</h3>
            <p>{dictionary.routes.primary.text}</p>

            <div className="route-line-visual" aria-hidden="true">
              {visualNodes.map((node) => (
                <span className="route-node" key={node}>
                  <strong>{node}</strong>
                </span>
              ))}
            </div>

            <div className="route-stats">
              {dictionary.routes.primary.stats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
          </article>
        </div>

        <div className="route-grid">
          {lanes.map(({ Icon, key, points, text, title }) => (
            <article className="route-card" key={key} data-reveal>
              <div className="route-card-head">
                <span className="route-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
              <div className="route-point-list" aria-label={title}>
                {points.map((point) => (
                  <span className="route-point" key={point}>
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
