"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PROJECTS_DATA } from "@/data/projects";
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

export function FeaturedProjects() {
  // Règle absolue de crédibilité : uniquement les projets avec autorisation expresse et image réelle
  const publicProjects = PROJECTS_DATA.filter(
    (p) => p.autorisationPublication === true && Boolean(p.imageReelle)
  );

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#F7F8FA] border-b border-ink/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <SectionHeader
              badge="Portfolio & Réalisations"
              title="Aperçu de nos projets"
              subtitle="Des solutions numériques conçues avec rigueur et sens de l'esthétique pour nos partenaires."
              align="left"
              className="mb-0"
            />

            <Link
              href="/realisations"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink hover:text-primary transition-colors duration-250 active:scale-[0.98] group shrink-0"
            >
              <span>Voir l&apos;espace réalisations</span>
              <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
            </Link>
          </div>
        </ScrollReveal>

        {publicProjects.length === 0 ? (
          /* État élégant d'attente : aucune réalisation commerciale fictive */
          <ScrollReveal delay={0.1}>
            <div className="relative rounded-3xl bg-white p-10 sm:p-14 lg:p-16 border border-ink/[0.08] shadow-soft text-center max-w-3xl mx-auto overflow-hidden">
              {/* Accents géométriques discrets en arrière-plan */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="h-14 w-14 rounded-2xl bg-[#F7F8FA] border border-ink/[0.08] flex items-center justify-center text-primary mb-6 shadow-soft">
                  <Sparkles strokeWidth={1.5} className="h-6 w-6" />
                </div>

                <span className="tagline-label text-[10px] text-primary bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full uppercase tracking-widest mb-4">
                  En cours de production
                </span>

                <h3 className="text-2xl sm:text-3xl font-light text-ink tracking-tight mb-4">
                  Nos premières réalisations arrivent bientôt
                </h3>

                <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl mb-8 font-normal">
                  PROJEKTA conçoit actuellement des solutions sur mesure pour ses partenaires. Les études de cas et plateformes validées avec autorisation formelle de publication seront dévoilées ici très prochainement.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/devis"
                    className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full transition-all duration-250 shadow-soft active:scale-[0.98] group"
                  >
                    <span>Démarrer un projet</span>
                    <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider text-ink hover:text-primary transition-colors duration-250"
                  >
                    <span>Échanger sur votre besoin</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          /* Grille des réalisations réelles authentifiées */
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicProjects.slice(0, 3).map((project) => (
              <StaggerCard key={project.id} className="h-full">
                <div className="h-full group rounded-3xl bg-white overflow-hidden border border-ink/[0.08] shadow-card hover:shadow-card-hover hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative h-60 w-full overflow-hidden bg-[#F7F8FA]">
                      <Image
                        src={project.imageReelle}
                        alt={project.titre}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="tagline-label text-[10px] px-3.5 py-1.5 rounded-full bg-white/95 text-ink shadow-soft border border-ink/10 tracking-[0.2em] uppercase">
                          {project.categorie}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs font-medium text-white/95 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {project.statut}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-lg font-medium text-ink leading-snug">
                        {project.titre}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {project.lien && (
                    <div className="px-7 pb-6 pt-3 border-t border-ink/[0.06] flex items-center justify-between text-xs">
                      <a
                        href={project.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
                      >
                        <span>Visiter le projet</span>
                        <ExternalLink strokeWidth={1.5} className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </StaggerCard>
            ))}
          </StaggerGrid>
        )}
      </div>
    </section>
  );
}
