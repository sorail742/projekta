import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import { FAQS_DATA } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description:
    "Prenez contact avec l'équipe de PROJEKTA : formulaire en ligne, WhatsApp direct, adresse email et coordonnées à Conakry, Guinée.",
};

export default function ContactPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      {/* En-tête de page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Échange & Prise de Contact
          </Badge>
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-light text-ink tracking-tight leading-tight">
            Parlons de votre projet dès{" "}
            <span className="font-semibold text-ink">aujourd&apos;hui.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed font-normal">
            Une question, une idée ou un projet à lancer ? Remplissez notre formulaire ou contactez-nous directement sur WhatsApp pour un premier échange rapide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Colonne Gauche : Canaux directs & Coordonnées */}
          <div className="lg:col-span-5 space-y-6">
            {/* Carte WhatsApp direct */}
            <div className="p-7 sm:p-9 rounded-3xl bg-ink text-white shadow-card border border-white/10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary tagline-label text-[10px]">
                <MessageCircle className="h-3.5 w-3.5 text-primary" />
                <span>Canal le plus rapide</span>
              </div>
              <h3 className="text-xl font-light text-white">
                Discutez directement avec nous sur{" "}
                <span className="font-semibold text-primary">WhatsApp</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                Posez vos questions en direct à notre équipe technique et commerciale pour une réponse quasi-instantanée.
              </p>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-primary hover:bg-primary-hover rounded-full transition-all duration-200 shadow-soft"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Démarrer une conversation WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Carte Email */}
            <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft flex items-start gap-4">
              <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-primary flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="tagline-label text-[10px] text-ink-light">
                  Adresse e-mail
                </h4>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm font-semibold text-ink hover:text-primary transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
                <p className="text-xs text-ink-muted font-normal">
                  Réponse assurée sous 24h à 48h ouvrées.
                </p>
              </div>
            </div>

            {/* Carte Téléphone */}
            <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft flex items-start gap-4">
              <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-secondary flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="tagline-label text-[10px] text-ink-light">
                  Téléphone professionnel
                </h4>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-semibold text-ink hover:text-primary transition-colors"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
                <p className="text-xs text-ink-muted font-normal">
                  Du lundi au vendredi, de 8h30 à 18h00.
                </p>
              </div>
            </div>

            {/* Carte Localisation */}
            <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft flex items-start gap-4">
              <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-primary flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="tagline-label text-[10px] text-ink-light">
                  Localisation & Siège
                </h4>
                <p className="text-sm font-semibold text-ink">
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                </p>
                <p className="text-xs text-ink-muted font-normal">
                  Interventions en Guinée, dans la sous-région et à distance avec l&apos;international.
                </p>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-ink-muted">Chargement du formulaire...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-ink/10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="tagline-label text-primary text-xs">
              Questions fréquentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-ink mt-2">
              Tout ce que vous devez savoir avant de{" "}
              <span className="font-semibold text-ink">nous contacter</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FAQS_DATA.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft space-y-2.5"
              >
                <h3 className="text-sm font-semibold text-ink flex items-start gap-2.5">
                  <HelpCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pl-6.5 font-normal">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
