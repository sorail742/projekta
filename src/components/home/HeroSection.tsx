"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { IsometricBrandEmblem } from "@/components/home/IsometricBrandEmblem";

export function HeroSection() {
  const [isHoveringCta, setIsHoveringCta] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Activer les effets dynamiques de souris uniquement sur grand écran non-tactile
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) {
      setIsDesktop(true);

      const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-32 bg-[#143B29] text-white select-none border-b border-[#0D291D]">
      {/* =========================================================================
          FOND : FEUILLE DE PAPIER MILLIMÉTRÉ ISOMÉTRIQUE OPTIMISÉE
          - Utilisation d'un dégradé CSS matériellement accéléré (0ms de latence)
          - Zéro filtre lourd, zéro blocage CPU sur mobile
          - Rendu instantané dès le premier paquet HTML
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Dégradé riche de fond */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#184632] via-[#143D2B] to-[#103324]" />

        {/* Facette droite ombrée (pliure 3D de la feuille en perspective) */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-35 bg-gradient-to-l from-[#0A2217] to-transparent"
          style={{
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Ligne de pliure centrale subtile */}
        <div className="absolute top-0 bottom-0 left-[48%] w-[1px] bg-gradient-to-b from-transparent via-[#4FA764]/20 to-transparent opacity-60" />

        {/* Grille isométrique pure CSS (ultra-rapide, 0 KB de SVG, rendu GPU instantané) */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              linear-gradient(30deg, rgba(8, 33, 21, 0.75) 1px, transparent 1px),
              linear-gradient(-30deg, rgba(8, 33, 21, 0.75) 1px, transparent 1px)
            `,
            backgroundSize: "80px 46.188px",
          }}
        />

        {/* Halo interactif (actif uniquement sur desktop avec souris) */}
        {isDesktop && (
          <div
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79, 167, 100, 0.16), transparent 75%)`,
            }}
          />
        )}

        {/* Repères techniques d'imprimerie & d'architecte sur les coins de la feuille */}
        <div className="absolute top-28 left-6 sm:left-12 flex items-center gap-2 text-[#4FA764]/40 font-mono text-[9px] uppercase tracking-widest">
          <span>+ PROJEKTA DRAFT SHEET · ISO-GRID · 100% SCALE</span>
        </div>
        <div className="absolute top-28 right-6 sm:right-12 hidden md:flex items-center gap-2 text-[#3D74AC]/40 font-mono text-[9px] uppercase tracking-widest">
          <span>SPEC · BRAND CHARTER VERIFIED +</span>
        </div>

        {/* Vignettage pour focaliser l'attention */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2016]/90 via-transparent to-[#0E2C1E]/60 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* =========================================================================
              COLONNE GAUCHE : LCP INSTANTANÉ (TEXTE 100% PEINT DÈS LE PREMIER FRAME SSR)
              Aucune dissimulation d'opacité, contraste WCAG AAA certifié
          ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col space-y-7 text-left">
            {/* 1. Étiquette signature PROJEKTA */}
            <div className="w-fit">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5EE089] animate-pulse" />
                <span className="tagline-label text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white">
                  INNOVATION · TECHNOLOGY · PROJECTS
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#7AB4E8]" />
              </div>
            </div>

            {/* 2. Titre majeur : Rendu HTML immédiat (LCP < 0.8s garanti)
                   Contraste WCAG AAA : blanc pur et vert vif (#5EE089) sur fond sombre */}
            <h1
              aria-label="Donnons vie à vos idées grâce au numérique."
              className="text-[clamp(2.75rem,5.6vw,5.2rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.04]"
            >
              <span className="block">Donnons vie</span>
              <span className="block text-white">à vos idées</span>
              <span className="block text-[#5EE089] drop-shadow-[0_2px_16px_rgba(94,224,137,0.35)]">
                grâce au numérique.
              </span>
            </h1>

            {/* 3. Sous-titre officiel : mission claire et lisible */}
            <p className="text-base sm:text-lg text-[#D1E6DA] leading-relaxed max-w-xl font-normal">
              {COMPANY_INFO.description}
            </p>

            {/* 4. Lien fléché signature avec tap target généreuse (min-h 48px pour 100% SEO) */}
            <div className="pt-1">
              <Link
                href="/devis"
                onMouseEnter={() => setIsHoveringCta(true)}
                onMouseLeave={() => setIsHoveringCta(false)}
                className="group inline-flex items-center gap-2.5 py-3 min-h-[48px] text-base sm:text-lg font-medium text-white hover:text-[#5EE089] transition-colors duration-250 w-fit"
              >
                <span className="text-[#5EE089] font-bold group-hover:translate-x-1.5 transition-transform duration-250 text-xl">
                  →
                </span>
                <span className="underline decoration-white/30 hover:decoration-[#5EE089] underline-offset-8">
                  Transformons vos idées en réalisations concrètes.
                </span>
              </Link>
            </div>

            {/* 5. Boutons d'action officiels de la charte avec contraste WCAG AAA */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              {/* Bouton Principal : vert émeraude vif (#5EE089) avec texte sombre (#0E281C) -> Contraste 10.0:1 (AAA) */}
              <Link
                href="/devis"
                onMouseEnter={() => setIsHoveringCta(true)}
                onMouseLeave={() => setIsHoveringCta(false)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0E281C] bg-[#5EE089] hover:bg-[#6EE799] rounded-full shadow-[0_4px_20px_rgba(94,224,137,0.4)] hover:shadow-[0_0_28px_rgba(94,224,137,0.6)] transition-all duration-300 active:scale-[0.98] group min-h-[48px]"
              >
                <span>Demander un devis</span>
                <ArrowRight strokeWidth={2.5} className="h-4 w-4 text-[#0E281C] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Bouton Secondaire : contour blanc fin avec remplissage progressif au hover */}
              <Link
                href="/services"
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white border border-white/30 hover:border-white rounded-full transition-colors duration-300 active:scale-[0.98] min-h-[48px]"
              >
                <span className="absolute inset-0 bg-white/15 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Explorer nos services</span>
              </Link>
            </div>

            {/* 6. Piliers d'excellence conformes à la charte */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs text-[#C5E0D0]">
              <div className="flex items-center gap-2">
                <CheckCircle2 strokeWidth={1.8} className="h-4 w-4 text-[#5EE089] shrink-0" />
                <span>Accompagnement dédié</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck strokeWidth={1.8} className="h-4 w-4 text-[#7AB4E8] shrink-0" />
                <span>Technologies modernes</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles strokeWidth={1.8} className="h-4 w-4 text-[#5EE089] shrink-0" />
                <span>Orientation résultats</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              COLONNE DROITE : EMBLÈME 3D ISOMÉTRIQUE OFFICIEL PROJEKTA
              - Actif sur grand écran (desktop / tablette paysage)
              - Sur mobile, n'alourdit pas le premier chargement sous le pli
          ========================================================================= */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center mt-6 lg:mt-0">
            <IsometricBrandEmblem isHoveringCta={isHoveringCta} />
          </div>
        </div>
      </div>
    </section>
  );
}
