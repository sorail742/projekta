"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  variant?: "default" | "footer" | "icon" | "square" | "white";
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

/**
 * Composant Logo officiel PROJEKTA
 * Respecte scrupuleusement les proportions, les couleurs et l'intégrité de l'identité visuelle :
 * - Navbar : logo horizontal (ratio 2.7:1), hauteur 36-40px, fond transparent.
 * - Footer : version haute lisibilité adaptée au fond choisi.
 * - Icon / Favicon : symbole isolé (chevron vert & noir + arc bleu).
 * Aucune déformation, recoloration ou filtre dénaturant n'est appliqué.
 */
export function Logo({
  className,
  variant = "default",
  size = "md",
  priority = true,
}: LogoProps) {
  // 1. Déclinaison Symbole seul (icône carrée / losange + arc)
  if (variant === "icon" || variant === "square") {
    const iconSizes = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    }[size];

    return (
      <Link
        href="/"
        className={cn(
          "inline-flex items-center justify-center transition-opacity hover:opacity-85",
          className
        )}
        aria-label="PROJEKTA - Accueil"
      >
        <div className={cn("relative flex items-center justify-center", iconSizes)}>
          <Image
            src="/logo-icon.png"
            alt="PROJEKTA - Symbole officiel"
            width={48}
            height={48}
            className="h-full w-full object-contain"
            priority={priority}
          />
        </div>
      </Link>
    );
  }

  // 2. Déclinaison Footer adaptée sur fond sombre (texte blanc pur avec teintes officielles vert & bleu)
  if (variant === "footer" || variant === "white") {
    const footerHeight = {
      sm: "h-[32px]",
      md: "h-[38px] sm:h-[42px]",
      lg: "h-[44px] sm:h-[50px]",
    }[size];

    return (
      <Link
        href="/"
        className={cn(
          "inline-flex items-center transition-opacity hover:opacity-85",
          className
        )}
        aria-label="PROJEKTA - Accueil"
      >
        <div className="relative flex items-center">
          <Image
            src="/logo-white.png"
            alt="PROJEKTA - Innovation • Technology • Projects"
            width={270}
            height={100}
            className={cn("w-auto object-contain", footerHeight)}
            priority={priority}
          />
        </div>
      </Link>
    );
  }

  // 3. Déclinaison Navbar standard : logo horizontal officiel, hauteur 36-40px, fond transparent
  const navHeight = {
    sm: "h-[32px] sm:h-[36px]",
    md: "h-[36px] sm:h-[40px]", // Hauteur stricte 36-40px prescrite par la direction artistique
    lg: "h-[42px] sm:h-[48px]",
  }[size];

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-85",
        className
      )}
      aria-label="PROJEKTA - Accueil"
    >
      <div className="relative flex items-center">
        <Image
          src="/logo-full.png"
          alt="PROJEKTA - Innovation • Technology • Projects"
          width={270}
          height={100}
          className={cn("w-auto object-contain", navHeight)}
          priority={priority}
        />
      </div>
    </Link>
  );
}
