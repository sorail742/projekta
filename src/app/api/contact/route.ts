import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limiter";
import { sendNotificationEmail, DESTINATION_EMAIL } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. Protection Anti-Bruteforce & Limitation de débit (5 requêtes max par 10 min)
    const rateCheck = checkRateLimit(`contact:${clientIp}`, 5, 10 * 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error:
            "Trop de messages envoyés depuis votre connexion. Veuillez patienter quelques minutes avant de renouveler votre demande.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, subject, message, _gotcha } = body;

    // 2. Protection Anti-Spam (Honeypot) : si le champ caché est rempli, rejet silencieux
    if (_gotcha && String(_gotcha).trim().length > 0) {
      console.warn(`[Anti-Spam] Soumission bot bloquée depuis l'IP ${clientIp}`);
      return NextResponse.json(
        { success: true, message: "Votre message a été transmis avec succès." },
        { status: 200 }
      );
    }

    // 3. Validation stricte côté serveur
    if (!name || String(name).trim().length < 2) {
      return NextResponse.json(
        { error: "Veuillez renseigner votre nom complet (au moins 2 caractères)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || !emailRegex.test(String(email).trim())) {
      return NextResponse.json(
        { error: "Veuillez renseigner une adresse email valide." },
        { status: 400 }
      );
    }

    if (!message || String(message).trim().length < 10) {
      return NextResponse.json(
        { error: "Votre message est trop court (au moins 10 caractères requis)." },
        { status: 400 }
      );
    }

    // 4. Envoi effectif vers l'e-mail professionnel
    await sendNotificationEmail({
      subject: subject ? String(subject).trim() : `Demande Contact - ${service || "Général"}`,
      senderName: String(name).trim(),
      senderEmail: String(email).trim().toLowerCase(),
      senderPhone: phone ? String(phone).trim() : undefined,
      content: String(message).trim(),
      metadata: {
        service: service || "Non spécifié",
        ip: clientIp,
        destination: DESTINATION_EMAIL,
        date: new Date().toISOString(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Merci ! Votre message a bien été transmis à l'équipe PROJEKTA. Nous vous répondrons rapidement.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur API Contact :", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue lors de l'enregistrement de votre message." },
      { status: 500 }
    );
  }
}
