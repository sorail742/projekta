import React, { Suspense } from "react";
import type { Metadata } from "next";
import { DevisForm } from "@/components/devis/DevisForm";
import { Badge } from "@/components/common/Badge";
import { Clock, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Demander un Devis Gratuit",
  description:
    "Estimez votre projet numérique avec PROJEKTA : développement web/mobile, création graphique, réseaux sociaux ou formation. Devis clair et personnalisé sous 24 à 48 heures.",
};

export default function DevisPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      {/* En-tête */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Estimation Personnalisée Gratuite
          </Badge>
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-light text-ink tracking-tight leading-tight">
            Configurez votre projet et recevez votre{" "}
            <span className="font-semibold text-ink">devis sur mesure.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed font-normal">
            Prenez 2 minutes pour nous décrire vos besoins. Notre équipe technique analysera vos exigences et vous transmettra une proposition claire, chiffrée et adaptée sous 24 à 48 heures.
          </p>
        </div>

        {/* Barre de garanties */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-ink/10">
          <div className="flex items-center gap-3.5 p-5 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft">
            <Clock className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="text-xs font-semibold text-ink">Réponse rapide</p>
              <p className="text-[11px] text-ink-muted font-normal">Sous 24h à 48h ouvrées</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-5 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft">
            <ShieldCheck className="h-5 w-5 text-secondary shrink-0" />
            <div>
              <p className="text-xs font-semibold text-ink">100% Gratuit & Sans engagement</p>
              <p className="text-[11px] text-ink-muted font-normal">Étude technique confidentielle</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-5 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft">
            <Sparkles className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="text-xs font-semibold text-ink">Solutions sur mesure</p>
              <p className="text-[11px] text-ink-muted font-normal">Parfaitement dimensionnées</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteneur principal du formulaire */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="p-12 text-center text-ink-muted font-normal">Chargement du configurateur de devis...</div>}>
          <DevisForm />
        </Suspense>
      </div>
    </div>
  );
}
