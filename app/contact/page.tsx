"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactModal } from "@/components/contact-modal"
import { Phone, Mail, MapPin } from "lucide-react"
import { translations } from "@/lib/translations"

export default function ContactPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const contactInfo = [
    { icon: Phone, text: t.contact.phone, href: `tel:${t.contact.phone}` },
    { icon: Mail, text: t.contact.email, href: `mailto:${t.contact.email}` },
    { icon: MapPin, text: t.contact.address, href: "#" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{t.contact.title}</h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">{t.contact.subtitle}</p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">{t.contact.description}</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map(({ icon: Icon, text, href }, index) => (
              <a
                key={index}
                href={href}
                className="flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold text-center">{text}</p>
              </a>
            ))}
          </div>

          <ContactModal language={language} />
        </div>
      </section>

      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}
