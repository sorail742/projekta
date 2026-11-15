import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services Numériques & Digitaux",
  description:
    "Découvrez les expertises PROJEKTA : développement web & mobile sur-mesure, identité visuelle & branding, communication digitale, portfolios professionnels et formations certifiantes.",
  openGraph: {
    title: "Nos Services Numériques & Digitaux | PROJEKTA",
    description:
      "Développement web & mobile, graphisme, communication et formations par des experts passionnés.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
