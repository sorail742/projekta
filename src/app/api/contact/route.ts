import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, subject, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez renseigner les champs obligatoires (nom, email, message)." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Veuillez renseigner une adresse email valide." },
        { status: 400 }
      );
    }

    // Structured lead information
    const lead = {
      type: "contact",
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : "Non renseigné",
      service: service || "Général",
      subject: subject || "Demande via site web",
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "Inconnu",
    };

    // Log the contact lead (in production, integrate with Resend, Sendgrid, or SMTP)
    console.log("=== NOUVEAU MESSAGE DE CONTACT REÇU (PROJEKTA) ===");
    console.log(JSON.stringify(lead, null, 2));

    return NextResponse.json(
      {
        success: true,
        message:
          "Merci ! Votre message a bien été envoyé à l'équipe PROJEKTA. Nous vous répondrons dans les plus brefs délais.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API Contact :", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue. Veuillez réessayer ultérieurement." },
      { status: 500 }
    );
  }
}
