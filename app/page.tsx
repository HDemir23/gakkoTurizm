"use client";

import { Capabilities } from "@/components/Capabilities";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeroTruckImage } from "@/components/HeroTruckImage";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Process } from "@/components/Process";
import { QuoteSection } from "@/components/QuoteSection";
import { Services } from "@/components/Services";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <LanguageProvider>
      <HeroTruckImage />
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Services />
        <Process />
        <QuoteSection />
      </main>
    </LanguageProvider>
  );
}
