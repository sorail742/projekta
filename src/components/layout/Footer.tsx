import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { COMPANY_INFO } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-ink text-ink-light border-t border-white/[0.06] pt-20 lg:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Colonne Marque & Identité */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <Logo variant="footer" size="md" />

            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-normal">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-1">
              <span className="tagline-label text-primary">
                {COMPANY_INFO.baseline}
              </span>
            </div>

            <div className="flex flex-col space-y-1 text-xs text-white/50 pt-1">
              <span className="font-semibold text-white/80 uppercase tracking-wider">
                Zone d&apos;intervention :
              </span>
              <span>{COMPANY_INFO.address.label}</span>
            </div>

            {/* Réseaux sociaux minimalistes */}
            <div className="flex items-center gap-2.5 pt-2">
              {COMPANY_INFO.socialLinks.linkedin && (
                <a
                  href={COMPANY_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn PROJEKTA"
                  className="h-8 w-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-secondary hover:bg-secondary/20 transition-all text-xs font-semibold"
                >
                  in
                </a>
              )}
              {COMPANY_INFO.socialLinks.facebook && (
                <a
                  href={COMPANY_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook PROJEKTA"
                  className="h-8 w-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-secondary hover:bg-secondary/20 transition-all text-xs font-semibold"
                >
                  fb
                </a>
              )}
              {COMPANY_INFO.socialLinks.instagram && (
                <a
                  href={COMPANY_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram PROJEKTA"
                  className="h-8 w-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:bg-primary/20 transition-all text-xs font-semibold"
                >
                  ig
                </a>
              )}
              {COMPANY_INFO.socialLinks.tiktok && (
                <a
                  href={COMPANY_INFO.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok PROJEKTA"
                  className="h-8 w-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-primary hover:bg-primary/20 transition-all text-xs font-semibold"
                >
                  tk
                </a>
              )}
              {COMPANY_INFO.socialLinks.twitter && (
                <a
                  href={COMPANY_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter) PROJEKTA"
                  className="h-8 w-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-secondary hover:bg-secondary/20 transition-all text-xs font-semibold"
                >
                  x
                </a>
              )}
            </div>
          </div>

          {/* Navigation Rapide */}
          <div className="flex flex-col space-y-4">
            <h3 className="tagline-label text-white tracking-widest text-xs font-semibold">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-white transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/formations" className="hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Principaux */}
          <div className="flex flex-col space-y-4">
            <h3 className="tagline-label text-white tracking-widest text-xs font-semibold">
              Pôles d&apos;expertise
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm text-white/60">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Devis direct */}
          <div className="flex flex-col space-y-4">
            <h3 className="tagline-label text-white tracking-widest text-xs font-semibold">
              Contact & Échanges
            </h3>
            <ul className="flex flex-col space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-primary border border-white/15 hover:border-primary px-4 py-2 rounded-full transition-all duration-200"
              >
                <span>Demander un devis</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Ligne inférieure de Copyright et Mentions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} PROJEKTA. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white/80 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white/80 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
