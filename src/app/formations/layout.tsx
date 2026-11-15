import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations & Montée en Compétences",
  description:
    "Formez-vous aux métiers du numérique avec PROJEKTA : développement web moderne, design UI/UX, bureautique professionnelle et cybersécurité pratique.",
  openGraph: {
    title: "Formations & Montée en Compétences | PROJEKTA",
    description:
      "Programmes intensifs et pratiques pour maîtriser les technologies d'avenir.",
  },
};

export default function FormationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
