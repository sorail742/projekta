"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Transition de page fluide en fondu de 300ms.
 * Réalisée avec un template Next.js App Router (se re-monte à chaque navigation).
 * Respecte strictement prefers-reduced-motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 flex flex-col w-full"
    >
      {children}
    </motion.div>
  );
}
