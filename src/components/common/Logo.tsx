import React from "react";
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

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 transition-transform", className)}
      aria-label="PROJEKTA - Accueil"
    >
      {/* Official Logo Image Container */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-white shadow-md shadow-emerald-950/20 ring-1 ring-emerald-500/20 group-hover:scale-105 transition-all">
        <Image
          src="/logo.jpg"
          alt="PROJEKTA Logo"
          width={40}
          height={40}
          className="h-full w-full object-cover"
          priority
        />
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
