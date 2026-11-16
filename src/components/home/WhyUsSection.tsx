"use client";

import React from "react";
import {
  Layers,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

export function WhyUsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white border-b border-ink/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Notre engagement"
            title="Pourquoi choisir PROJEKTA pour vos projets numériques ?"
            subtitle="Nous combinons rigueur technique, sensibilité artistique et accompagnement de proximité pour transformer vos ambitions en réussites concrètes."
            align="center"
          />
        </ScrollReveal>

        {/* =========================================================================
            GRILLE ASYMÉTRIQUE HAUTE PRÉCISION AVEC GRANDS CHIFFRES & SÉPARATEURS EN TRAITS FINS
        ========================================================================= */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* CARTE 1 (Majeure, Large - span 7 cols) : Solutions adaptées aux besoins réels */}
          <StaggerCard className="lg:col-span-7 h-full">
            <div className="h-full group relative rounded-3xl bg-[#F7F8FA] p-8 sm:p-10 border border-ink/[0.08] shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-ink/[0.08]">
                  <div className="h-12 w-12 rounded-2xl bg-white border border-ink/[0.06] flex items-center justify-center text-primary shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Layers strokeWidth={1.5} className="h-6 w-6" />
                  </div>
                  <span className="text-5xl sm:text-6xl font-extralight text-ink/20 tracking-tighter select-none">
                    01
                  </span>
                </div>

                <div className="pt-6">
                  <span className="tagline-label text-primary text-[10px] block mb-2 font-semibold">
                    Approche pragmatique
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-ink leading-snug">
                    Solutions rigoureusement adaptées à vos <span className="font-semibold text-ink">besoins réels</span>
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                    Nous rejetons catégoriquement les modèles génériques et les surcoûts injustifiés. Chaque architecture logicielle et chaque identité visuelle est conçue sur mesure pour répondre exactement à vos objectifs d&apos;affaires, sans complexité superflue.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-ink/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-ink-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 strokeWidth={1.5} className="h-4 w-4 text-primary shrink-0" />
                  <span>Aucun coût caché ni superflu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 strokeWidth={1.5} className="h-4 w-4 text-primary shrink-0" />
                  <span>Code maintenable et documenté</span>
                </div>
              </div>
            </div>
          </StaggerCard>

          {/* CARTE 2 (Haute - span 5 cols) : Accompagnement personnalisé */}
          <StaggerCard className="lg:col-span-5 h-full">
            <div className="h-full group relative rounded-3xl bg-white p-8 sm:p-10 border border-ink/[0.08] shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-ink/[0.08]">
                  <div className="h-12 w-12 rounded-2xl bg-[#F7F8FA] border border-ink/[0.06] flex items-center justify-center text-secondary shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <HeartHandshake strokeWidth={1.5} className="h-6 w-6" />
                  </div>
                  <span className="text-5xl sm:text-6xl font-extralight text-ink/20 tracking-tighter select-none">
                    02
                  </span>
                </div>

                <div className="pt-6">
                  <span className="tagline-label text-secondary text-[10px] block mb-2 font-semibold">
                    Proximité & Conseil
                  </span>
                  <h3 className="text-xl font-medium text-ink leading-snug">
                    Accompagnement dédié pas-à-pas
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed font-normal">
                    Un interlocuteur unique et disponible vous guide de l&apos;expression initiale de vos besoins jusqu&apos;à la livraison finale et la formation de vos équipes.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-ink/[0.08] flex items-center gap-2 text-xs font-semibold text-secondary">
                <ShieldCheck strokeWidth={1.5} className="h-4 w-4 shrink-0" />
                <span>Interlocuteur dédié à chaque étape</span>
              </div>
            </div>
          </StaggerCard>

          {/* CARTE 3 (span 4 cols) : Créativité et innovation */}
          <StaggerCard className="lg:col-span-4 h-full">
            <div className="h-full group relative rounded-3xl bg-white p-8 border border-ink/[0.08] shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-ink/[0.08]">
                  <div className="h-11 w-11 rounded-2xl bg-[#F7F8FA] border border-ink/[0.06] flex items-center justify-center text-primary shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Sparkles strokeWidth={1.5} className="h-5 w-5" />
                  </div>
                  <span className="text-4xl sm:text-5xl font-extralight text-ink/20 tracking-tighter select-none">
                    03
                  </span>
                </div>

                <div className="pt-5">
                  <h3 className="text-lg font-medium text-ink leading-snug">
                    Créativité & Sens esthétique
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed font-normal">
                    Nous marions les tendances visuelles contemporaines aux technologies les plus fiables pour valoriser votre crédibilité auprès de vos partenaires.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-ink/[0.08] flex items-center gap-2 text-xs text-primary font-medium">
                <CheckCircle2 strokeWidth={1.5} className="h-3.5 w-3.5 shrink-0" />
                <span>Design unique et soigné</span>
              </div>
            </div>
          </StaggerCard>

          {/* CARTE 4 (span 4 cols) : Approche orientée résultats */}
          <StaggerCard className="lg:col-span-4 h-full">
            <div className="h-full group relative rounded-3xl bg-white p-8 border border-ink/[0.08] shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-ink/[0.08]">
                  <div className="h-11 w-11 rounded-2xl bg-[#F7F8FA] border border-ink/[0.06] flex items-center justify-center text-secondary shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp strokeWidth={1.5} className="h-5 w-5" />
                  </div>
                  <span className="text-4xl sm:text-5xl font-extralight text-ink/20 tracking-tighter select-none">
                    04
                  </span>
                </div>

                <div className="pt-5">
                  <h3 className="text-lg font-medium text-ink leading-snug">
                    Impact & Rentabilité réelle
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed font-normal">
                    Acquisition de prospects, clarté des messages, conversion client : chaque élément livré est pensé comme un investissement productif.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-ink/[0.08] flex items-center gap-2 text-xs text-secondary font-medium">
                <CheckCircle2 strokeWidth={1.5} className="h-3.5 w-3.5 shrink-0" />
                <span>Mesure de performance concrète</span>
              </div>
            </div>
          </StaggerCard>

          {/* CARTE 5 (span 4 cols) : Écoute et compréhension */}
          <StaggerCard className="lg:col-span-4 h-full">
            <div className="h-full group relative rounded-3xl bg-white p-8 border border-ink/[0.08] shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-ink/[0.08]">
                  <div className="h-11 w-11 rounded-2xl bg-[#F7F8FA] border border-ink/[0.06] flex items-center justify-center text-primary shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Headphones strokeWidth={1.5} className="h-5 w-5" />
                  </div>
                  <span className="text-4xl sm:text-5xl font-extralight text-ink/20 tracking-tighter select-none">
                    05
                  </span>
                </div>

                <div className="pt-5">
                  <h3 className="text-lg font-medium text-ink leading-snug">
                    Écoute active & Réactivité
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed font-normal">
                    Nous prenons le temps de comprendre vos contraintes sectorielles et répondons rapidement à vos sollicitations par WhatsApp ou e-mail.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-ink/[0.08] flex items-center gap-2 text-xs text-primary font-medium">
                <CheckCircle2 strokeWidth={1.5} className="h-3.5 w-3.5 shrink-0" />
                <span>Nous répondons rapidement</span>
              </div>
            </div>
          </StaggerCard>

          {/* CARTE 6 (Bannière Promesse PROJEKTA en noir doux #1A1A1A - span 12 cols pleine largeur) */}
          <StaggerCard className="lg:col-span-12">
            <div className="rounded-3xl bg-[#1A1A1A] text-white p-8 sm:p-12 border border-white/10 shadow-card flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              {/* Liseré de filigrane discret */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary tagline-label text-[10px] mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>La promesse PROJEKTA</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white leading-snug">
                  « Faire du numérique un levier de croissance accessible, élégant et crédible. »
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed font-normal">
                  Que vous soyez un jeune créateur, une PME établie ou une institution, nous mettons le même niveau d&apos;exigence dans chacun de nos partenariats.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink bg-white hover:bg-primary hover:text-white rounded-full transition-all duration-250 active:scale-[0.98] shadow-soft group"
                >
                  <span>Notre vision</span>
                  <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
                </Link>
              </div>
            </div>
          </StaggerCard>
        </StaggerGrid>
      </div>
    </section>
  );
}
