"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { translations } from "@/lib/translations"
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
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Tests fonctionnels :</strong> Vérifient que chaque fonctionnalité répond aux spécifications.</li>
                <li><strong>Tests de régression :</strong> Garantissent que les modifications n'impactent pas les fonctionnalités existantes.</li>
                <li><strong>Tests de performance :</strong> Mesurent rapidité, stabilité et capacité du logiciel sous différentes charges.</li>
                <li><strong>Tests de compatibilité :</strong> Vérifient le bon fonctionnement sur divers appareils, navigateurs et systèmes d'exploitation.</li>
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
              <ul className="list-disc pl-5 space-y-2">
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
              <ul className="list-disc pl-5 space-y-2">
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
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Functional tests:</strong> Verify that each feature meets specifications.</li>
                <li><strong>Regression tests:</strong> Ensure changes don't affect existing functionality.</li>
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
              <ul className="list-disc pl-5 space-y-2">
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
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Regular updates:</strong> Ensure security, performance, and compliance with new standards.</li>
                <li><strong>Performance monitoring:</strong> Detect and fix issues quickly.</li>
              </ul>
            ),
          },
        ]

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      {/* Hero Section avec background image et icônes animées */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-blue-900 via-[#1940BF] to-blue-700">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FAQ-CqtKTTs8FKM4mvqDksF4R5PafWorGR.png')" }}
        ></div>
        
        {/* Icônes de type nuage animées */}
        <div className="absolute top-10 left-1/4 animate-float-slow">
          <svg className="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
        </div>
        
        <div className="absolute top-20 right-1/4 animate-float-medium">
          <svg className="w-12 h-12 text-white/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-20 animate-float-fast">
          <svg className="w-10 h-10 text-white/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-20 animate-float-slower">
          <svg className="w-14 h-14 text-white/25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {t.nav.faq}
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto lg:mx-0 mb-6 rounded-full"></div>
              <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                {language === "fr"
                  ? "Vous avez des questions ? Retrouvez ici des réponses claires et détaillées sur nos services en assurance qualité logicielle. Découvrez comment nous garantissons des logiciels performants, fiables et conformes à vos attentes."
                  : "Do you have any questions? Find clear and detailed answers about our software quality assurance services here. Discover how we guarantee high-performance, reliable software that meets your expectations."}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative max-w-md">
                <div className="absolute -inset-4 bg-blue-400/20 rounded-2xl blur-xl animate-pulse"></div>
                <div className="relative z-10 p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="text-2xl font-semibold mb-2">{language === "fr" ? "FAQ" : "FAQ"}</h3>
                    <p className="text-blue-100">
                      {language === "fr" 
                        ? "Trouvez les réponses à vos questions" 
                        : "Find answers to your questions"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {language === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Explorez nos réponses aux questions les plus courantes sur nos services et processus."
                : "Explore our answers to the most common questions about our services and processes."}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 transition-all duration-300 hover:shadow-md hover:border-blue-200"
              >
                <AccordionTrigger className="text-left py-6 text-lg font-semibold text-gray-800 hover:text-blue-700 transition-colors flex items-start">
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <svg className="flex-shrink-0 w-5 h-5 ml-auto text-blue-600 transition-transform duration-300" 
                       viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Card */}
          <div className="mt-16 p-8 border border-blue-100 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {language === "fr" ? "Vous avez d'autres questions ?" : "Do you have other questions?"}
            </h2>
            <p className="text-gray-700 mb-6 max-w-md mx-auto">
              {language === "fr"
                ? "Notre équipe est à votre disposition pour répondre à toutes vos interrogations et discuter de vos besoins spécifiques."
                : "Our team is available to answer all your questions and discuss your specific needs."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {language === "fr" ? "Contactez-nous" : "Contact Us"}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer translations={t} />
      <WhatsAppButton language={language} />

      <style jsx global>{`
        @keyframes float-slow {
          0% { transform: translateY(0px) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0); }
        }
        @keyframes float-medium {
          0% { transform: translateY(0px) translateX(0); }
          50% { transform: translateY(-10px) translateX(-8px); }
          100% { transform: translateY(0px) translateX(0); }
        }
        @keyframes float-fast {
          0% { transform: translateY(0px) translateX(0); }
          50% { transform: translateY(-8px) translateX(5px); }
          100% { transform: translateY(0px) translateX(0); }
        }
        @keyframes float-slower {
          0% { transform: translateY(0px) translateX(0); }
          50% { transform: translateY(-12px) translateX(-5px); }
          100% { transform: translateY(0px) translateX(0); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 5s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}