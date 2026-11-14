import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/common/Badge";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales et informations réglementaires du site officiel PROJEKTA.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-4">
          Cadre Réglementaire
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-8">
          Mentions Légales
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs space-y-8 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              1. Éditeur de la plateforme
            </h2>
            <p>
              Le site web officiel accessible à l&apos;adresse{" "}
              <strong>https://projekta-tech.com</strong> est édité par l&apos;initiative{" "}
              <strong>PROJEKTA</strong>, spécialisée dans les services numériques, le développement informatique, la création graphique et la formation.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Dénomination :</strong> PROJEKTA
              </li>
              <li>
                <strong>Localisation :</strong> {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
              </li>
              <li>
                <strong>Contact électronique :</strong> {COMPANY_INFO.email}
              </li>
              <li>
                <strong>Téléphone / WhatsApp :</strong> {COMPANY_INFO.phoneFormatted}
              </li>
              <li>
                <strong>Zone d&apos;activité :</strong> République de Guinée & Clients Internationaux
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              2. Hébergement
            </h2>
            <p>
              Le site web est hébergé sur une infrastructure Cloud moderne, sécurisée et certifiée conforme aux protocoles HTTPS (SSL/TLS).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des éléments constituant ce site web (textes, graphismes, logotypes, icônes, images, codes sources, animations et agencements) sont la propriété exclusive de PROJEKTA ou font l&apos;objet d&apos;une licence légale d&apos;exploitation. Toute reproduction, représentation, modification ou publication, totale ou partielle, sans accord écrit préalable de PROJEKTA est formellement interdite.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              4. Responsabilité & Liens externes
            </h2>
            <p>
              PROJEKTA s&apos;efforce de fournir des informations fiables et mises à jour. Toutefois, PROJEKTA ne saurait être tenue pour responsable des erreurs, omissions ou indisponibilités temporaires des services. Les liens hypertextes menant vers des sites tiers ne sauraient engager la responsabilité de PROJEKTA quant à leurs contenus respectifs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
