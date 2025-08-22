"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Shield, Server, Globe, Zap, Target, Layout } from "lucide-react"
import { translations } from "@/lib/translations"

export default function ServicesPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const services = [
    { key: "qa", icon: Shield, color: "text-blue-600" },
    { key: "infrastructure", icon: Server, color: "text-red-600" },
    { key: "web", icon: Globe, color: "text-green-600" },
    { key: "development", icon: Zap, color: "text-purple-600" },
    { key: "audit", icon: Target, color: "text-orange-600" },
    { key: "ux", icon: Layout, color: "text-pink-600" },
  ] as const

  const serviceTexts = {
    fr: {
      qa: {
        title: "QA Testing & Automatisation",
        description:
          "Nous proposons des tests logiciels manuels et automatisés pour assurer le bon fonctionnement, la performance optimale et une expérience utilisateur de qualité.",
      },
      infrastructure: {
        title: "Solutions d’Infrastructure & Cloud",
        description:
          "Nous proposons des solutions d’infrastructure complètes garantissant une haute disponibilité, sécurité et performance pour vos applications et sites web.",
      },
      web: {
        title: "Développement Web",
        description:
          "Nous créons des sites web modernes, sécurisés et performants, offrant une expérience utilisateur optimale, que ce soit pour un site vitrine ou une boutique en ligne.",
      },
      development: {
        title: "Développement d’Applications",
        description:
          "Nous concevons des applications puissantes pour aider les entreprises à croître efficacement, qu'il s'agisse d'applications mobiles, de logiciels ou de solutions SaaS.",
      },
      audit: {
        title: "Audit & Optimisation des Systèmes",
        description:
          "Nous proposons des services d’audit et d’optimisation IT afin d’aider les entreprises à identifier les inefficacités, renforcer la sécurité et améliorer la performance de leurs systèmes.",
      },
      ux: {
        title: "UI/UX Design",
        description:
          "En privilégiant un design convivial, vous simplifiez la navigation et améliorez l’expérience utilisateur. Un utilisateur satisfait est plus enclin à revenir et à recommander votre produit à d’autres.",
      },
    },
    en: {
      qa: {
        title: "QA Testing & Automation",
        description:
          "We offer manual and automated software tests to ensure optimal performance, smooth functionality, and a high-quality user experience.",
      },
      infrastructure: {
        title: "Infrastructure & Cloud Solutions",
        description:
          "We provide comprehensive infrastructure solutions ensuring high availability, security, and performance for your applications and websites.",
      },
      web: {
        title: "Web Development",
        description:
          "We create modern, secure, and high-performance websites, offering optimal user experience, whether for a showcase site or an online store.",
      },
      development: {
        title: "Application Development",
        description:
          "We design powerful applications to help businesses grow efficiently, including mobile apps, software, or SaaS solutions.",
      },
      audit: {
        title: "System Audit & Optimization",
        description:
          "We provide IT audit and optimization services to help companies identify inefficiencies, strengthen security, and improve system performance.",
      },
      ux: {
        title: "UI/UX Design",
        description:
          "By prioritizing user-friendly design, you simplify navigation and enhance the user experience. Satisfied users are more likely to return and recommend your product.",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#1940BF] via-[#1940BF]/90 to-[#1940BF]/80">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
            {language === "fr" ? "Nos Services en Détail" : "Our Services in Detail"}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up-delay">
            {language === "fr"
              ? "Optimisez votre présence en ligne grâce à nos services sur mesure. Notre équipe d’experts vous accompagne dans la création de sites web attractifs, le développement d’applications mobiles performantes et l’assurance qualité de vos logiciels. Bénéficiez de solutions innovantes pour accroître votre visibilité et votre compétitivité."
              : "Optimize your online presence with our tailored services. Our team of experts supports you in creating attractive websites, high-performance mobile applications, and quality assurance for your software. Benefit from innovative solutions to increase your visibility and competitiveness."}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ key, icon: Icon, color }) => {
            const { title, description } = serviceTexts[language][key]

            return (
              <Card
                key={key}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-[#1940BF]/20 flex flex-col items-center text-center p-6"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-[#1940BF]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className={`h-7 w-7 ${color}`} />
                </div>
                <CardTitle className="text-xl text-[#1940BF] mb-2">{title}</CardTitle>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}
