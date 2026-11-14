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
          <div className="pointer-events-auto max-w-xs bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200/80 text-xs flex items-start gap-2.5 animate-in slide-in-from-bottom-2 duration-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 mt-1 shrink-0 animate-ping" />
            <div className="flex-1">
              <p className="font-semibold text-slate-900">Un projet numérique ?</p>
              <p className="text-slate-600 mt-0.5">
                Discutez sur WhatsApp ou posez vos questions à notre assistant !
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-700 p-0.5"
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
            className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white shadow-lg shadow-emerald-950/20 hover:scale-105 transition-all ring-2 ring-white"
            aria-label="Ouvrir l'assistant virtuel intelligent"
            title="Assistant Virtuel PROJEKTA"
          >
            <Bot className="h-6 w-6 text-emerald-200 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 ring-2 ring-white" />
            </span>
          </button>

          {/* WhatsApp Floating Button */}
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/30 hover:scale-110 transition-all ring-4 ring-white"
            aria-label="Démarrer une conversation sur WhatsApp avec PROJEKTA"
            title="Échanger sur WhatsApp"
          >
            <MessageCircle className="h-7 w-7 text-white fill-white/20" />
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
