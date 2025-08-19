"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import { translations } from "@/lib/translations"

export default function BlogPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const blogPosts = [
    {
      title: language === "fr" ? "Les dernières tendances en certification ISO" : "Latest trends in ISO certification",
      description:
        language === "fr"
          ? "Découvrez les nouvelles normes ISO et leur impact sur votre entreprise."
          : "Discover the new ISO standards and their impact on your business.",
      date: "2025-01-15",
      author: "SafiCert Team",
      category: language === "fr" ? "Certification" : "Certification",
    },
    {
      title:
        language === "fr"
          ? "Guide complet de l'assurance qualité logicielle"
          : "Complete guide to software quality assurance",
      description:
        language === "fr"
          ? "Tout ce que vous devez savoir sur l'assurance qualité dans le développement logiciel."
          : "Everything you need to know about quality assurance in software development.",
      date: "2025-01-10",
      author: "SafiCert Team",
      category: language === "fr" ? "Développement" : "Development",
    },
    {
      title: language === "fr" ? "L'importance de l'audit système en 2025" : "The importance of system audit in 2025",
      description:
        language === "fr"
          ? "Pourquoi l'audit de vos systèmes informatiques est crucial pour votre entreprise."
          : "Why auditing your IT systems is crucial for your business.",
      date: "2025-01-05",
      author: "SafiCert Team",
      category: language === "fr" ? "Audit" : "Audit",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{t.nav.blog}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Découvrez nos derniers articles sur la certification et l'assurance qualité"
                : "Discover our latest articles on certification and quality assurance"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">{post.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US")}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
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
