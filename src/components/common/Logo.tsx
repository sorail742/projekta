"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  showTagline?: boolean;
}

export function Logo({ className, variant = "default", showTagline = false }: LogoProps) {
  const isLight = variant === "light";
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 transition-transform", className)}
      aria-label="PROJEKTA - Accueil"
    >
      {/* Official Logo Image Container */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-white shadow-md shadow-emerald-950/20 ring-1 ring-emerald-500/20 group-hover:scale-105 transition-all">
        {!hasError ? (
          <Image
            src="/logo.jpg"
            alt="PROJEKTA Logo"
            width={40}
            height={40}
            className="h-full w-full object-cover"
            onError={() => setHasError(true)}
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-600 via-emerald-700 to-projekta-deep p-0.5">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                d="M12 28V12H20C23.3137 12 26 14.6863 26 18C26 21.3137 23.3137 24 20 24H17"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="27" cy="13" r="2.5" fill="#34d399" />
              <path
                d="M20 24L26 30"
                stroke="#34d399"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span
            className={cn(
              "font-heading font-extrabold tracking-tight text-xl leading-none",
              isLight ? "text-white" : "text-slate-900 group-hover:text-emerald-700 transition-colors"
            )}
          >
            PROJEKTA
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        {showTagline && (
          <span
            className={cn(
              "text-[10px] tracking-wider uppercase font-medium mt-0.5",
              isLight ? "text-emerald-200/80" : "text-slate-500"
            )}
          >
            Solutions Numériques
          </span>
        )}
      </div>
    </Link>
  );
}
