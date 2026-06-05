"use client";

import { useLanguage } from "@/components/LanguageProvider";
import {
  galleryMedia,
  type GalleryCategory,
  type GalleryMediaItem,
} from "@/lib/galleryMedia";
import { Grid2X2, Images, Rows3, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const INITIAL_VISIBLE_ITEMS = 8;
const galleryFilters = ["all", "trucks", "loading"] as const;

type GalleryFilter = (typeof galleryFilters)[number];

function GalleryLightbox({
  item,
  categoryLabel,
  closeLabel,
  onClose,
}: {
  item: GalleryMediaItem;
  categoryLabel: string;
  closeLabel: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("has-gallery-lightbox");
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("has-gallery-lightbox");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
    >
      <div
        className="gallery-lightbox-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="gallery-lightbox-close"
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
        >
          <X size={21} />
        </button>

        <div className="gallery-lightbox-media">
          <Image
            src={item.src}
            alt={item.alt}
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </div>

        <div className="gallery-lightbox-caption">
          <span>{categoryLabel}</span>
          <strong>{item.caption}</strong>
        </div>
      </div>
    </div>
  );
}

export function OperationsGallery() {
  const { dictionary } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const categories = dictionary.gallery.categories as Record<
    GalleryCategory,
    string
  >;
  const filters = dictionary.gallery.filters as Record<GalleryFilter, string>;
  const filteredMedia = useMemo(
    () =>
      activeFilter === "all"
        ? galleryMedia
        : galleryMedia.filter((item) => item.category === activeFilter),
    [activeFilter],
  );
  const visibleMedia = isExpanded
    ? filteredMedia
    : filteredMedia.slice(0, INITIAL_VISIBLE_ITEMS);
  const hiddenCount = Math.max(filteredMedia.length - INITIAL_VISIBLE_ITEMS, 0);
  const activeItem = useMemo(
    () => galleryMedia.find((item) => item.id === activeItemId),
    [activeItemId],
  );

  const chooseFilter = (filter: GalleryFilter) => {
    setActiveFilter(filter);
    setIsExpanded(false);
  };

  return (
    <section className="section section-light gallery-section" id="gallery">
      <div className="section-inner">
        <div className="gallery-heading-row">
          <div className="section-heading is-compact" data-reveal>
            <p className="eyebrow">{dictionary.gallery.eyebrow}</p>
            <h2>{dictionary.gallery.title}</h2>
            <p>{dictionary.gallery.text}</p>
          </div>

          <div className="gallery-summary" data-reveal>
            <span className="gallery-summary-icon" aria-hidden="true">
              <Images size={24} />
            </span>
            <strong>{galleryMedia.length}</strong>
            <span>{dictionary.gallery.mediaCount}</span>
          </div>
        </div>

        <div className="gallery-filter-bar" role="tablist" aria-label={dictionary.gallery.filterLabel}>
          {galleryFilters.map((filter) => {
            const isActive = filter === activeFilter;
            const count =
              filter === "all"
                ? galleryMedia.length
                : galleryMedia.filter((item) => item.category === filter).length;

            return (
              <button
                key={filter}
                className={isActive ? "gallery-filter is-active" : "gallery-filter"}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => chooseFilter(filter)}
              >
                <span>{filters[filter]}</span>
                <small>{count}</small>
              </button>
            );
          })}
        </div>

        <div className="gallery-grid" aria-label={dictionary.gallery.title}>
          {visibleMedia.map((item) => {
            return (
              <article className="gallery-card" key={item.id} data-reveal>
                <button
                  className="gallery-trigger"
                  type="button"
                  aria-label={`${dictionary.gallery.openLabel}: ${item.caption}`}
                  onClick={() => setActiveItemId(item.id)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                </button>
              </article>
            );
          })}
        </div>

        {hiddenCount > 0 ? (
          <div className="gallery-actions" data-reveal>
            <button
              className="button gallery-toggle"
              type="button"
              aria-expanded={isExpanded}
              aria-controls="gallery"
              onClick={() => setIsExpanded((value) => !value)}
            >
              {isExpanded ? <Rows3 size={18} /> : <Grid2X2 size={18} />}
              <span>
                {isExpanded
                  ? dictionary.gallery.showLess
                  : `${dictionary.gallery.showAll} (${hiddenCount})`}
              </span>
            </button>
          </div>
        ) : null}

        {activeItem ? (
          <GalleryLightbox
            item={activeItem}
            categoryLabel={categories[activeItem.category]}
            closeLabel={dictionary.gallery.closeLabel}
            onClose={() => setActiveItemId(null)}
          />
        ) : null}
      </div>
    </section>
  );
}
