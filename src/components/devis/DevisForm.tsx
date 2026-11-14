"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Code2,
  Palette,
  Briefcase,
  Share2,
  GraduationCap,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

const PROJECT_NATURES = [
  "Création d'un nouveau projet (de zéro)",
  "Refonte / Modernisation d'une solution existante",
  "Maintenance & Évolution technique",
  "Conseil stratégique & accompagnement",
];

const FEATURES_LIST = [
  "Site responsive mobile/tablette/PC",
  "Boutique e-commerce & catalogue produits",
  "Commande & redirection WhatsApp",
  "Formulaires avancés & devis interactifs",
  "Identité visuelle complète (Logo, Charte, Polices)",
  "Cartes de visite & flyers prêts pour impression",
  "Portfolio professionnel avec galerie filtrable",
  "Gestion et calendrier pour réseaux sociaux",
  "Optimisation du référencement naturel (SEO)",
  "Espace d'administration simple (gestion des textes)",
  "Formation à la prise en main",
];

const BUDGET_RANGES = [
  "Budget indicatif : Moins de 2 500 000 GNF",
  "Budget indicatif : 2 500 000 à 5 000 000 GNF",
  "Budget indicatif : 5 000 000 à 15 000 000 GNF",
  "Budget indicatif : Plus de 15 000 000 GNF",
  "Budget à définir selon les recommandations techniques",
];

const TIMELINES = [
  "Urgent (moins de 10 jours)",
  "Sous 1 mois",
  "Sous 2 à 3 mois",
  "Simple étude préalable / Pas d'urgence immédiate",
];

interface DevisFormProps {
  initialServiceId?: string;
}

