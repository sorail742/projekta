import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-14 md:mb-18", alignClass, className)}>
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1 rounded-full border mb-4 shadow-soft",
            dark
              ? "bg-white/5 border-white/15 text-white/90"
              : "bg-white border-ink/10 text-ink"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="tagline-label text-[11px] font-semibold tracking-[0.22em] uppercase">
            {badge}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.12]",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal",
            dark ? "text-white/70" : "text-ink-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
