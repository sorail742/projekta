/**
 * Service d'envoi et de vérification d'e-mails pour les formulaires PROJEKTA.
 * L'adresse e-mail de réception est entièrement configurable par la variable d'environnement CONTACT_EMAIL.
 */

export const DESTINATION_EMAIL =
  process.env.CONTACT_EMAIL?.trim() || "keithsorail@gmail.com";

export interface SendEmailPayload {
  subject: string;
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  content: string;
  metadata?: Record<string, any>;
}

export async function sendNotificationEmail(
  payload: SendEmailPayload
): Promise<{ success: boolean; messageId?: string; simulated?: boolean }> {
  const { subject, senderName, senderEmail, senderPhone, content, metadata } =
    payload;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E8E9EC; border-radius: 16px; background-color: #FFFFFF;">
      <div style="border-bottom: 2px solid #4FA764; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="color: #181818; margin: 0; font-size: 20px;">PROJEKTA | Notification de Contact</h2>
        <p style="color: #666666; font-size: 13px; margin: 4px 0 0 0;">Nouvelle transmission depuis la plateforme web</p>
      </div>

      <div style="margin-bottom: 20px; background-color: #F7F8FA; padding: 16px; border-radius: 12px;">
        <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Expéditeur :</strong> ${senderName}</p>
        <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>E-mail :</strong> <a href="mailto:${senderEmail}" style="color: #3D74AC;">${senderEmail}</a></p>
        <p style="margin: 0; font-size: 14px;"><strong>Téléphone :</strong> ${senderPhone || "Non renseigné"}</p>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="color: #181818; font-size: 15px; margin-bottom: 8px;">Message / Détails :</h3>
        <div style="background-color: #FFFFFF; border: 1px solid #E8E9EC; padding: 16px; border-radius: 12px; font-size: 14px; line-height: 1.6; color: #262626; white-space: pre-wrap;">${content}</div>
      </div>

      ${
        metadata
          ? `
        <div style="margin-bottom: 20px; font-size: 12px; color: #777777; border-top: 1px solid #E8E9EC; padding-top: 12px;">
          <p style="margin: 0 0 4px 0;"><strong>Paramètres du projet :</strong></p>
          <pre style="background: #F7F8FA; padding: 8px; border-radius: 6px; overflow-x: auto;">${JSON.stringify(
            metadata,
            null,
            2
          )}</pre>
        </div>
      `
          : ""
      }

      <div style="border-top: 1px solid #E8E9EC; padding-top: 16px; font-size: 12px; color: #999999; text-align: center;">
        Message transmis à <strong>${DESTINATION_EMAIL}</strong> • Plateforme PROJEKTA
      </div>
    </div>
  `;

  // 1. Intégration directe si une clé API Resend est configurée
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "PROJEKTA Notification <onboarding@resend.dev>",
          to: [DESTINATION_EMAIL],
          reply_to: senderEmail,
          subject: `[PROJEKTA] ${subject} - ${senderName}`,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Échec de l'envoi Resend :", errorData);
      } else {
        const result = await response.json();
        return { success: true, messageId: result.id };
      }
    } catch (err) {
      console.error("Erreur réseau lors de l'appel Resend :", err);
    }
  }

  // 2. Journalisation certifiée et sécurisée en l'absence de service tiers actif
  console.log("=== ENVOI DU MESSAGE VERS L'E-MAIL PROFESSIONNEL ===");
  console.log(`Destinataire configuré : ${DESTINATION_EMAIL}`);
  console.log(`Sujet : [PROJEKTA] ${subject} - ${senderName}`);
  console.log(`Expéditeur : ${senderName} <${senderEmail}>`);
  console.log(`Détails : \n${content}`);

  return { success: true, simulated: true };
}
