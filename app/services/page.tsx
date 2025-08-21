"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Shield, Zap, Globe, Target, TrendingUp } from "lucide-react"
import { translations } from "@/lib/translations"
import Image from "next/image"

export default function ServicesPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const services = [
    {
      key: "quality",
      icon: Shield,
      color: "text-blue-600",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QASenior-vo89xNwLUU8D0OTrtqWTAv2pgwp72T.webp",
    },
    {
      key: "development",
      icon: Zap,
      color: "text-purple-600",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expertDev-XMJxD1nHpS7ZKMdMribIYwUlEyPvpo.png",
    },
    {
      key: "web",
      icon: Globe,
      color: "text-green-600",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DesignWeb-lfbgP8c1alSdG7PE54bB5opu80opfM.webp",
    },
    {
      key: "audit",
      icon: Target,
      color: "text-orange-600",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nosvaleur-9JWKyXukxaj1nrlzz1SSJ10dLONGBF.webp",
    },
    {
      key: "infrastructure",
      icon: TrendingUp,
      color: "text-red-600",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nosvaleur-9JWKyXukxaj1nrlzz1SSJ10dLONGBF.webp",
    },
  ] as const

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec changement de langue */}
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      {/* Section hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#1940BF] via-[#1940BF]/90 to-[#1940BF]/80">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
            {t.services.section.title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up-delay">
            {t.services.section.subtitle}
          </p>
        </div>
      </section>

      {/* Section services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ key, icon: Icon, color, image }) => {
              const { title, description } = t.services.items[key as keyof typeof t.services.items]

              return (
                <Card
                  key={key}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#1940BF]/20 hover:border-[#1940BF] bg-white"
                >
                  <CardHeader className="pb-4">
                    {/* Image */}
                    <div className="mb-4">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={title}
                        width={300}
                        height={200}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-[#1940BF]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-7 w-7 text-[#1940BF]`} />
                    </div>

                    {/* Titre du service */}
                    <CardTitle className="text-xl text-[#1940BF]">{title}</CardTitle>
                  </CardHeader>

                  {/* Description */}
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-gray-600">
                      {description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer & WhatsApp */}
      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}
