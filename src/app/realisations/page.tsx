"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  X,
  CheckCircle2,
  Calendar,
  Building,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import {
  PROJECTS_DATA,
  CATEGORIES_LIST,
  ProjectCategory,
  ProjectItem,
} from "@/data/projects";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      {/* En-tête de la galerie avec animation au scroll */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <ScrollReveal>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">
              Galerie de Réalisations & Projets
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-light text-ink tracking-tight leading-tight">
              Nos projets et <span className="font-semibold text-ink">réalisations numériques.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed font-normal">
              Explorez notre sélection de projets web, prototypes d&apos;applications mobiles, identités de marque et visuels conçus avec rigueur et créativité.
            </p>
          </div>
        </ScrollReveal>

        {/* Filtres par catégorie */}
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
      </div>

      {/* Grille des réalisations avec Layout Animation fluide & Zoom lent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout={!shouldReduceMotion}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
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
                  {/* Conteneur image avec zoom lent au survol (700ms) */}
                  <div className="relative h-56 w-full overflow-hidden bg-surface-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Pastille catégorie */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="tagline-label text-[10px] px-3 py-1 rounded-full bg-white/95 text-ink shadow-soft border border-ink/10">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Statut projet */}
                    <div className="absolute bottom-3.5 left-3.5 text-white">
                      <span className="text-xs font-medium text-primary-200 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Détails du projet */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-xs text-ink-light mb-2 font-normal">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    <h2 className="text-lg font-medium text-ink group-hover:text-primary transition-colors duration-250">
                      {project.title}
                    </h2>

                    <p className="mt-2.5 text-sm text-ink-muted line-clamp-2 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Mots-clés */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
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

                {/* Action d'étude de cas */}
                <div className="p-7 pt-0 border-t border-ink/[0.06] flex items-center justify-between mt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 tagline-label text-[10px] font-semibold text-ink group-hover:text-primary transition-colors duration-250 active:scale-[0.98]"
                  >
                    <span>Étudier l&apos;étude de cas</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-250" />
                  </button>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full text-ink-muted hover:text-primary hover:bg-surface-muted transition-colors duration-250 active:scale-[0.95]"
                      title="Voir l'aperçu"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modale d'Étude de Cas Détaillée */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-ink/10">
            {/* Bannière Image Modale */}
            <div className="relative h-64 sm:h-72 w-full bg-ink">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors active:scale-95"
                aria-label="Fermer la vue détaillée"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tagline-label text-[10px] px-3 py-0.5 rounded-full bg-primary text-white">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs text-white/60">
                    {selectedProject.status} • {selectedProject.year}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Corps de la Modale */}
            <div className="p-7 sm:p-9 space-y-7">
              {/* Informations Client */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-6 border-b border-ink/[0.06] text-xs">
                <div>
                  <span className="tagline-label text-[10px] text-ink-light block mb-1">Commanditaire</span>
                  <p className="font-semibold text-ink flex items-center gap-1.5">
                    <Building className="h-3.5 w-3.5 text-primary" />
                    <span>{selectedProject.client}</span>
                  </p>
                </div>
                <div>
                  <span className="tagline-label text-[10px] text-ink-light block mb-1">Année</span>
                  <p className="font-semibold text-ink flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-secondary" />
                    <span>{selectedProject.year}</span>
                  </p>
                </div>
                <div>
                  <span className="tagline-label text-[10px] text-ink-light block mb-1">Statut</span>
                  <p className="font-semibold text-primary">{selectedProject.status}</p>
                </div>
              </div>

              {/* Présentation Détaillée */}
              <div>
                <h4 className="tagline-label text-xs text-ink mb-2 font-semibold">Présentation du projet</h4>
                <p className="text-sm text-ink-muted leading-relaxed font-normal">
                  {selectedProject.description}
                </p>
              </div>

              {/* Livrables & Déploiement */}
              <div>
                <h4 className="tagline-label text-xs text-ink mb-3 font-semibold">Fonctionnalités et réalisations</h4>
                <div className="space-y-2">
                  {selectedProject.features.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="tagline-label text-xs text-ink mb-2.5 font-semibold">Technologies & Outils</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-surface-muted border border-ink/[0.06] text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA dans la modale */}
              <div className="pt-6 border-t border-ink/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-ink-muted">
                  Vous souhaitez réaliser un projet similaire ?
                </p>
                <Link
                  href={`/devis?ref=${selectedProject.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full transition-all duration-250 active:scale-[0.98] group"
                >
                  <span>Demander un devis pour un projet équivalent</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
