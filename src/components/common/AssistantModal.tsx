"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Send,
  Sparkles,
  X,
  User,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { FAQS_DATA } from "@/data/faqs";
import { COMPANY_INFO } from "@/data/company";

interface Message {
  id: string;
  sender: "assistant" | "user";
  text: string;
  quickReplies?: { label: string; action: () => void }[];
  actionLink?: { href: string; label: string };
}

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AssistantModal({ isOpen, onClose }: AssistantModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Bonjour et bienvenue chez PROJEKTA ! 👋 Je suis l'assistant virtuel de l'équipe. Comment puis-je vous accompagner dans votre projet numérique aujourd'hui ?",
      quickReplies: [
        {
          label: "Découvrir les 5 services",
          action: () => handleQuickReply("Quels sont les services proposés par PROJEKTA ?"),
        },
        {
          label: "Demander un devis",
          action: () => handleQuickReply("Comment obtenir un devis pour mon projet ?"),
        },
        {
          label: "Délais & Déroulement",
          action: () => handleQuickReply("Quels sont vos délais de réalisation ?"),
        },
        {
          label: "Formations pour débutants",
          action: () => handleQuickReply("Parlez-moi des formations pour débutants."),
        },
      ],
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const getAssistantAnswer = (query: string): { text: string; link?: { href: string; label: string } } => {
    const q = query.toLowerCase();

    if (q.includes("service") || q.includes("propose") || q.includes("prestation")) {
      return {
        text: "PROJEKTA intervient sur 5 domaines principaux : 1. Dév web & mobile, 2. Création graphique & identité visuelle, 3. Portfolios & présence numérique, 4. Réseaux sociaux & communication, 5. Formations & accompagnement informatique.",
        link: { href: "/services", label: "Voir tous nos services en détail" },
      };
    }

    if (q.includes("devis") || q.includes("tarif") || q.includes("prix") || q.includes("cout") || q.includes("coût")) {
      return {
        text: "Chaque projet étant unique, nous concevons des devis sur mesure sous 24 à 48 heures. Vous pouvez renseigner vos besoins spécifiques via notre formulaire en ligne ou échanger directement avec notre équipe sur WhatsApp.",
        link: { href: "/devis", label: "Remplir une demande de devis gratuite" },
      };
    }

    if (q.includes("formation") || q.includes("apprendre") || q.includes("cours") || q.includes("debutant")) {
      return {
        text: "Nous proposons des programmes d'initiation très accessibles : Algorithmes & programmation, Développement Web (HTML/CSS/JS), Découverte React/Next.js, et Outils numériques pour entrepreneurs.",
        link: { href: "/formations", label: "Consulter le catalogue des formations" },
      };
    }

    if (q.includes("delai") || q.includes("délai") || q.includes("temps") || q.includes("combien de temps")) {
      return {
        text: "Pour un site vitrine ou une identité visuelle, comptez généralement entre 7 et 20 jours ouvrés. Pour une plateforme complexe ou application mobile sur mesure, un planning précis est validé dès le cadrage initial.",
        link: { href: "/contact", label: "Planifier un échange de cadrage" },
      };
    }

    if (q.includes("contact") || q.includes("joindre") || q.includes("telephone") || q.includes("adresse") || q.includes("whatsapp")) {
      return {
        text: `Vous pouvez joindre notre équipe directement par WhatsApp au ${COMPANY_INFO.phoneFormatted}, par email à ${COMPANY_INFO.email} ou via notre formulaire de contact officiel.`,
        link: { href: "/contact", label: "Accéder à la page Contact" },
      };
    }

    // Check in FAQs
    const matchedFaq = FAQS_DATA.find((faq) =>
      q.split(" ").some((word) => word.length > 3 && faq.question.toLowerCase().includes(word))
    );

    if (matchedFaq) {
      return { text: matchedFaq.answer };
    }

    return {
      text: "Je prends bonne note de votre demande ! Pour une étude précise adaptée à vos attentes, je vous invite à nous contacter directement ou à démarrer une demande de devis en ligne.",
      link: { href: "/devis", label: "Faire une demande de devis" },
    };
  };

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate thinking
    setTimeout(() => {
      const response = getAssistantAnswer(userText);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: response.text,
        actionLink: response.link,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 400);
  };

  const handleQuickReply = (question: string) => {
    handleSend(question);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[600px] max-h-[90vh]">
        {/* Header with Official Logo Emblem */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white px-5 py-4 flex items-center justify-between shadow-sm border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white p-1 shadow-xs border border-white/20">
              <Image
                src="/logoo.jpg"
                alt="PROJEKTA Assistant"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-sm tracking-tight text-white">
                  Assistant PROJEKTA
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full ring-1 ring-green-400/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  En ligne
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-mono">
                {COMPANY_INFO.baseline}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Fermer la boîte de dialogue"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/60">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "assistant" && (
                <div className="relative h-8 w-8 rounded-full overflow-hidden bg-white border border-slate-200 p-0.5 shrink-0 shadow-xs">
                  <Image
                    src="/logoo.jpg"
                    alt="Bot"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-slate-900 text-white rounded-br-none shadow-sm"
                    : "bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-bl-none"
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>

                {msg.actionLink && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100">
                    <Link
                      href={msg.actionLink.href}
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
                    >
                      <span>{msg.actionLink.label}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                )}

                {msg.quickReplies && (
                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {msg.quickReplies.map((reply, i) => (
                      <button
                        key={i}
                        onClick={reply.action}
                        className="text-xs font-semibold bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 px-2.5 py-1.5 rounded-lg transition-colors text-left"
                      >
                        {reply.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {msg.sender === "user" && (
                <div className="h-8 w-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 text-xs">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Contact Shortcut */}
        <div className="bg-emerald-50/80 border-t border-emerald-100 px-4 py-2 flex items-center justify-between text-xs text-emerald-950">
          <span className="flex items-center gap-1.5 font-medium">
            <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
            Échange direct avec un conseiller :
          </span>
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline text-emerald-700 hover:text-emerald-900"
          >
            WhatsApp PROJEKTA
          </a>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Posez votre question sur PROJEKTA..."
            className="flex-1 px-4 py-2.5 text-sm bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800 placeholder-slate-400"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="h-10 w-10 flex items-center justify-center bg-slate-900 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl transition-colors shadow-xs"
            aria-label="Envoyer le message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
