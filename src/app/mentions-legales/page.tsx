import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/common/Badge";
import { COMPANY_INFO } from "@/data/company";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales, identification réglementaire et hébergement du site officiel PROJEKTA.",
};

function ToComplete({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-800 text-xs font-mono font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
      [À compléter : {label}]
    </span>
  );
}

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
              <strong className="text-ink">{SITE_URL}</strong> est édité par l&apos;entité{" "}
              <strong className="text-ink">PROJEKTA</strong>, spécialisée dans les services numériques, le développement web et mobile, la création graphique, l&apos;audiovisuel et la formation.
            </p>
            <ul className="list-disc pl-5 space-y-2.5">
              <li>
                <strong className="text-ink">Dénomination sociale :</strong> PROJEKTA
              </li>
              <li>
                <strong className="text-ink">Forme juridique :</strong>{" "}
                <ToComplete label="Forme juridique ex. SARL / SAS / Entreprise Individuelle" />
              </li>
              <li>
                <strong className="text-ink">Capital social :</strong>{" "}
                <ToComplete label="Capital social en GNF ou mention Sans capital minimum" />
              </li>
              <li>
                <strong className="text-ink">Numéro d&apos;immatriculation / RCCM / SIRET / NIF :</strong>{" "}
                <ToComplete label="Numéro RCCM ou NIF officiel d'enregistrement" />
              </li>
              <li>
                <strong className="text-ink">Adresse physique du siège :</strong>{" "}
                <ToComplete label="Adresse physique précise (Quartier, Commune, Rue), Conakry, République de Guinée" />
              </li>
              <li>
                <strong className="text-ink">Directeur de la publication :</strong>{" "}
                <ToComplete label="Nom et prénom du Directeur de publication / Fondateur" />
              </li>
              <li>
                <strong className="text-ink">Contact électronique :</strong>{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline font-medium">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <strong className="text-ink">Téléphone / WhatsApp professionnel :</strong>{" "}
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary hover:underline font-medium">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              2. Hébergement
            </h2>
            <p>
              Le site web est hébergé par une infrastructure Cloud sécurisée, certifiée conforme aux protocoles HTTPS (SSL/TLS) :
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-ink">Hébergeur :</strong> Vercel Inc.
              </li>
              <li>
                <strong className="text-ink">Adresse de l&apos;hébergeur :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              </li>
              <li>
                <strong className="text-ink">Site web de l&apos;hébergeur :</strong>{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://vercel.com
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              3. Propriété intellectuelle
            </h2>
            <p>
              Tous les éléments constitutifs du présent site (textes, graphismes, logos, typographies, icônes, animations, structure arborescente et code source) sont la propriété exclusive de PROJEKTA ou font l&apos;objet d&apos;une licence d&apos;exploitation régulière.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation totale ou partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans autorisation écrite préalable de PROJEKTA.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              4. Responsabilité & Liens hypertextes
            </h2>
            <p>
              PROJEKTA met tout en œuvre pour diffuser des informations précises et actualisées. Néanmoins, PROJEKTA ne saurait être tenue responsable des éventuelles omissions ou inexactitudes dans les contenus proposés, ni de l&apos;indisponibilité momentanée des services pour des raisons techniques ou de maintenance.
            </p>
            <p>
              Les liens hypertextes éventuellement mis en place en direction d&apos;autres sites ne sauraient engager la responsabilité de PROJEKTA quant aux contenus de ces sites tiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-ink">
              5. Droit applicable et juridiction compétente
            </h2>
            <p>
              Tout litige en relation avec l&apos;utilisation du site PROJEKTA est soumis au droit en vigueur en République de Guinée. En cas de contestation, les tribunaux compétents de Conakry seront seuls compétents, après tentative préalable de règlement à l&apos;amiable.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
