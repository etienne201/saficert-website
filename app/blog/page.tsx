"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { translations } from "@/lib/translations"
import { blogPostsData } from "@/app/data/blog-posts"
import { BlogCard } from "@/components/blog/blog-card"

export default function BlogPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-gray-900 dark:via-background dark:to-gray-800 transition-colors">
      {/* Header */}
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-primary-foreground">
              {t.blog.section.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.blog.section.subtitle}
            </p>
          </div>

          {/* Liste des articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post, index) => (
              <BlogCard key={index} post={post} language={language} cta={t.blog.cta} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}
