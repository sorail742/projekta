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
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-4">
          Protection des Données
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-8">
          Politique de Confidentialité
        </h1>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs space-y-8 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-slate-900">
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
            <h2 className="text-lg font-heading font-bold text-slate-900">
              2. Finalité des traitements
            </h2>
            <p>Les données collectées sont strictement destinées à :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Répondre aux sollicitations, questions et demandes d&apos;informations.</li>
              <li>Établir et transmettre des devis et propositions commerciales personnalisées.</li>
              <li>Gérer la relation commerciale et le suivi des missions engagées.</li>
            </ul>
            <p>
              <strong>Aucune revente ni cession :</strong> PROJEKTA ne commercialise, ne loue, ni ne cède aucune donnée personnelle à des entités tierces à des fins publicitaires.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              3. Durée de conservation & Sécurité
            </h2>
            <p>
              Les données sont conservées pendant la durée strictement nécessaire au traitement de la demande commerciale ou pour une durée maximale de trois ans après le dernier échange en l&apos;absence de conclusion de contrat.
            </p>
            <p>
              PROJEKTA met en œuvre des mesures techniques et organisationnelles appropriées pour préserver la sécurité, l&apos;intégrité et la confidentialité des informations échangées (chiffrement HTTPS, accès restreint aux collaborateurs habilités).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              4. Vos droits
            </h2>
            <p>
              Conformément aux législations relatives à la protection des données personnelles, vous disposez d&apos;un droit d&apos;accès, de rectification, de limitation et de suppression des données qui vous concernent. Pour exercer ces droits, il vous suffit de nous adresser votre demande par courrier électronique à{" "}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-emerald-700 underline font-semibold"
              >
                {COMPANY_INFO.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
