import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Palette,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Decorative background glows blending official Green & Blue */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value proposition */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* Top pill badge with official baseline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold w-fit mx-auto lg:mx-0 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-slate-900 font-bold">
                {COMPANY_INFO.baseline}
              </span>
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Donnons vie à vos idées grâce au{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
                numérique.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {COMPANY_INFO.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/devis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 via-green-700 to-slate-900 hover:from-emerald-700 hover:to-slate-950 rounded-xl shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all group"
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 hover:text-emerald-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-emerald-300 rounded-xl shadow-xs transition-all"
              >
                <span>Découvrir nos services</span>
              </Link>
            </div>

            {/* Reassurance points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Accompagnement dédié</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Technologies modernes</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Orientation résultats</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card showcasing official Logo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Box */}
              <div className="relative rounded-3xl bg-slate-950 p-6 sm:p-8 text-white shadow-2xl border border-slate-800 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col space-y-6">
                  {/* Top bar with official banner logo */}
                  <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-lg flex items-center justify-center overflow-hidden border border-slate-100">
                    <div className="relative h-16 sm:h-20 w-full">
                      <Image
                        src="/logo-full.png"
                        alt="PROJEKTA - Innovation • Technology • Projects"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* Core Value Statement */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-green-400 font-mono">
                        Innovation Digitale
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      Des solutions robustes pour accélérer votre croissance
                    </h3>
                  </div>

                  {/* Highlight badges grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl bg-white/5 p-3.5 border border-white/10 flex flex-col space-y-1">
                      <Code2 className="h-5 w-5 text-green-400" />
                      <span className="text-xs font-bold text-white">Dév Web & Mobile</span>
                      <span className="text-[11px] text-slate-300">Next.js, Apps & E-commerce</span>
                    </div>

                    <div className="rounded-xl bg-white/5 p-3.5 border border-white/10 flex flex-col space-y-1">
                      <Palette className="h-5 w-5 text-blue-400" />
                      <span className="text-xs font-bold text-white">Identité Visuelle</span>
                      <span className="text-[11px] text-slate-300">Logos & Chartes pro</span>
                    </div>
                  </div>

                  {/* Floating Action Box */}
                  <div className="rounded-xl bg-gradient-to-r from-emerald-950/90 to-slate-900 p-4 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-emerald-300 font-medium">Devis personnalisé gratuit</p>
                      <p className="text-sm font-bold text-white">Sous 24h à 48h ouvrées</p>
                    </div>
                    <Link
                      href="/devis"
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-slate-950 text-xs font-bold rounded-lg transition-all shadow-sm"
                    >
                      Estimer
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative side badge featuring emblem */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200/90 flex items-center gap-3.5">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 p-1 shadow-2xs flex items-center justify-center">
                  <Image
                    src="/logo-icon.png"
                    alt="PROJEKTA Emblème"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-950 tracking-wider">PROJEKTA</p>
                  <p className="text-[10px] font-semibold text-green-600 font-mono">INNOVATION & TECH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
