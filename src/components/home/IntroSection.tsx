"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

export function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-ink/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          {/* Colonne gauche : Synthèse narrative avec ScrollReveal */}
          <ScrollReveal className="lg:col-span-6 space-y-7">
            <span className="tagline-label text-primary">
              À propos de PROJEKTA
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-light text-ink tracking-tight leading-snug">
              L&apos;allié stratégique de votre réussite à l&apos;ère du{" "}
              <span className="font-semibold text-ink">numérique</span>
            </h2>

            <p className="text-ink-muted text-base sm:text-lg leading-relaxed font-normal">
              {COMPANY_INFO.fullBio}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="h-5 w-5 rounded-full bg-primary-50 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  <strong className="font-semibold text-ink">Conception sur mesure :</strong> des solutions techniques
                  qui s&apos;adaptent à vos besoins réels, sans complexité superflue.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="h-5 w-5 rounded-full bg-primary-50 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  <strong className="font-semibold text-ink">Valorisation de marque :</strong> une image de prestige pour
                  gagner la confiance immédiate de vos partenaires et clients.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="h-5 w-5 rounded-full bg-primary-50 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  <strong className="font-semibold text-ink">Montée en compétences :</strong> des formations pragmatiques
                  pour rendre le numérique accessible à tous les profils.
                </p>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-primary transition-colors duration-250 active:scale-[0.98] group"
              >
                <span>En savoir plus sur notre histoire et notre vision</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Colonne droite : Grille des indicateurs & valeurs avec Stagger */}
          <div className="lg:col-span-6">
            <StaggerGrid className="grid grid-cols-2 gap-4 sm:gap-6">
              {COMPANY_INFO.metrics.map((metric, idx) => (
                <StaggerCard key={idx} className="h-full">
                  <div className="h-full p-7 sm:p-8 rounded-3xl bg-surface-muted border border-ink/[0.06] hover:border-primary/40 hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <span className="text-3xl sm:text-4xl font-light text-ink tracking-tight">
                        {metric.value}
                      </span>
                      <h3 className="mt-2 text-sm sm:text-base font-semibold text-ink">
                        {metric.label}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs text-ink-muted leading-relaxed font-normal">
                      {metric.description}
                    </p>
                  </div>
                </StaggerCard>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
