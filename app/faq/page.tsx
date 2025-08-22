"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { translations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"

export default function FAQPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const faqs =
    language === "fr"
      ? [
          {
            question: "Quels types de tests sont réalisés ?",
            answer: (
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Tests fonctionnels :</strong> Vérifient que chaque fonctionnalité répond aux spécifications.</li>
                <li><strong>Tests de régression :</strong> Garantissent que les modifications n’impactent pas les fonctionnalités existantes.</li>
                <li><strong>Tests de performance :</strong> Mesurent rapidité, stabilité et capacité du logiciel sous différentes charges.</li>
                <li><strong>Tests de compatibilité :</strong> Vérifient le bon fonctionnement sur divers appareils, navigateurs et systèmes d’exploitation.</li>
                <li><strong>Tests manuels et automatisés :</strong> Pour une vérification approfondie et rapide selon vos besoins.</li>
                <li><strong>Tests API :</strong> Assurez-vous que vos interfaces de programmation fonctionnent correctement.</li>
                <li><strong>Tests web et mobiles :</strong> Garantissent une expérience optimale sur toutes les plateformes.</li>
                <li><strong>Tests exploratoires :</strong> Identifient les problèmes imprévus grâce à des analyses créatives.</li>
              </ul>
            ),
          },
          {
            question: "Comment est assurée la qualité ?",
            answer: (
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Tests manuels :</strong> Évaluation détaillée de chaque fonctionnalité en simulant des scénarios réels.</li>
                <li><strong>Tests automatisés :</strong> Scripts pour tests répétés, garantissant couverture maximale et détection rapide des erreurs.</li>
              </ul>
            ),
          },
          {
            question: "Quel est le délai pour créer un site web ?",
            answer: "Le délai dépend de la complexité et des spécificités du projet. Nous collaborons avec vous pour définir un calendrier réaliste tout en assurant une qualité optimale.",
          },
          {
            question: "Offrez-vous un support après-vente ?",
            answer: "Oui, nous proposons un service de maintenance et de support continu pour garantir le bon fonctionnement de vos systèmes après leur déploiement.",
          },
          {
            question: "Comment gérer la maintenance des systèmes ?",
            answer: (
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Mises à jour régulières :</strong> Assurer la sécurité, performance et conformité aux nouvelles normes.</li>
                <li><strong>Suivi de la performance :</strong> Détecter et résoudre rapidement toute anomalie.</li>
              </ul>
            ),
          },
        ]
      : [
          {
            question: "What types of tests are performed?",
            answer: (
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Functional tests:</strong> Verify that each feature meets specifications.</li>
                <li><strong>Regression tests:</strong> Ensure changes don’t affect existing functionality.</li>
                <li><strong>Performance tests:</strong> Measure speed, stability, and capacity under different loads.</li>
                <li><strong>Compatibility tests:</strong> Ensure proper functioning on different devices, browsers, and OS.</li>
                <li><strong>Manual & automated tests:</strong> Tailored to your needs for thorough and fast verification.</li>
                <li><strong>API tests:</strong> Ensure programming interfaces work smoothly.</li>
                <li><strong>Web & mobile tests:</strong> Guarantee optimal user experience across platforms.</li>
                <li><strong>Exploratory tests:</strong> Identify unexpected issues through creative analyses.</li>
              </ul>
            ),
          },
          {
            question: "How is quality ensured?",
            answer: (
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Manual tests:</strong> Detailed evaluation of each feature simulating real scenarios.</li>
                <li><strong>Automated tests:</strong> Scripts for repeated testing, ensuring maximum coverage and fast error detection.</li>
              </ul>
            ),
          },
          {
            question: "What is the timeline to create a website?",
            answer: "Timeline depends on project complexity. We work with you to define a realistic schedule while ensuring top quality.",
          },
          {
            question: "Do you offer post-sale support?",
            answer: "Yes, we provide continuous maintenance and support to ensure your systems run smoothly after deployment.",
          },
          {
            question: "How to manage system maintenance?",
            answer: (
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Regular updates:</strong> Ensure security, performance, and compliance with new standards.</li>
                <li><strong>Performance monitoring:</strong> Detect and fix issues quickly.</li>
              </ul>
            ),
          },
        ]

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#1940BF] via-[#1940BF]/90 to-[#1940BF]/80">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white animate-fade-in-up">{t.nav.faq}</h1>
              <p className="text-xl text-white/80 max-w-2xl animate-fade-in-up-delay">
                {language === "fr"
                  ? "Vous avez des questions ? Retrouvez ici des réponses claires et détaillées sur nos services en assurance qualité logicielle. Découvrez comment nous garantissons des logiciels performants, fiables et conformes à vos attentes."
                  : "Do you have any questions? Find clear and detailed answers about our software quality assurance services here. Discover how we guarantee high-performance, reliable software that meets your expectations."}
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

          {/* Card contact */}
          <div className="mt-12 p-8 border border-[#1940BF]/30 rounded-lg bg-[#f5f7ff] text-center">
            <h2 className="text-2xl font-bold text-[#1940BF] mb-4">
              {language === "fr" ? "Avez-vous d'autres questions ?" : "Do you have other questions?"}
            </h2>
            <p className="text-gray-700 mb-6">
              {language === "fr"
                ? "Si vous souhaitez en savoir plus ou poser des questions supplémentaires, n’hésitez pas à nous contacter."
                : "If you want to know more or have additional questions, feel free to contact us."}
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[#1940BF] text-white font-semibold rounded-lg hover:bg-[#1940BF]/90 transition-all"
            >
              {language === "fr" ? "Contactez-nous" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>

      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}
