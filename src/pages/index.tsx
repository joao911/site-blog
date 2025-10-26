"use client";

import { FeatureSection } from "@/components/FeatureSection/Index";
import { HeroSection } from "@/components/HeroSection";
import { SectionCallToAction } from "@/components/SectionCallToAction";
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
        <SectionCallToAction />
      </article>
    </div>
  );
}
