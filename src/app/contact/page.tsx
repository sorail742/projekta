import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Sparkles,
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
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Échange & Prise de Contact
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Parlons de votre projet dès aujourd&apos;hui.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Une question, une idée ou un projet à lancer ? Remplissez notre formulaire ou contactez-nous directement sur WhatsApp pour un premier échange rapide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp direct card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-700 to-projekta-deep text-white shadow-lg space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold">
                <MessageCircle className="h-4 w-4 text-emerald-300" />
                <span>Canal le plus rapide</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Discutez directement avec nous sur WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Posez vos questions en direct à notre équipe technique et commerciale pour une réponse quasi-instantanée.
              </p>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-md"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Démarrer une conversation WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Adresse e-mail
                </h4>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
                <p className="text-xs text-slate-500">
                  Réponse assurée sous 24h à 48h ouvrées.
                </p>
              </div>
            </div>

            {/* Telephone Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Téléphone professionnel
                </h4>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
                <p className="text-xs text-slate-500">
                  Du lundi au vendredi, de 8h30 à 18h00.
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Localisation & Siège
                </h4>
                <p className="text-sm font-bold text-slate-900">
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                </p>
                <p className="text-xs text-slate-500">
                  Interventions en Guinée, dans la sous-région et à distance avec l&apos;international.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center">Chargement du formulaire...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Questions fréquentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mt-2">
              Tout ce que vous devez savoir avant de nous contacter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FAQS_DATA.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
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