export function DevisForm({ initialServiceId = "" }: DevisFormProps) {
  const initialService =
    SERVICES_DATA.find((s) => s.id === initialServiceId)?.title ||
    SERVICES_DATA[0].title;

  const [formData, setFormData] = useState({
    serviceType: initialService,
    projectNature: PROJECT_NATURES[0],
    mainNeeds: [] as string[],
    features: [] as string[],
    estimatedBudget: BUDGET_RANGES[4],
    timeline: TIMELINES[1],
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientCompany: "",
    projectDescription: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleFeature = (feature: string) => {
    setFormData((prev) => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((f) => f !== feature)
          : [...prev.features, feature],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Impossible de joindre le serveur. Veuillez vérifier votre connexion.");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/80">
      {status === "success" ? (
        <div className="py-16 text-center space-y-4 animate-in fade-in">
          <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-slate-900">
            Demande de devis enregistrée avec succès !
          </h3>
          <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
            Merci de faire confiance à PROJEKTA. Notre équipe technique analyse vos spécifications et reviendra vers vous sous 24 à 48 heures ouvrées avec une estimation personnalisée.
          </p>
          <div className="pt-6 flex justify-center gap-4">
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  serviceType: SERVICES_DATA[0].title,
                  projectNature: PROJECT_NATURES[0],
                  mainNeeds: [],
                  features: [],
                  estimatedBudget: BUDGET_RANGES[4],
                  timeline: TIMELINES[1],
                  clientName: "",
                  clientEmail: "",
                  clientPhone: "",
                  clientCompany: "",
                  projectDescription: "",
                });
              }}
              className="px-6 py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors"
            >
              Soumettre une autre demande
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2.5">
              <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Étape 1 : Domaine de service */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-900">
              1. Sélectionnez le domaine principal de votre projet{" "}
              <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SERVICES_DATA.map((srv) => {
                const isSelected = formData.serviceType === srv.title;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, serviceType: srv.title }))
                    }
                    className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-600/30 text-emerald-950"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-emerald-700 mb-1">
                      {srv.number}
                    </span>
                    <span className="text-sm font-bold leading-tight">
                      {srv.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Étape 2 : Nature du projet */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-900">
              2. Nature de votre projet
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PROJECT_NATURES.map((nature, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all text-xs sm:text-sm ${
                    formData.projectNature === nature
                      ? "border-emerald-600 bg-emerald-50/60 font-semibold text-emerald-900"
                      : "border-slate-200 hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="projectNature"
                    checked={formData.projectNature === nature}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, projectNature: nature }))
                    }
                    className="accent-emerald-600"
                  />
                  <span>{nature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Étape 3 : Fonctionnalités & besoins souhaités */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-slate-900">
              3. Besoins & fonctionnalités clés souhaitées (cochez ce qui s&apos;applique)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {FEATURES_LIST.map((feat, idx) => {
                const checked = formData.features.includes(feat);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleFeature(feat)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs transition-all ${
                      checked
                        ? "border-emerald-600 bg-emerald-50 text-emerald-900 font-medium"
                        : "border-slate-200 hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    <span
                      className={`h-4 w-4 rounded flex items-center justify-center shrink-0 border text-[10px] ${
                        checked
                          ? "bg-emerald-600 border-emerald-600 text-white font-bold"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {checked ? "✓" : ""}
                    </span>
                    <span className="leading-tight">{feat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Étape 4 : Délais et Budget indicatif */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Délai cible de livraison
              </label>
              <select
                value={formData.timeline}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, timeline: e.target.value }))
                }
                className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
              >
                {TIMELINES.map((t, idx) => (
                  <option key={idx} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Fourchette budgétaire estimative (Facultatif)
              </label>
              <select
                value={formData.estimatedBudget}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    estimatedBudget: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
              >
                {BUDGET_RANGES.map((b, idx) => (
                  <option key={idx} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Étape 5 : Coordonnées du demandeur */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="text-sm font-bold text-slate-900">
              4. Vos coordonnées de contact
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="clientName"
                  className="text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Votre nom complet <span className="text-rose-500">*</span>
                </label>
                <input
                  id="clientName"
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      clientName: e.target.value,
                    }))
                  }
                  placeholder="Mamadou Barry"
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="clientEmail"
                  className="text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Adresse e-mail <span className="text-rose-500">*</span>
                </label>
                <input
                  id="clientEmail"
                  type="email"
                  required
                  value={formData.clientEmail}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      clientEmail: e.target.value,
                    }))
                  }
                  placeholder="nom@entreprise.com"
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="clientPhone"
                  className="text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Téléphone / WhatsApp <span className="text-rose-500">*</span>
                </label>
                <input
                  id="clientPhone"
                  type="tel"
                  required
                  value={formData.clientPhone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      clientPhone: e.target.value,
                    }))
                  }
                  placeholder="+224 6XX XX XX XX"
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="clientCompany"
                  className="text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Nom de l&apos;entreprise ou organisation (Optionnel)
                </label>
                <input
                  id="clientCompany"
                  type="text"
                  value={formData.clientCompany}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      clientCompany: e.target.value,
                    }))
                  }
                  placeholder="Ex. Sahel Commerce SARL"
                  className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* Étape 6 : Description détaillée */}
          <div className="space-y-1.5">
            <label
              htmlFor="projectDescription"
              className="text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Description de votre projet & attentes spécifiques{" "}
              <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              required
              value={formData.projectDescription}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  projectDescription: e.target.value,
                }))
              }
              placeholder="Expliquez-nous l'objectif du projet, votre secteur d'activité, vos inspirations ou les fonctionnalités indispensables..."
              className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
            />
          </div>

          {/* Bouton de soumission */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-projekta-deep hover:from-emerald-700 hover:to-emerald-950 rounded-xl shadow-md hover:shadow-xl disabled:opacity-50 transition-all"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Traitement de votre devis...</span>
                </>
              ) : (
                <>
                  <span>Soumettre ma demande de devis gratuite</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="mt-2.5 text-center text-xs text-slate-500">
              Sans engagement. Vos informations restent strictement confidentielles.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
