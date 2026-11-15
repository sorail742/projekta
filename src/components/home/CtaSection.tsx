"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-white relative overflow-hidden border-t border-white/[0.06]">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary tagline-label text-xs mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{COMPANY_INFO.baseline}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Vous avez un projet en tête ? <span className="font-semibold text-primary">Parlons-en !</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-normal">
            Que vous ayez besoin d&apos;un nouveau site web, d&apos;une refonte graphique, d&apos;une stratégie digitale ou d&apos;une formation, l&apos;équipe PROJEKTA est à votre écoute pour concrétiser vos ambitions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink bg-white hover:bg-primary hover:text-white rounded-full transition-all duration-250 active:scale-[0.98] shadow-soft"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Nous contacter</span>
            </Link>

            <Link
              href="/devis"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/5 border border-white/20 rounded-full transition-all duration-250 active:scale-[0.98] group"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
            </Link>

            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-medium text-white/70 hover:text-primary transition-colors duration-250 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>Échanger sur WhatsApp</span>
            </a>
          </div>

          <p className="mt-8 text-xs text-white/40 font-normal">
            Réponse garantie sous 24 à 48 heures ouvrées • Étude sans engagement
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
