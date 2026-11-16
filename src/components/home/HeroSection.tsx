"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { IsometricBrandEmblem } from "@/components/home/IsometricBrandEmblem";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHoveringCta, setIsHoveringCta] = useState(false);

  // Coordonnées de la souris pour le parallax et le halo lumineux (effet lampe d'architecte)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, relX: 0.5, relY: 0.5 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Ignorer sur mobile / écran tactile pour performance 100%
      if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({
        x,
        y,
        relX: Math.max(0, Math.min(1, x / rect.width)),
        relY: Math.max(0, Math.min(1, y / rect.height)),
      });
    };

    const sectionEl = sectionRef.current;
    if (sectionEl) {
      sectionEl.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => sectionEl.removeEventListener("mousemove", handleMouseMove);
    }
  }, [shouldReduceMotion]);

  // Parallaxe au scroll sur les plans de la feuille
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxSheetY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const parallaxContentY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  // LCP & FCP optimaux : Texte 100% visible dès le premier rendu HTML côté serveur
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 1,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-32 bg-[#143B29] text-white select-none border-b border-[#0D291D]"
    >
      {/* =========================================================================
          FOND : FEUILLE DE PAPIER MILLIMÉTRÉ ISOMÉTRIQUE 3D ("COMME UNE FEUILLE PAPIER")
          - Texture de papier technique vert émeraude foncé
          - Ligne de pliure centrale créant le volume d'une feuille pliée en relief
          - Double quadrillage technique isométrique (subdivisions + carreaux maîtres)
          - Repères de coupe d'architecte et cotations
          - Halo interactif suivant le curseur
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Facette gauche de la feuille (légèrement plus éclairée) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#184632] via-[#143D2B] to-[#103324]" />

        {/* Facette droite ombrée (pliure 3D de la feuille de papier) */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-35 bg-gradient-to-l from-[#0A2217] to-transparent"
          style={{
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Ligne de pliure de la feuille (arête 3D subtile) */}
        <div className="absolute top-0 bottom-0 left-[48%] w-[1px] bg-gradient-to-b from-transparent via-[#4FA764]/20 to-transparent opacity-60" />

        {/* Halo interactif (spotlight de table de dessin suivant la souris) */}
        {!shouldReduceMotion && (
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79, 167, 100, 0.16), transparent 75%)`,
            }}
          />
        )}

        {/* Grille de papier millimétré isométrique */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : parallaxSheetY,
            x: shouldReduceMotion ? 0 : (mousePos.relX - 0.5) * -16,
          }}
          className="absolute -inset-[80px] w-[calc(100%+160px)] h-[calc(100%+160px)] opacity-90"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* 1. Sous-grille fine (millimétrique : 40 x 23.094 px) */}
              <pattern
                id="iso-subgrid"
                width="40"
                height="23.094"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0,11.547 L 20,0 L 40,11.547 L 20,23.094 Z"
                  fill="none"
                  stroke="#0B271A"
                  strokeWidth="0.8"
                  strokeOpacity="0.75"
                />
              </pattern>

              {/* 2. Grille maîtresse isométrique (80 x 46.188 px) avec traits de cotes */}
              <pattern
                id="iso-maingrid"
                width="80"
                height="46.188"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0,23.094 L 40,0 L 80,23.094 L 40,46.188 Z"
                  fill="none"
                  stroke="#082115"
                  strokeWidth="1.4"
                />
                {/* Micro-repères de carroyage aux intersections (+) */}
                <path
                  d="M 38,0 L 42,0 M 40,-2 L 40,2 M 38,46.188 L 42,46.188 M 40,44.188 L 40,48.188"
                  stroke="#4FA764"
                  strokeWidth="0.8"
                  strokeOpacity="0.4"
                />
              </pattern>

            </defs>

            {/* Application de la sous-grille fine */}
            <rect width="100%" height="100%" fill="url(#iso-subgrid)" />

            {/* Application de la grille maîtresse */}
            <rect width="100%" height="100%" fill="url(#iso-maingrid)" />
          </svg>
        </motion.div>

        {/* Repères techniques d'imprimerie & d'architecte sur les coins de la feuille */}
        <div className="absolute top-28 left-6 sm:left-12 flex items-center gap-2 text-[#4FA764]/40 font-mono text-[9px] uppercase tracking-widest">
          <span>+ PROJEKTA DRAFT SHEET · ISO-GRID · 100% SCALE</span>
        </div>
        <div className="absolute top-28 right-6 sm:right-12 hidden md:flex items-center gap-2 text-[#3D74AC]/40 font-mono text-[9px] uppercase tracking-widest">
          <span>SPEC · BRAND CHARTER VERIFIED +</span>
        </div>

        {/* Vignettage feutré pour concentrer le regard sur le titre et l'emblème */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2016]/90 via-transparent to-[#0E2C1E]/60 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* =========================================================================
              COLONNE GAUCHE : MESSAGE, TYPOGRAPHIE MONTSERRAT & VALEUR AJOUTÉE
              100% Conforme à la charte et au rythme du modèle
          ========================================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: shouldReduceMotion ? 0 : parallaxContentY }}
            className="lg:col-span-7 flex flex-col space-y-7 text-left"
          >
            {/* 1. Étiquette signature PROJEKTA */}
            <motion.div variants={itemVariants} className="w-fit">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4FA764] animate-pulse" />
                <span className="tagline-label text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white/95">
                  INNOVATION · TECHNOLOGY · PROJECTS
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#3D74AC]" />
              </div>
            </motion.div>

            {/* 2. Titre majeur : Montserrat extra-bold, en 3 lignes percutantes
                   Accessibilité : aria-label complet sur le h1 */}
            <h1
              aria-label="Donnons vie à vos idées grâce au numérique."
              className="text-[clamp(2.75rem,5.6vw,5.2rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.04]"
            >
              <motion.span variants={itemVariants} className="block">
                Donnons vie
              </motion.span>
              <motion.span variants={itemVariants} className="block text-white">
                à vos idées
              </motion.span>
              <motion.span
                variants={itemVariants}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6EE799] to-[#7AB4E8] drop-shadow-[0_2px_16px_rgba(79,167,100,0.35)]"
              >
                grâce au numérique.
              </motion.span>
            </h1>

            {/* 3. Sous-titre officiel : mission claire et lisible */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#D1E6DA] leading-relaxed max-w-xl font-normal"
            >
              {COMPANY_INFO.description}
            </motion.p>

            {/* 4. Lien fléché signature inspiré du modèle : "→ Let's turn your ideas into reality." */}
            <motion.div variants={itemVariants} className="pt-1">
              <Link
                href="/devis"
                onMouseEnter={() => setIsHoveringCta(true)}
                onMouseLeave={() => setIsHoveringCta(false)}
                className="group inline-flex items-center gap-2.5 text-base sm:text-lg font-medium text-white hover:text-[#6EE799] transition-colors duration-250 w-fit"
              >
                <span className="text-[#6EE799] font-bold group-hover:translate-x-1.5 transition-transform duration-250 text-xl">
                  →
                </span>
                <span className="underline decoration-white/30 hover:decoration-[#6EE799] underline-offset-8">
                  Transformons vos idées en réalisations concrètes.
                </span>
              </Link>
            </motion.div>

            {/* 5. Boutons d'action officiels de la charte */}
            <motion.div
              variants={itemVariants}
              className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              {/* Bouton Principal vert officiel PROJEKTA (#4FA764) avec micro-interaction */}
              <Link
                href="/devis"
                onMouseEnter={() => setIsHoveringCta(true)}
                onMouseLeave={() => setIsHoveringCta(false)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#4FA764] hover:bg-[#439655] rounded-full shadow-[0_4px_20px_rgba(79,167,100,0.4)] hover:shadow-[0_0_28px_rgba(79,167,100,0.6)] transition-all duration-300 active:scale-[0.98] group"
              >
                <span>Demander un devis</span>
                <ArrowRight strokeWidth={2} className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Bouton Secondaire : contour blanc fin avec remplissage progressif au hover */}
              <Link
                href="/services"
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white border border-white/25 hover:border-white rounded-full transition-colors duration-300 active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-white/15 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Explorer nos services</span>
              </Link>
            </motion.div>

            {/* 6. Piliers d'excellence conformes à la charte */}
            <motion.div
              variants={itemVariants}
              className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs text-[#C5E0D0]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 strokeWidth={1.8} className="h-4 w-4 text-[#6EE799] shrink-0" />
                <span>Accompagnement dédié</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck strokeWidth={1.8} className="h-4 w-4 text-[#7AB4E8] shrink-0" />
                <span>Technologies modernes</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles strokeWidth={1.8} className="h-4 w-4 text-[#6EE799] shrink-0" />
                <span>Orientation résultats</span>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================================================================
              COLONNE DROITE : EMBLÈME 3D ISOMÉTRIQUE OFFICIEL PROJEKTA
              - Grand Losange vert (#4FA764) & Arc technologique bleu (#3D74AC)
              - Paliers architecturaux en papier millimétré
              - Badges des 5 pôles de services PROJEKTA
              - Repères de cotation technique
          ========================================================================= */}
          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              scale: shouldReduceMotion ? 1 : 0.95,
              y: shouldReduceMotion ? 0 : 25,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.85,
              ease: EASE_PREMIUM,
              delay: shouldReduceMotion ? 0 : 0.15,
            }}
            className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0"
          >
            <IsometricBrandEmblem isHoveringCta={isHoveringCta} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
