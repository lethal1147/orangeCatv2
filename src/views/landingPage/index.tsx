import { HomePageLayout } from "@/layouts";
import {
  BmiSection,
  FeatureSection,
  HeroSection,
  HowItWorkSection,
  LandingFooter,
} from "./components";

export default function LandingPage() {
  return (
    <HomePageLayout>
      <HeroSection />
      <FeatureSection />
      <BmiSection />
      <HowItWorkSection />
      <LandingFooter />
    </HomePageLayout>
  );
}
