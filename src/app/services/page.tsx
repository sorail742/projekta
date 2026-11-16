"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Palette,
  Briefcase,
  Share2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { SERVICES_DATA } from "@/data/services";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export default function ServicesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="h-6 w-6 text-primary" />;
      case "Palette":
        return <Palette className="h-6 w-6 text-secondary" />;
      case "Briefcase":
        return <Briefcase className="h-6 w-6 text-primary" />;
      case "Share2":
        return <Share2 className="h-6 w-6 text-secondary" />;
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6 text-primary" />;
      default:
        return <Sparkles className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      {/* En-tête du catalogue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <ScrollReveal>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">
              Catalogue des Prestations
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-light text-ink tracking-tight leading-tight">
              5 pôles d&apos;expertise pour tous vos{" "}
              <span className="font-semibold text-ink">défis numériques.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed font-normal">
              De l&apos;ingénierie web à la création visuelle en passant par le community management et la formation, découvrez nos solutions d&apos;accompagnement complètes et sur mesure.
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation rapide par ancres */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2 pt-5 border-t border-ink/10">
            {SERVICES_DATA.map((srv) => (
              <a
                key={srv.id}
                href={`#${srv.id}`}
                className="tagline-label text-[10px] px-4 py-2 rounded-full bg-surface-muted border border-ink/[0.08] hover:border-primary/50 hover:text-primary transition-all duration-250 active:scale-[0.97] text-ink-muted"
              >
                {srv.title}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Liste détaillée des 5 Pôles avec animation au scroll */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {SERVICES_DATA.map((service) => {
          return (
            <ScrollReveal key={service.id}>
              <section
                id={service.id}
                className="group relative scroll-mt-32 rounded-3xl bg-white border border-ink/[0.06] p-7 sm:p-10 lg:p-12 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Bordure dégradée vert→bleu qui apparaît au survol */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-0"
                >
                  <div className="w-full h-full bg-white rounded-[22.5px]" />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                  {/* Colonne gauche : Synthèse du pôle */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="h-12 w-12 rounded-2xl bg-surface-muted border border-ink/[0.06] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {getIcon(service.iconName)}
                        </div>
                        <span className="tagline-label text-xs text-primary font-semibold">
                          PÔLE {service.number}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-light text-ink leading-snug">
                        {service.title}
                      </h2>

                      <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                        {service.fullDescription}
                      </p>
                    </div>

                    {/* Public ciblé & CTA */}
                    <div className="space-y-5 pt-5 border-t border-ink/[0.06]">
                      <div>
                        <span className="tagline-label text-[10px] text-ink-light block mb-2.5">
                          Public concerné :
                        </span>
                        <ul className="text-xs text-ink-muted space-y-1.5 font-normal">
                          {service.targetAudience.map((target, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                              <span>{target}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/devis?service=${service.id}`}
                          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full shadow-soft transition-all duration-250 active:scale-[0.98] group/btn"
                        >
                          <span>Demander un accompagnement</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform duration-250" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Colonne droite : Prestations détaillées & Livrables */}
                  <div className="lg:col-span-7 bg-surface-muted rounded-3xl p-7 sm:p-9 border border-ink/[0.06] flex flex-col justify-between space-y-7">
                    <div>
                      <h3 className="tagline-label text-xs text-ink mb-5 flex items-center gap-2 font-semibold">
                        <Layers className="h-4 w-4 text-primary" />
                        <span>Prestations incluses dans ce pôle :</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.prestations.map((presta, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3.5 rounded-2xl bg-white border border-ink/[0.06] flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted shadow-soft font-normal"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{presta}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Livrables & Atouts */}
                    <div className="pt-5 border-t border-ink/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                      <div>
                        <span className="tagline-label text-[10px] text-ink block mb-2 font-semibold">
                          Atouts clés :
                        </span>
                        <ul className="text-ink-muted space-y-1 font-normal">
                          {service.benefits.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-center gap-1.5">
                              <span className="text-primary font-bold">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="tagline-label text-[10px] text-ink block mb-2 font-semibold">
                          Livrables inclus :
                        </span>
                        <ul className="text-ink-muted space-y-1 font-normal">
                          {service.deliverables.map((d, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-1.5">
                              <span className="text-secondary font-bold">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Bannière d'appel à l'action finale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <ScrollReveal>
          <div className="rounded-3xl bg-ink text-white p-8 sm:p-14 border border-white/10 shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="tagline-label text-primary text-xs">
                Votre projet sur mesure
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-light text-white">
                Une idée à modéliser ou un défi spécifique ?
              </h3>
              <p className="mt-3 text-sm text-white/60 font-normal leading-relaxed">
                Consultez nos experts pour une séance de cadrage sans engagement et obtenez un devis précis adapté à votre feuille de route.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink bg-white hover:bg-primary hover:text-white rounded-full transition-all duration-250 active:scale-[0.98] group"
              >
                <span>Demander un devis</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
