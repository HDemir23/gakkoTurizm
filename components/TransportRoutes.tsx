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

export function TransportRoutes() {
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
      <div className="section-inner routes-stack">
        <div className="section-heading routes-heading" data-reveal>
          <p className="eyebrow">{dictionary.routes.eyebrow}</p>
          <h2>{dictionary.routes.title}</h2>
          <p>{dictionary.routes.text}</p>
        </div>

        <article className="route-primary" data-reveal>
          <div className="route-primary-copy">
            <span className="route-badge">
              <Star size={15} aria-hidden="true" />
              {dictionary.routes.primary.badge}
            </span>
            <h3>{dictionary.routes.primary.title}</h3>
            <p>{dictionary.routes.primary.text}</p>
          </div>

          <div className="route-primary-map" aria-hidden="true">
            <div className="route-terminal">
              <strong>TR</strong>
              <span>{dictionary.routes.primary.stats[0]}</span>
            </div>

            <div className="route-bridge">
              <span />
              <ArrowRightLeft size={24} />
              <span />
            </div>

            <div className="route-terminal">
              <strong>GR</strong>
              <span>{dictionary.routes.primary.stats[1]}</span>
            </div>
          </div>

          <div className="route-primary-footer">
            <RouteIcon size={18} aria-hidden="true" />
            <span>{dictionary.routes.primary.stats[2]}</span>
          </div>
        </article>

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
