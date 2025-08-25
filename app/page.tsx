"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Newsletter } from "@/app/Newsletter/Newsletter"
import {
  Award,
  Target,
  Phone,
  Shield,
  Globe,
  Zap,
  FileCheck,
  Briefcase,
  Settings,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
  Users,
  Clock,
  Smartphone,
  Server,
  BarChart3,
} from "lucide-react"
import { translations } from "@/lib/translations"

export default function HomePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [clientsCount, setClientsCount] = useState(0)
  const [experienceCount, setExperienceCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const [supportHours, setSupportHours] = useState(0)

  const t = translations[language]
  const words = language === "fr" 
    ? ["l'Excellence", "l'Innovation", "la Qualité", "la Performance"] 
    : ["Excellence", "Innovation", "Quality", "Performance"]

  useEffect(() => {
    const interval = setInterval(() => setCurrentWordIndex((prev) => (prev + 1) % words.length), 2000)
    return () => clearInterval(interval)
  }, [language])

  useEffect(() => {
    const animateCounter = (setter: (value: number) => void, target: number, duration = 2000) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else setter(Math.floor(start))
      }, 16)
    }

    const timer = setTimeout(() => {
      animateCounter(setClientsCount, 250)
      animateCounter(setExperienceCount, 8)
      animateCounter(setProjectsCount, 500)
      animateCounter(setSupportHours, 24)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-blue-900 via-[#1940BF] to-blue-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge
                variant="secondary"
                className="mb-8 px-6 py-3 text-lg bg-white/20 text-white border-white/30 animate-pulse"
              >
                <Award className="h-5 w-5 mr-2" />
                {language === "fr" ? "Expert en Assurance Qualité" : "Quality Assurance Expert"}
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                {language === "fr" ? "Solutions Digitales" : "Digital Solutions"} <br />
                <span className="text-yellow-300 typewriter-text">{words[currentWordIndex]}</span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed mb-12">
                {language === "fr" 
                  ? "SafiCert transforme vos idées en expériences digitales exceptionnelles. De la conception à la livraison, nous assurons qualité, performance et innovation."
                  : "SafiCert transforms your ideas into exceptional digital experiences. From conception to delivery, we ensure quality, performance and innovation."}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="gap-3 px-10 py-4 text-lg bg-white text-blue-800 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {language === "fr" ? "Découvrir nos services" : "Discover our services"}
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </Link>

                <ContactModal language={language}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-3 px-10 py-4 text-lg bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="h-6 w-6" />
                    {language === "fr" ? "Contact rapide" : "Quick contact"}
                  </Button>
                </ContactModal>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-md">
                <div className="absolute -inset-4 bg-blue-400/20 rounded-2xl blur-xl animate-pulse"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroImage-HWPMMEvJAyvQqFJl1RnP3IoAwvpInc.png"
                  alt={language === "fr" ? "Innovation SafiCert" : "SafiCert Innovation"}
                  width={400}
                  height={400}
                  className="relative z-10 rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: clientsCount, label: language === "fr" ? "Clients Satisfaits" : "Satisfied Clients", icon: Users },
            { value: experienceCount, label: language === "fr" ? "Ans d'Expertise" : "Years of Expertise", icon: Award },
            { value: projectsCount, label: language === "fr" ? "Projets Livrés" : "Projects Delivered", icon: CheckCircle },
            { value: supportHours, label: language === "fr" ? "Support 24/7" : "24/7 Support", icon: Clock },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-blue-700" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                {stat.value}{idx === 3 ? "/7" : "+"}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              {language === "fr" ? "Nos Domaines d'Expertise" : "Our Areas of Expertise"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "fr" 
                ? "Des solutions complètes pour transformer vos idées en réalités digitales performantes et innovantes."
                : "Complete solutions to transform your ideas into high-performance and innovative digital realities."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: language === "fr" ? "Assurance Qualité" : "Quality Assurance",
                description: language === "fr" 
                  ? "Tests rigoureux et validation complète pour garantir la fiabilité et les performances de vos applications." 
                  : "Rigorous testing and complete validation to guarantee the reliability and performance of your applications.",
                icon: Shield,
                features: language === "fr" 
                  ? ["Tests fonctionnels", "Tests de performance", "Tests de sécurité", "Automatisation"] 
                  : ["Functional tests", "Performance tests", "Security tests", "Automation"]
              },
              {
                title: language === "fr" ? "Développement Web" : "Web Development",
                description: language === "fr" 
                  ? "Sites web modernes, responsives et optimisés pour une expérience utilisateur exceptionnelle." 
                  : "Modern, responsive websites optimized for an exceptional user experience.",
                icon: Globe,
                features: language === "fr" 
                  ? ["React/Next.js", "Design responsive", "SEO optimization", "E-commerce"] 
                  : ["React/Next.js", "Responsive design", "SEO optimization", "E-commerce"]
              },
              {
                title: language === "fr" ? "Applications Mobiles" : "Mobile Applications",
                description: language === "fr" 
                  ? "Applications natives et cross-platform offrant une expérience mobile fluide et intuitive." 
                  : "Native and cross-platform applications offering a smooth and intuitive mobile experience.",
                icon: Smartphone,
                features: language === "fr" 
                  ? ["iOS & Android", "Applications hybrides", "UI/UX design", "Publication"] 
                  : ["iOS & Android", "Hybrid apps", "UI/UX design", "Publishing"]
              },
              {
                title: language === "fr" ? "Solutions Cloud" : "Cloud Solutions",
                description: language === "fr" 
                  ? "Infrastructure cloud scalable et sécurisée pour répondre à vos besoins évolutifs." 
                  : "Scalable and secure cloud infrastructure to meet your evolving needs.",
                icon: Server,
                features: language === "fr" 
                  ? ["Architecture cloud", "Sécurité avancée", "Scalabilité", "Sauvegarde"] 
                  : ["Cloud architecture", "Advanced security", "Scalability", "Backup"]
              },
              {
                title: language === "fr" ? "Consulting IT" : "IT Consulting",
                description: language === "fr" 
                  ? "Conseils stratégiques et accompagnement personnalisé pour vos projets digitaux." 
                  : "Strategic advice and personalized support for your digital projects.",
                icon: Briefcase,
                features: language === "fr" 
                  ? ["Stratégie digitale", "Audit technique", "Optimisation", "Formation"] 
                  : ["Digital strategy", "Technical audit", "Optimization", "Training"]
              },
              {
                title: language === "fr" ? "Data Analytics" : "Data Analytics",
                description: language === "fr" 
                  ? "Transformez vos données en insights actionnables pour une prise de décision éclairée." 
                  : "Transform your data into actionable insights for informed decision making.",
                icon: BarChart3,
                features: language === "fr" 
                  ? ["Tableaux de bord", "Reporting personnalisé", "Analyse prédictive", "KPI tracking"] 
                  : ["Dashboards", "Custom reporting", "Predictive analysis", "KPI tracking"]
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-300 bg-white overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <CardHeader className="pb-4 pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="gap-3 px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300"
              >
                {language === "fr" ? "Explorer tous nos services" : "Explore all our services"}
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              {language === "fr" ? "Ils nous font confiance" : "They Trust Us"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "fr" 
                ? "Des entreprises de toutes tailles nous font confiance pour leurs projets digitaux les plus exigeants."
                : "Companies of all sizes trust us for their most demanding digital projects."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:scale-105">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-2xl font-bold text-blue-700">C{item}</div>
                </div>
                <div className="mt-4 text-center font-semibold text-blue-900">
                  {language === "fr" ? `Client ${item}` : `Client ${item}`}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {language === "fr" ? "Rejoignez nos clients satisfaits" : "Join our satisfied clients"}
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à réussir."
                : "Contact us today to discuss your project and discover how we can help you succeed."}
            </p>
            
            <ContactModal language={language}>
              <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                {language === "fr" ? "Demander un devis" : "Request a quote"}
              </Button>
            </ContactModal>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter language={language} />

      <Footer translations={t} />
      <WhatsAppButton language={language} />

      <style jsx global>{`
        .typewriter-text {
          display: inline-block;
          overflow: hidden;
          border-right: 0.15em solid #fbbf24;
          white-space: nowrap;
          animation: typing 1s steps(30, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #fbbf24 }
        }
      `}</style>
    </div>
  )
}
