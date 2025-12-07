import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { SectionSupport } from "./components/SectionSupport";
import { SectionCallToHistory } from "./components/SectionCallToHistory";

export const LandingPage = () => {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SectionCallToHistory />
      <SectionSupport />
    </article>
  );
};
