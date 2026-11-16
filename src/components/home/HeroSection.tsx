"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { InteractiveHeroMascot } from "@/components/home/InteractiveHeroMascot";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHoveringCta, setIsHoveringCta] = useState(false);

  // Coordonnées de la souris pour le parallax de la grille et l'effet de lueur
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, relX: 0.5, relY: 0.5 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
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

  // Parallaxe au scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxGridY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const parallaxContentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Variantes d'animation en cascade
  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 22,
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-32 bg-[#174332] text-white select-none border-b border-[#0F3323]"
    >
      {/* =========================================================================
          FOND : GRILLE ISOMÉTRIQUE 3D DANS LA TEINTE VERT ÉMERAUDE DE RÉFÉRENCE
          + Parallaxe interactif à la souris et au scroll
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Dégradé d'ambiance riche : vert émeraude profond au centre, assombri aux bords */}
        <div className="absolute inset-0 bg-radial-gradient from-[#1A4E39] via-[#164330] to-[#103022]" />

        {/* Lueur interactive suivant le curseur (effet projecteur doux) */}
        {!shouldReduceMotion && (
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(94, 224, 137, 0.12), transparent 80%)`,
            }}
          />
        )}

        {/* Grille Isométrique pure avec losanges axonométriques infinis */}
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : parallaxGridY,
            x: shouldReduceMotion ? 0 : (mousePos.relX - 0.5) * -18,
          }}
          className="absolute -inset-[100px] w-[calc(100%+200px)] h-[calc(100%+200px)] opacity-85"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Motif de grille isométrique : losanges d'angle 30°
                  Largeur = 80px, Hauteur = 80 * tan(30°) ≈ 46.188px
                  Lignes vert foncé comme dans la référence */}
              <pattern
                id="isometric-grid-pattern"
                width="80"
                height="46.188"
                patternUnits="userSpaceOnUse"
              >
                {/* Losange isométrique délimité */}
                <path
                  d="M 0,23.094 L 40,0 L 80,23.094 L 40,46.188 Z"
                  fill="none"
                  stroke="#0E2E1F"
                  strokeWidth="1.3"
                  strokeOpacity="0.85"
                />
              </pattern>

              {/* Lueur d'intersection */}
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5EE089" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#5EE089" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Remplissage de la grille */}
            <rect width="100%" height="100%" fill="url(#isometric-grid-pattern)" />
          </svg>
        </motion.div>

        {/* Vignettage délicat pour focaliser le regard vers le centre */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E281C]/90 via-transparent to-[#103022]/60 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* =========================================================================
              COLONNE GAUCHE : TYPOGRAPHIE AUDACIEUSE & ACCROCHE INSPIRÉE DU MODÈLE
              "We design digital experiences" -> "Donnons vie à vos idées grâce au numérique."
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
                <span className="h-1.5 w-1.5 rounded-full bg-[#5EE089] animate-pulse" />
                <span className="tagline-label text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white/95">
                  INNOVATION · TECHNOLOGY · PROJECTS
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#3D74AC]" />
              </div>
            </motion.div>

            {/* 2. Titre majeur : Typographie Montserrat grasse, découpée sur 3 lignes percutantes */}
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
                className="block text-[#5EE089] drop-shadow-[0_2px_18px_rgba(94,224,137,0.3)]"
              >
                grâce au numérique.
              </motion.span>
            </h1>

            {/* 3. Sous-titre clair, aéré et contrasté */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#D1E6DA] leading-relaxed max-w-xl font-normal"
            >
              Développement web et mobile, création graphique, communication digitale et formation informatique pour propulser vos projets en Guinée et à l&apos;international.
            </motion.p>

            {/* 4. Lien fléché signature fidèle à l'exemple : "→ Let's turn your ideas into reality." */}
            <motion.div variants={itemVariants} className="pt-1">
              <Link
                href="/devis"
                onMouseEnter={() => setIsHoveringCta(true)}
                onMouseLeave={() => setIsHoveringCta(false)}
                className="group inline-flex items-center gap-2.5 text-base sm:text-lg font-medium text-white hover:text-[#5EE089] transition-colors duration-250 w-fit"
              >
                <span className="text-[#5EE089] font-bold group-hover:translate-x-1.5 transition-transform duration-250 text-xl">
                  →
                </span>
                <span className="underline decoration-white/30 hover:decoration-[#5EE089] underline-offset-8">
                  Démarrons votre projet dès aujourd&apos;hui.
                </span>
              </Link>
            </motion.div>

            {/* 5. Boutons d'action principaux */}
            <motion.div
              variants={itemVariants}
              className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              {/* Bouton Principal : blanc éclatant sur vert profond avec glow doux */}
              <Link
                href="/devis"
                onMouseEnter={() => setIsHoveringCta(true)}
                onMouseLeave={() => setIsHoveringCta(false)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#143E2C] bg-white hover:bg-[#F0FAF4] rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-[0.98] group"
              >
                <span>Demander un devis</span>
                <ArrowRight strokeWidth={2} className="h-4 w-4 text-[#143E2C] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Bouton Secondaire : contour blanc délicat avec remplissage au hover */}
              <Link
                href="/services"
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white border border-white/25 hover:border-white rounded-full transition-colors duration-300 active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-white/15 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Découvrir nos services</span>
              </Link>
            </motion.div>

            {/* 6. Piliers de réassurance discrets */}
            <motion.div
              variants={itemVariants}
              className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs text-[#C5E0D0]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 strokeWidth={1.8} className="h-4 w-4 text-[#5EE089] shrink-0" />
                <span>Accompagnement dédié</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck strokeWidth={1.8} className="h-4 w-4 text-[#7BB4E8] shrink-0" />
                <span>Technologies modernes</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles strokeWidth={1.8} className="h-4 w-4 text-[#5EE089] shrink-0" />
                <span>Orientation résultats</span>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================================================================
              COLONNE DROITE : MASCOTTE INTERACTIVE 3D & ESCALIER ISOMÉTRIQUE
              Fidèle à la composition graphique de la capture d'écran
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
            <InteractiveHeroMascot isHoveringCta={isHoveringCta} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
