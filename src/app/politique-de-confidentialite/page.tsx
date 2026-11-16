import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/common/Badge";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Protection des données personnelles, conformité et respect de la vie privée des utilisateurs du site PROJEKTA.",
};

function ToComplete({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
      [À compléter : {label}]
    </span>
  );
}

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
              1. Responsable du traitement des données
            </h2>
            <p>
              Les données à caractère personnel recueillies sur le site sont traitées sous la responsabilité de l&apos;entité <strong className="text-ink">PROJEKTA</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-ink">Responsable du traitement :</strong>{" "}
                <ToComplete label="Nom du Responsable de la protection des données ou Direction PROJEKTA" />
              </li>
              <li>
                <strong className="text-ink">Adresse postale de correspondance :</strong>{" "}
                <ToComplete label="Adresse postale complète pour l'exercice des droits" />
              </li>
              <li>
                <strong className="text-ink">Adresse électronique dédiée :</strong>{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline font-medium">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              2. Données collectées et modalités de recueil
            </h2>
            <p>
              Dans le cadre de l&apos;utilisation de notre site web vitrine, PROJEKTA peut être amenée à recueillir certaines données personnelles transmises volontairement par les utilisateurs (nom, prénom, adresse e-mail, numéro de téléphone, entreprise, détails et contraintes du projet) notamment via :
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Le formulaire de contact général.</li>
              <li>Le formulaire de demande de devis personnalisé.</li>
              <li>Les échanges directs par WhatsApp ou par messagerie électronique.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              3. Finalité et base légale des traitements
            </h2>
            <p>Les données collectées sont strictement destinées aux finalités suivantes :</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Répondre aux sollicitations, questions et demandes d&apos;informations techniques ou commerciales.</li>
              <li>Établir et transmettre des devis clairs et des propositions personnalisées adaptées aux besoins formulés.</li>
              <li>Gérer la relation client et le suivi des missions engagées.</li>
            </ul>
            <p>
              <strong className="text-ink">Principe de non-cession :</strong> PROJEKTA ne commercialise, ne loue, ni ne transfère aucune donnée personnelle à des fins de prospection publicitaire tierce.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              4. Durée de conservation et sécurité
            </h2>
            <p>
              Les données sont conservées pendant la durée strictement nécessaire au traitement de la demande commerciale ou pour une durée maximale de trois ans après le dernier échange en l&apos;absence de conclusion de contrat.
            </p>
            <p>
              Des mesures techniques et organisationnelles conformes aux standards de sécurité (chiffrement SSL/TLS, limitation des débits contre les abus automatisés, validation des entrées) sont mises en œuvre pour préserver la confidentialité et l&apos;intégrité de vos informations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              5. Droits des utilisateurs et modalités d&apos;exercice
            </h2>
            <p>
              Conformément aux réglementations relatives à la protection des données personnelles, vous disposez d&apos;un droit d&apos;accès, de rectification, de mise à jour, d&apos;opposition et de suppression des données vous concernant.
            </p>
            <p>
              Pour exercer vos droits ou pour toute question relative au traitement de vos données personnelles, vous pouvez adresser votre demande par courrier électronique à :{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline font-semibold">
                {COMPANY_INFO.email}
              </a>
              {" "}ou par voie postale à l&apos;adresse du siège mentionnée ci-dessus.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
