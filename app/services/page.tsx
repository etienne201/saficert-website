"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Shield, Server, Globe, Zap, Target, Layout } from "lucide-react"
import { translations } from "@/lib/translations"
import { Newsletter } from "@/app/Newsletter/Newsletter"

type ServiceKey = keyof typeof translations["fr"]["services"]["items"]

const services = [
  {
    key: "quality" as ServiceKey,
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    title: "Assurance Qualité Logicielle",
    description:
      "Tests complets et validation de vos applications pour garantir la qualité et la performance.",
    features: [
      "Tests fonctionnels et unitaires",
      "Automatisation des tests",
      "Validation des performances",
    ],
  },
  {
    key: "infrastructure" as ServiceKey,
    icon: Server,
    color: "text-red-600",
    bgColor: "bg-red-100",
    title: "Infrastructure et Cloud",
    description:
      "Conception et gestion d’infrastructures cloud sécurisées et performantes pour vos projets.",
    features: ["Architecture cloud scalable", "Sécurité renforcée", "Monitoring et support"],
  },
  {
    key: "web" as ServiceKey,
    icon: Globe,
    color: "text-green-600",
    bgColor: "bg-green-100",
    title: "Développement Web",
    description:
      "Création de sites web modernes, performants et responsives adaptés à vos besoins.",
    features: ["Sites vitrines et e-commerce", "SEO et performance", "Design responsive"],
  },
  {
    key: "development" as ServiceKey,
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    title: "Développement Logiciel",
    description:
      "Conception d’applications sur mesure pour automatiser vos processus et améliorer l’efficacité.",
    features: ["Applications web et desktop", "Intégration API", "Maintenance et support"],
  },
  {
    key: "audit" as ServiceKey,
    icon: Target,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    title: "Audit et Conseil",
    description:
      "Analyse approfondie de vos systèmes et conseils stratégiques pour optimiser vos projets.",
    features: ["Audit de sécurité", "Optimisation des processus", "Recommandations personnalisées"],
  },
  {
    key: "ux" as ServiceKey,
    icon: Layout,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    title: "UX / UI Design",
    description:
      "Design d’expériences utilisateur intuitives et attractives pour vos applications et sites web.",
    features: ["Design interactif", "Prototypes et maquettes", "Tests utilisateurs"],
  },
]

export default function ServicesPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [lang, setLang] = useState<"fr" | "en">("fr")
  const t = translations[lang]
  const router = useRouter()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSuccess(true)
        setEmail("")
      } else {
        setError("Impossible de s'abonner. Réessayez.")
      }
    } catch (err) {
      console.error(err)
      setError("Erreur serveur. Réessayez plus tard.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header language={lang} onLanguageChange={setLang} translations={t} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1940BF] to-[#0A1F63] text-white py-24 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.services.section.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t.services.section.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.common.expertiseTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.common.expertiseSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ key, icon: Icon, color, bgColor, title, description, features }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card
                  className={`group border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className={`h-2 ${bgColor}`} />
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-xl ${bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className={`h-8 w-8 ${color}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {description}
                    </CardDescription>
                    {features.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Button
                      variant="outline"
                      className="w-full mt-2 group-hover:bg-[#1940BF] group-hover:text-white transition-colors"
                      onClick={() => router.push("/contact")}
                    >
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* Newsletter Section */}
    <Newsletter language={"fr"} />

      {/* Footer et WhatsApp */}
      <Footer translations={t} />
      <WhatsAppButton language={lang} />
    </div>
  )
}
