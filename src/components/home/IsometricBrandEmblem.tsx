"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Palette, Globe, Layers, GraduationCap, Sparkles } from "lucide-react";

interface IsometricBrandEmblemProps {
  className?: string;
  isHoveringCta?: boolean;
}

/**
 * Composant emblème 3D isométrique officiel PROJEKTA
 * Respecte à 100 % la charte graphique de PROJEKTA :
 * - Couleurs officielles : Vert (#4FA764), Bleu (#3D74AC), Noir d'encre (#181818), Blanc (#FFFFFF).
 * - Symboles officiels : Losange vert d'action, Arc technologique bleu, Socle à paliers de croissance.
 * - Papier millimétré / dessin technique : repères d'architecte, cotations et lévitation fluide.
 */
export function IsometricBrandEmblem({
  className = "",
  isHoveringCta = false,
}: IsometricBrandEmblemProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activePillar, setActivePillar] = useState<number | null>(null);

  // Position de la souris pour la rotation 3D douce
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth * 0.75;
      const centerY = window.innerHeight * 0.45;
      const dx = (e.clientX - centerX) / window.innerWidth;
      const dy = (e.clientY - centerY) / window.innerHeight;

      setMouseOffset({
        x: Math.max(-12, Math.min(12, dx * 24)),
        y: Math.max(-10, Math.min(10, dy * 20)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <div className={`relative select-none ${className}`} aria-hidden="true">
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: isHoveringCta ? -10 : [0, -8, 0],
                rotateX: mouseOffset.y * -0.4,
                rotateY: mouseOffset.x * 0.5,
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                y: {
                  duration: isHoveringCta ? 0.35 : 4.5,
                  repeat: isHoveringCta ? 0 : Infinity,
                  ease: "easeInOut",
                },
                rotateX: { duration: 0.2, ease: "easeOut" },
                rotateY: { duration: 0.2, ease: "easeOut" },
              }
        }
        className="w-full max-w-[500px] lg:max-w-[560px] mx-auto relative perspective-1000"
      >
        <svg
          viewBox="0 0 540 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
        >
          <defs>
            {/* Dégradés stricts de la charte PROJEKTA */}
            {/* 1. Vert officiel (#4FA764) */}
            <linearGradient id="emeraldTop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6EE799" />
              <stop offset="60%" stopColor="#4FA764" />
              <stop offset="100%" stopColor="#3B8B4E" />
            </linearGradient>

            <linearGradient id="emeraldSideLeft" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B8B4E" />
              <stop offset="100%" stopColor="#2A6438" />
            </linearGradient>

            <linearGradient id="emeraldSideRight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2F753F" />
              <stop offset="100%" stopColor="#1E4D27" />
            </linearGradient>

            {/* 2. Bleu officiel (#3D74AC) */}
            <linearGradient id="blueArcGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7AB4E8" />
              <stop offset="50%" stopColor="#3D74AC" />
              <stop offset="100%" stopColor="#255180" />
            </linearGradient>

            <linearGradient id="blueArcSide" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A598C" />
              <stop offset="100%" stopColor="#173656" />
            </linearGradient>

            {/* 3. Paliers architecturaux en papier millimétré (Blanc / Gris perle / Encre) */}
            <linearGradient id="stepTreadGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2EBE5" />
            </linearGradient>

            <linearGradient id="stepRiserGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#181818" />
              <stop offset="100%" stopColor="#101010" />
            </linearGradient>

            <linearGradient id="stepFlankGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D5A42" />
              <stop offset="100%" stopColor="#1B3829" />
            </linearGradient>

            {/* Lueur technologique */}
            <filter id="brandGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* =================================================================
              1. SOCLE ISOMÉTRIQUE EN PALIERS (PAPIER ARCHITECTURAL)
              Représente les étapes d'ascension numérique selon la charte
          ================================================================= */}
          <g id="architectural-podium" opacity="0.95">
            {/* Ombre portée douce sur la feuille de fond */}
            <ellipse cx="270" cy="460" rx="200" ry="40" fill="#091E14" opacity="0.6" />

            {/* Palier 1 (Base inférieure large) */}
            <g transform="translate(150, 360)">
              {/* Dessus de marche (losange isométrique) */}
              <path d="M 0,50 L 120,0 L 240,50 L 120,100 Z" fill="url(#stepTreadGrad)" stroke="#181818" strokeWidth="2.5" />
              {/* Flanc gauche (encre sombre) */}
              <path d="M 0,50 L 120,100 L 120,132 L 0,82 Z" fill="url(#stepRiserGrad)" stroke="#181818" strokeWidth="2.5" />
              {/* Flanc droit (vert architectural sombre) */}
              <path d="M 120,100 L 240,50 L 240,82 L 120,132 Z" fill="url(#stepFlankGrad)" stroke="#181818" strokeWidth="2.5" />
            </g>

            {/* Palier 2 (Niveau intermédiaire) */}
            <g transform="translate(180, 310)">
              <path d="M 0,40 L 90,0 L 180,40 L 90,80 Z" fill="url(#stepTreadGrad)" stroke="#181818" strokeWidth="2" />
              <path d="M 0,40 L 90,80 L 90,106 L 0,66 Z" fill="url(#stepRiserGrad)" stroke="#181818" strokeWidth="2" />
              <path d="M 90,80 L 180,40 L 180,66 L 90,106 Z" fill="url(#stepFlankGrad)" stroke="#181818" strokeWidth="2" />
            </g>

            {/* Palier 3 (Piédestal supérieur) */}
            <g transform="translate(210, 260)">
              <path d="M 0,30 L 60,0 L 120,30 L 60,60 Z" fill="#FFFFFF" stroke="#181818" strokeWidth="2" />
              <path d="M 0,30 L 60,60 L 60,82 L 0,52 Z" fill="url(#stepRiserGrad)" stroke="#181818" strokeWidth="2" />
              <path d="M 60,60 L 120,30 L 120,52 L 60,82 Z" fill="url(#stepFlankGrad)" stroke="#181818" strokeWidth="2" />
            </g>

            {/* Lignes de cotes / dessin technique sur les paliers */}
            <g opacity="0.4" stroke="#4FA764" strokeWidth="1" strokeDasharray="3 3">
              <line x1="270" y1="260" x2="270" y2="460" />
              <line x1="150" y1="410" x2="390" y2="410" />
            </g>
          </g>

          {/* =================================================================
              2. ARC BLEU OFFICIEL PROJEKTA (#3D74AC)
              Courbe d'innovation et d'ouverture internationale en 3D
          ================================================================= */}
          <g id="blue-innovation-arc">
            {/* Épaisseur / Flanc 3D de l'arc */}
            <path
              d="M 290,75 C 390,95 440,165 430,250 C 420,315 365,360 295,365 L 295,385 C 380,380 445,330 455,250 C 468,150 405,75 290,55 Z"
              fill="url(#blueArcSide)"
              stroke="#181818"
              strokeWidth="2.5"
            />
            {/* Face avant de l'arc bleu officiel */}
            <path
              d="M 290,55 C 405,75 468,150 455,250 C 445,330 380,380 295,385 C 230,390 175,355 155,305 L 175,295 C 190,335 235,365 295,365 C 365,360 420,315 430,250 C 440,165 390,95 290,75 Z"
              fill="url(#blueArcGrad)"
              stroke="#181818"
              strokeWidth="2.5"
            />
            {/* Sphère de point nodal technologique sur l'arc */}
            <circle cx="290" cy="65" r="9" fill="#7AB4E8" stroke="#181818" strokeWidth="2.5" />
            <circle cx="287" cy="62" r="3" fill="#FFFFFF" />
          </g>

          {/* =================================================================
              3. GRAND LOSANGE VERT OFFICIEL PROJEKTA (#4FA764)
              Symbole central d'action, d'ingénierie et de précision
          ================================================================= */}
          <g id="emerald-diamond-monolith">
            {/* Lueur verte en arrière-plan du losange */}
            <circle cx="270" cy="180" r="70" fill="#4FA764" opacity="0.25" filter="url(#brandGlow)" />

            {/* Losange 3D complet :
                Centre : (270, 180)
                Sommet haut : (270, 80)
                Sommet bas : (270, 280)
                Sommet gauche : (190, 180)
                Sommet droit : (350, 180) */}

            {/* Facette latérale inférieure gauche (ombrée) */}
            <path
              d="M 190,180 L 270,280 L 270,305 L 190,205 Z"
              fill="url(#emeraldSideLeft)"
              stroke="#181818"
              strokeWidth="2.5"
            />

            {/* Facette latérale inférieure droite (ombrée dense) */}
            <path
              d="M 270,280 L 350,180 L 350,205 L 270,305 Z"
              fill="url(#emeraldSideRight)"
              stroke="#181818"
              strokeWidth="2.5"
            />

            {/* Facette supérieure principale du losange (Vert vibrant officiel) */}
            <path
              d="M 270,80 L 350,180 L 270,280 L 190,180 Z"
              fill="url(#emeraldTop)"
              stroke="#181818"
              strokeWidth="3"
            />

            {/* Cœur intérieur du losange (motif géométrique en creux) */}
            <path
              d="M 270,120 L 320,180 L 270,240 L 220,180 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeOpacity="0.85"
            />

            {/* Rayon central */}
            <circle cx="270" cy="180" r="7" fill="#FFFFFF" stroke="#181818" strokeWidth="2" />
          </g>

          {/* =================================================================
              4. COTATIONS TECHNIQUES & REPERES D'ARCHITECTE
              Pour renforcer l'effet de feuille de papier millimétré de conception
          ================================================================= */}
          <g id="technical-drafting-marks" opacity="0.55" stroke="#FFFFFF" strokeWidth="1">
            {/* Croix de cadrage / repères de coupe */}
            <g transform="translate(60, 60)">
              <line x1="-8" y1="0" x2="8" y2="0" />
              <line x1="0" y1="-8" x2="0" y2="8" />
              <circle cx="0" cy="0" r="4" fill="none" />
            </g>
            <g transform="translate(480, 60)">
              <line x1="-8" y1="0" x2="8" y2="0" />
              <line x1="0" y1="-8" x2="0" y2="8" />
              <circle cx="0" cy="0" r="4" fill="none" />
            </g>
            <g transform="translate(60, 460)">
              <line x1="-8" y1="0" x2="8" y2="0" />
              <line x1="0" y1="-8" x2="0" y2="8" />
              <circle cx="0" cy="0" r="4" fill="none" />
            </g>
            <g transform="translate(480, 460)">
              <line x1="-8" y1="0" x2="8" y2="0" />
              <line x1="0" y1="-8" x2="0" y2="8" />
              <circle cx="0" cy="0" r="4" fill="none" />
            </g>

            {/* Ligne de cote verticale avec flèches */}
            <line x1="100" y1="120" x2="100" y2="340" stroke="#7AB4E8" strokeDasharray="4 4" />
            <path d="M 96,128 L 100,120 L 104,128" fill="none" stroke="#7AB4E8" strokeWidth="1.5" />
            <path d="M 96,332 L 100,340 L 104,332" fill="none" stroke="#7AB4E8" strokeWidth="1.5" />
            <text x="75" y="235" fill="#7AB4E8" fontSize="10" fontFamily="monospace" transform="rotate(-90 75 235)">
              PROJEKTA · CORE 3D
            </text>
          </g>
        </svg>

        {/* =================================================================
            5. BADGES D'EXPERTISES FLOTTANTS DÉRIVÉS DES 5 PÔLES DE SERVICES
            Strictement aux couleurs PROJEKTA (Vert, Bleu, Noir, Blanc)
        ================================================================= */}
        {/* Badge 1 : Pôle Web & Mobile */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [-4, 4, -4],
                }
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 left-4 sm:left-8 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#102B1F]/90 backdrop-blur-md border border-[#4FA764]/40 shadow-xl text-white"
        >
          <div className="h-6 w-6 rounded-lg bg-[#4FA764]/20 border border-[#4FA764]/40 flex items-center justify-center text-[#5EE089]">
            <Code2 className="h-3.5 w-3.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-[#A7D9B9] font-mono font-medium">01 · Dev</span>
            <span className="text-xs font-semibold text-white">Web & Mobile</span>
          </div>
        </motion.div>

        {/* Badge 2 : Pôle Design & Identité Visuelle */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [4, -4, 4],
                }
          }
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-24 -right-2 sm:right-2 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0D2436]/90 backdrop-blur-md border border-[#3D74AC]/40 shadow-xl text-white"
        >
          <div className="h-6 w-6 rounded-lg bg-[#3D74AC]/20 border border-[#3D74AC]/40 flex items-center justify-center text-[#7AB4E8]">
            <Palette className="h-3.5 w-3.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider text-[#9EC4E8] font-mono font-medium">02 · Studio</span>
            <span className="text-xs font-semibold text-white">Design & UI/UX</span>
          </div>
        </motion.div>

        {/* Badge 3 : Sceau d'ingénierie & d'accompagnement */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [-3, 3, -3],
                }
          }
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-4 left-6 sm:left-12 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg"
        >
          <span className="h-2 w-2 rounded-full bg-[#5EE089] animate-pulse" />
          <span className="text-[11px] font-medium tracking-wide text-white/95">
            Solutions sur-mesure certifiées
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
