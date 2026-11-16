"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Vérification initiale
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermeture du menu mobile lors d'un changement d'URL
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";
  const isDarkHero = isHomePage && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-ink/5 py-3 shadow-soft"
          : isDarkHero
          ? "bg-transparent border-b border-transparent py-4 sm:py-5"
          : "bg-transparent border-b border-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo officiel horizontal PROJEKTA (déclinaison blanche sur fond sombre, standard sinon) */}
          <Logo variant={isDarkHero ? "white" : "default"} size="md" priority />

          {/* Navigation Desktop épurée avec trait animé sous le lien actif */}
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
                    "relative px-3.5 py-2 text-[13px] tracking-wide transition-colors duration-250",
                    isDarkHero
                      ? isActive
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white font-medium"
                      : isActive
                      ? "text-ink font-semibold"
                      : "text-ink-muted hover:text-ink font-medium"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId={shouldReduceMotion ? undefined : "activeNavIndicator"}
                      className={cn(
                        "absolute bottom-0 left-3 right-3 h-[2px] rounded-full z-0",
                        isDarkHero ? "bg-[#5EE089]" : "bg-primary"
                      )}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30 }
                      }
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions : WhatsApp discret & Bouton Devis avec micro-interactions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors duration-250 border rounded-full active:scale-[0.98]",
                isDarkHero
                  ? "text-white/90 bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40"
                  : "text-ink-muted hover:text-primary border-ink/10 hover:border-primary/40 bg-surface-muted"
              )}
              title="Discuter directement sur WhatsApp"
            >
              <MessageCircle className={cn("h-3.5 w-3.5", isDarkHero ? "text-[#5EE089]" : "text-primary")} />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/devis"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full shadow-soft transition-all duration-250 active:scale-[0.98] group",
                isDarkHero
                  ? "text-[#143E2C] bg-white hover:bg-[#F0FAF4] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "text-white bg-ink hover:bg-primary"
              )}
            >
              <span>Demander un devis</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-250" />
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/devis"
              className={cn(
                "inline-flex items-center justify-center min-h-[40px] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full active:scale-[0.98] transition-transform duration-250 sm:hidden",
                isDarkHero
                  ? "text-[#143E2C] bg-white font-bold"
                  : "text-white bg-ink"
              )}
            >
              Devis
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg focus:outline-none transition-colors duration-250 active:scale-[0.95]",
                isDarkHero
                  ? "text-white hover:bg-white/10"
                  : "text-ink hover:bg-surface-muted"
              )}
              aria-label={mobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className={cn("h-5 w-5", isDarkHero ? "text-white" : "text-ink")} />
              ) : (
                <Menu className={cn("h-5 w-5", isDarkHero ? "text-white" : "text-ink")} />
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
                    "px-4 py-3 min-h-[48px] text-sm font-medium rounded-xl flex items-center justify-between transition-colors duration-250 active:scale-[0.99]",
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
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-ink bg-surface-muted border border-ink/10 rounded-xl active:scale-[0.98] transition-transform duration-250"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>Contacter sur WhatsApp</span>
            </a>

            <Link
              href="/devis"
              className="flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-ink rounded-xl shadow-soft active:scale-[0.98] transition-transform duration-250 group"
            >
              <span>Demander un devis personnalisé</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-250" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
