import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";
import { SectionCallToAction } from "../../components/Layout/components/SectionCallToAction";
import { SectionCallToHistory } from "./components/SectionCallToHistory";
import { SectionSupport } from "./components/SectionSupport";

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
