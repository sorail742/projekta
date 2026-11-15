"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Barre de progression de lecture discrète et fluide en haut de page.
 * Fine (2px), dégradé vert (#4FA764) -> bleu (#3D74AC), GPU-accelerated via scaleX.
 */
export function ReadingProgressBar() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!mounted || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-emerald-500 to-secondary origin-left z-[60] pointer-events-none"
    />
  );
}
