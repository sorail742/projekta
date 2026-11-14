import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Compass,
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "À propos de nous",
  description:
    "Découvrez l'histoire de PROJEKTA, notre mission, notre vision panafricaine et internationale, nos valeurs et nos engagements auprès de nos clients.",
};

export default function AProposPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <Badge variant="primary" className="mb-4">
            Notre Identité & Vision
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Accompagner la transformation numérique avec rigueur et créativité.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            PROJEKTA est née de la volonté d&apos;offrir aux entrepreneurs, aux entreprises et aux organisations d&apos;Afrique et d&apos;ailleurs des solutions digitales de calibre mondial, accessibles et orientées résultats.
          </p>
        </div>
      </div>

      {/* Histoire & Origine */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              {/* Official Logo Banner Showcase */}
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200 inline-block">
                <div className="relative h-14 w-56">
                  <Image
                    src="/logo-full.png"
                    alt="PROJEKTA Logo Officiel"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  L&apos;histoire de PROJEKTA
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mt-1">
                  Une initiative au service de l&apos;émancipation numérique
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Dans un environnement économique où la présence en ligne est devenue l&apos;un des piliers majeurs de la crédibilité et du développement des affaires, nous avons constaté un écart récurrent : beaucoup d&apos;entreprises peinent à trouver des partenaires capables de combiner à la fois l&apos;excellence technique, le sens artistique et la proximité relationnelle.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                C&apos;est pour répondre à ce défi que PROJEKTA a été fondée. Depuis Conakry, notre équipe conçoit des plateformes modernes, forge des identités visuelles fortes et forme la jeunesse aux compétences d&apos;avenir, tout en collaborant avec des clients sur les marchés internationaux.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-2">
                <Target className="h-8 w-8 text-emerald-700" />
                <h3 className="text-base font-bold text-emerald-950 font-heading">
                  Notre Mission
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Démocratiser l&apos;accès aux meilleures technologies et créer des outils numériques qui génèrent un impact économique tangible pour nos partenaires.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-2">
                <Compass className="h-8 w-8 text-blue-400" />
                <h3 className="text-base font-bold text-white font-heading">
                  Notre Vision
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Devenir une référence incontournable de l&apos;ingénierie logicielle, du design et de la formation numérique en Guinée et dans l&apos;espace francophone.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 sm:col-span-2">
                <Globe className="h-8 w-8 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  Ancrage local, portée internationale
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nous combinons une connaissance intime des réalités du terrain guinéen (connexions mobiles, WhatsApp commerce, ergonomie intuitive) avec les standards d&apos;ingénierie les plus exigeants de la scène tech mondiale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs fondamentales */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="primary" className="mb-3">
              Ce qui nous guide
            </Badge>
            <h2 className="text-3xl font-heading font-bold text-slate-900">
              Nos valeurs fondamentales
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Ces principes forgent notre éthique de travail et dictent chacune de nos décisions au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-heading font-bold text-slate-900">
                    {val.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement client & Approche */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white shadow-xl border border-slate-800">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                Notre engagement envers chaque client
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                Transparence, écoute active et respect des engagements
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Faire appel à PROJEKTA, c&apos;est choisir un partenaire qui prend le temps de vous écouter, qui respecte scrupuleusement les délais convenus et qui vous livre un travail soigné, sans jargon inutile ni mauvaise surprise.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/devis"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-300 hover:to-emerald-300 rounded-xl transition-all"
                >
                  <span>Démarrer une collaboration</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                >
                  <span>Explorer nos prestations</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
