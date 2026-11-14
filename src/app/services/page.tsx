import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Palette,
  Briefcase,
  Share2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Award,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { SERVICES_DATA, ServiceItem } from "@/data/services";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez les 5 domaines d'expertise de PROJEKTA : Développement web & mobile, Création graphique & identité visuelle, Portfolios & présence numérique, Réseaux sociaux & communication, Formations informatiques.",
};

export default function ServicesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="h-7 w-7 text-emerald-600" />;
      case "Palette":
        return <Palette className="h-7 w-7 text-emerald-600" />;
      case "Briefcase":
        return <Briefcase className="h-7 w-7 text-emerald-600" />;
      case "Share2":
        return <Share2 className="h-7 w-7 text-emerald-600" />;
      case "GraduationCap":
        return <GraduationCap className="h-7 w-7 text-emerald-600" />;
      default:
        return <Sparkles className="h-7 w-7 text-emerald-600" />;
    }
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <div className="max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Catalogue des Prestations
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            5 pôles d&apos;expertise pour tous vos défis numériques.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            De l&apos;ingénierie web à la création visuelle en passant par le community management et la formation, découvrez nos solutions d&apos;accompagnement complètes et sur mesure.
          </p>
        </div>

        {/* Quick in-page nav */}
        <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-slate-200">
          {SERVICES_DATA.map((srv) => (
            <a
              key={srv.id}
              href={`#${srv.id}`}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all text-slate-700"
            >
              {srv.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-32 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left overview */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        {getIcon(service.iconName)}
                      </div>
                      <span className="font-mono text-sm font-bold text-emerald-700">
                        PÔLE {service.number}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Target Audience & Benefits */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Public concerné :
                      </span>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {service.targetAudience.map((target, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>{target}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/devis?service=${service.id}`}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-projekta-deep hover:from-emerald-700 hover:to-emerald-950 rounded-xl shadow-sm transition-all group"
                      >
                        <span>Demander un accompagnement</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right detailed prestations */}
                <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/60 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-emerald-600" />
                      <span>Prestations incluses dans ce pôle :</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.prestations.map((presta, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3 rounded-xl bg-white border border-slate-200/70 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 shadow-2xs"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{presta}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Livrables & Atouts */}
                  <div className="pt-4 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-bold text-slate-900 block mb-1">
                        Atouts clés :
                      </span>
                      <ul className="text-slate-600 space-y-1">
                        {service.benefits.map((b, bIdx) => (
                          <li key={bIdx}>• {b}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-bold text-slate-900 block mb-1">
                        Livrables types :
                      </span>
                      <ul className="text-slate-600 space-y-1">
                        {service.deliverables.map((d, dIdx) => (
                          <li key={dIdx}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-800 to-projekta-deep text-white text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold">
            Vous ne trouvez pas exactement ce que vous cherchez ?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-xl">
            Notre équipe étudie également vos projets sur mesure. Exposez-nous votre besoin pour recevoir une recommandation personnalisée.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/devis"
              className="px-6 py-3 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
            >
              Demander une étude personnalisée
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
            >
              Contacter l&apos;équipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
