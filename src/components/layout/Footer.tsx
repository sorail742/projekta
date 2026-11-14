import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { COMPANY_INFO } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <Logo variant="light" showTagline />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>
            <div className="flex flex-col space-y-2 pt-2 text-xs text-slate-400">
              <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                Zone d&apos;intervention :
              </span>
              <span>{COMPANY_INFO.address.label}</span>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-3 pt-2">
              {COMPANY_INFO.socialLinks.linkedin && (
                <a
                  href={COMPANY_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn PROJEKTA"
                  className="h-9 w-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-colors"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
              )}
              {COMPANY_INFO.socialLinks.facebook && (
                <a
                  href={COMPANY_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook PROJEKTA"
                  className="h-9 w-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-colors"
                >
                  <span className="text-xs font-bold">fb</span>
                </a>
              )}
              {COMPANY_INFO.socialLinks.instagram && (
                <a
                  href={COMPANY_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram PROJEKTA"
                  className="h-9 w-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-colors"
                >
                  <span className="text-xs font-bold">ig</span>
                </a>
              )}
              {COMPANY_INFO.socialLinks.tiktok && (
                <a
                  href={COMPANY_INFO.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok PROJEKTA"
                  className="h-9 w-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-colors"
                >
                  <span className="text-xs font-bold">tk</span>
                </a>
              )}
              {COMPANY_INFO.socialLinks.twitter && (
                <a
                  href={COMPANY_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter) PROJEKTA"
                  className="h-9 w-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 transition-colors"
                >
                  <span className="text-xs font-bold">x</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-emerald-400 transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  Nos 5 Pôles d&apos;expertise
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-emerald-400 transition-colors">
                  Réalisations & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/formations" className="hover:text-emerald-400 transition-colors">
                  Formations & Ateliers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link
                  href="/devis"
                  className="text-emerald-400 font-medium inline-flex items-center gap-1 hover:underline"
                >
                  <span>Demander un devis</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services direct links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-emerald-400 transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Contact direct
            </h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <span>WhatsApp : {COMPANY_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" />
                <span className="break-all">{COMPANY_INFO.email}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" />
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" />
                <span>Conakry, République de Guinée</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {currentYear} <strong className="text-slate-200">PROJEKTA</strong>. Tous
            droits réservés. « Donnons vie à vos idées grâce au numérique. »
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-slate-200 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-slate-200 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
