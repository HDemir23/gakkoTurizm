"use client";

import { Capabilities } from "@/components/Capabilities";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HeroMedia } from "@/components/HeroMedia";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Process } from "@/components/Process";
import { QuoteSection } from "@/components/QuoteSection";
import { Services } from "@/components/Services";
import { TransportRoutes } from "@/components/TransportRoutes";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <LanguageProvider>
      <HeroMedia />
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Services />
        <TransportRoutes />
        <Process />
        <QuoteSection />
      </main>
    </LanguageProvider>
  );
}
