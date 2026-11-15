"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const SERVICES_OPTIONS = [
  "Développement web et mobile",
  "Création graphique et identité visuelle",
  "Portfolios et présence numérique",
  "Gestion des réseaux sociaux et communication digitale",
  "Formations et accompagnement informatique",
  "Autre demande / Collaboration",
];

interface ContactFormProps {
  initialService?: string;
}

export function ContactForm({ initialService = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService || SERVICES_OPTIONS[0],
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: SERVICES_OPTIONS[0],
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Impossible de joindre le serveur. Vérifiez votre connexion.");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-card border border-ink/[0.08]">
      {status === "success" ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in">
          <div className="h-14 w-14 rounded-full bg-primary-50 text-primary mx-auto flex items-center justify-center border border-primary/20">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-light text-ink">
            Votre message a bien été <span className="font-semibold text-primary">envoyé !</span>
          </h3>
          <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed font-normal">
            Merci de contacter PROJEKTA. Notre équipe a bien reçu votre demande et vous répondra sous 24 à 48 heures ouvrées.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink bg-surface-muted hover:bg-primary hover:text-white rounded-full transition-colors border border-ink/[0.08]"
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Nom complet */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="tagline-label text-[10px] text-ink block font-semibold"
              >
                Nom complet <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. Mamadou Diallo"
                className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="tagline-label text-[10px] text-ink block font-semibold"
              >
                Adresse e-mail <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="nom@exemple.com"
                className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Téléphone */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="tagline-label text-[10px] text-ink block font-semibold"
              >
                Numéro de téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+224 6XX XX XX XX"
                className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
              />
            </div>

            {/* Service recherché */}
            <div className="space-y-1.5">
              <label
                htmlFor="service"
                className="tagline-label text-[10px] text-ink block font-semibold"
              >
                Service recherché
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
              >
                {SERVICES_OPTIONS.map((srv, idx) => (
                  <option key={idx} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Objet de la demande */}
          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="tagline-label text-[10px] text-ink block font-semibold"
            >
              Objet de la demande
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ex. Création de site web pour notre nouveau restaurant"
              className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
            />
          </div>

          {/* Description du projet */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="tagline-label text-[10px] text-ink block font-semibold"
            >
              Description de votre projet ou question <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez vos besoins, vos idées, vos délais souhaités ou posez vos questions..."
              className="w-full px-4 py-3 text-sm bg-surface-muted border border-ink/[0.08] rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white text-ink transition-all font-normal"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full shadow-soft hover:shadow-card disabled:opacity-50 transition-all duration-200"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <span>Envoyer ma demande</span>
                <Send className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
