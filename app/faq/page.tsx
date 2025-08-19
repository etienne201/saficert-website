"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { translations } from "@/lib/translations"
import Image from "next/image"

export default function FAQPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const faqs =
    language === "fr"
      ? [
          {
            question: "Qu'est-ce que SafiCert ?",
            answer:
              "SafiCert est un organisme de certification professionnel spécialisé dans les services B2B, offrant des solutions complètes de certification, d'assurance qualité et de développement.",
          },
          {
            question: "Quels types de certifications proposez-vous ?",
            answer:
              "Nous proposons des certifications ISO, des audits de qualité logicielle, des certifications de systèmes informatiques, et des validations de conformité aux normes internationales.",
          },
          {
            question: "Combien de temps prend le processus de certification ?",
            answer:
              "Le délai varie selon le type de certification et la complexité de votre projet. En général, comptez entre 2 à 8 semaines pour une certification complète.",
          },
          {
            question: "Proposez-vous un support après certification ?",
            answer:
              "Oui, nous offrons un support technique 24/7 et un accompagnement continu pour maintenir vos certifications à jour.",
          },
          {
            question: "Vos certifications sont-elles reconnues internationalement ?",
            answer:
              "Absolument, toutes nos certifications respectent les normes internationales les plus strictes et sont reconnues mondialement.",
          },
        ]
      : [
          {
            question: "What is SafiCert?",
            answer:
              "SafiCert is a professional certification organization specializing in B2B services, offering comprehensive certification, quality assurance, and development solutions.",
          },
          {
            question: "What types of certifications do you offer?",
            answer:
              "We offer ISO certifications, software quality audits, IT system certifications, and compliance validations with international standards.",
          },
          {
            question: "How long does the certification process take?",
            answer:
              "The timeline varies depending on the type of certification and project complexity. Generally, expect between 2 to 8 weeks for complete certification.",
          },
          {
            question: "Do you provide post-certification support?",
            answer:
              "Yes, we offer 24/7 technical support and ongoing assistance to keep your certifications up to date.",
          },
          {
            question: "Are your certifications internationally recognized?",
            answer:
              "Absolutely, all our certifications comply with the strictest international standards and are globally recognized.",
          },
        ]

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#1940BF] via-[#1940BF]/90 to-[#1940BF]/80">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">{t.nav.faq}</h1>
              <p className="text-xl text-white/80 max-w-2xl animate-fade-in-up-delay">
                {language === "fr"
                  ? "Trouvez les réponses aux questions les plus fréquemment posées"
                  : "Find answers to the most frequently asked questions"}
              </p>
            </div>
            <div className="animate-float">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FAQ-CqtKTTs8FKM4mvqDksF4R5PafWorGR.png"
                alt="FAQ Illustration"
                width={400}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-[#1940BF]/20 rounded-lg px-6 hover:border-[#1940BF] transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-[#1940BF] transition-colors text-[#1940BF] font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}
