"use client";

import { FeatureSection } from "@/components/FeatureSection/Index";
import { HeroSection } from "@/components/HeroSection";
import { SectionCallToAction } from "@/components/SectionCallToAction";
import { SectionCallToHistory } from "@/components/SectionCallToHistory";
import { SectionSupport } from "@/components/SectionSupport";

import { allPosts } from "contentlayer/generated";

export default function Home() {
  console.log("allPosts", allPosts);
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
