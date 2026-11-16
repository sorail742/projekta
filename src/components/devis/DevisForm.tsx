"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
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
  "Projet initial / Démarrage",
  "Projet standard",
  "Projet avancé / Sur-mesure",
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
    estimatedBudget: BUDGET_RANGES[3],
    timeline: TIMELINES[1],
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientCompany: "",
    projectDescription: "",
  });

  const [honeypot, setHoneypot] = useState("");
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
    setErrorMessage("");

    // Validation stricte côté client
    if (!formData.clientName.trim() || formData.clientName.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Veuillez renseigner votre nom complet (au moins 2 caractères).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!formData.clientEmail.trim() || !emailRegex.test(formData.clientEmail.trim())) {
      setStatus("error");
      setErrorMessage("Veuillez renseigner une adresse email valide.");
      return;
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Veuillez décrire votre projet (au moins 10 caractères).");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _gotcha: honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setHoneypot("");
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
    <div className="bg-white rounded-3xl p-7 sm:p-11 shadow-card border border-ink/[0.08]">
      {status === "success" ? (
        <div className="py-16 text-center space-y-4 animate-in fade-in">
          <div className="h-16 w-16 rounded-full bg-primary-50 text-primary mx-auto flex items-center justify-center border border-primary/20">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h3 className="text-2xl font-light text-ink">
            Demande de devis enregistrée avec <span className="font-semibold text-primary">succès !</span>
          </h3>
          <p className="text-ink-muted text-base max-w-lg mx-auto leading-relaxed font-normal">
            Merci de faire confiance à PROJEKTA. Notre équipe analyse vos spécifications et reviendra vers vous rapidement avec une estimation personnalisée.
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
                  estimatedBudget: BUDGET_RANGES[3],
                  timeline: TIMELINES[1],
                  clientName: "",
                  clientEmail: "",
                  clientPhone: "",
                  clientCompany: "",
                  projectDescription: "",
                });
              }}
              className="px-7 py-3 text-xs font-semibold uppercase tracking-wider text-ink bg-surface-muted hover:bg-primary hover:text-white rounded-full transition-colors border border-ink/[0.08]"
            >
              Soumettre une autre demande
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-9">
          {/* Protection anti-spam honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="_devis_gotcha">Ne pas renseigner ce champ</label>
            <input
              type="text"
              id="_devis_gotcha"
              name="_gotcha"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === "error" && (
            <div className="p-4 rounded-2xl bg-ink/5 border border-ink/20 text-ink text-sm flex items-start gap-2.5">
              <AlertCircle className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Étape 1 : Domaine de service */}
          <div className="space-y-3.5">
            <label className="block tagline-label text-xs text-ink font-semibold">
              1. Sélectionnez le domaine principal de votre projet{" "}
              <span className="text-primary">*</span>
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
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? "border-primary bg-primary-50/60 ring-1 ring-primary/40 text-ink shadow-soft"
                        : "border-ink/[0.08] hover:border-ink/20 hover:bg-surface-muted text-ink-muted"
                    }`}
                  >
                    <span className="tagline-label text-[10px] text-primary mb-1.5 font-semibold">
                      {srv.number}
                    </span>
                    <span className="text-sm font-medium leading-snug text-ink">
                      {srv.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Étape 2 : Nature du projet */}
          <div className="space-y-3.5">
            <label className="block tagline-label text-xs text-ink font-semibold">
              2. Nature de votre projet
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PROJECT_NATURES.map((nature, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 text-xs sm:text-sm ${
                    formData.projectNature === nature
                      ? "border-primary bg-primary-50/40 font-medium text-ink shadow-soft"
                      : "border-ink/[0.08] hover:bg-surface-muted text-ink-muted"
                  }`}
                >
                  <input
                    type="radio"
                    name="projectNature"
                    checked={formData.projectNature === nature}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, projectNature: nature }))
                    }
                    className="accent-primary"
                  />
                  <span>{nature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Étape 3 : Fonctionnalités & besoins souhaités */}
          <div className="space-y-3.5">
            <label className="block tagline-label text-xs text-ink font-semibold">
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
                    className={`flex items-center gap-2.5 p-3 rounded-2xl border text-left text-xs transition-all duration-200 ${
                      checked
                        ? "border-primary bg-primary-50/50 text-ink font-medium shadow-soft"
                        : "border-ink/[0.08] hover:bg-surface-muted text-ink-muted"
                    }`}
                  >
                    <span
                      className={`h-4 w-4 rounded-md flex items-center justify-center shrink-0 border text-[10px] ${
                        checked
                          ? "bg-primary border-primary text-white font-bold"
                          : "border-ink/20 bg-white"
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
              <label className="block tagline-label text-[10px] text-ink font-semibold">
                Délai cible de livraison
              </label>
              <select
                value={formData.timeline}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, timeline: e.target.value }))
                }
                className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
              >
                {TIMELINES.map((t, idx) => (
                  <option key={idx} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block tagline-label text-[10px] text-ink font-semibold">
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
                className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
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
          <div className="space-y-4 pt-4 border-t border-ink/[0.06]">
            <h4 className="tagline-label text-xs text-ink font-semibold">
              4. Vos coordonnées de contact
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="clientName"
                  className="tagline-label text-[10px] text-ink block font-semibold"
                >
                  Votre nom complet <span className="text-primary">*</span>
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
                  className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="clientEmail"
                  className="tagline-label text-[10px] text-ink block font-semibold"
                >
                  Adresse e-mail <span className="text-primary">*</span>
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
                  className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="clientPhone"
                  className="tagline-label text-[10px] text-ink block font-semibold"
                >
                  Téléphone / WhatsApp <span className="text-primary">*</span>
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
                  className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="clientCompany"
                  className="tagline-label text-[10px] text-ink block font-semibold"
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
                  className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
                />
              </div>
            </div>
          </div>

          {/* Étape 6 : Description détaillée */}
          <div className="space-y-1.5">
            <label
              htmlFor="projectDescription"
              className="tagline-label text-[10px] text-ink block font-semibold"
            >
              Description de votre projet & attentes spécifiques{" "}
              <span className="text-primary">*</span>
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
              className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
            />
          </div>

          {/* Bouton de soumission */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full shadow-soft hover:shadow-card disabled:opacity-50 transition-all duration-200"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Traitement de votre devis...</span>
                </>
              ) : (
                <>
                  <span>Soumettre ma demande de devis gratuite</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-ink-light font-normal">
              Sans engagement. Vos informations restent strictement confidentielles.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
