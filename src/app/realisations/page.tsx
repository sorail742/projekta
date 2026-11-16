"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import {
  PROJECTS_DATA,
  CATEGORIES_LIST,
  ProjectItem,
} from "@/data/projects";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const shouldReduceMotion = useReducedMotion();

  // Règle de crédibilité absolue : uniquement les projets avec autorisation expresse et capture réelle
  const authorizedProjects = PROJECTS_DATA.filter(
    (p) => p.autorisationPublication === true && Boolean(p.imageReelle)
  );

  const filteredProjects =
    activeCategory === "all"
      ? authorizedProjects
      : authorizedProjects.filter((p) => p.categorie.toLowerCase().includes(activeCategory));

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      {/* En-tête de la galerie */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <ScrollReveal>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">
              Portfolio & Réalisations
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-light text-ink tracking-tight leading-tight">
              Nos projets et <span className="font-semibold text-ink">réalisations numériques.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed font-normal">
              Découvrez les solutions web, applications et identités graphiques conçues avec rigueur et sens du détail pour nos partenaires.
            </p>
          </div>
        </ScrollReveal>

        {/* Filtres par catégorie (uniquement visibles si des projets sont publiés) */}
        {authorizedProjects.length > 0 && (
          <ScrollReveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2 pt-5 border-t border-ink/10">
              {CATEGORIES_LIST.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`tagline-label text-[10px] px-4 py-2 rounded-full border transition-all duration-250 active:scale-[0.97] ${
                      isActive
                        ? "bg-ink text-white border-ink shadow-soft"
                        : "bg-surface-muted text-ink-muted border-ink/10 hover:border-primary/50 hover:text-ink"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {authorizedProjects.length === 0 ? (
          /* État d'attente élégant et transparent : aucune fausse réalisation */
          <ScrollReveal delay={0.1}>
            <div className="relative rounded-3xl bg-white p-10 sm:p-16 lg:p-20 border border-ink/[0.08] shadow-card text-center max-w-3xl mx-auto overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="h-16 w-16 rounded-2xl bg-[#F7F8FA] border border-ink/[0.08] flex items-center justify-center text-primary mb-6 shadow-soft">
                  <Sparkles strokeWidth={1.5} className="h-7 w-7" />
                </div>

                <span className="tagline-label text-[10px] text-primary bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full uppercase tracking-widest mb-4">
                  Transparence & Rigueur
                </span>

                <h2 className="text-2xl sm:text-4xl font-light text-ink tracking-tight mb-4">
                  Nos premières réalisations arrivent bientôt
                </h2>

                <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl mb-8 font-normal">
                  Nous finalisons actuellement plusieurs projets sur mesure pour nos premiers clients. Conformément à notre charte de confidentialité et de rigueur, seules les réalisations disposant d&apos;une autorisation formelle de diffusion seront publiées dans cette galerie.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/devis"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full transition-all duration-250 shadow-soft active:scale-[0.98] group"
                  >
                    <span>Démarrer un projet</span>
                    <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider text-ink hover:text-primary transition-colors duration-250"
                  >
                    <span>Nous contacter directement</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          /* Grille des réalisations réelles autorisées */
          <motion.div
            layout={!shouldReduceMotion}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project: ProjectItem) => (
                <motion.div
                  key={project.id}
                  layout={!shouldReduceMotion}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-3xl bg-white overflow-hidden border border-ink/[0.06] shadow-card hover:shadow-card-hover hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-60 w-full overflow-hidden bg-surface-muted">
                      <Image
                        src={project.imageReelle}
                        alt={project.titre}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="tagline-label text-[10px] px-3 py-1 rounded-full bg-white/95 text-ink shadow-soft border border-ink/10">
                          {project.categorie}
                        </span>
                      </div>
                      <div className="absolute bottom-3.5 left-3.5 text-white">
                        <span className="text-xs font-medium text-white/95 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {project.statut}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <h2 className="text-lg font-medium text-ink leading-snug">
                        {project.titre}
                      </h2>
                      <p className="mt-2.5 text-sm text-ink-muted leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {project.lien && (
                    <div className="p-7 pt-0 border-t border-ink/[0.06] flex items-center justify-between mt-4">
                      <a
                        href={project.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
                      >
                        <span>Consulter le projet</span>
                        <ExternalLink strokeWidth={1.5} className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
