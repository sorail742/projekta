"use client";

import React, { Suspense } from "react";
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
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      {/* En-tête de page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollReveal>
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
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Colonne Gauche : Canaux directs & Coordonnées avec Stagger */}
          <div className="lg:col-span-5 space-y-6">
            <StaggerGrid className="space-y-6">
              {/* Carte WhatsApp direct */}
              <StaggerCard>
                <div className="p-7 sm:p-9 rounded-3xl bg-ink text-white shadow-card border border-white/10 space-y-4 hover:shadow-card-hover hover:-translate-y-[4px] transition-all duration-300">
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
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-primary hover:bg-primary-hover rounded-full transition-all duration-250 active:scale-[0.98] shadow-soft"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Démarrer une conversation WhatsApp</span>
                    </a>
                  </div>
                </div>
              </StaggerCard>

              {/* Carte Email */}
              <StaggerCard>
                <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft hover:shadow-card hover:-translate-y-[3px] transition-all duration-300 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-primary flex items-center justify-center shrink-0 shadow-soft">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="tagline-label text-[10px] text-ink-light">
                      Adresse e-mail
                    </h4>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-semibold text-ink hover:text-primary transition-colors duration-250 break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-xs text-ink-muted font-normal">
                      Nous répondons rapidement à vos messages.
                    </p>
                  </div>
                </div>
              </StaggerCard>

              {/* Carte Téléphone */}
              <StaggerCard>
                <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft hover:shadow-card hover:-translate-y-[3px] transition-all duration-300 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-secondary flex items-center justify-center shrink-0 shadow-soft">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="tagline-label text-[10px] text-ink-light">
                      Téléphone professionnel
                    </h4>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-ink hover:text-primary transition-colors duration-250"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                    <p className="text-xs text-ink-muted font-normal">
                      Échanges directs et prise en charge rapide.
                    </p>
                  </div>
                </div>
              </StaggerCard>

              {/* Carte Localisation */}
              <StaggerCard>
                <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft hover:shadow-card hover:-translate-y-[3px] transition-all duration-300 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-primary flex items-center justify-center shrink-0 shadow-soft">
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
              </StaggerCard>

              {/* Carte Réseaux Sociaux (Facebook officiel) */}
              {COMPANY_INFO.socialLinks.facebook && (
                <StaggerCard>
                  <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft hover:shadow-card hover:-translate-y-[3px] transition-all duration-300 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-secondary flex items-center justify-center shrink-0 shadow-soft">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-secondary">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h4 className="tagline-label text-[10px] text-ink-light">
                        Réseaux Sociaux
                      </h4>
                      <a
                        href={COMPANY_INFO.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-ink hover:text-secondary transition-colors duration-250 inline-flex items-center gap-1.5"
                      >
                        Page Facebook officielle
                        <span className="text-xs text-secondary">↗</span>
                      </a>
                      <p className="text-xs text-ink-muted font-normal">
                        Suivez nos actualités, publications et projets récents.
                      </p>
                    </div>
                  </div>
                </StaggerCard>
              )}
            </StaggerGrid>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <Suspense fallback={<div className="p-8 text-center text-ink-muted">Chargement du formulaire...</div>}>
                <ContactForm />
              </Suspense>
            </ScrollReveal>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-ink/10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="tagline-label text-primary text-xs">
                Questions fréquentes
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-ink mt-2">
                Tout ce que vous devez savoir avant de{" "}
                <span className="font-semibold text-ink">nous contacter</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FAQS_DATA.slice(0, 4).map((faq, idx) => (
              <StaggerCard key={idx}>
                <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft space-y-2.5 h-full hover:shadow-card hover:-translate-y-[3px] transition-all duration-300">
                  <h3 className="text-sm font-semibold text-ink flex items-start gap-2.5">
                    <HelpCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pl-6.5 font-normal">
                    {faq.answer}
                  </p>
                </div>
              </StaggerCard>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </div>
  );
}
