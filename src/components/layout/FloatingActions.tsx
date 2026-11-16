"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Apparition déclenchée après 2 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.9 }}
        animate={
          isReady
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.9 }
        }
        transition={{
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"
      >
        {/* Infobulle d'accueil */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="pointer-events-auto max-w-xs bg-white text-ink p-3.5 rounded-3xl shadow-card border border-ink/[0.08] text-xs flex items-start gap-2.5"
          >
            <span className="h-2 w-2 rounded-full bg-primary mt-1 shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-ink">Un projet numérique ?</p>
              <p className="text-ink-muted mt-0.5 font-normal">
                Échangez directement avec notre équipe sur WhatsApp !
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-ink-light hover:text-ink p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-xl hover:bg-ink/5 transition-colors shrink-0"
              aria-label="Fermer l'infobulle d'assistance"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}

        <div className="flex items-center gap-2.5 pointer-events-auto">
          {/* Bouton WhatsApp Flottant avec pulsation matérielle ultra-légère (0ms JS loop) */}
          <div className="relative">
            {/* Halo de pulsation discret géré en pur CSS matériel */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-primary -z-10 pointer-events-none animate-pulse-ring"
            />

            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-primary hover:bg-primary-hover text-white shadow-card ring-4 ring-white transition-all duration-250 animate-float-subtle active:scale-95"
              aria-label="Démarrer une conversation sur WhatsApp avec PROJEKTA"
              title="Échanger sur WhatsApp"
            >
              <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              <span className="sr-only">Contacter PROJEKTA sur WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
