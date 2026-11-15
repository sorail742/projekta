import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

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
        <Badge
          variant={dark ? "outline" : "primary"}
          className={cn("mb-4", dark && "text-white/80 border-white/20 bg-white/5")}
        >
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-tight",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal",
            dark ? "text-white/60" : "text-ink-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
