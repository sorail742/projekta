"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
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

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Galerie de Réalisations & Projets
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Nos projets et réalisations numériques.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Explorez notre sélection de projets web, prototypes d&apos;applications mobiles, identités de marque et visuels conçus avec rigueur et créativité.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-slate-200">
          {CATEGORIES_LIST.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/95 text-slate-900 shadow-sm backdrop-blur-xs">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-xs flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-medium">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="text-xl font-heading font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h2>

                  <p className="mt-2.5 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Étudier l&apos;étude de cas</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-slate-100 transition-colors"
                    title="Voir l'aperçu"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200">
            {/* Modal Image banner */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                aria-label="Fermer la vue détaillée"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 text-xs font-semibold rounded-full bg-emerald-500 text-slate-950">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-300">
                    {selectedProject.status} • {selectedProject.year}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Client & Contexte
                </h4>
                <p className="text-base text-slate-800 font-medium">
                  {selectedProject.client}
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                    Le Défi
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block mb-2">
                    La Solution PROJEKTA
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Fonctionnalités & Points forts :
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 text-center sm:text-left">
                  Vous souhaitez réaliser un projet similaire pour votre marque ?
                </p>
                <Link
                  href="/devis"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors text-center"
                >
                  Demander un devis pour ce type de projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
