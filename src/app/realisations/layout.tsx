import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Réalisations & Projets",
  description:
    "Explorez notre portfolio de projets numériques : plateformes e-commerce, applications mobiles, identités de marque et sites vitrines conçus avec rigueur et élégance.",
  openGraph: {
    title: "Nos Réalisations & Projets | PROJEKTA",
    description:
      "Portfolio de solutions digitales d'exception développées pour nos clients partenaires.",
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
