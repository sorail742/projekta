"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Palette,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

// Courbe de transition demandée : cubic-bezier(0.22, 1, 0.36, 1)
const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Effet de parallaxe léger au scroll sur les formes d'arrière-plan
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxDiamondY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxArcY = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const parallaxRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  // Variantes du conteneur pour l'animation en cascade (stagger)
  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  // Variantes pour chaque élément : fade + translation de 24px, durée 0.7s, cubic-bezier(0.22, 1, 0.36, 1)
  const itemVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: EASE_PREMIUM,
      },
    },
  };

  // Variantes pour le dessin des traits vectoriels (stroke-dasharray / stroke-dashoffset)
  const strokeDrawVariants = {
    hidden: {
      pathLength: shouldReduceMotion ? 1 : 0,
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: (customDelay: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: shouldReduceMotion ? 0 : 1.4,
          ease: EASE_PREMIUM,
          delay: shouldReduceMotion ? 0 : customDelay,
        },
        opacity: {
          duration: shouldReduceMotion ? 0 : 0.4,
          delay: shouldReduceMotion ? 0 : customDelay,
        },
      },
    }),
  };

  // Titre découpé mot par mot pour l'animation en cascade
  const titleWords = [
    { text: "Donnons", isGradient: false },
    { text: "vie", isGradient: false },
    { text: "à", isGradient: false },
    { text: "vos", isGradient: false },
    { text: "idées", isGradient: false },
    { text: "grâce", isGradient: false },
    { text: "au", isGradient: false },
    { text: "numérique.", isGradient: true },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32 bg-[#F7F8FA] border-b border-ink/5"
    >
      {/* =========================================================================
          ARRIÈRE-PLAN GÉOMÉTRIQUE : GRANDES FORMES EN TRAITS FINS (LOSANGE & ARC)
          Inspirées du symbole du logo (vert #4FA764 & bleu #3D74AC à 10-15% d'opacité)
          avec parallaxe au scroll et tracé animé au chargement.
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        {/* Halos lumineux d'ambiance très doux */}
        <div className="absolute -top-32 left-1/4 w-[520px] h-[520px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

        {/* Grand Losange (Diamond / Chevron apex) en vert à 12-14% d'opacité avec parallaxe */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : parallaxDiamondY,
            rotate: shouldReduceMotion ? 0 : parallaxRotate,
          }}
          className="absolute -top-16 -left-20 sm:-left-10 lg:left-12 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px]"
        >
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Losange extérieur vert (#4FA764) */}
            <motion.rect
              x="250"
              y="50"
              width="280"
              height="280"
              rx="16"
              transform="rotate(45 250 50)"
              stroke="#4FA764"
              strokeWidth="1.5"
              strokeOpacity="0.13"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
            />
            {/* Losange concentrique intérieur pour la finesse architecturale */}
            <motion.rect
              x="250"
              y="90"
              width="220"
              height="220"
              rx="12"
              transform="rotate(45 250 90)"
              stroke="#4FA764"
              strokeWidth="1"
              strokeOpacity="0.08"
              strokeDasharray="4 6"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.4}
            />
          </svg>
        </motion.div>

        {/* Grand Arc de Cercle en bleu (#3D74AC) à 12-15% d'opacité avec parallaxe */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : parallaxArcY,
          }}
          className="absolute top-1/4 -right-28 sm:-right-16 lg:right-6 w-[480px] h-[480px] sm:w-[620px] sm:h-[620px]"
        >
          <svg
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Grand arc inspiré du tracé droit du logo */}
            <motion.path
              d="M 300,60 A 240,240 0 1,1 80,380"
              stroke="#3D74AC"
              strokeWidth="1.5"
              strokeOpacity="0.14"
              strokeLinecap="round"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.3}
            />
            {/* Second arc concentrique très fin */}
            <motion.path
              d="M 300,100 A 200,200 0 1,1 120,360"
              stroke="#3D74AC"
              strokeWidth="1"
              strokeOpacity="0.09"
              strokeDasharray="6 8"
              strokeLinecap="round"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.5}
            />
            {/* Point de repère géométrique discret */}
            <motion.circle
              cx="300"
              cy="60"
              r="3.5"
              fill="#3D74AC"
              fillOpacity="0.25"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.6}
            />
          </svg>
        </motion.div>

        {/* Trame de grille de repères 1px ultra discrète */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#181818 1px, transparent 1px), radial-gradient(#181818 1px, #F7F8FA 1px)",
            backgroundSize: "48px 48px",
            backgroundPosition: "0 0, 24px 24px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* =========================================================================
              COLONNE GAUCHE : ANIMATION EN CASCADE (STAGGER)
              Étiquette -> Titre mot par mot -> Sous-titre -> Boutons -> Piliers
          ========================================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-7 text-center lg:text-left"
          >
            {/* 1. Petite étiquette au-dessus : majuscules espacées */}
            <motion.div variants={itemVariants} className="w-fit mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-ink/10 text-ink shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="tagline-label text-ink font-semibold tracking-[0.22em] text-[11px] sm:text-xs uppercase">
                  INNOVATION · TECHNOLOGY · PROJECTS
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              </div>
            </motion.div>

            {/* 2. Titre majeur : Montserrat léger, clamp(2.5rem, 5.5vw, 5rem), mot par mot */}
            <h1 className="text-[clamp(2.5rem,5.2vw,5rem)] font-light text-ink tracking-tight leading-[1.08]">
              {titleWords.map((wordObj, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  className={`inline-block mr-[0.28em] ${
                    wordObj.isGradient
                      ? "text-accent-gradient font-medium"
                      : "font-light"
                  }`}
                >
                  {wordObj.text}
                </motion.span>
              ))}
            </h1>

            {/* 3. Sous-titre : description claire et aérée */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {COMPANY_INFO.description}
            </motion.p>

            {/* 4. Deux boutons :
                - Principal : fond vert, texte blanc, léger glow au hover
                - Secondaire : contour fin, remplissage progressif au hover
            */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {/* Bouton Principal : vert du logo + glow subtil au survol */}
              <Link
                href="/devis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-primary hover:bg-primary-hover rounded-full shadow-soft hover:shadow-[0_0_28px_rgba(79,167,100,0.45)] transition-all duration-300 group"
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Bouton Secondaire : contour fin 1px + remplissage progressif de gauche à droite */}
              <Link
                href="/services"
                className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-ink border border-ink/20 rounded-full transition-colors duration-300"
              >
                {/* Remplissage progressif élégant */}
                <span className="absolute inset-0 bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Découvrir nos services
                </span>
              </Link>
            </motion.div>

            {/* 5. Piliers de réassurance avec traits fins de 1px */}
            <motion.div
              variants={itemVariants}
              className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-ink/10 text-xs text-ink-muted"
            >
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
            </motion.div>
          </motion.div>

          {/* =========================================================================
              COLONNE DROITE : VITRINE HAUT DE GAMME AVEC SYMBOLE ET LOGO OFFICIEL
              Dessin vectoriel dynamique du symbole avec animation de tracé
          ========================================================================= */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: EASE_PREMIUM, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Carte Principale : Style épuré, blanc pur et traits fins de 1px */}
              <div className="relative rounded-3xl bg-white p-7 sm:p-9 shadow-card border border-ink/[0.08] flex flex-col space-y-7">
                {/* Cadre Logo Horizontal officiel (respect strict sans déformation) */}
                <div className="relative rounded-2xl bg-[#F7F8FA] p-6 border border-ink/[0.06] flex items-center justify-center overflow-hidden">
                  {/* Tracé vectoriel animé en arrière-plan du logo qui se dessine */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    <svg
                      viewBox="0 0 300 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      {/* Ligne d'accent vectorielle animée */}
                      <motion.path
                        d="M 20,110 L 280,110"
                        stroke="#4FA764"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        variants={strokeDrawVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.8}
                      />
                    </svg>
                  </div>

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
                  <div className="flex items-center justify-between">
                    <span className="tagline-label text-primary font-semibold text-[11px] tracking-[0.2em] uppercase">
                      Excellence Numérique
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-ink leading-snug">
                    Des solutions pérennes pour propulser votre impact
                  </h3>
                </div>

                {/* Grille de 2 spécialités emblématiques avec bordures fines */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="rounded-2xl bg-[#F7F8FA] p-4 border border-ink/[0.06] flex flex-col space-y-1.5 hover:border-primary/30 transition-colors">
                    <Code2 className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-ink">Dév Web & Mobile</span>
                    <span className="text-[11px] text-ink-muted leading-tight">Next.js & Applications</span>
                  </div>

                  <div className="rounded-2xl bg-[#F7F8FA] p-4 border border-ink/[0.06] flex flex-col space-y-1.5 hover:border-secondary/30 transition-colors">
                    <Palette className="h-4 w-4 text-secondary" />
                    <span className="text-xs font-semibold text-ink">Identité Visuelle</span>
                    <span className="text-[11px] text-ink-muted leading-tight">Logos & Chartes pro</span>
                  </div>
                </div>

                {/* Bandeau d'estimation avec liseré subtil */}
                <div className="rounded-2xl bg-[#F7F8FA] p-4 border border-ink/[0.08] flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-primary font-medium">Devis personnalisé gratuit</p>
                    <p className="text-xs font-semibold text-ink">Sous 24h à 48h ouvrées</p>
                  </div>
                  <Link
                    href="/devis"
                    className="px-4 py-2 bg-ink hover:bg-primary text-white text-xs font-semibold rounded-full transition-colors duration-200 shadow-soft"
                  >
                    Estimer
                  </Link>
                </div>
              </div>

              {/* Badge flottant avec le symbole officiel et le tracé vectoriel animé */}
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: EASE_PREMIUM, delay: shouldReduceMotion ? 0 : 0.5 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-card border border-ink/[0.08] flex items-center gap-3.5"
              >
                {/* Icône du symbole officiel avec cadre net */}
                <div className="relative h-11 w-11 rounded-xl bg-[#F7F8FA] border border-ink/[0.06] p-1.5 flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-icon.png"
                    alt="PROJEKTA Emblème"
                    width={38}
                    height={38}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink tracking-wide">PROJEKTA</p>
                  <p className="tagline-label text-[10px] text-primary font-medium tracking-[0.2em]">
                    INNOVATION & TECH
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
