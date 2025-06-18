"use client";

import { FeatureSection } from "@/components/FeatureSection/Index";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <article className="flex flex-col">
        <HeroSection />
      </article>
      <article className="flex flex-col">
        <FeatureSection />
      </article>
    </div>
  );
}
