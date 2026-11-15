"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#1A1A1A] text-white relative overflow-hidden border-t border-white/[0.08]">
      {/* =========================================================================
          FORMES GÉOMÉTRIQUES DU LOGO EN FILIGRANE VERT ET BLEU (WATERMARK)
          Grand chevron et arc de cercle inspirés du logo officiel à 10-14% d'opacité
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-0">
        {/* Halos d'ambiance très doux */}
        <div className="absolute -top-24 left-1/4 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-3xl" />

        {/* Grand Losange / Apex chevron vert (#4FA764) en filigrane à gauche */}
        <div className="absolute -top-16 -left-16 sm:left-4 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] opacity-[0.12]">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <rect
              x="250"
              y="50"
              width="260"
              height="260"
              rx="16"
              transform="rotate(45 250 50)"
              stroke="#4FA764"
              strokeWidth="1.5"
            />
            <rect
              x="250"
              y="90"
              width="200"
              height="200"
              rx="12"
              transform="rotate(45 250 90)"
              stroke="#4FA764"
              strokeWidth="1"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        {/* Grand Arc de Cercle bleu (#3D74AC) en filigrane à droite */}
        <div className="absolute -bottom-16 -right-16 sm:right-4 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] opacity-[0.14]">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M 250,50 A 200,200 0 1,1 80,320"
              stroke="#3D74AC"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="250"
              cy="50"
              r="4"
              fill="#3D74AC"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          {/* Petite étiquette en majuscules espacées */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-primary tagline-label text-xs mb-8 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="tracking-[0.22em] uppercase text-white/90 font-semibold">
              INNOVATION · TECHNOLOGY · PROJECTS
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          </div>

          {/* Titre blanc en Montserrat 300 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-3xl mx-auto leading-[1.12]">
            Vous avez un projet en tête ?{" "}
            <span className="font-semibold text-accent-gradient">Parlons-en !</span>
          </h2>

          {/* Sous-texte blanc doux */}
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-normal">
            Que vous ayez besoin d&apos;un nouveau site web, d&apos;une refonte graphique, d&apos;une stratégie digitale ou d&apos;une formation pratique, l&apos;équipe PROJEKTA est à votre écoute pour concrétiser vos ambitions.
          </p>

          {/* Boutons d'action : Bouton vert principal + Secondaire contour fin */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Bouton Principal Vert */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-primary hover:bg-primary-hover rounded-full transition-all duration-250 active:scale-[0.98] shadow-soft hover:shadow-[0_0_28px_rgba(79,167,100,0.45)] group"
            >
              <Mail strokeWidth={1.5} className="h-4 w-4" />
              <span>Nous contacter</span>
              <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
            </Link>

            {/* Bouton Secondaire Contour Fin */}
            <Link
              href="/devis"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-full transition-all duration-250 active:scale-[0.98]"
            >
              <span>Demander un devis gratuit</span>
            </Link>

            {/* Bouton WhatsApp */}
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-medium text-white/80 hover:text-white transition-colors duration-250 active:scale-[0.98]"
            >
              <MessageCircle strokeWidth={1.5} className="h-4 w-4 text-primary" />
              <span>Échanger sur WhatsApp</span>
            </a>
          </div>

          <p className="mt-8 text-xs text-white/40 font-normal">
            Réponse assurée sous 24h à 48h ouvrées • Étude confidentielle sans engagement
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
