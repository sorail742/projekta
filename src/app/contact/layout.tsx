import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez Notre Équipe",
  description:
    "Prenez contact avec PROJEKTA par téléphone au +224 624 28 48 74 ou par email à keithsorail@gmail.com. Discutons de vos projets digitaux.",
  openGraph: {
    title: "Contactez PROJEKTA | Innovation • Technology • Projects",
    description:
      "Une idée ou un projet ? Notre équipe d'experts est à votre écoute pour échanger.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
