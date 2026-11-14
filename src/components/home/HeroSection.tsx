import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Palette,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value proposition */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium w-fit mx-auto lg:mx-0 shadow-xs">
              <Sparkles className="h-4 w-4 text-emerald-700" />
              <span>Votre partenaire numérique en Guinée et à l&apos;international</span>
            </div>

            {/* Main Headline (from Cahier des Charges 4.1.B) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Donnons vie à vos idées grâce au{" "}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                numérique.
              </span>
            </h1>

            {/* Subtitle (from Cahier des Charges 4.1.B) */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {COMPANY_INFO.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/devis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-projekta-deep hover:from-emerald-700 hover:to-emerald-950 rounded-xl shadow-md shadow-emerald-900/20 hover:shadow-lg transition-all group"
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-emerald-800 bg-white hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 rounded-xl transition-all"
              >
                <span>Découvrir nos services</span>
              </Link>
            </div>

            {/* Reassurance points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Accompagnement dédié</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Solutions sur mesure</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Orientation résultats</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Box */}
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-projekta-deep to-slate-950 p-6 sm:p-8 text-white shadow-2xl border border-emerald-500/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col space-y-6">
                  {/* Top bar mock */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500" />
                      <span className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300/80 bg-white/5 px-2 py-0.5 rounded">
                      projekta-core.tsx
                    </span>
                  </div>

                  {/* Core Value Statement */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      Transformation Numérique
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      Des solutions modernes conçues pour accélérer votre croissance
                    </h3>
                  </div>

                  {/* Highlight badges grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl bg-white/5 p-3 border border-white/10 flex flex-col space-y-1">
                      <Code2 className="h-5 w-5 text-emerald-400" />
                      <span className="text-xs font-bold text-white">Dév Web & Mobile</span>
                      <span className="text-[11px] text-slate-300">Sites & Apps rapides</span>
                    </div>

                    <div className="rounded-xl bg-white/5 p-3 border border-white/10 flex flex-col space-y-1">
                      <Palette className="h-5 w-5 text-emerald-400" />
                      <span className="text-xs font-bold text-white">Identité Visuelle</span>
                      <span className="text-[11px] text-slate-300">Logos & Chartes pro</span>
                    </div>
                  </div>

                  {/* Floating Client Card */}
                  <div className="rounded-xl bg-emerald-950/60 p-4 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-emerald-200">Devis personnalisé gratuit</p>
                      <p className="text-sm font-bold text-white">Étude en 24h à 48h</p>
                    </div>
                    <Link
                      href="/devis"
                      className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-colors"
                    >
                      Estimer
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  🇬🇳
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Origine Guinée</p>
                  <p className="text-[11px] text-slate-500">Rayonnement International</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
