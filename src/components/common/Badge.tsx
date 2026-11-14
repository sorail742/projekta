import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "success";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "primary",
  className,
  size = "md",
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    secondary: "bg-slate-100 text-slate-700 border-slate-200",
    accent: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
    outline: "bg-transparent text-slate-700 border-slate-300",
    success: "bg-teal-50 text-teal-800 border-teal-200",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs md:text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
