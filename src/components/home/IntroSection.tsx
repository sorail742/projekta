import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Users2, Target, Globe2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function IntroSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left summary */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <span>À propos de PROJEKTA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
              L&apos;allié stratégique de votre réussite à l&apos;ère du numérique
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {COMPANY_INFO.fullBio}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <p className="text-sm text-slate-700">
                  <strong>Conception sur mesure :</strong> des solutions techniques
                  qui s&apos;adaptent à vos besoins réels, sans complexité superflue.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <p className="text-sm text-slate-700">
                  <strong>Valorisation de marque :</strong> une image de prestige pour
                  gagner la confiance immédiate de vos partenaires et clients.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <p className="text-sm text-slate-700">
                  <strong>Montée en compétences :</strong> des formations pragmatiques
                  pour rendre le numérique accessible à tous les profils.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 group"
              >
                <span>En savoir plus sur notre histoire et notre vision</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {COMPANY_INFO.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-emerald-800">
                    {metric.value}
                  </span>
                  <h3 className="mt-2 text-sm sm:text-base font-bold text-slate-900">
                    {metric.label}
                  </h3>
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
