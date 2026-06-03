"use client";

import { useEffect, useRef } from "react";

const HERO_VIDEO_SRC = "/VIDEO-2026-06-03-22-15-34.mp4";
const HERO_VIDEO_POSTER = "/hero-iveco-truck.png";
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function HeroMedia() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canTrackPointer = window.matchMedia("(pointer: fine)").matches && !reducedMotion;
    let raf = 0;
    let scrollTarget = 0;
    let scrollProgress = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paint = () => {
      raf = 0;
      scrollProgress += (scrollTarget - scrollProgress) * (reducedMotion ? 1 : 0.08);

      scene.style.setProperty("--media-opacity", String(clamp(1 - scrollProgress * 1.18, 0, 1).toFixed(3)));
      scene.style.setProperty("--media-x", `${(-86 * scrollProgress + pointerX * 8).toFixed(2)}px`);
      scene.style.setProperty("--media-y", `${(48 * scrollProgress + pointerY * 6).toFixed(2)}px`);
      scene.style.setProperty("--media-scale", String((1.02 + scrollProgress * 0.05).toFixed(3)));
      scene.style.setProperty("--road-offset", `${(-540 * scrollProgress).toFixed(2)}px`);

      if (!reducedMotion && Math.abs(scrollTarget - scrollProgress) > 0.002) {
        raf = window.requestAnimationFrame(paint);
      }
    };

    const schedulePaint = () => {
      if (!raf) raf = window.requestAnimationFrame(paint);
    };

    const updateScroll = () => {
      scrollTarget = clamp(window.scrollY / (window.innerHeight * 1.18), 0, 1);
      schedulePaint();
    };

    const updatePointer = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth - 0.5;
      pointerY = event.clientY / window.innerHeight - 0.5;
      schedulePaint();
    };

    updateScroll();
    paint();

    window.addEventListener("scroll", updateScroll, { passive: true });
    if (canTrackPointer) window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateScroll);
      if (canTrackPointer) window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div ref={sceneRef} className="hero-media-scene" aria-hidden="true">
      <video
        className="hero-media-video"
        autoPlay
        disablePictureInPicture
        loop
        muted
        playsInline
        poster={HERO_VIDEO_POSTER}
        preload="auto"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="hero-road-lines" />
    </div>
  );
}
