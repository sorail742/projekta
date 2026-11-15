"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { COMPANY_INFO } from "@/data/company";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/formations", label: "Formations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermeture du menu mobile lors d'un changement d'URL
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-ink/5 py-3 shadow-soft"
          : "bg-white/80 backdrop-blur-sm border-b border-ink/[0.04] py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo officiel horizontal PROJEKTA (hauteur 36-40px, fond transparent) */}
          <Logo size="md" />

          {/* Navigation Desktop épurée */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] tracking-wide transition-colors duration-200",
                    isActive
                      ? "text-ink font-semibold"
                      : "text-ink-muted hover:text-ink font-medium"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-primary rounded-full transition-all" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions : WhatsApp discret & Bouton Devis */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-ink-muted hover:text-primary transition-colors border border-ink/10 rounded-full hover:border-primary/40 bg-surface-muted"
              title="Discuter directement sur WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5 text-primary" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/devis"
              className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-ink hover:bg-primary rounded-full shadow-soft transition-all duration-200 group"
            >
              <span>Demander un devis</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/devis"
              className="inline-flex items-center px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white bg-ink rounded-full sm:hidden"
            >
              Devis
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink hover:bg-surface-muted focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-ink" />
              ) : (
                <Menu className="h-5 w-5 text-ink" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Coulissant */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-ink/10 shadow-card px-5 pt-4 pb-8 max-h-[calc(100vh-60px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-3 text-sm font-medium rounded-xl flex items-center justify-between transition-colors",
                    isActive
                      ? "text-primary bg-primary-50 font-semibold"
                      : "text-ink hover:bg-surface-muted"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-ink/10 flex flex-col gap-3">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-ink bg-surface-muted border border-ink/10 rounded-xl"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>Contacter sur WhatsApp</span>
            </a>

            <Link
              href="/devis"
              className="flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-ink rounded-xl shadow-soft"
            >
              <span>Demander un devis personnalisé</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
