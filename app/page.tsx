"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  Award,
  Target,
  Phone,
  Shield,
  Users,
  Globe,
  Star,
  Building,
  Zap,
  HeadphonesIcon,
  FileCheck,
  Briefcase,
  Settings,
} from "lucide-react"
import { translations } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [clientsCount, setClientsCount] = useState(0)
  const [experienceCount, setExperienceCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const [supportHours, setSupportHours] = useState(0)

  const t = translations[language]

  const words = ["Construire", "Innover", "Réussir Ensemble"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animateCounter = (setter: (value: number) => void, target: number, duration = 2000) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
    }

    const timer = setTimeout(() => {
      animateCounter(setClientsCount, 500)
      animateCounter(setExperienceCount, 15)
      animateCounter(setProjectsCount, 1000)
      animateCounter(setSupportHours, 24)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-[#1940BF] via-[#1940BF]/90 to-[#1940BF]/80">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1940BF]/20 via-transparent to-[#1940BF]/30"></div>
        <div className="absolute top-10 left-10 opacity-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/herogauche-8wLq7Vm0TwS0WGJIMtGb1BqRRNeRua.webp"
            alt="SafiCert Logo Background"
            width={200}
            height={200}
            className="animate-spin-slow"
          />
        </div>
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge
                variant="secondary"
                className="mb-8 px-6 py-3 text-lg bg-white/20 text-white border-white/30 animate-pulse-slow"
              >
                <Award className="h-5 w-5 mr-2" />
                Expert en Assurance Qualité
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-slide-in-left">
                Découvrez l'univers de SafiCert
              </h1>

              <div className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 animate-slide-in-right">
                Votre destination pour{" "}
                <span className="inline-block min-w-[200px] text-left">
                  <span className="animate-typewriter text-yellow-300 font-bold">{words[currentWordIndex]}</span>
                </span>
              </div>

              <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
                Bienvenue chez SafiCert, votre expert en Assurance Qualité Logicielle (QA). Nous garantissons la
                fiabilité, la performance et la sécurité de vos logiciels grâce à des tests de pointe et des
                méthodologies éprouvées.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-bounce-in">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="gap-3 px-10 py-4 text-lg bg-white text-[#1940BF] hover:bg-white/90 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105"
                  >
                    <Target className="h-6 w-6" />
                    Découvrir nos services
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-3 px-10 py-4 text-lg bg-transparent border-white text-white hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105"
                >
                  <Phone className="h-6 w-6" />
                  Nous contacter
                </Button>
              </div>
            </div>

            <div className="animate-float">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroImage-HWPMMEvJAyvQqFJl1RnP3IoAwvpInc.png"
                alt="SafiCert Innovation"
                width={400}
                height={400}
                className="mx-auto animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-count-up">
              <div className="text-4xl md:text-5xl font-bold text-[#1940BF] mb-2 animate-number-roll">
                {clientsCount}+
              </div>
              <div className="text-gray-600 font-medium">
                {language === "fr" ? "Clients Satisfaits" : "Satisfied Clients"}
              </div>
            </div>
            <div className="text-center animate-count-up-delay-1">
              <div className="text-4xl md:text-5xl font-bold text-[#1940BF] mb-2 animate-number-roll">
                {experienceCount}+
              </div>
              <div className="text-gray-600 font-medium">
                {language === "fr" ? "Années d'Expérience" : "Years of Experience"}
              </div>
            </div>
            <div className="text-center animate-count-up-delay-2">
              <div className="text-4xl md:text-5xl font-bold text-[#1940BF] mb-2 animate-number-roll">
                {projectsCount}+
              </div>
              <div className="text-gray-600 font-medium">
                {language === "fr" ? "Projets Réalisés" : "Projects Completed"}
              </div>
            </div>
            <div className="text-center animate-count-up-delay-3">
              <div className="text-4xl md:text-5xl font-bold text-[#1940BF] mb-2 animate-number-roll">
                {supportHours}/7
              </div>
              <div className="text-gray-600 font-medium">{language === "fr" ? "Support Client" : "Client Support"}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1940BF]">Nos Services</h2>
            <p className="text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">Solutions complètes pour votre réussite</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-[#1940BF]/20 hover:border-[#1940BF] bg-white transform hover:scale-105 animate-slide-in-bottom">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#1940BF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1940BF]/20 transition-all duration-300 group-hover:rotate-6">
                  <Shield className="h-8 w-8 text-[#1940BF]" />
                </div>
                <CardTitle className="text-xl text-[#1940BF]">Assurance Qualité</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  Tests complets et validation de la qualité de vos applications logicielles.
                </CardDescription>
                <div className="mt-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QASenior-vo89xNwLUU8D0OTrtqWTAv2pgwp72T.webp"
                    alt="QA Senior Expert"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-[#1940BF]/20 hover:border-[#1940BF] bg-white transform hover:scale-105 animate-slide-in-bottom-delay-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#1940BF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1940BF]/20 transition-all duration-300 group-hover:rotate-6">
                  <Settings className="h-8 w-8 text-[#1940BF]" />
                </div>
                <CardTitle className="text-xl text-[#1940BF]">Développement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  Solutions sur mesure adaptées à vos besoins spécifiques.
                </CardDescription>
                <div className="mt-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expertDev-XMJxD1nHpS7ZKMdMribIYwUlEyPvpo.png"
                    alt="Expert Developer"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-[#1940BF]/20 hover:border-[#1940BF] bg-white transform hover:scale-105 animate-slide-in-bottom-delay-2">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#1940BF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1940BF]/20 transition-all duration-300 group-hover:rotate-6">
                  <Globe className="h-8 w-8 text-[#1940BF]" />
                </div>
                <CardTitle className="text-xl text-[#1940BF]">Solutions Web</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  Applications web modernes et performantes pour votre entreprise.
                </CardDescription>
                <div className="mt-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DesignWeb-lfbgP8c1alSdG7PE54bB5opu80opfM.webp"
                    alt="Web Design Expert"
                    width={300}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-[#1940BF]/20 hover:border-[#1940BF] bg-white transform hover:scale-105 animate-slide-in-bottom-delay-3">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#1940BF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1940BF]/20 transition-all duration-300 group-hover:rotate-6">
                  <FileCheck className="h-8 w-8 text-[#1940BF]" />
                </div>
                <CardTitle className="text-xl text-[#1940BF]">Audit & Conseil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  Évaluation complète et recommandations d'amélioration.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-[#1940BF]/20 hover:border-[#1940BF] bg-white transform hover:scale-105 animate-slide-in-bottom-delay-4">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#1940BF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1940BF]/20 transition-all duration-300 group-hover:rotate-6">
                  <Building className="h-8 w-8 text-[#1940BF]" />
                </div>
                <CardTitle className="text-xl text-[#1940BF]">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  Architecture robuste et scalable pour vos projets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-[#1940BF]/20 hover:border-[#1940BF] bg-white transform hover:scale-105 animate-slide-in-bottom-delay-5">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#1940BF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1940BF]/20 transition-all duration-300 group-hover:rotate-6">
                  <Briefcase className="h-8 w-8 text-[#1940BF]" />
                </div>
                <CardTitle className="text-xl text-[#1940BF]">Formation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  Formations spécialisées pour optimiser vos processus.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/services">
              <Button
                size="lg"
                className="gap-3 px-8 py-3 bg-[#1940BF] hover:bg-[#1940BF]/90 text-white transition-all duration-500 transform hover:scale-105"
              >
                Voir Tous Nos Services
                <Target className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1940BF]">{t.about.title}</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">{t.about.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nosvaleur-9JWKyXukxaj1nrlzz1SSJ10dLONGBF.webp"
                alt="Nos Valeurs SafiCert"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl animate-fade-in-left"
              />
            </div>
            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-bold text-[#1940BF] mb-6">Nos Valeurs</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Chez SafiCert, nous croyons en l'excellence, l'innovation et la collaboration. Notre équipe d'experts
                travaille en étroite collaboration avec nos clients pour garantir des résultats exceptionnels.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous nous engageons à fournir des solutions de qualité supérieure qui dépassent les attentes et
                contribuent au succès de nos partenaires.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1940BF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1940BF]/20 transition-colors">
                <Star className="h-10 w-10 text-[#1940BF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1940BF]">{t.about.experience.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.about.experience.description}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1940BF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1940BF]/20 transition-colors">
                <Globe className="h-10 w-10 text-[#1940BF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1940BF]">{t.about.global.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.about.global.description}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1940BF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1940BF]/20 transition-colors">
                <Zap className="h-10 w-10 text-[#1940BF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1940BF]">{t.about.innovation.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.about.innovation.description}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1940BF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1940BF]/20 transition-colors">
                <HeadphonesIcon className="h-10 w-10 text-[#1940BF]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1940BF]">{t.about.support.title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.about.support.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#1940BF]">
              {language === "fr" ? "Témoignages Clients" : "Client Testimonials"}
            </h2>
            <p className="text-2xl text-gray-600">
              {language === "fr" ? "Ce que disent nos clients" : "What our clients say"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-[#1940BF]/10 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "fr"
                    ? "SafiCert a transformé notre processus de développement. Leur expertise et leur professionnalisme sont remarquables."
                    : "SafiCert transformed our development process. Their expertise and professionalism are remarkable."}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#1940BF]/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-[#1940BF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1940BF]">Marie Dubois</div>
                    <div className="text-sm text-gray-600">CTO, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#1940BF]/10 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "fr"
                    ? "Une équipe exceptionnelle qui comprend nos besoins et livre des solutions de qualité supérieure."
                    : "An exceptional team that understands our needs and delivers superior quality solutions."}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#1940BF]/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-[#1940BF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1940BF]">John Smith</div>
                    <div className="text-sm text-gray-600">CEO, InnovateLab</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#1940BF]/10 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {language === "fr"
                    ? "Grâce à SafiCert, nous avons pu moderniser notre infrastructure et améliorer nos performances."
                    : "Thanks to SafiCert, we were able to modernize our infrastructure and improve our performance."}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#1940BF]/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-[#1940BF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1940BF]">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Director, GlobalTech</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#1940BF] animate-fade-in-up">Contactez-nous</h2>
          <p className="text-2xl text-gray-600 mb-6 max-w-3xl mx-auto animate-fade-in-up-delay">
            Prêt à transformer vos projets ?
          </p>
          <p className="text-xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Notre équipe d'experts est là pour vous accompagner dans tous vos défis technologiques.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-float">
              <div className="w-16 h-16 bg-[#1940BF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#1940BF]" />
              </div>
              <h3 className="font-semibold text-[#1940BF] mb-2">Téléphone</h3>
              <p className="text-gray-600">+237 6 79 26 95 66</p>
            </div>
            <div className="text-center animate-float-delay-1">
              <div className="w-16 h-16 bg-[#1940BF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#1940BF]" />
              </div>
              <h3 className="font-semibold text-[#1940BF] mb-2">Email</h3>
              <p className="text-gray-600">contact@saficert.com</p>
            </div>
            <div className="text-center animate-float-delay-2">
              <div className="w-16 h-16 bg-[#1940BF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-[#1940BF]" />
              </div>
              <h3 className="font-semibold text-[#1940BF] mb-2">Localisation</h3>
              <p className="text-gray-600">Cameroun</p>
            </div>
          </div>

          <ContactModal language={language} />
        </div>
      </section>

      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}
