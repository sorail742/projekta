import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F7F8FA] relative overflow-hidden">
      {/* Halos lumineux discrets */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Carte 404 épurée */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-ink/[0.08] shadow-card flex flex-col items-center">
          {/* Badge officiel */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary tagline-label text-[10px] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span>Erreur 404 · Page introuvable</span>
          </div>

          {/* Grand numéro 404 léger et aéré */}
          <div className="text-7xl sm:text-8xl font-extralight text-ink tracking-tight mb-2 select-none">
            4<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-light">0</span>4
          </div>

          <h1 className="text-2xl sm:text-3xl font-light text-ink tracking-tight mb-3">
            Page non <span className="font-semibold text-ink">trouvée</span>
          </h1>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal mb-8 max-w-md">
            La page que vous recherchez n&apos;existe pas, a été déplacée ou son URL a été modifiée.
          </p>

          {/* Actions de redirection */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-primary hover:bg-primary-hover rounded-full shadow-soft hover:shadow-[0_0_24px_rgba(79,167,100,0.35)] transition-all duration-250 active:scale-[0.98]"
            >
              <Home strokeWidth={1.5} className="h-4 w-4" />
              <span>Retour à l&apos;accueil</span>
            </Link>

            <Link
              href="/devis"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink border border-ink/20 hover:border-ink rounded-full transition-all duration-250 active:scale-[0.98]"
            >
              <span>Demander un devis</span>
              <ArrowRight strokeWidth={1.5} className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-ink/[0.06] w-full flex items-center justify-center gap-2 text-xs text-ink-muted">
            <span>Besoin d&apos;assistance ?</span>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Contactez notre équipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
