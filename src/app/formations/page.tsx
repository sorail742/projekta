import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
  Users,
  Target,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { FORMATIONS_DATA } from "@/data/formations";

export const metadata: Metadata = {
  title: "Formations Informatiques",
  description:
    "Découvrez les formations pratiques de PROJEKTA : Initiation à la programmation, Développement Web Frontend/Backend, Outils numériques pour entrepreneurs. Conakry et en ligne.",
};

export default function FormationsPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      {/* En-tête de la page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Pôle Formation & Mentoring
          </Badge>
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-light text-ink tracking-tight leading-tight">
            Apprenez le numérique par la{" "}
            <span className="font-semibold text-ink">pratique et le projet.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed font-normal">
            PROJEKTA propose des initiations et formations adaptées aux débutants, étudiants et professionnels souhaitant acquérir des compétences concrètes en informatique et développement web.
          </p>
        </div>
      </div>

      {/* Piliers pédagogiques */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft flex items-start gap-4">
            <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-primary flex items-center justify-center shrink-0">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink">100% Pratique</h3>
              <p className="mt-1 text-xs text-ink-muted leading-relaxed font-normal">
                Moins de théorie abstraite, plus de code et de mini-projets concrets dès la première séance.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft flex items-start gap-4">
            <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-secondary flex items-center justify-center shrink-0">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink">Petits effectifs</h3>
              <p className="mt-1 text-xs text-ink-muted leading-relaxed font-normal">
                Des groupes réduits pour permettre un suivi personnalisé et répondre à toutes vos questions.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft flex items-start gap-4">
            <div className="h-10 w-10 rounded-2xl bg-white border border-ink/[0.06] text-primary flex items-center justify-center shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink">Projet Portfolio inclus</h3>
              <p className="mt-1 text-xs text-ink-muted leading-relaxed font-normal">
                Chaque apprenant repart avec un livrable tangible qu&apos;il peut valoriser sur son CV ou profil LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des formations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {FORMATIONS_DATA.map((formation) => (
          <div
            key={formation.id}
            id={formation.id}
            className="rounded-3xl bg-white border border-ink/[0.06] p-7 sm:p-11 shadow-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Colonne Gauche */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary">{formation.badge}</Badge>
                  <span className="tagline-label text-[10px] px-3 py-1 rounded-full bg-surface-muted border border-ink/[0.06] text-ink-muted">
                    Niveau : {formation.level}
                  </span>
                </div>

                <h2 className="text-2xl font-light text-ink leading-snug">
                  {formation.title}
                </h2>

                <p className="text-sm text-ink-muted leading-relaxed font-normal">
                  {formation.longDescription}
                </p>

                <div className="space-y-2 pt-2 text-xs text-ink-muted font-normal">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <span>
                      <strong className="font-semibold text-ink">Durée :</strong> {formation.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-secondary shrink-0" />
                    <span>
                      <strong className="font-semibold text-ink">Format :</strong> {formation.format}
                    </span>
                  </div>
                </div>

                {/* Prérequis */}
                <div className="p-4 rounded-2xl bg-surface-muted border border-ink/[0.06] text-xs">
                  <span className="tagline-label text-[10px] text-ink block mb-1 font-semibold">
                    Prérequis requis :
                  </span>
                  <p className="text-ink-muted font-normal">{formation.prerequisites}</p>
                </div>

                {/* Bouton d'action */}
                <div className="pt-2">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(
                      `Renseignements sur la formation : ${formation.title}`
                    )}`}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full transition-all duration-200 group shadow-soft"
                  >
                    <span>Demander des informations</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Colonne Droite : Programme & Objectifs */}
              <div className="lg:col-span-7 bg-surface-muted rounded-3xl p-7 sm:p-9 border border-ink/[0.06] space-y-6">
                <div>
                  <h3 className="tagline-label text-xs text-ink mb-3.5 flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Objectifs pédagogiques :</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {formation.learningGoals.map((goal, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-white border border-ink/[0.06] text-xs text-ink-muted flex items-start gap-2 shadow-soft font-normal"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="tagline-label text-xs text-ink mb-3.5 flex items-center gap-2 font-semibold">
                    <BookOpen className="h-4 w-4 text-secondary" />
                    <span>Programme indicatif :</span>
                  </h3>
                  <div className="space-y-2.5">
                    {formation.curriculum.map((item, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-4 rounded-2xl bg-white border border-ink/[0.06] text-xs shadow-soft"
                      >
                        <span className="font-semibold text-ink block mb-0.5">
                          {item.module}
                        </span>
                        <p className="text-ink-muted font-normal leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projet de fin de cursus */}
                <div className="p-5 rounded-2xl bg-white border border-primary/20 text-xs shadow-soft">
                  <span className="tagline-label text-[10px] text-primary block mb-1 font-semibold">
                    Projet pratique de fin de cursus :
                  </span>
                  <p className="text-ink font-normal">{formation.finalProject}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inscription FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-ink/[0.08] shadow-card text-center space-y-4">
          <h2 className="text-2xl font-light text-ink">
            Modalités d&apos;inscription et <span className="font-semibold text-ink">sessions à venir</span>
          </h2>
          <p className="text-sm text-ink-muted max-w-xl mx-auto leading-relaxed font-normal">
            Les sessions de formation sont organisées par cohortes régulières en présentiel à Conakry et en sessions interactives en ligne. Contactez notre équipe pour connaître les dates de la prochaine rentrée et réserver votre place.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-ink hover:bg-primary rounded-full transition-all duration-200"
            >
              <span>Contacter le responsable des formations</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
