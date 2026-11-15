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
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="h-5 w-5" />;
      case "Palette":
        return <Palette className="h-5 w-5" />;
      case "Briefcase":
        return <Briefcase className="h-5 w-5" />;
      case "Share2":
        return <Share2 className="h-5 w-5" />;
      case "GraduationCap":
        return <GraduationCap className="h-5 w-5" />;
      default:
        return <Sparkles className="h-5 w-5" />;
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-surface-muted/60 border-b border-ink/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Domaines d'intervention"
            title="Des expertises complètes pour propulser vos projets"
            subtitle="Découvrez nos 5 grands pôles de compétences pensés pour répondre à chacun de vos besoins numériques, de la conception technique à la valorisation de marque."
            align="center"
          />
        </ScrollReveal>

        {/* Grille avec stagger de 0.08s déclenchée à 20% de visibilité */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <StaggerCard
              key={service.id}
              className={`h-full ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Carte de service :
                  - Au hover : élévation de 6px (-translate-y-[6px])
                  - Ombre douce (hover:shadow-card-hover)
                  - Bordure en dégradé vert→bleu qui apparaît (opacity-0 -> group-hover:opacity-100)
                  - Icône qui change légèrement d'échelle (group-hover:scale-110)
              */}
              <div className="group relative h-full rounded-3xl bg-white p-8 border border-ink/[0.06] shadow-card hover:shadow-card-hover hover:-translate-y-[6px] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                {/* Bordure dégradée vert→bleu apparaissant au hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-0"
                >
                  <div className="w-full h-full bg-white rounded-[22.5px]" />
                </div>

                <div className="relative z-10">
                  {/* En-tête de carte avec icône animée en échelle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-11 w-11 rounded-2xl bg-surface-muted border border-ink/[0.06] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="tagline-label text-ink-light text-[11px]">
                      {service.number}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-medium text-ink group-hover:text-primary transition-colors duration-250">
                    {service.title}
                  </h3>

                  {/* Description courte */}
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Aperçu des prestations clés */}
                  <div className="mt-6 pt-5 border-t border-ink/[0.06] space-y-2">
                    <span className="tagline-label text-[10px] text-ink-light">
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
                <div className="relative z-10 mt-6 pt-5 border-t border-ink/[0.06]">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink group-hover:text-primary transition-colors duration-250 active:scale-[0.98]"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
                  </Link>
                </div>
              </div>
            </StaggerCard>
          ))}

          {/* Carte Devis Personnalisé intégrée à la grille */}
          <StaggerCard className="h-full">
            <div className="group relative h-full rounded-3xl bg-ink p-8 text-white flex flex-col justify-between border border-white/10 shadow-card hover:shadow-card-hover hover:-translate-y-[6px] transition-all duration-300 overflow-hidden">
              {/* Bordure dégradée au hover sur la carte sombre */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-0"
              >
                <div className="w-full h-full bg-ink rounded-[22.5px]" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 tagline-label text-[10px] text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
                  <Sparkles className="h-3 w-3" />
                  <span>Besoin spécifique ?</span>
                </div>
                <h3 className="text-xl font-light text-white">
                  Vous avez un projet <span className="font-semibold text-primary">sur mesure ?</span>
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed font-normal">
                  Nos équipes étudient votre cahier des charges et conçoivent une solution personnalisée clé en main.
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/devis"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink bg-white hover:bg-primary hover:text-white rounded-full transition-all duration-250 active:scale-[0.98] group"
                >
                  <span>Demander une étude gratuite</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
                </Link>
              </div>
            </div>
          </StaggerCard>
        </StaggerGrid>
      </div>
    </section>
  );
}
