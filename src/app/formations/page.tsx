import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
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
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Pôle Formation & Mentoring
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Apprenez le numérique par la pratique et le projet.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            PROJEKTA propose des initiations et formations adaptées aux débutants, étudiants et professionnels souhaitant acquérir des compétences concrètes en informatique et développement web.
          </p>
        </div>
      </div>

      {/* Philosophy banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">100% Pratique</h3>
              <p className="mt-1 text-xs text-slate-600">
                Moins de théorie abstraite, plus de code et de mini-projets concrets dès la première séance.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Petits effectifs</h3>
              <p className="mt-1 text-xs text-slate-600">
                Des groupes réduits pour permettre un suivi personnalisé et répondre à toutes vos questions.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Projet Portfolio inclus</h3>
              <p className="mt-1 text-xs text-slate-600">
                Chaque apprenant repart avec un livrable tangible qu&apos;il peut valoriser sur son CV ou profil LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formations List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {FORMATIONS_DATA.map((formation) => (
          <div
            key={formation.id}
            id={formation.id}
            className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">{formation.badge}</Badge>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    Niveau : {formation.level}
                  </span>
                </div>

                <h2 className="text-2xl font-heading font-bold text-slate-900">
                  {formation.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {formation.longDescription}
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Durée :</strong> {formation.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Format :</strong> {formation.format}
                    </span>
                  </div>
                </div>

                {/* Prérequis */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                  <span className="font-bold text-slate-800 block mb-1">
                    Prérequis requis :
                  </span>
                  <p className="text-slate-600">{formation.prerequisites}</p>
                </div>

                {/* Bouton d'action */}
                <div className="pt-2">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(
                      `Renseignements sur la formation : ${formation.title}`
                    )}`}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-projekta-deep hover:from-emerald-700 hover:to-emerald-950 rounded-xl shadow-sm transition-all group"
                  >
                    <span>Demander des informations</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Programme & Objectifs */}
              <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/60 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Objectifs pédagogiques :</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {formation.learningGoals.map((goal, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white border border-slate-200/60 text-xs text-slate-700 flex items-start gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-emerald-600" />
                    <span>Programme indicatif :</span>
                  </h3>
                  <div className="space-y-2.5">
                    {formation.curriculum.map((item, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-xl bg-white border border-slate-200/60 text-xs"
                      >
                        <span className="font-bold text-slate-900 block mb-0.5">
                          {item.module}
                        </span>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Project Highlight */}
                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950">
                  <span className="font-bold uppercase tracking-wider text-emerald-900 block mb-1">
                    🚀 Projet pratique de fin de cursus :
                  </span>
                  <p className="text-emerald-800">{formation.finalProject}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inscription FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4">
          <h2 className="text-2xl font-heading font-bold text-slate-900">
            Modalités d&apos;inscription et sessions à venir
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Les sessions de formation sont organisées par cohortes régulières en présentiel à Conakry et en sessions interactives en ligne. Contactez notre équipe pour connaître les dates de la prochaine rentrée et réserver votre place.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors"
            >
              <span>Contacter le responsable des formations</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
