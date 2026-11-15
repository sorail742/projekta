import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande de Devis Personnalisé",
  description:
    "Estimez le coût de votre projet numérique en quelques étapes simples. Recevez une proposition détaillée et chiffrée sous 24 à 48 heures.",
  openGraph: {
    title: "Demande de Devis en Ligne | PROJEKTA",
    description:
      "Formulaire interactif d'estimation de projet : développement, graphisme, formations.",
  },
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
