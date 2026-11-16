"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface InteractiveHeroMascotProps {
  className?: string;
  isHoveringCta?: boolean;
}

export function InteractiveHeroMascot({
  className = "",
  isHoveringCta = false,
}: InteractiveHeroMascotProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<SVGGElement>(null);
  const rightEyeRef = useRef<SVGGElement>(null);

  // Déplacement des pupilles
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  // Clignement naturel périodique
  useEffect(() => {
    if (shouldReduceMotion) return;

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 140);
    }, 4500);

    return () => clearInterval(blinkInterval);
  }, [shouldReduceMotion]);

  // Suivi du curseur pour les yeux
  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const calculatePupilOffset = (eyeRef: React.RefObject<SVGGElement | null>) => {
        if (!eyeRef.current) return { x: 0, y: 0 };
        const rect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);
        const distance = Math.min(8, Math.hypot(dx, dy) / 32);

        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      };

      setLeftPupil(calculatePupilOffset(leftEyeRef));
      setRightPupil(calculatePupilOffset(rightEyeRef));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  // Escalier isométrique : 7 marches calculées selon la projection axonométrique
  // Chaque marche a :
  // - Un dessus (marche horizontale / tread) : losange isométrique
  // - Une contremarche frontale (riser) : rectangle vertical
  // - Un flanc latéral (side) : parallélogramme
  const steps = [
    { x: 300, y: 380, w: 70, h: 40, r: 24 },
    { x: 260, y: 340, w: 70, h: 40, r: 24 },
    { x: 220, y: 300, w: 70, h: 40, r: 24 },
    { x: 180, y: 260, w: 70, h: 40, r: 24 },
    { x: 140, y: 220, w: 70, h: 40, r: 24 },
    { x: 100, y: 180, w: 70, h: 40, r: 24 },
  ];

  return (
    <div
      ref={containerRef}
      className={`relative select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: isHoveringCta ? -8 : [0, -6, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: isHoveringCta ? 0.3 : 4,
                repeat: isHoveringCta ? 0 : Infinity,
                ease: "easeInOut",
              }
        }
        className="w-full max-w-[480px] lg:max-w-[560px] mx-auto relative"
      >
        <svg
          viewBox="0 0 520 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        >
          <defs>
            {/* Dégradé chaleureux du corps de la mascotte */}
            <linearGradient id="mascotBodyGrad" x1="120" y1="80" x2="280" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFA6B8" />
              <stop offset="60%" stopColor="#FA8EA5" />
              <stop offset="100%" stopColor="#E97790" />
            </linearGradient>

            {/* Dégradé dessus de marche (tread) */}
            <linearGradient id="stepTopGrad" x1="0" y1="0" x2="80" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFC8B5" />
              <stop offset="100%" stopColor="#FFA58B" />
            </linearGradient>

            {/* Dégradé flanc latéral de marche */}
            <linearGradient id="stepSideGrad" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E6785D" />
              <stop offset="100%" stopColor="#C8593F" />
            </linearGradient>

            {/* Lueur pour les badges */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* =================================================================
              1. CORPS DE LA MASCOTTE (Dôme rose courbé qui dépasse)
              Positionnée à gauche de l'escalier, émergeant vers le haut
          ================================================================= */}
          <g id="mascot-character">
            {/* Ombre portée douce sous le personnage */}
            <ellipse cx="190" cy="510" rx="90" ry="25" fill="#0C261B" opacity="0.45" />

            {/* Silhouette du dôme rose */}
            <path
              d="M 100,520 L 100,240 C 100,130 180,85 240,95 C 290,103 310,160 310,270 L 310,520 Z"
              fill="url(#mascotBodyGrad)"
              stroke="#1D1215"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            {/* Légère highlight sur le sommet du dôme */}
            <path
              d="M 125,230 C 130,160 180,115 235,115"
              stroke="#FFE4EC"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* =================================================================
                YEUX EXPRESSIFS AVEC PUPILLES INTERACTIVES & CLIGNEMENT
            ================================================================= */}
            {/* Œil Gauche (plus grand, au premier plan) */}
            <g
              ref={leftEyeRef}
              transform="translate(145, 145) rotate(-14)"
              style={{
                transformOrigin: "145px 145px",
                transform: isBlinking ? "scaleY(0.08)" : "scaleY(1)",
                transition: "transform 100ms ease-out",
              }}
            >
              {/* Blanc de l'œil (sclérotique) */}
              <ellipse
                cx="0"
                cy="0"
                rx="26"
                ry="32"
                fill="#FFFFFF"
                stroke="#1E1216"
                strokeWidth="4"
              />
              {/* Pupille noire mobile */}
              <g
                style={{
                  transform: `translate(${leftPupil.x}px, ${leftPupil.y}px)`,
                  transition: "transform 50ms ease-out",
                }}
              >
                <circle cx="2" cy="0" r="14" fill="#1C1114" />
                {/* Reflet blanc spéculaire */}
                <circle cx="-2" cy="-4" r="5" fill="#FFFFFF" />
                <circle cx="5" cy="4" r="2.2" fill="#FFFFFF" opacity="0.8" />
              </g>
            </g>

            {/* Œil Droit (légèrement plus en arrière sur la courbure) */}
            <g
              ref={rightEyeRef}
              transform="translate(265, 165) rotate(10)"
              style={{
                transformOrigin: "265px 165px",
                transform: isBlinking ? "scaleY(0.08)" : "scaleY(1)",
                transition: "transform 100ms ease-out",
              }}
            >
              {/* Blanc de l'œil */}
              <ellipse
                cx="0"
                cy="0"
                rx="24"
                ry="30"
                fill="#FFFFFF"
                stroke="#1E1216"
                strokeWidth="4"
              />
              {/* Pupille noire mobile */}
              <g
                style={{
                  transform: `translate(${rightPupil.x}px, ${rightPupil.y}px)`,
                  transition: "transform 50ms ease-out",
                }}
              >
                <circle cx="0" cy="0" r="13" fill="#1C1114" />
                {/* Reflet blanc spéculaire */}
                <circle cx="-3" cy="-3" r="4.5" fill="#FFFFFF" />
                <circle cx="4" cy="4" r="2" fill="#FFFFFF" opacity="0.8" />
              </g>
            </g>
          </g>

          {/* =================================================================
              2. ESCALIER ISOMÉTRIQUE 3D (Descendant vers le bas-droite)
              Exactement comme dans la référence graphique
          ================================================================= */}
          <g id="isometric-stairs">
            {/* Marche 1 (La plus haute, près du dôme) */}
            <g transform="translate(260, 220)">
              {/* Contremarche face avant */}
              <path d="M 0,20 L 55,52 L 55,78 L 0,46 Z" fill="#201317" stroke="#160D10" strokeWidth="2.5" />
              {/* Flanc latéral */}
              <path d="M 55,52 L 120,15 L 120,41 L 55,78 Z" fill="url(#stepSideGrad)" stroke="#160D10" strokeWidth="2.5" />
              {/* Dessus de marche (tread) */}
              <path d="M 0,20 L 65,-18 L 120,15 L 55,52 Z" fill="url(#stepTopGrad)" stroke="#160D10" strokeWidth="2.5" />
            </g>

            {/* Marche 2 */}
            <g transform="translate(290, 260)">
              <path d="M 0,20 L 55,52 L 55,78 L 0,46 Z" fill="#201317" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 55,52 L 120,15 L 120,41 L 55,78 Z" fill="url(#stepSideGrad)" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 0,20 L 65,-18 L 120,15 L 55,52 Z" fill="url(#stepTopGrad)" stroke="#160D10" strokeWidth="2.5" />
            </g>

            {/* Marche 3 */}
            <g transform="translate(320, 300)">
              <path d="M 0,20 L 55,52 L 55,78 L 0,46 Z" fill="#201317" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 55,52 L 120,15 L 120,41 L 55,78 Z" fill="url(#stepSideGrad)" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 0,20 L 65,-18 L 120,15 L 55,52 Z" fill="url(#stepTopGrad)" stroke="#160D10" strokeWidth="2.5" />
            </g>

            {/* Marche 4 */}
            <g transform="translate(350, 340)">
              <path d="M 0,20 L 55,52 L 55,78 L 0,46 Z" fill="#201317" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 55,52 L 120,15 L 120,41 L 55,78 Z" fill="url(#stepSideGrad)" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 0,20 L 65,-18 L 120,15 L 55,52 Z" fill="url(#stepTopGrad)" stroke="#160D10" strokeWidth="2.5" />
            </g>

            {/* Marche 5 */}
            <g transform="translate(380, 380)">
              <path d="M 0,20 L 55,52 L 55,78 L 0,46 Z" fill="#201317" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 55,52 L 120,15 L 120,41 L 55,78 Z" fill="url(#stepSideGrad)" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 0,20 L 65,-18 L 120,15 L 55,52 Z" fill="url(#stepTopGrad)" stroke="#160D10" strokeWidth="2.5" />
            </g>

            {/* Marche 6 (Base inférieure) */}
            <g transform="translate(410, 420)">
              <path d="M 0,20 L 55,52 L 55,78 L 0,46 Z" fill="#201317" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 55,52 L 120,15 L 120,41 L 55,78 Z" fill="url(#stepSideGrad)" stroke="#160D10" strokeWidth="2.5" />
              <path d="M 0,20 L 65,-18 L 120,15 L 55,52 Z" fill="url(#stepTopGrad)" stroke="#160D10" strokeWidth="2.5" />
            </g>
          </g>

          {/* =================================================================
              3. PETIT BLOC ISOMÉTRIQUE FLOTTANT AVEC LE SYMBOLE PROJEKTA
          ================================================================= */}
          <g transform="translate(70, 100)">
            {/* Losange supérieur */}
            <path d="M 0,20 L 35,0 L 70,20 L 35,40 Z" fill="#4FA764" stroke="#1B4D2B" strokeWidth="2" />
            {/* Côté gauche */}
            <path d="M 0,20 L 35,40 L 35,62 L 0,42 Z" fill="#367946" stroke="#1B4D2B" strokeWidth="2" />
            {/* Côté droit */}
            <path d="M 35,40 L 70,20 L 70,42 L 35,62 Z" fill="#3D74AC" stroke="#1B4D2B" strokeWidth="2" />
            {/* Lueur subtile */}
            <circle cx="35" cy="20" r="12" fill="#FFFFFF" opacity="0.3" filter="url(#softGlow)" />
          </g>

          {/* Sparkles décoratifs */}
          <g transform="translate(90, 60)">
            <path d="M 0,8 Q 8,8 8,0 Q 8,8 16,8 Q 8,8 8,16 Q 8,8 0,8 Z" fill="#5EE089" />
          </g>
          <g transform="translate(440, 190)">
            <path d="M 0,6 Q 6,6 6,0 Q 6,6 12,6 Q 6,6 6,12 Q 6,6 0,6 Z" fill="#FFE27A" />
          </g>
        </svg>

        {/* Badge technologique flottant interactif */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [-3, 3, -3],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-4 right-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112F21]/80 backdrop-blur-md border border-white/20 text-white shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-[#5EE089] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wide text-white">
            PROJEKTA · Digital Studio
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
