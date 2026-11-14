"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  variant?: "default" | "light" | "footer" | "icon" | "square";
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
}

export function Logo({
  className,
  variant = "default",
  size = "md",
  priority = true,
}: LogoProps) {
  // Height definitions for proportional rendering
  const heightClass = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-12",
    lg: "h-14 sm:h-16",
    xl: "h-16 sm:h-20",
  }[size];

  // Footer / Dark variant: renders high-res logo-white.png (pure white text with official green chevron & blue arc)
  if (variant === "footer" || variant === "light") {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-center transition-all hover:opacity-90", className)}
        aria-label="PROJEKTA - Accueil"
      >
        <div className="relative flex items-center py-1">
          <Image
            src="/logo-white.png"
            alt="PROJEKTA - Innovation • Technology • Projects"
            width={270}
            height={100}
            className={cn("w-auto object-contain", heightClass)}
            priority={priority}
          />
        </div>
      </Link>
    );
  }

  // Square / Emblem variant (using tight-crop logo-icon.png)
  if (variant === "icon" || variant === "square") {
    const iconDimension = {
      sm: "h-9 w-9",
      md: "h-11 w-11 sm:h-12 sm:w-12",
      lg: "h-14 w-14 sm:h-16 sm:w-16",
      xl: "h-20 w-20",
    }[size];

    return (
      <Link
        href="/"
        className={cn("inline-flex items-center transition-transform hover:scale-105", className)}
        aria-label="PROJEKTA - Accueil"
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl bg-white shadow-xs border border-slate-200/90 p-1.5 flex items-center justify-center",
            iconDimension
          )}
        >
          <Image
            src="/logo-icon.png"
            alt="PROJEKTA Emblème"
            width={64}
            height={64}
            className="h-full w-full object-contain"
            priority={priority}
          />
        </div>
      </Link>
    );
  }

  // Default (Navbar, Header): renders high-res transparent logo-full.png with official typography & baseline
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center transition-all hover:opacity-90",
        className
      )}
      aria-label="PROJEKTA - Accueil"
    >
      <div className="relative flex items-center py-0.5">
        <Image
          src="/logo-full.png"
          alt="PROJEKTA - Innovation • Technology • Projects"
          width={270}
          height={100}
          className={cn("w-auto object-contain", heightClass)}
          priority={priority}
        />
      </div>
    </Link>
  );
}
