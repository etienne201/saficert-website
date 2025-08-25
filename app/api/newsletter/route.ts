import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 })
    }

    // Transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // ⚡ obligatoire pour port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Envoi d’un mail de confirmation
    await transporter.sendMail({
      from: `"SafiCert Newsletter" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Confirmation d'inscription - SafiCert",
      text: `Bonjour,\n\nMerci de vous être inscrit(e) à la newsletter SafiCert. 🚀\nVous recevrez bientôt nos dernières actualités et mises à jour.\n\nL'équipe SafiCert.`,
      html: `<p>Bonjour,</p>
             <p>Merci de vous être inscrit(e) à la <b>newsletter SafiCert</b> 🚀.</p>
             <p>Vous recevrez bientôt nos dernières actualités et mises à jour.</p>
             <p>– L'équipe SafiCert</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur Newsletter:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'inscription." },
      { status: 500 }
    )
  }
}
