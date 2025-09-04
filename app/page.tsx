"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Newsletter } from "@/app/Newsletter/Newsletter"
import {
  Award, Phone, Shield, Globe, Briefcase, ChevronRight,
  Smartphone, Server, BarChart3, Star, CheckCircle, Lightbulb, TrendingUp, Calendar, User
} from "lucide-react"
import { translations } from "@/lib/translations"

export default function HomePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const slogansFr = [
    "La qualité, code après code.",
    "L'expertise qui anticipe, la technologie qui inspire.",
    "Nous certifions l'excellence de votre digital.",
    "De l'idée à l'application, nous assurons l'exception.",
    "La rigueur du test, la passion du parfait."
  ]

  const slogansEn = [
    "Quality, code after code.",
    "Expertise that anticipates, technology that inspires.",
    "We certify the excellence of your digital.",
    "From idea to application, we ensure exception.",
    "The rigor of testing, the passion for perfection."
  ]

  const slogans = language === "fr" ? slogansFr : slogansEn

  const sloganColors = [
    "text-yellow-300",
    "text-green-300",
    "text-pink-300",
    "text-orange-300",
    "text-cyan-300"
  ]

  const [currentSlogan, setCurrentSlogan] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slogans.length])

  const heroContent = language === "fr"
    ? {
        title: "Bienvenue chez Saficert",
        subtitle: `Un seul bug peut briser la confiance et freiner la croissance. Chez SafiCert, notre expertise en Assurance Qualité (QA) protège votre excellence digitale. Du Web au Mobile en passant par le Cloud, nous anticipons les risques, éliminons les anomalies et garantissons des expériences fiables, fluides et sécurisées. Nos services — Développement Web, Applications Mobiles, Solutions Cloud, Consulting IT et Data Analytics — offrent bien plus que de la technologie : ils assurent la confiance et une réussite durable`
      }
    : {
        title: "Welcome to Saficert",
        subtitle: `Just one bug can break trust and slow growth. At SafiCert, our expertise in Quality Assurance (QA) safeguards your digital excellence. From Web to Mobile to Cloud, we anticipate risks, eliminate anomalies, and ensure reliable, seamless, and secure experiences. Our services — Web Development, Mobile Applications, Cloud Solutions, IT Consulting, and Data Analytics — deliver more than technology: they build trust and long-term success.`
      }

 

  const whyChooseUsContent = language === "fr"
    ? [
        { icon: <CheckCircle className="h-7 w-7 text-blue-700" />, title: "Expertise Certifiée", description: "Une équipe d'experts QA et de développeurs certifiés pour des solutions fiables." },
        { icon: <Lightbulb className="h-7 w-7 text-blue-700" />, title: "Innovation Constante", description: "Nous restons à la pointe de la technologie pour vous offrir les meilleures solutions." },
        { icon: <TrendingUp className="h-7 w-7 text-blue-700" />, title: "Résultats mesurables", description: "Nos stratégies sont axées sur la croissance de votre entreprise." }
      ]
    : [
        { icon: <CheckCircle className="h-7 w-7 text-blue-700" />, title: "Certified Expertise", description: "A team of certified QA and developers for reliable solutions." },
        { icon: <Lightbulb className="h-7 w-7 text-blue-700" />, title: "Constant Innovation", description: "We stay at the forefront of technology to provide you with the best solutions." },
        { icon: <TrendingUp className="h-7 w-7 text-blue-700" />, title: "Measurable Results", description: "Our strategies are focused on the growth of your business." }
      ]

  const servicesContent = language === "fr"
    ? [
        { title: "Assurance Qualité", description: "Tests rigoureux et validation complète pour garantir la fiabilité et les performances." },
        { title: "Développement Web", description: "Sites modernes, responsives et optimisés pour une expérience exceptionnelle." },
        { title: "Applications Mobiles", description: "Expérience fluide avec des apps natives et cross-platform." },
        { title: "Solutions Cloud", description: "Infrastructure scalable et sécurisée adaptée à vos besoins." },
        { title: "Consulting IT", description: "Conseils stratégiques et accompagnement sur-mesure." },
        { title: "Data Analytics", description: "Exploitez vos données pour des décisions éclairées." }
      ]
    : [
        { title: "Quality Assurance", description: "Rigorous testing and validation for reliability and performance." },
        { title: "Web Development", description: "Modern, responsive websites optimized for exceptional experience." },
        { title: "Mobile Applications", description: "Smooth experience with native and cross-platform apps." },
        { title: "Cloud Solutions", description: "Scalable and secure infrastructure for evolving needs." },
        { title: "IT Consulting", description: "Strategic advice and tailored support." },
        { title: "Data Analytics", description: "Turn your data into actionable insights." }
      ]

  const clients = [
    {
      name: "Jean Dupont",
      role: language === "fr" ? "Co-fondateur" : "Co-founder",
      company: "BEECEM",
      review: language === "fr"
        ? "Saficert nous a aidés à améliorer la performance de nos applications. Un partenaire de confiance !"
        : "Saficert helped us improve our application performance. A trusted partner!",
      date: "12/08/2025",
      stars: 5,
      photo: "/images/client.jpeg"
    },
    {
      name: "Sarah Martin",
      role: language === "fr" ? "Directrice IT" : "IT Director",
      company: "TechOne",
      review: language === "fr"
        ? "Une équipe réactive et professionnelle. Nos projets cloud ont été livrés avec succès."
        : "A responsive and professional team. Our cloud projects were delivered successfully.",
      date: "20/07/2025",
      stars: 4,
      photo: "/images/client.jpeg"
    }
  ]
  
  const latestBlogs = language === "fr"
    ? [
        {
          title: "Les dernières tendances en certification ISO",
          excerpt: "Découvrez les nouvelles normes ISO et leur impact sur votre entreprise.",
          image: "/images/blocs2.webp",
         link: "/blog",
          category: "Certification",
          date: "15 janvier 2025",
          author: "SafiCert Team"
        },
        {
          title: "Comment choisir la bonne solution Cloud ?",
          excerpt: "Un guide complet pour vous aider à prendre la bonne décision pour votre infrastructure...",
          image: "/images/bloc1.webp",
          link: "/blog",
          category: "Technologie",
          date: "10 janvier 2025",
          author: "SafiCert Team"
        },
      ]
    : [
        {
          title: "Latest Trends in ISO Certification",
          excerpt: "Discover the new ISO standards and their impact on your business.",
          image: "/images/blog-1.jpeg",
          link: "/blog/certification-trends-iso",
          category: "Certification",
          date: "January 15, 2025",
          author: "SafiCert Team"
        },
        {
          title: "How to Choose the Right Cloud Solution?",
          excerpt: "A comprehensive guide to help you make the right decision for your infrastructure...",
          image: "/images/blog-2.jpeg",
          link: "/blog/choose-cloud-solution",
          category: "Technology",
          date: "January 10, 2025",
          author: "SafiCert Team"
        },
      ]

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#1940BF] to-[#0A1F63] text-white text-center px-6 py-24">
        {/* Placeholder for video or background image */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
            <Badge variant="secondary" className="mb-6 px-5 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Award className="h-5 w-5 mr-2" />
            {language === "fr" ? "Expert en Solutions Digitales" : "Digital Solutions Expert"}
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">{heroContent.title}</h1>

            <motion.p
            key={currentSlogan}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className={`text-2xl font-semibold mb-8 ${sloganColors[currentSlogan]}`}
            >
            {slogans[currentSlogan]}
            </motion.p>

            <p className="text-lg text-blue-100 max-w-3xl whitespace-pre-line leading-relaxed mb-12">
            {heroContent.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/services">
                <Button size="lg" className="px-8 py-4 bg-white text-blue-800 hover:bg-white/90">
                {language === "fr" ? "Découvrir nos services" : "Discover our services"}
                <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
            <Link href="/contact">
                <Button variant="outline" size="lg" className="px-8 py-4 border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                {language === "fr" ? "Nous contacter" : "Contact us"}
                </Button>
            </Link>
            </div>
        </div>
      </section>

 

      {/* SERVICES */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              {language === "fr" ? "Nos Domaines d'Expertise" : "Our Areas of Expertise"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "fr"
                ? "Nous proposons des solutions complètes pour transformer vos idées en réalités digitales performantes."
                : "We provide complete solutions to transform your ideas into powerful digital realities."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesContent.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    {idx === 0 ? <Shield className="h-7 w-7 text-blue-700" /> :
                     idx === 1 ? <Globe className="h-7 w-7 text-blue-700" /> :
                     idx === 2 ? <Smartphone className="h-7 w-7 text-blue-700" /> :
                     idx === 3 ? <Server className="h-7 w-7 text-blue-700" /> :
                     idx === 4 ? <Briefcase className="h-7 w-7 text-blue-700" /> :
                     <BarChart3 className="h-7 w-7 text-blue-700" />}
                  </div>
                  <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-blue-50">
          <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                      {language === "fr" ? "Pourquoi choisir Saficert ?" : "Why Choose Saficert?"}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      {language === "fr" ? "Notre approche unique et notre engagement envers la qualité nous distinguent." : "Our unique approach and commitment to quality set us apart."}
                  </p>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                  {whyChooseUsContent.map((item, idx) => (
                      <Card key={idx} className="text-center p-6 shadow-md border-t-4 border-blue-600">
                          <CardHeader className="flex items-center justify-center mb-4">
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                  {item.icon}
                              </div>
                          </CardHeader>
                          <CardTitle className="text-xl text-blue-900 mb-2">{item.title}</CardTitle>
                          <CardDescription className="text-gray-600">{item.description}</CardDescription>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA MID-PAGE */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "fr" ? "Prêt à transformer votre entreprise ?" : "Ready to transform your business?"}
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            {language === "fr" ? "Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée." : "Contact us today for a free and personalized consultation."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="px-8 py-4 bg-white text-blue-800 hover:bg-white/90">
                {language === "fr" ? "Commencer le projet" : "Start a project"}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              {language === "fr" ? "Ils nous font confiance" : "They Trust Us"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "fr"
                ? "Découvrez les témoignages de nos clients satisfaits."
                : "Read testimonials from our happy clients."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clients.map((client, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Image src={client.photo} alt={client.name} width={60} height={60} className="rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-blue-900">{client.name}</h3>
                    <p className="text-sm text-gray-500">{client.role} @ {client.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">“{client.review}”</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: client.stars }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">{client.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG / NEWS SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              {language === "fr" ? "Notre Blog" : "Our Blog"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "fr" ? "Découvrez nos dernières analyses, conseils et actualités." : "Read our latest insights, tips, and news."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {latestBlogs.map((post, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 mb-2 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center text-sm text-gray-500 mt-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href={post.link} className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center">
                    {language === "fr" ? "Lire plus" : "Read more"} <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg" className="px-8 py-4 border-blue-600 text-blue-600 hover:bg-blue-50">
                {language === "fr" ? "Voir tous les articles" : "View all articles"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter language={language} />

      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}