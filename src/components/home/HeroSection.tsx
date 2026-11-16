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

// Courbe d'animation spécifiée : cubic-bezier(0.22, 1, 0.36, 1)
const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallaxe au scroll sur les grandes formes géométriques d'arrière-plan
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxDiamondY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const parallaxArcY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const parallaxRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

  // Conteneur principal pour la cascade (étiquette -> titre -> sous-titre -> boutons)
  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  // Animation unifiée demandée : fade + translateY 24px, 0.7s, cubic-bezier(0.22, 1, 0.36, 1)
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

  // Animation de tracé vectoriel au chargement (stroke-dashoffset via pathLength)
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
          duration: shouldReduceMotion ? 0 : 1.5,
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

  // Mots du titre pour l'animation mot par mot
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
          Vert (#4FA764) et Bleu (#3D74AC) à 10-15 % d'opacité, léger parallaxe au scroll
          et animation de tracé (stroke-dashoffset) au chargement.
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        {/* Halos d'ambiance très subtils */}
        <div className="absolute -top-40 left-1/4 w-[540px] h-[540px] bg-primary/[0.04] rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[620px] h-[620px] bg-secondary/[0.04] rounded-full blur-3xl" />

        {/* Grand Losange vert (#4FA764) à 12-14 % d'opacité avec parallaxe */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : parallaxDiamondY,
            rotate: shouldReduceMotion ? 0 : parallaxRotate,
          }}
          className="absolute -top-16 -left-20 sm:-left-10 lg:left-10 w-[440px] h-[440px] sm:w-[560px] sm:h-[560px]"
        >
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Losange extérieur en trait fin 1.5px */}
            <motion.rect
              x="250"
              y="50"
              width="280"
              height="280"
              rx="18"
              transform="rotate(45 250 50)"
              stroke="#4FA764"
              strokeWidth="1.5"
              strokeOpacity="0.13"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.15}
            />
            {/* Losange intérieur concentrique avec tracé discontinu */}
            <motion.rect
              x="250"
              y="90"
              width="220"
              height="220"
              rx="14"
              transform="rotate(45 250 90)"
              stroke="#4FA764"
              strokeWidth="1"
              strokeOpacity="0.08"
              strokeDasharray="4 6"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.35}
            />
          </svg>
        </motion.div>

        {/* Grand Arc de Cercle bleu (#3D74AC) à 12-15 % d'opacité avec parallaxe */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : parallaxArcY,
          }}
          className="absolute top-1/4 -right-28 sm:-right-16 lg:right-4 w-[500px] h-[500px] sm:w-[640px] sm:h-[640px]"
        >
          <svg
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Grand arc inspiré de la courbure droite du logo */}
            <motion.path
              d="M 300,50 A 250,250 0 1,1 70,390"
              stroke="#3D74AC"
              strokeWidth="1.5"
              strokeOpacity="0.14"
              strokeLinecap="round"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.25}
            />
            {/* Second arc concentrique très fin */}
            <motion.path
              d="M 300,90 A 210,210 0 1,1 110,370"
              stroke="#3D74AC"
              strokeWidth="1"
              strokeOpacity="0.08"
              strokeDasharray="5 7"
              strokeLinecap="round"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.45}
            />
            {/* Repère discret */}
            <motion.circle
              cx="300"
              cy="50"
              r="3.5"
              fill="#3D74AC"
              fillOpacity="0.22"
              variants={strokeDrawVariants}
              initial="hidden"
              animate="visible"
              custom={0.6}
            />
          </svg>
        </motion.div>

        {/* Trame de grille 1px ultra discrète */}
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
              1. Étiquette -> 2. Titre (mot par mot) -> 3. Sous-titre -> 4. Boutons -> 5. Piliers
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

            {/* 2. Titre majeur : Montserrat léger, clamp(2.5rem, 5.2vw, 5rem), mot par mot
                   Accessibilité : aria-label sur le h1 + vraies espaces entre les mots */}
            <h1
              aria-label="Donnons vie à vos idées grâce au numérique."
              className="text-[clamp(2.5rem,5.2vw,5rem)] font-light text-ink tracking-tight leading-[1.08]"
            >
              {titleWords.map((wordObj, idx) => (
                <React.Fragment key={idx}>
                  <motion.span
                    variants={itemVariants}
                    className={`inline-block ${
                      wordObj.isGradient
                        ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-normal"
                        : "font-light"
                    }`}
                  >
                    {wordObj.text}
                  </motion.span>
                  {idx < titleWords.length - 1 && " "}
                </React.Fragment>
              ))}
            </h1>

            {/* 3. Sous-titre : description claire et aérée */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {COMPANY_INFO.description}
            </motion.p>

            {/* 4. Boutons : Principal vert + Secondaire contour fin avec remplissage progressif */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {/* Bouton Principal : vert du logo + glow subtil au hover */}
              <Link
                href="/devis"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-primary hover:bg-primary-hover rounded-full shadow-soft hover:shadow-[0_0_26px_rgba(79,167,100,0.4)] transition-all duration-300 active:scale-[0.98] group"
              >
                <span>Démarrer un projet</span>
                <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Bouton Secondaire : contour fin 1px + remplissage progressif au hover */}
              <Link
                href="/services"
                className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-ink border border-ink/20 rounded-full transition-colors duration-300 active:scale-[0.98]"
              >
                {/* Remplissage progressif élégant de gauche à droite */}
                <span className="absolute inset-0 bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Découvrir nos services
                </span>
              </Link>
            </motion.div>

            {/* 5. Piliers de réassurance */}
            <motion.div
              variants={itemVariants}
              className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-ink/10 text-xs text-ink-muted"
            >
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <CheckCircle2 strokeWidth={1.5} className="h-4 w-4 text-primary shrink-0" />
                <span>Accompagnement dédié</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <ShieldCheck strokeWidth={1.5} className="h-4 w-4 text-secondary shrink-0" />
                <span>Technologies modernes</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Sparkles strokeWidth={1.5} className="h-4 w-4 text-primary shrink-0" />
                <span>Orientation résultats</span>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================================================================
              COLONNE DROITE : VITRINE PREMIUM AVEC TRACÉ DU SYMBOLE DU LOGO
              Animation de tracé (stroke-dashoffset) au chargement
          ========================================================================= */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: EASE_PREMIUM, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Carte Principale : Style épuré, blanc pur et traits fins */}
              <div className="relative rounded-3xl bg-white p-7 sm:p-9 shadow-card border border-ink/[0.08] flex flex-col space-y-7">
                {/* Cadre Symbole & Logo Officiel avec Tracé Vectoriel Animé */}
                <div className="relative rounded-2xl bg-[#F7F8FA] p-6 border border-ink/[0.06] flex flex-col items-center justify-center overflow-hidden">
                  {/* Tracé vectoriel animé du symbole officiel (losange vert + arc bleu) */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center">
                    <svg
                      viewBox="0 0 160 160"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      {/* Losange vert du logo qui se trace (stroke-dashoffset) */}
                      <motion.rect
                        x="55"
                        y="40"
                        width="46"
                        height="46"
                        rx="7"
                        transform="rotate(45 55 40)"
                        stroke="#4FA764"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={strokeDrawVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                      />

                      {/* Arc de cercle bleu du logo qui se trace en synchronisation */}
                      <motion.path
                        d="M 85,38 C 118,48 135,75 130,110 C 126,138 102,152 75,148"
                        stroke="#3D74AC"
                        strokeWidth="4"
                        strokeLinecap="round"
                        variants={strokeDrawVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.45}
                      />

                      {/* Repère central géométrique */}
                      <motion.circle
                        cx="85"
                        cy="38"
                        r="2.5"
                        fill="#3D74AC"
                        variants={strokeDrawVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.7}
                      />
                    </svg>
                  </div>

                  {/* Logo typographique horizontal officiel PROJEKTA */}
                  <div className="relative h-10 sm:h-12 w-full flex items-center justify-center">
                    <Image
                      src="/logo-full.webp"
                      alt="PROJEKTA - Innovation • Technology • Projects"
                      width={220}
                      height={75}
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

                {/* Grille de 2 spécialités emblématiques */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="rounded-2xl bg-[#F7F8FA] p-4 border border-ink/[0.06] flex flex-col space-y-1.5 hover:border-primary/30 transition-colors">
                    <Code2 strokeWidth={1.5} className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-ink">Dév Web & Mobile</span>
                    <span className="text-[11px] text-ink-muted leading-tight">Next.js & Applications</span>
                  </div>

                  <div className="rounded-2xl bg-[#F7F8FA] p-4 border border-ink/[0.06] flex flex-col space-y-1.5 hover:border-secondary/30 transition-colors">
                    <Palette strokeWidth={1.5} className="h-4 w-4 text-secondary" />
                    <span className="text-xs font-semibold text-ink">Identité Visuelle</span>
                    <span className="text-[11px] text-ink-muted leading-tight">Logos & Chartes pro</span>
                  </div>
                </div>

                {/* Bandeau d'estimation sobre et réactif */}
                <div className="rounded-2xl bg-[#F7F8FA] p-4 border border-ink/[0.08] flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-primary font-medium">Devis personnalisé gratuit</p>
                    <p className="text-xs font-semibold text-ink">Nous répondons rapidement</p>
                  </div>
                  <Link
                    href="/devis"
                    className="px-4 py-2 bg-ink hover:bg-primary text-white text-xs font-semibold rounded-full transition-colors duration-200 shadow-soft"
                  >
                    Estimer
                  </Link>
                </div>
              </div>

              {/* Badge flottant avec le symbole officiel */}
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: EASE_PREMIUM, delay: shouldReduceMotion ? 0 : 0.5 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-card border border-ink/[0.08] flex items-center gap-3.5"
              >
                <div className="relative h-11 w-11 rounded-xl bg-[#F7F8FA] border border-ink/[0.06] p-1.5 flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-icon.webp"
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
