import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
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
    } = body;

    // Validation
    if (!clientName || !clientEmail || !serviceType || !projectDescription) {
      return NextResponse.json(
        {
          error:
            "Veuillez renseigner votre nom, votre email, le service concerné et une brève description du projet.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail)) {
      return NextResponse.json(
        { error: "Veuillez renseigner une adresse email valide." },
        { status: 400 }
      );
    }

    const quoteRequest = {
      type: "devis",
      serviceType,
      projectNature: projectNature || "Non précisé",
      mainNeeds: Array.isArray(mainNeeds) ? mainNeeds : [mainNeeds].filter(Boolean),
      features: Array.isArray(features) ? features : [features].filter(Boolean),
      estimatedBudget: estimatedBudget || "À discuter",
      timeline: timeline || "Dès que possible",
      client: {
        name: String(clientName).trim(),
        email: String(clientEmail).trim().toLowerCase(),
        phone: clientPhone ? String(clientPhone).trim() : "Non renseigné",
        company: clientCompany ? String(clientCompany).trim() : "Particulier / Indépendant",
      },
      projectDescription: String(projectDescription).trim(),
      createdAt: new Date().toISOString(),
    };

    console.log("=== NOUVELLE DEMANDE DE DEVIS REÇUE (PROJEKTA) ===");
    console.log(JSON.stringify(quoteRequest, null, 2));

    return NextResponse.json(
      {
        success: true,
        message:
          "Votre demande de devis a été transmise avec succès à PROJEKTA ! Notre équipe analysera votre projet et vous fera parvenir une proposition personnalisée rapidement.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API Devis :", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue lors de l'enregistrement de votre demande." },
      { status: 500 }
    );
  }
}
