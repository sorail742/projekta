import React from "react";
import {
  MessageSquare,
  Search,
  FileCheck,
  Code,
  Rocket,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const STEPS = [
  {
    step: "01",
    title: "Prise de contact",
    icon: MessageSquare,
    description:
      "Premier échange via notre formulaire, WhatsApp ou par téléphone pour cerner les grandes lignes de votre demande.",
  },
  {
    step: "02",
    title: "Compréhension du besoin",
    icon: Search,
    description:
      "Analyse approfondie de votre cible, de vos objectifs métiers, de votre identité et des fonctionnalités attendues.",
  },
  {
    step: "03",
    title: "Étude & Proposition",
    icon: FileCheck,
    description:
      "Élaboration d'une proposition technique détaillée accompagnée d'un devis transparent et d'un calendrier précis.",
  },
  {
    step: "04",
    title: "Réalisation du projet",
    icon: Code,
    description:
      "Phase active de design UI/UX et de développement, jalonnée de points d'avancement pour valider chaque étape.",
  },
  {
    step: "05",
    title: "Livraison & Accompagnement",
    icon: Rocket,
    description:
      "Mise en ligne, tests finaux, remise des livrables et formation pratique à la prise en main de vos outils.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Méthodologie de travail"
          title="Un processus transparent en 5 étapes pour garantir votre succès"
          subtitle="De la première idée jusqu'au déploiement de votre solution, chaque étape est structurée avec rigueur et clarté."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] hover:border-primary/40 shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                {/* Pastille numéro d'étape */}
                <span className="tagline-label text-[10px] px-3 py-1 rounded-full bg-white border border-ink/10 text-ink mb-5">
                  Étape {step.step}
                </span>

                {/* Boîtier d'icône */}
                <div className="h-11 w-11 rounded-2xl bg-white border border-ink/[0.06] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-4">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Titre */}
                <h3 className="text-sm font-semibold text-ink group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs text-ink-muted leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
