"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Compass,
  ArrowRight,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { COMPANY_INFO } from "@/data/company";
import { ScrollReveal, StaggerGrid, StaggerCard } from "@/components/common/ScrollReveal";

export default function AProposPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      {/* En-tête de page aéré */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <ScrollReveal>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">
              Notre Identité & Vision
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-light text-ink tracking-tight leading-tight">
              Accompagner la transformation numérique avec{" "}
              <span className="font-semibold text-ink">rigueur et créativité.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed font-normal">
              PROJEKTA est née de la volonté d&apos;offrir aux entrepreneurs, aux entreprises et aux organisations d&apos;Afrique et d&apos;ailleurs des solutions digitales de calibre mondial, accessibles et orientées résultats.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Histoire & Origine */}
      <section className="bg-surface-muted/60 py-20 lg:py-28 border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <ScrollReveal className="lg:col-span-6 space-y-6">
              {/* Vitrine officielle du logo horizontal PROJEKTA */}
              <div className="rounded-2xl bg-white p-4 shadow-soft border border-ink/[0.08] inline-block">
                <div className="relative h-12 w-48 sm:h-14 sm:w-56 flex items-center justify-center">
                  <Image
                    src="/logo-full.webp"
                    alt="PROJEKTA Logo Officiel"
                    width={270}
                    height={100}
                    className="max-h-full w-auto object-contain"
                    priority
                  />
                </div>
              </div>

              <div>
                <span className="tagline-label text-primary">
                  L&apos;histoire de PROJEKTA
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-ink mt-1.5 leading-snug">
                  Une initiative au service de l&apos;émancipation{" "}
                  <span className="font-semibold text-ink">numérique</span>
                </h2>
              </div>

              <p className="text-ink-muted leading-relaxed text-sm sm:text-base font-normal">
                Dans un environnement économique où la présence en ligne est devenue l&apos;un des piliers majeurs de la crédibilité et du développement des affaires, nous avons constaté un écart récurrent : beaucoup d&apos;entreprises peinent à trouver des partenaires capables de combiner à la fois l&apos;excellence technique, le sens artistique et la proximité relationnelle.
              </p>
              <p className="text-ink-muted leading-relaxed text-sm sm:text-base font-normal">
                C&apos;est pour répondre à ce défi que PROJEKTA a été fondée. Depuis Conakry, notre équipe conçoit des plateformes modernes, forge des identités visuelles fortes et forme la jeunesse aux compétences d&apos;avenir, tout en collaborant avec des clients sur les marchés internationaux.
              </p>
            </ScrollReveal>

            <div className="lg:col-span-6">
              <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StaggerCard>
                  <div className="p-7 rounded-3xl bg-white border border-ink/[0.06] shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 space-y-3 h-full">
                    <div className="h-10 w-10 rounded-2xl bg-primary-50 border border-primary/20 text-primary flex items-center justify-center">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-ink">
                      Notre Mission
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed font-normal">
                      Démocratiser l&apos;accès aux meilleures technologies et créer des outils numériques qui génèrent un impact économique tangible pour nos partenaires.
                    </p>
                  </div>
                </StaggerCard>

                <StaggerCard>
                  <div className="p-7 rounded-3xl bg-ink text-white border border-white/10 shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 space-y-3 h-full">
                    <div className="h-10 w-10 rounded-2xl bg-white/10 border border-white/15 text-secondary-300 flex items-center justify-center">
                      <Compass className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      Notre Vision
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-normal">
                      Devenir une référence incontournable de l&apos;ingénierie logicielle, du design et de la formation numérique en Guinée et dans l&apos;espace francophone.
                    </p>
                  </div>
                </StaggerCard>

                <StaggerCard className="sm:col-span-2">
                  <div className="p-7 rounded-3xl bg-white border border-ink/[0.06] shadow-soft hover:shadow-card hover:-translate-y-[4px] transition-all duration-300 space-y-3">
                    <div className="h-10 w-10 rounded-2xl bg-secondary-50 border border-secondary/20 text-secondary flex items-center justify-center">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-ink">
                      Ancrage local, portée internationale
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed font-normal">
                      Nous combinons une connaissance intime des réalités du terrain guinéen (connexions mobiles, WhatsApp commerce, ergonomie intuitive) avec les standards d&apos;ingénierie les plus exigeants de la scène tech mondiale.
                    </p>
                  </div>
                </StaggerCard>
              </StaggerGrid>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs fondamentales */}
      <section className="py-24 bg-white border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="primary" className="mb-3.5">
                Ce qui nous guide
              </Badge>
              <h2 className="text-3xl font-light text-ink">
                Nos valeurs <span className="font-semibold text-ink">fondamentales</span>
              </h2>
              <p className="mt-3 text-ink-muted text-sm sm:text-base font-normal">
                Ces principes forgent notre éthique de travail et dictent chacune de nos décisions au quotidien.
              </p>
            </div>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.values.map((val, idx) => (
              <StaggerCard key={idx} className="h-full">
                <div className="h-full p-7 rounded-3xl bg-surface-muted border border-ink/[0.06] shadow-soft hover:shadow-card hover:border-primary/40 hover:-translate-y-[4px] transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="tagline-label text-xs h-9 w-9 rounded-2xl bg-white border border-ink/[0.06] text-primary flex items-center justify-center mb-5 shadow-soft">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-semibold text-ink">
                      {val.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-ink-muted leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              </StaggerCard>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Engagement client & Approche */}
      <section className="py-20 lg:py-24 bg-surface-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="p-8 sm:p-14 rounded-3xl bg-ink text-white shadow-card border border-white/10">
              <div className="max-w-3xl">
                <span className="tagline-label text-primary text-xs">
                  Notre engagement envers chaque client
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight">
                  Transparence, écoute active et{" "}
                  <span className="font-semibold text-primary">respect des engagements</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed font-normal">
                  Faire appel à PROJEKTA, c&apos;est choisir un partenaire qui prend le temps de vous écouter, qui respecte scrupuleusement les délais convenus et qui vous livre un travail soigné, sans jargon inutile ni mauvaise surprise.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/devis"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink bg-white hover:bg-primary hover:text-white rounded-full transition-all duration-250 active:scale-[0.98] group"
                  >
                    <span>Démarrer une collaboration</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
                  </Link>

                  <Link
                    href="/services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/5 border border-white/20 rounded-full transition-all duration-250 active:scale-[0.98]"
                  >
                    <span>Explorer nos prestations</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
