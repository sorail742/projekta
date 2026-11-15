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
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="primary" className="mb-4">
          Cadre Réglementaire
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-light text-ink tracking-tight mb-8">
          Mentions <span className="font-semibold text-ink">Légales</span>
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-ink/[0.08] shadow-card space-y-8 text-sm text-ink-muted leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              1. Éditeur de la plateforme
            </h2>
            <p>
              Le site web officiel accessible à l&apos;adresse{" "}
              <strong className="text-ink">https://projekta-tech.com</strong> est édité par l&apos;initiative{" "}
              <strong className="text-ink">PROJEKTA</strong>, spécialisée dans les services numériques, le développement informatique, la création graphique et la formation.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-ink">Dénomination :</strong> PROJEKTA
              </li>
              <li>
                <strong className="text-ink">Localisation :</strong> {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
              </li>
              <li>
                <strong className="text-ink">Contact électronique :</strong> {COMPANY_INFO.email}
              </li>
              <li>
                <strong className="text-ink">Téléphone / WhatsApp :</strong> {COMPANY_INFO.phoneFormatted}
              </li>
              <li>
                <strong className="text-ink">Zone d&apos;activité :</strong> République de Guinée & Clients Internationaux
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              2. Hébergement
            </h2>
            <p>
              Le site web est hébergé sur une infrastructure Cloud moderne, sécurisée et certifiée conforme aux protocoles HTTPS (SSL/TLS).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              3. Propriété intellectuelle
            </h2>
            <p>
              Tous les contenus présents sur le site (textes, logos officiels, marques, créations graphiques, arborescences, code source) sont protégés par les lois internationales régissant la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, distribution ou représentation partielle ou intégrale de ces éléments sans autorisation écrite expresse préalable de PROJEKTA est formellement interdite.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              4. Responsabilité & Liens externes
            </h2>
            <p>
              PROJEKTA s&apos;efforce d&apos;assurer au mieux de ses possibilités l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, PROJEKTA décline toute responsabilité pour toute imprécision ou omission portant sur des informations disponibles sur le site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
