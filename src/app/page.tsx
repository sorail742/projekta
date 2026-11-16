import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";

// Optimisation Lighthouse : Chargement différé des sections en dessous du pli initial
// Réduit drastiquement le TBT (Total Blocking Time) et le First Load JS sur mobile
const IntroSection = dynamic(
  () => import("@/components/home/IntroSection").then((m) => m.IntroSection)
);
const ServicesOverview = dynamic(
  () => import("@/components/home/ServicesOverview").then((m) => m.ServicesOverview)
);
const WhyUsSection = dynamic(
  () => import("@/components/home/WhyUsSection").then((m) => m.WhyUsSection)
);
const FeaturedProjects = dynamic(
  () => import("@/components/home/FeaturedProjects").then((m) => m.FeaturedProjects)
);
const ProcessSection = dynamic(
  () => import("@/components/home/ProcessSection").then((m) => m.ProcessSection)
);
const CtaSection = dynamic(
  () => import("@/components/home/CtaSection").then((m) => m.CtaSection)
);

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
