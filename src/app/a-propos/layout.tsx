import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de PROJEKTA",
  description:
    "Découvrez la vision, les valeurs et l'équipe de PROJEKTA, dédiée à l'accélération technologique et à la réussite numérique de vos projets.",
  openGraph: {
    title: "À Propos de PROJEKTA | Innovation • Technology • Projects",
    description:
      "Notre mission : concevoir des solutions technologiques robustes, durables et élégantes.",
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
