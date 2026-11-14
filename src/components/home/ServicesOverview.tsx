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
import { SERVICES_DATA, ServiceItem } from "@/data/services";

export function ServicesOverview() {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="h-6 w-6 text-emerald-600" />;
      case "Palette":
        return <Palette className="h-6 w-6 text-emerald-600" />;
      case "Briefcase":
        return <Briefcase className="h-6 w-6 text-emerald-600" />;
      case "Share2":
        return <Share2 className="h-6 w-6 text-emerald-600" />;
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6 text-emerald-600" />;
      default:
        return <Sparkles className="h-6 w-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50/80 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Domaines d'intervention"
          title="Des expertises complètes pour propulser vos projets"
          subtitle="Découvrez nos 5 grands pôles de compétences pensés pour répondre à chacun de vos besoins numériques, de la conception technique à la valorisation de marque."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl bg-white p-7 shadow-xs hover:shadow-xl border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header of the card */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-emerald-700 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Top 3 prestations preview */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Prestations clés :
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {service.prestations.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5 truncate">
                        <span className="h-1 w-1 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Link */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}

          {/* Quick quote box in the grid */}
          <div className="rounded-2xl bg-gradient-to-br from-projekta-deep via-emerald-900 to-slate-950 p-7 text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-900/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full mb-4">
                <Sparkles className="h-3 w-3" />
                <span>Besoin spécifique ?</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Vous avez un projet sur mesure ?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Nos équipes étudient votre cahier des charges et conçoivent une solution personnalisée clé en main.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/devis"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA to all services */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-100 rounded-xl transition-colors"
          >
            <span>Consulter le détail de tous nos 5 pôles d&apos;expertise</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
