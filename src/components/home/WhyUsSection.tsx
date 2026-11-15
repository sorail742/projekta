"use client";

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
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

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
    <section className="py-24 lg:py-32 bg-white border-b border-ink/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Notre engagement"
            title="Pourquoi choisir PROJEKTA pour vos projets numériques ?"
            subtitle="Nous combinons rigueur technique, sensibilité artistique et accompagnement de proximité pour transformer vos ambitions en réussites concrètes."
            align="center"
          />
        </ScrollReveal>

        {/* Grille avec stagger de 0.08s entre les cartes */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <StaggerCard key={index} className="h-full">
                <div className="h-full p-8 rounded-3xl bg-surface-muted border border-ink/[0.06] hover:border-primary/40 shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="h-11 w-11 rounded-2xl bg-white border border-ink/[0.06] text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium text-ink group-hover:text-primary transition-colors duration-250">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed font-normal">
                      {reason.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-ink/[0.06] flex items-center gap-2 text-xs font-medium text-primary">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Garantie de qualité PROJEKTA</span>
                  </div>
                </div>
              </StaggerCard>
            );
          })}

          {/* Encadré Promesse PROJEKTA */}
          <StaggerCard className="h-full">
            <div className="h-full p-8 rounded-3xl bg-ink text-white flex flex-col justify-between border border-white/10 shadow-card hover:shadow-card-hover hover:-translate-y-[4px] transition-all duration-300">
              <div>
                <span className="tagline-label text-primary text-[10px]">
                  La promesse PROJEKTA
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl font-light text-white leading-snug">
                  « Faire du numérique un levier de croissance accessible et crédible. »
                </h3>
                <p className="mt-4 text-sm text-white/60 leading-relaxed font-normal">
                  Que vous soyez un jeune entrepreneur, une PME établie ou une organisation, nous mettons le même niveau d&apos;exigence dans chacun de nos partenariats.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <span className="text-xs text-white/40 font-normal">
                  Basé en République de Guinée • Actif à l&apos;international
                </span>
              </div>
            </div>
          </StaggerCard>
        </StaggerGrid>
      </div>
    </section>
  );
}
