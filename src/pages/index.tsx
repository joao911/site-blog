"use client";

import { FeatureSection } from "@/components/FeatureSection/Index";
import { HeroSection } from "@/components/HeroSection";
import { SectionCallToHistory } from "@/components/SectionCallToHistory";
import { SectionSupport } from "@/components/SectionSupport";

export default function Home() {
  return (
    <div>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SectionCallToHistory />
        <SectionSupport />
      </article>
    </div>
  );
}
