import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Palette,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32 bg-surface-muted/50 border-b border-ink/5">
      {/* Halo subtil très discret aux teintes vert et bleu pour la profondeur sans saturer l'espace */}
      <div className="absolute top-12 left-1/3 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-secondary-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Colonne Gauche : Proposition de valeur & typographie soignée */}
          <div className="lg:col-span-7 flex flex-col space-y-7 text-center lg:text-left">
            {/* Signature officielle sous forme d'étiquette haute précision */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-ink/10 text-ink text-xs w-fit mx-auto lg:mx-0 shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="tagline-label text-ink font-semibold">
                {COMPANY_INFO.baseline}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            </div>

            {/* Titre Majeur : Montserrat 300 à 600, aéré et percutant */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-ink tracking-tight leading-[1.15]">
              Donnons vie à vos idées grâce au{" "}
              <span className="font-semibold text-accent-gradient">
                numérique.
              </span>
            </h1>

            {/* Corps de texte lisible et détendu */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {COMPANY_INFO.description}
            </p>

            {/* Actions : Boutons aux arrondis élégants et transitions soignées */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/devis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink hover:text-primary bg-white hover:bg-surface-muted border border-ink/15 hover:border-primary/50 rounded-full transition-all duration-300"
              >
                <span>Découvrir nos services</span>
              </Link>
            </div>

            {/* Piliers de réassurance avec traits fins de 1px */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-ink/10 text-xs text-ink-muted">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>Accompagnement dédié</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <ShieldCheck className="h-4 w-4 text-secondary shrink-0" />
                <span>Technologies modernes</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Sparkles className="h-4 w-4 text-primary shrink-0" />
                <span>Orientation résultats</span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Vitrine visuelle minimaliste avec logo officiel */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Carte Principale : Style épuré, blanc pur et traits fins */}
              <div className="relative rounded-3xl bg-white p-7 sm:p-9 shadow-card border border-ink/[0.08] flex flex-col space-y-7">
                {/* Cadre Logo Horizontal officiel (sans déformation ni recoloration) */}
                <div className="rounded-2xl bg-surface-muted p-5 sm:p-6 border border-ink/[0.06] flex items-center justify-center">
                  <div className="relative h-14 sm:h-16 w-full flex items-center justify-center">
                    <Image
                      src="/logo-full.png"
                      alt="PROJEKTA - Innovation • Technology • Projects"
                      width={270}
                      height={100}
                      className="max-h-full w-auto object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Énoncé de valeur */}
                <div className="space-y-1.5">
                  <span className="tagline-label text-primary">
                    Excellence Numérique
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-ink leading-snug">
                    Des solutions pérennes pour propulser votre impact
                  </h3>
                </div>

                {/* Grille de 2 spécialités emblématiques avec bordures fines */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="rounded-2xl bg-surface-muted p-4 border border-ink/[0.06] flex flex-col space-y-1.5">
                    <Code2 className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-ink">Dév Web & Mobile</span>
                    <span className="text-[11px] text-ink-muted leading-tight">Next.js & Applications</span>
                  </div>

                  <div className="rounded-2xl bg-surface-muted p-4 border border-ink/[0.06] flex flex-col space-y-1.5">
                    <Palette className="h-4 w-4 text-secondary" />
                    <span className="text-xs font-semibold text-ink">Identité Visuelle</span>
                    <span className="text-[11px] text-ink-muted leading-tight">Logos & Chartes pro</span>
                  </div>
                </div>

                {/* Bandeau d'estimation avec liseré subtil */}
                <div className="rounded-2xl bg-surface-muted p-4 border border-ink/[0.08] flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-primary font-medium">Devis personnalisé gratuit</p>
                    <p className="text-xs font-semibold text-ink">Sous 24h à 48h ouvrées</p>
                  </div>
                  <Link
                    href="/devis"
                    className="px-4 py-2 bg-ink hover:bg-primary text-white text-xs font-semibold rounded-full transition-colors duration-200"
                  >
                    Estimer
                  </Link>
                </div>
              </div>

              {/* Badge flottant latéral arborant le symbole officiel isolé */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-card border border-ink/[0.08] flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-xl bg-surface-muted border border-ink/[0.06] p-1 flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-icon.png"
                    alt="PROJEKTA Emblème"
                    width={36}
                    height={36}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink tracking-wide">PROJEKTA</p>
                  <p className="tagline-label text-[10px] text-primary">INNOVATION & TECH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
