"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { PROJECTS_DATA } from "@/data/projects";
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

export function FeaturedProjects() {
  const featured = PROJECTS_DATA.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-surface-muted/60 border-b border-ink/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <Badge variant="primary" className="mb-3.5">
                Portfolio & Projets
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-ink tracking-tight">
                Aperçu de nos <span className="font-semibold text-ink">réalisations</span>
              </h2>
              <p className="mt-3 text-ink-muted max-w-xl text-base font-normal leading-relaxed">
                Découvrez des exemples de plateformes web, chartes graphiques et solutions numériques conçues pour nos clients et partenaires.
              </p>
            </div>

            <Link
              href="/realisations"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-primary transition-colors duration-250 active:scale-[0.98] group"
            >
              <span>Voir toute la galerie de projets</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Grille avec stagger de 0.08s entre les cartes */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <StaggerCard key={project.id} className="h-full">
              <div className="h-full group rounded-3xl bg-white overflow-hidden border border-ink/[0.06] shadow-card hover:shadow-card-hover hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Conteneur image avec zoom lent (700ms) au survol */}
                  <div className="relative h-56 w-full overflow-hidden bg-surface-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Pastille Catégorie */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="tagline-label text-[10px] px-3 py-1 rounded-full bg-white/95 text-ink shadow-soft border border-ink/10">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Statut */}
                    <div className="absolute bottom-3.5 left-3.5 text-white">
                      <span className="text-xs font-medium text-primary-200 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Contenu textuel */}
                  <div className="p-7">
                    <h3 className="text-lg font-medium text-ink group-hover:text-primary transition-colors duration-250">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-ink-muted line-clamp-2 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Mots-clés */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-surface-muted text-ink-muted border border-ink/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pied de carte */}
                <div className="px-7 pb-6 pt-3 border-t border-ink/[0.06] flex items-center justify-between text-xs text-ink-light">
                  <span>
                    {project.client} • {project.year}
                  </span>

                  <Link
                    href="/realisations"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink group-hover:text-primary transition-colors duration-250 active:scale-[0.98]"
                  >
                    <span>Détails</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-250" />
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
