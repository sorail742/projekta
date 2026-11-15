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
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SERVICES_DATA } from "@/data/services";
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

export function ServicesOverview() {
  // Icônes Lucide à trait fin (strokeWidth 1.5)
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 strokeWidth={1.5} className="h-6 w-6 text-primary" />;
      case "Palette":
        return <Palette strokeWidth={1.5} className="h-6 w-6 text-secondary" />;
      case "Briefcase":
        return <Briefcase strokeWidth={1.5} className="h-6 w-6 text-primary" />;
      case "Share2":
        return <Share2 strokeWidth={1.5} className="h-6 w-6 text-secondary" />;
      case "GraduationCap":
        return <GraduationCap strokeWidth={1.5} className="h-6 w-6 text-primary" />;
      default:
        return <Sparkles strokeWidth={1.5} className="h-6 w-6 text-primary" />;
    }
  };

  // Exactement les 5 pôles de compétences officiels PROJEKTA
  const fiveServices = SERVICES_DATA.slice(0, 5);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#F7F8FA] border-b border-ink/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Domaines d'expertise"
            title="Nos 5 pôles de compétences numériques"
            subtitle="Découvrez nos expertises complètes pensées pour répondre à chacun de vos défis, de la conception logicielle à la communication de marque."
            align="center"
          />
        </ScrollReveal>

        {/* Grille des 5 cartes de services avec numérotation 01 à 05 très légère et icônes à trait fin */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {fiveServices.map((service, index) => {
            // Disposition équilibrée : 3 cartes en haut (2 cols chacune), 2 cartes en bas (3 cols chacune)
            const colSpanClass =
              index < 3 ? "lg:col-span-2" : "lg:col-span-3";

            return (
              <StaggerCard
                key={service.id}
                className={`h-full ${colSpanClass}`}
              >
                {/* Carte de service :
                    - Élévation de 6px au hover (-translate-y-[6px])
                    - Ombre douce haut de gamme
                    - Bordure dégradée vert→bleu qui apparaît
                    - Icône à trait fin qui s'agrandit légèrement
                    - Grand numéro 01 à 05 très léger
                */}
                <div className="group relative h-full rounded-3xl bg-white p-7 sm:p-8 border border-ink/[0.08] shadow-card hover:shadow-card-hover hover:-translate-y-[6px] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  {/* Bordure dégradée vert→bleu apparaissant au hover */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-r from-primary via-emerald-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-0"
                  >
                    <div className="w-full h-full bg-white rounded-[22.5px]" />
                  </div>

                  <div className="relative z-10">
                    {/* En-tête : Icône à trait fin (1.5) + Grand numéro très léger */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-[#F7F8FA] border border-ink/[0.06] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-4xl sm:text-5xl font-extralight text-ink/20 tracking-tighter select-none font-sans">
                        {service.number}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-lg sm:text-xl font-medium text-ink group-hover:text-primary transition-colors duration-250 leading-snug">
                      {service.title}
                    </h3>

                    {/* Description courte */}
                    <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>

                    {/* Prestations clés */}
                    <div className="mt-6 pt-5 border-t border-ink/[0.06] space-y-2">
                      <span className="tagline-label text-[10px] text-ink-light block">
                        Prestations clés :
                      </span>
                      <ul className="text-xs text-ink-muted space-y-1.5 font-normal">
                        {service.prestations.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-center gap-2 truncate">
                            <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Lien d'approfondissement */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-ink/[0.06] flex items-center justify-between">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink group-hover:text-primary transition-colors duration-250 active:scale-[0.98]"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
                    </Link>
                    <span className="tagline-label text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      PROJEKTA
                    </span>
                  </div>
                </div>
              </StaggerCard>
            );
          })}
        </StaggerGrid>

        {/* Bandeau d'invitation au sur-mesure sous les 5 cartes */}
        <ScrollReveal delay={0.2} className="mt-12 lg:mt-16">
          <div className="rounded-3xl bg-white border border-ink/[0.08] p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="h-11 w-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 hidden sm:flex">
                <Sparkles strokeWidth={1.5} className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">
                  Vous avez un projet spécifique nécessitant un accompagnement sur mesure ?
                </p>
                <p className="text-xs text-ink-muted mt-0.5">
                  Nos ingénieurs et designers étudient votre cahier des charges et conçoivent une solution adaptée.
                </p>
              </div>
            </div>

            <Link
              href="/devis"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full transition-all duration-250 active:scale-[0.98] shadow-soft shrink-0 group"
            >
              <span>Demander une étude gratuite</span>
              <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
