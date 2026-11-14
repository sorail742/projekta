import React from "react";
import {
  Layers,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const REASONS = [
  {
    icon: Layers,
    title: "Solutions adaptées aux besoins réels",
    description:
      "Nous rejetons les solutions génériques toutes faites. Chaque projet est dimensionné pour répondre exactement à vos objectifs sans complexité inutile.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement personnalisé",
    description:
      "Un interlocuteur dédié vous conseille à chaque étape, de la clarification de l'idée jusqu'au déploiement et à la prise en main.",
  },
  {
    icon: Sparkles,
    title: "Créativité et innovation",
    description:
      "Nous allions un sens esthétique moderne aux technologies les plus récentes pour valoriser durablement votre réputation.",
  },
  {
    icon: TrendingUp,
    title: "Approche orientée vers les résultats",
    description:
      "Génération de prospects, fluidité d'utilisation, clarté des messages : nos livrables sont pensés pour créer de la valeur économique réelle.",
  },
  {
    icon: Headphones,
    title: "Écoute et compréhension",
    description:
      "Nous accordons une priorité absolue à l'écoute de votre contexte pour vous proposer des solutions pertinentes et pérennes.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Notre engagement"
          title="Pourquoi choisir PROJEKTA pour vos projets numériques ?"
          subtitle="Nous combinons rigueur technique, sensibilité artistique et accompagnement de proximité pour transformer vos ambitions en réussites concrètes."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Garantie de qualité PROJEKTA</span>
                </div>
              </div>
            );
          })}

          {/* Callout box */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-800 to-projekta-deep text-white flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                La promesse PROJEKTA
              </span>
              <h3 className="mt-2 text-2xl font-heading font-bold text-white">
                « Faire du numérique un levier de croissance accessible et crédible. »
              </h3>
              <p className="mt-4 text-sm text-emerald-100/90 leading-relaxed">
                Que vous soyez un jeune entrepreneur, une PME établie ou une organisation, nous mettons le même niveau d&apos;exigence dans chacun de nos partenariats.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <span className="text-xs font-medium text-emerald-200">
                Basé en République de Guinée • Actif à l&apos;international
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
