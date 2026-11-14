import React, { Suspense } from "react";
import type { Metadata } from "next";
import { DevisForm } from "@/components/devis/DevisForm";
import { Badge } from "@/components/common/Badge";
import { Clock, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Demander un Devis Gratuit",
  description:
    "Estimez votre projet numérique avec PROJEKTA : développement web/mobile, création graphique, réseaux sociaux ou formation. Devis clair et personnalisé sous 24 à 48 heures.",
};

export default function DevisPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Estimation Personnalisée Gratuite
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Configurez votre projet et recevez votre devis sur mesure.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Prenez 2 minutes pour nous décrire vos besoins. Notre équipe technique analysera vos exigences et vous transmettra une proposition claire, chiffrée et adaptée sous 24 à 48 heures.
          </p>
        </div>

        {/* Guarantees bar */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80">
            <Clock className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">Réponse rapide</p>
              <p className="text-[11px] text-slate-500">Sous 24h à 48h ouvrées</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80">
            <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">100% Gratuit & Sans engagement</p>
              <p className="text-[11px] text-slate-500">Étude technique confidentielle</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/80">
            <Sparkles className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">Solutions sur mesure</p>
              <p className="text-[11px] text-slate-500">Parfaitement dimensionnées</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="p-12 text-center text-slate-500">Chargement du configurateur de devis...</div>}>
          <DevisForm />
        </Suspense>
      </div>
    </div>
  );
}
