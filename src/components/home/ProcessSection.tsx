"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  MessageSquare,
  Search,
  FileCheck,
  Code,
  Rocket,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

const STEPS = [
  {
    step: "01",
    title: "Prise de contact",
    icon: MessageSquare,
    description:
      "Premier échange via notre formulaire, WhatsApp ou par téléphone pour cerner les grandes lignes de votre demande.",
  },
  {
    step: "02",
    title: "Compréhension du besoin",
    icon: Search,
    description:
      "Analyse approfondie de votre cible, de vos objectifs métiers, de votre identité et des fonctionnalités attendues.",
  },
  {
    step: "03",
    title: "Étude & Proposition",
    icon: FileCheck,
    description:
      "Élaboration d'une proposition technique détaillée accompagnée d'un devis transparent et d'un calendrier précis.",
  },
  {
    step: "04",
    title: "Réalisation du projet",
    icon: Code,
    description:
      "Phase active de design UI/UX et de développement, jalonnée de points d'avancement pour valider chaque étape.",
  },
  {
    step: "05",
    title: "Livraison & Accompagnement",
    icon: Rocket,
    description:
      "Mise en ligne, tests finaux, remise des livrables et formation pratique à la prise en main de vos outils.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Suivi du scroll sur la section pour tracer la ligne de liaison entre les 5 étapes
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const scaleXProgress = useTransform(smoothProgress, [0, 1], [0, 1]);
  const scaleYProgress = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-white border-b border-ink/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Méthodologie de travail"
            title="Un processus transparent en 5 étapes pour garantir votre succès"
            subtitle="De la première idée jusqu'au déploiement de votre solution, chaque étape est structurée avec rigueur et clarté."
            align="center"
          />
        </ScrollReveal>

        <div className="relative mt-12 lg:mt-16">
          {/* =========================================================================
              LIGNE DE LIAISON RELIANT LES 5 ÉTAPES QUI SE TRACE AU SCROLL
              - Version Desktop : Ligne horizontale
              - Version Mobile : Ligne verticale
          ========================================================================= */}

          {/* Ligne horizontale sur Desktop (md et +) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] z-0 pointer-events-none"
          >
            {/* Piste de fond en trait fin */}
            <div className="absolute inset-0 bg-ink/[0.08] rounded-full" />
            {/* Ligne active qui se trace au scroll en dégradé vert→bleu */}
            <motion.div
              style={{ scaleX: shouldReduceMotion ? 1 : scaleXProgress }}
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full origin-left"
            />
          </div>

          {/* Ligne verticale sur Mobile */}
          <div
            aria-hidden="true"
            className="md:hidden absolute top-8 bottom-8 left-8 w-[2px] z-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-ink/[0.08] rounded-full" />
            <motion.div
              style={{ scaleY: shouldReduceMotion ? 1 : scaleYProgress }}
              className="absolute inset-0 bg-gradient-to-b from-primary to-secondary rounded-full origin-top"
            />
          </div>

          {/* Grille des 5 cartes avec stagger de 0.08s */}
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerCard key={step.step} className="h-full">
                  <div className="h-full relative flex flex-col items-center text-center p-7 rounded-3xl bg-[#F7F8FA] border border-ink/[0.08] hover:border-primary/40 shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 group">
                    {/* Pastille numéro d'étape avec pastille d'ancrage */}
                    <span className="relative z-10 tagline-label text-[10px] px-3.5 py-1.5 rounded-full bg-white border border-ink/10 text-ink mb-5 shadow-soft group-hover:border-primary/40 transition-colors">
                      Étape {step.step}
                    </span>

                    {/* Boîtier d'icône avec échelle douce au survol et trait fin 1.5 */}
                    <div className="h-12 w-12 rounded-2xl bg-white border border-ink/[0.06] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-4 shadow-soft">
                      <Icon strokeWidth={1.5} className="h-5 w-5" />
                    </div>

                    {/* Titre */}
                    <h3 className="text-sm font-semibold text-ink group-hover:text-primary transition-colors duration-250">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-xs text-ink-muted leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </StaggerCard>
              );
            })}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
