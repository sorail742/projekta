import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      <WhyUsSection />
      <FeaturedProjects />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
