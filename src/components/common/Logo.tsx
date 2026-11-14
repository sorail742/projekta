"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "default" | "full" | "icon";
  showBaseline?: boolean;
}

export function Logo({
  className,
  variant = "default",
  showBaseline = false,
}: LogoProps) {
  const isLight = variant === "light";
  const [imageError, setImageError] = useState(false);

  // If full banner logo is explicitly requested
  if (variant === "full") {
    return (
      <Link
        href="/"
        className={cn("inline-block transition-transform hover:opacity-95", className)}
        aria-label="PROJEKTA - Accueil"
      >
        <div className="relative h-12 w-48 sm:h-14 sm:w-56 overflow-hidden rounded-lg bg-white p-1">
          <Image
            src="/logo.jpg"
            alt="PROJEKTA - Innovation • Technology • Projects"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  // If icon-only is requested
  if (variant === "icon") {
    return (
      <Link
        href="/"
        className={cn("inline-block transition-transform hover:scale-105", className)}
        aria-label="PROJEKTA - Accueil"
      >
        <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white shadow-xs border border-slate-200/80 p-0.5">
          <Image
            src="/logoo.jpg"
            alt="PROJEKTA Icon"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  // Default composite logo: Official mark + Geometric typography + Tagline
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3 transition-transform", className)}
      aria-label="PROJEKTA - Accueil"
    >
      {/* Official Symbol Box using logoo.jpg */}
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-white shadow-xs border border-slate-200/90 p-1 group-hover:scale-105 transition-all">
        {!imageError ? (
          <Image
            src="/logoo.jpg"
            alt="PROJEKTA - Marque officielle"
            width={44}
            height={44}
            className="h-full w-full object-contain"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          /* Vector geometric fallback reproducing the official chevron + blue arc */
          <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
            {/* Green chevron */}
            <path
              d="M50 15L20 50L50 85"
              stroke="#22c55e"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Black chevron */}
            <path
              d="M50 22L28 50L50 78"
              stroke="#0f172a"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Blue arc */}
            <path
              d="M52 26 C68 33, 68 67, 52 74"
              stroke="#2563eb"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {/* Typography with brand tracking */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "font-heading font-extrabold tracking-brand text-xl sm:text-2xl leading-none",
              isLight ? "text-white" : "text-slate-950 group-hover:text-emerald-700 transition-colors"
            )}
          >
            PROJEKTA
          </span>
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
        </div>

        {/* Baseline: INNOVATION • TECHNOLOGY • PROJECTS */}
        <span
          className={cn(
            "text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold mt-0.5",
            isLight ? "text-slate-300" : "text-slate-500"
          )}
        >
          {showBaseline ? "INNOVATION • TECHNOLOGY • PROJECTS" : "INNOVATION • TECHNOLOGY"}
        </span>
      </div>
    </Link>
  );
}
