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
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QASenior-vo89xNwLUU8D0OTrtqWTAv2pgwp72T.webp",
    },
    {
      key: "development",
      icon: Zap,
      color: "text-purple-600",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expertDev-XMJxD1nHpS7ZKMdMribIYwUlEyPvpo.png",
    },
    {
      key: "web",
      icon: Globe,
      color: "text-green-600",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DesignWeb-lfbgP8c1alSdG7PE54bB5opu80opfM.webp",
    },
    {
      key: "audit",
      icon: Target,
      color: "text-orange-600",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nosvaleur-9JWKyXukxaj1nrlzz1SSJ10dLONGBF.webp",
    },
    {
      key: "infrastructure",
      icon: TrendingUp,
      color: "text-red-600",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nosvaleur-9JWKyXukxaj1nrlzz1SSJ10dLONGBF.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#1940BF] via-[#1940BF]/90 to-[#1940BF]/80">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">{t.services.title}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up-delay">{t.services.subtitle}</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ key, icon: Icon, color, image }) => (
              <Card
                key={key}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#1940BF]/20 hover:border-[#1940BF] bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${key} service`}
                      width={300}
                      height={200}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  <div
                    className={`w-14 h-14 rounded-xl bg-[#1940BF]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-7 w-7 text-[#1940BF]`} />
                  </div>
                  <CardTitle className="text-xl text-[#1940BF]">
                    {t.services[key as keyof typeof t.services].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-gray-600">
                    {t.services[key as keyof typeof t.services].description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}
