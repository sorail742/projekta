import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limiter";
import { sendNotificationEmail, DESTINATION_EMAIL } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. Limitation de débit (5 soumissions max par 10 min par IP)
    const rateCheck = checkRateLimit(`devis:${clientIp}`, 5, 10 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error:
            "Trop de demandes de devis soumises depuis votre connexion. Veuillez patienter avant de renouveler l'opération.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      serviceType,
      projectNature,
      mainNeeds,
      features,
      estimatedBudget,
      timeline,
      clientName,
      clientEmail,
      clientPhone,
      clientCompany,
      projectDescription,
      _gotcha,
    } = body;

    // 2. Protection Anti-Spam (Honeypot)
    if (_gotcha && String(_gotcha).trim().length > 0) {
      console.warn(`[Anti-Spam] Devis bot bloqué depuis l'IP ${clientIp}`);
      return NextResponse.json(
        { success: true, message: "Demande de devis enregistrée." },
        { status: 200 }
      );
    }

    // 3. Validation stricte côté serveur
    if (!clientName || String(clientName).trim().length < 2) {
      return NextResponse.json(
        { error: "Veuillez renseigner votre nom complet (au moins 2 caractères)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!clientEmail || !emailRegex.test(String(clientEmail).trim())) {
      return NextResponse.json(
        { error: "Veuillez renseigner une adresse email valide." },
        { status: 400 }
      );
    }

    if (!serviceType) {
      return NextResponse.json(
        { error: "Veuillez sélectionner le type de service concerné." },
        { status: 400 }
      );
    }

    if (!projectDescription || String(projectDescription).trim().length < 10) {
      return NextResponse.json(
        { error: "Veuillez décrire brièvement votre projet (au moins 10 caractères)." },
        { status: 400 }
      );
    }

    const quoteDetails = `
Demande de Devis PROJEKTA
=========================
Client : ${String(clientName).trim()}
Organisation / Entreprise : ${clientCompany ? String(clientCompany).trim() : "Non précisé"}
Email : ${String(clientEmail).trim()}
Téléphone : ${clientPhone ? String(clientPhone).trim() : "Non précisé"}

Pôle de service : ${serviceType}
Nature du projet : ${projectNature || "Non précisé"}
Budget indicatif : ${estimatedBudget || "À discuter"}
Délai souhaité : ${timeline || "Dès que possible"}

Besoins sélectionnés :
${Array.isArray(mainNeeds) && mainNeeds.length ? mainNeeds.map((n) => `- ${n}`).join("\n") : "Aucun spécifié"}

Fonctionnalités souhaitées :
${Array.isArray(features) && features.length ? features.map((f) => `- ${f}`).join("\n") : "Aucune spécifiée"}

Description du projet :
${String(projectDescription).trim()}
    `.trim();

    // 4. Envoi effectif vers l'e-mail professionnel
    await sendNotificationEmail({
      subject: `Demande de Devis - ${serviceType}`,
      senderName: String(clientName).trim(),
      senderEmail: String(clientEmail).trim().toLowerCase(),
      senderPhone: clientPhone ? String(clientPhone).trim() : undefined,
      content: quoteDetails,
      metadata: {
        serviceType,
        estimatedBudget,
        timeline,
        company: clientCompany || "Particulier",
        ip: clientIp,
        destination: DESTINATION_EMAIL,
        date: new Date().toISOString(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Votre demande de devis a été transmise avec succès à PROJEKTA ! Notre équipe analysera votre projet et vous fera parvenir une proposition personnalisée rapidement.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur API Devis :", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue lors de l'enregistrement de votre demande." },
      { status: 500 }
    );
  }
}
