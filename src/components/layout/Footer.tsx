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
    <footer className="bg-[#1A1A1A] text-white/70 border-t border-white/[0.08] pt-20 lg:pt-24 pb-12 relative overflow-hidden">
      {/* Halo très subtil en arrière-plan */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Colonne 1 : Marque & Identité (span 4 cols sur grand écran) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Logo officiel PROJEKTA horizontal adapté au fond sombre */}
            <div>
              <Logo variant="footer" size="md" />
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-normal">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-1">
              <span className="tagline-label text-primary text-[11px] font-semibold tracking-[0.22em] uppercase">
                {COMPANY_INFO.baseline}
              </span>
            </div>

            <div className="flex flex-col space-y-1 text-xs text-white/60 pt-1">
              <span className="font-semibold text-white/90 uppercase tracking-wider">
                Zone d&apos;intervention :
              </span>
              <span>{COMPANY_INFO.address.label}</span>
            </div>

            {/* Réseaux sociaux en icônes avec traits fins et cercles élégants */}
            <div className="flex items-center gap-3 pt-2">
              {COMPANY_INFO.socialLinks.linkedin && (
                <a
                  href={COMPANY_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn PROJEKTA"
                  className="h-9 w-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-secondary hover:bg-secondary/20 transition-all duration-200 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.64-1.64A1.64 1.64 0 0 0 6.46 5.5a1.64 1.64 0 0 0-1.64 1.62c0 .91.73 1.64 1.64 1.64m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                  </svg>
                </a>
              )}
              {COMPANY_INFO.socialLinks.facebook && (
                <a
                  href={COMPANY_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook PROJEKTA"
                  className="h-9 w-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-secondary hover:bg-secondary/20 transition-all duration-200 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
              )}
              {COMPANY_INFO.socialLinks.instagram && (
                <a
                  href={COMPANY_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram PROJEKTA"
                  className="h-9 w-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-primary hover:bg-primary/20 transition-all duration-200 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              )}
              {COMPANY_INFO.socialLinks.twitter && (
                <a
                  href={COMPANY_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter) PROJEKTA"
                  className="h-9 w-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-secondary hover:bg-secondary/20 transition-all duration-200 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp PROJEKTA"
                className="h-9 w-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-primary hover:bg-primary/20 transition-all duration-200 active:scale-95"
              >
                <MessageCircle strokeWidth={1.5} className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation Rapide (span 2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="tagline-label text-white tracking-widest text-xs font-semibold uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors duration-200">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-white transition-colors duration-200">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/formations" className="hover:text-white transition-colors duration-200">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Pôles d'expertise (span 3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="tagline-label text-white tracking-widest text-xs font-semibold uppercase">
              Nos 5 Expertises
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm text-white/70">
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-white transition-colors duration-200 line-clamp-1"
                  >
                    {service.number}. {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Coordonnées & Devis direct (span 3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="tagline-label text-white tracking-widest text-xs font-semibold uppercase">
              Contact Direct
            </h3>
            <ul className="flex flex-col space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin strokeWidth={1.5} className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone strokeWidth={1.5} className="h-4 w-4 text-primary shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail strokeWidth={1.5} className="h-4 w-4 text-primary shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors duration-200 break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-primary border border-white/15 hover:border-primary px-5 py-2.5 rounded-full transition-all duration-200 active:scale-[0.98] group"
              >
                <span>Demander un devis</span>
                <ArrowUpRight strokeWidth={1.5} className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Ligne inférieure de Copyright et Mentions légales */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} PROJEKTA. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
