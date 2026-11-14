import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function CtaSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-950 via-projekta-deep to-slate-900 text-white relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-500/30">
          Passez à l&apos;action
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Vous avez un projet en tête ? Parlons-en !
        </h2>

        <p className="mt-5 text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
          Que vous ayez besoin d&apos;un nouveau site web, d&apos;une refonte graphique, d&apos;une stratégie digitale ou d&apos;une formation, l&apos;équipe PROJEKTA est à votre écoute pour concrétiser vos ambitions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all"
          >
            <Mail className="h-4 w-4" />
            <span>Nous contacter</span>
          </Link>

          <Link
            href="/devis"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
          >
            <span>Demander un devis gratuit</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-emerald-300 hover:text-white transition-colors"
          >
            <MessageCircle className="h-5 w-5 text-emerald-400" />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          Réponse garantie sous 24 à 48 heures ouvrées • Étude sans engagement
        </p>
      </div>
    </section>
  );
}
