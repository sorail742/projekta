"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  amount?: number;
}

/**
 * Apparition au scroll : fade + translateY(30px), déclenchée une seule fois à 20% de visibilité.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 30,
  amount = 0.2,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.6,
        delay,
        ease: EASE_PREMIUM,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
}

const staggerGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number = 0.08) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

/**
 * Conteneur de grille avec stagger de 0.08s entre les cartes déclenché à 20% de visibilité.
 */
export function StaggerGrid({
  children,
  className,
  staggerDelay = 0.08,
  amount = 0.2,
}: StaggerGridProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerGridVariants}
      custom={staggerDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerCardProps {
  children: React.ReactNode;
  className?: string;
}

const staggerCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Carte individuelle apparaissant dans une grille avec fade + translateY(30px).
 */
export function StaggerCard({ children, className }: StaggerCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerCardVariants} className={className}>
      {children}
    </motion.div>
  );
}
