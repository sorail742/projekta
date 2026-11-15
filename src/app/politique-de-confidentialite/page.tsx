import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/common/Badge";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Protection des données personnelles et respect de la vie privée des utilisateurs du site PROJEKTA.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="primary" className="mb-4">
          Protection des Données
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-light text-ink tracking-tight mb-8">
          Politique de <span className="font-semibold text-ink">Confidentialité</span>
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-ink/[0.08] shadow-card space-y-8 text-sm text-ink-muted leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              1. Collecte des données personnelles
            </h2>
            <p>
              Dans le cadre de l&apos;utilisation de notre site web vitrine, PROJEKTA peut être amenée à recueillir certaines données personnelles transmises volontairement par les utilisateurs (nom, prénom, adresse e-mail, numéro de téléphone, société, détails du projet) notamment via :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Le formulaire de contact général.</li>
              <li>Le formulaire de demande de devis personnalisé.</li>
              <li>Les échanges directs par WhatsApp ou messagerie électronique.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              2. Finalité des traitements
            </h2>
            <p>Les données collectées sont strictement destinées à :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Répondre aux sollicitations, questions et demandes d&apos;informations.</li>
              <li>Établir et transmettre des devis et propositions commerciales personnalisées.</li>
              <li>Gérer la relation commerciale et le suivi des missions engagées.</li>
            </ul>
            <p>
              <strong className="text-ink">Aucune revente ni cession :</strong> PROJEKTA ne commercialise, ne loue, ni ne cède aucune donnée personnelle à des entités tierces à des fins publicitaires.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              3. Durée de conservation & Sécurité
            </h2>
            <p>
              Les données sont conservées pendant la durée strictement nécessaire au traitement de la demande commerciale ou pour une durée maximale de trois ans après le dernier échange en l&apos;absence de conclusion de contrat.
            </p>
            <p>
              Des mesures techniques et organisationnelles conformes aux bonnes pratiques de cybersécurité sont mises en place pour préserver l&apos;intégrité et la confidentialité de vos informations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              4. Vos droits d&apos;accès et de rectification
            </h2>
            <p>
              Conformément aux réglementations sur la protection des données personnelles, vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité et de suppression de vos données personnelles. Vous pouvez exercer ce droit à tout moment en écrivant à :{" "}
              <strong className="text-ink">{COMPANY_INFO.email}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
