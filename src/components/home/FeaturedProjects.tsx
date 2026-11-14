import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { PROJECTS_DATA } from "@/data/projects";

export function FeaturedProjects() {
  // Take first 3 featured projects for home page
  const featured = PROJECTS_DATA.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <Badge variant="primary" className="mb-3">
              Portfolio & Projets
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">
              Aperçu de nos réalisations
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl text-base">
              Découvrez des exemples de plateformes web, chartes graphiques et solutions numériques conçues pour nos clients et partenaires.
            </p>
          </div>

          <Link
            href="/realisations"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-900 group"
          >
            <span>Voir toute la galerie de projets</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image container */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/95 text-slate-800 shadow-sm backdrop-blur-xs">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-xs font-medium text-emerald-300 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {project.client} • {project.year}
                </span>

                <Link
                  href="/realisations"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
                >
                  <span>Détails</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
