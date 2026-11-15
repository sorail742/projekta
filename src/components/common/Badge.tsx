import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ink";
  className?: string;
  size?: "sm" | "md";
}

/**
 * Badge étiquette PROJEKTA
 * Conforme à la signature du logo : majuscules espacées, bordure fine 1px, fond feutré.
 */
export function Badge({
  children,
  variant = "primary",
  className,
  size = "md",
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary-50 text-primary-800 border-primary/25",
    secondary: "bg-secondary-50 text-secondary-800 border-secondary/25",
    accent: "bg-surface-muted text-ink border-ink/10",
    outline: "bg-transparent text-ink-muted border-ink/15",
    ink: "bg-ink text-white border-transparent",
  };

  const sizeStyles = {
    sm: "tagline-label text-[10px] px-2.5 py-0.5",
    md: "tagline-label text-[11px] px-3.5 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
