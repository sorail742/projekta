import React from "react";
import {
  MessageSquare,
  Search,
  FileCheck,
  Code,
  Rocket,
  ArrowRight,
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
    <section className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Méthodologie de travail"
          title="Un processus transparent en 5 étapes pour garantir votre succès"
          subtitle="De la première idée jusqu'au déploiement de votre solution, chaque étape est structurée avec rigueur et clarté."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all group"
              >
                {/* Step number badge */}
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 mb-4">
                  Étape {step.step}
                </span>

                {/* Icon box */}
                <div className="h-12 w-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-emerald-700 group-hover:scale-110 group-hover:bg-emerald-700 group-hover:text-white transition-all mb-4">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
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
