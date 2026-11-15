"use client";

import React, { useState } from "react";
import { MessageCircle, Bot, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { AssistantModal } from "@/components/common/AssistantModal";

export function FloatingActions() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Tooltip on launch */}
        {showTooltip && (
          <div className="pointer-events-auto max-w-xs bg-white text-ink p-3.5 rounded-3xl shadow-card border border-ink/[0.08] text-xs flex items-start gap-2.5 animate-in slide-in-from-bottom-2 duration-300">
            <span className="h-2 w-2 rounded-full bg-primary mt-1 shrink-0 animate-pulse" />
            <div className="flex-1">
              <p className="font-semibold text-ink">Un projet numérique ?</p>
              <p className="text-ink-muted mt-0.5 font-normal">
                Discutez sur WhatsApp ou posez vos questions à notre assistant !
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-ink-light hover:text-ink p-0.5"
              aria-label="Fermer l'infobulle"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        <div className="flex items-center gap-2.5 pointer-events-auto">
          {/* Smart Assistant Button */}
          <button
            onClick={() => setIsAssistantOpen(true)}
            className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-ink hover:bg-primary text-white shadow-card hover:scale-105 transition-all ring-2 ring-white"
            aria-label="Ouvrir l'assistant virtuel intelligent"
            title="Assistant Virtuel PROJEKTA"
          >
            <Bot className="h-5 w-5 text-white/90 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary ring-2 ring-white" />
            </span>
          </button>

          {/* WhatsApp Floating Button */}
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center h-13 w-13 sm:h-14 sm:w-14 rounded-full bg-primary hover:bg-primary-hover text-white shadow-card hover:scale-105 transition-all ring-4 ring-white"
            aria-label="Démarrer une conversation sur WhatsApp avec PROJEKTA"
            title="Échanger sur WhatsApp"
          >
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            <span className="sr-only">Contacter PROJEKTA sur WhatsApp</span>
          </a>
        </div>
      </div>

      <AssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />
    </>
  );
}
