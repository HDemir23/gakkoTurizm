"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function HeroTruckImage() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let scrollTarget = 0;
    let scrollProgress = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paint = () => {
      scrollProgress += (scrollTarget - scrollProgress) * (reducedMotion ? 1 : 0.08);

      scene.style.setProperty("--image-opacity", String(clamp(1 - scrollProgress * 1.18, 0, 1).toFixed(3)));
      scene.style.setProperty("--truck-x", `${(-155 * scrollProgress + pointerX * 12).toFixed(2)}px`);
      scene.style.setProperty("--truck-y", `${(72 * scrollProgress + pointerY * 8).toFixed(2)}px`);
      scene.style.setProperty("--truck-scale", String((1 + scrollProgress * 0.055).toFixed(3)));
      scene.style.setProperty("--road-offset", `${(-540 * scrollProgress).toFixed(2)}px`);

      if (!reducedMotion) raf = window.requestAnimationFrame(paint);
    };

    const updateScroll = () => {
      scrollTarget = clamp(window.scrollY / (window.innerHeight * 1.18), 0, 1);
      if (reducedMotion) paint();
    };

    const updatePointer = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth - 0.5;
      pointerY = event.clientY / window.innerHeight - 0.5;
    };

    updateScroll();
    paint();
    if (!reducedMotion) raf = window.requestAnimationFrame(paint);

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div ref={sceneRef} className="hero-media-scene" aria-hidden="true">
      <Image
        className="hero-truck-image"
        src="/hero-iveco-truck.png"
        alt=""
        width={1672}
        height={941}
        priority
        sizes="110vw"
      />
      <div className="hero-road-lines" />
    </div>
  );
}
