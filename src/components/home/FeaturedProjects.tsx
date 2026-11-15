"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PROJECTS_DATA } from "@/data/projects";
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

export function FeaturedProjects() {
  // Sélection des 3 projets majeurs réellement publiables
  const featured = PROJECTS_DATA.slice(0, 3);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#F7F8FA] border-b border-ink/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <SectionHeader
              badge="Portfolio & Réalisations"
              title="Aperçu de nos projets récents"
              subtitle="Découvrez des plateformes web, applications mobiles et identités de marque concrètes, conçues avec précision pour nos partenaires."
              align="left"
              className="mb-0"
            />

            <Link
              href="/realisations"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-primary transition-colors duration-250 active:scale-[0.98] group shrink-0"
            >
              <span>Voir toute la galerie</span>
              <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Grille des réalisations : image, catégorie en étiquette, titre, lien */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <StaggerCard key={project.id} className="h-full">
              <div className="h-full group rounded-3xl bg-white overflow-hidden border border-ink/[0.08] shadow-card hover:shadow-card-hover hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Conteneur image avec zoom lent (700ms) au survol et ratio soigné */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#F7F8FA]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Catégorie en étiquette signature */}
                    <div className="absolute top-4 left-4">
                      <span className="tagline-label text-[10px] px-3.5 py-1.5 rounded-full bg-white/95 text-ink shadow-soft border border-ink/10 tracking-[0.2em] uppercase">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Statut projet en pastille lumineuse */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-xs font-medium text-white/90 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Contenu textuel */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-xs text-ink-light mb-2 font-normal">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-lg font-medium text-ink group-hover:text-primary transition-colors duration-250 leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-ink-muted line-clamp-2 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Mots-clés */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F7F8FA] text-ink-muted border border-ink/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pied de carte avec lien direct vers la réalisation */}
                <div className="px-7 pb-6 pt-3 border-t border-ink/[0.06] flex items-center justify-between text-xs text-ink-light">
                  <span className="tagline-label text-[10px] text-ink-light">
                    Étude de cas
                  </span>

                  <Link
                    href={`/realisations`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink group-hover:text-primary transition-colors duration-250 active:scale-[0.98]"
                  >
                    <span>Découvrir</span>
                    <ArrowUpRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-250" />
                  </Link>
                </div>
              </div>
            </StaggerCard>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
