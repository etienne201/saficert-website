import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    })

    // HTML format pour le mail
    const htmlContent = `
      <h2>📩 Nouveau message de contact SafiCert</h2>
      <p><strong>Nom :</strong> ${data.name}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Entreprise :</strong> ${data.company || "Non spécifiée"}</p>
      <p><strong>Service choisi :</strong> ${data.serviceType || "Non spécifié"}</p>
      <p><strong>Sujet :</strong> ${data.subject || "Demande générale"}</p>
      <hr/>
      <p><strong>Message :</strong></p>
      <p>${data.message.replace(/\n/g, "<br/>")}</p>
    `

    const mailOptions = {
      from: `"SafiCert Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: data.subject || "Nouvelle demande de contact",
      text: `
Nom: ${data.name}
Email: ${data.email}
Entreprise: ${data.company || "Non spécifiée"}
Service choisi: ${data.serviceType || "Non spécifié"}
Sujet: ${data.subject || "Demande générale"}
Message:
${data.message}
      `.trim(),
      html: htmlContent,
      // Exemple pièce jointe (optionnel)
      attachments: data.attachment
        ? [
            {
              filename: data.attachment.name,
              content: Buffer.from(data.attachment.content, "base64"),
            },
          ]
        : [],
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("❌ Erreur d’envoi:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
