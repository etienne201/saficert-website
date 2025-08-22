"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Award, Zap, Shield, Users, Target, Heart } from "lucide-react"
import { translations } from "@/lib/translations"

export default function AboutPage() {
  const t = translations["fr"]

  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const words = ["Construire", "Innover", "Réussir Ensemble"]

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentWord.length) setTypedText(currentWord.slice(0, typedText.length + 1))
        else setTimeout(() => setIsDeleting(true), 2000)
      } else {
        if (typedText.length > 0) setTypedText(typedText.slice(0, -1))
        else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 100 : 150)
    return () => clearTimeout(timeout)
  }, [typedText, currentWordIndex, isDeleting])

  const values = [
    { title: "Excellence", description: "Nous nous engageons à fournir des solutions de haute qualité conformes aux standards internationaux.", icon: Award },
    { title: "Innovation", description: "Nous adoptons les technologies les plus avancées pour créer des solutions numériques performantes.", icon: Zap },
    { title: "Fiabilité", description: "Nous garantissons des produits sécurisés et optimisés pour assurer une continuité d’activité sans faille.", icon: Shield },
    { title: "Collaboration", description: "Nous travaillons en étroite synergie avec nos clients pour une parfaite adéquation avec leurs besoins.", icon: Users },
    { title: "Transparence", description: "Nous instaurons une relation de confiance à travers une communication claire et des engagements tenus.", icon: Target },
    { title: "Passion", description: "Nous mettons notre passion au service de l'excellence pour dépasser les attentes de nos clients.", icon: Heart },
  ]

  const team = [
    { title: "Senior QA Engineers", description: "Nos ingénieurs en assurance qualité appliquent des méthodologies de test avancées afin de garantir la performance et la sécurité des applications avant leur mise sur le marché.", image: "/qa-engineers-team.png", reverse: false },
    { title: "Expert Developers", description: "Nos développeurs conçoivent des solutions logicielles évolutives et adaptées aux exigences des entreprises locales et internationales.", image: "/expert-software-developers.png", reverse: true },
    { title: "Designers & Website Creators", description: "Nos spécialistes en design et en création de sites web élaborent des interfaces intuitives et attrayantes pour optimiser l’expérience utilisateur.", image: "/placeholder-1qj4x.png", reverse: false },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header language="fr" onLanguageChange={() => {}} translations={t} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1940BF] to-[#1940BF]/90 text-white text-center py-32 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">À PROPOS DE SAFICERT</h1>
        <p className="text-xl md:text-2xl animate-fade-in-up animation-delay-200">
          Votre partenaire pour{" "}
          <span className="text-yellow-300 font-bold border-r-2 border-yellow-300 animate-pulse">{typedText}</span>
        </p>
      </section>

      {/* Qui sommes-nous */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1940BF] mb-12 animate-fade-in-down">
          Qui sommes-nous ?
        </h2>
        <div className="space-y-6 text-lg text-gray-700 animate-fade-in-up animation-delay-200">
          <p className="leading-relaxed">
            SafiCert est une Société de Services en Ingénierie Informatique (SSII) basée à Douala, Cameroun, spécialisée dans l’assurance qualité (QA), le développement d’applications et la création de sites web.
          </p>
          <p className="leading-relaxed">
            Avec une expertise reconnue sur le marché local et international, nous accompagnons les entreprises dans l’optimisation de leurs produits numériques en garantissant des solutions robustes, performantes et adaptées aux standards mondiaux.
          </p>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1940BF] animate-fade-in-down">Nos valeurs</h2>
            <p className="text-gray-700 text-lg animate-fade-in-up animation-delay-200">
              Chez SafiCert, nous nous appuyons sur des valeurs fondamentales qui définissent notre approche et notre vision.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {values.map(({ title, description, icon: Icon }, index) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2 duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-4 bg-[#1940BF] text-white rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-gray-700 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in-up animation-delay-500">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nosvaleur-9JWKyXukxaj1nrlzz1SSJ10dLONGBF.webp" alt="Nos valeurs" className="rounded-2xl shadow-lg w-3/4 mx-auto" />
          </div>
        </div>
      </section>

      {/* Équipe d'experts */}
      <section className="max-w-7xl mx-auto px-4 py-20 space-y-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1940BF] animate-fade-in-down">Une équipe d'experts à votre service</h2>
          <p className="text-lg text-gray-700 mt-4 animate-fade-in-up animation-delay-200">
            Notre équipe est composée de professionnels hautement qualifiés, chacun apportant une expertise spécifique pour répondre aux défis du numérique avec précision et efficacité.
          </p>
        </div>

        <div className="space-y-16">
          {team.map(({ title, description, image, reverse }, index) => (
            <div
              key={title}
              className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`lg:w-1/2 ${reverse ? "lg:order-2" : ""}`}>
                <img src={image} alt={title} className="rounded-2xl shadow-lg w-3/4 mx-auto object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className={`lg:w-1/2 ${reverse ? "lg:order-1 text-right lg:text-left" : ""}`}>
                <h3 className="text-3xl font-bold text-[#1940BF] mb-4">{title}</h3>
                <p className="text-gray-700 text-lg">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi choisir SafiCert */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1940BF] mb-6">Pourquoi choisir SafiCert ?</h2>
            <p className="text-gray-700 text-lg mb-6">SafiCert se distingue par son engagement à fournir des services de qualité qui répondent aux besoins des entreprises sur les marchés locaux et internationaux.</p>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Une approche personnalisée pour chaque client</li>
              <li>Une expertise reconnue dans l’assurance qualité et le développement digital</li>
              <li>Une capacité d’intervention sur des projets à échelle locale et internationale</li>
              <li>Une veille technologique continue pour garantir des solutions modernes et adaptées</li>
            </ul>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <img src="/quality-assurance-team.png" alt="Équipe SafiCert" className="rounded-2xl shadow-lg w-3/4 mx-auto hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      <Footer translations={t} />
      <WhatsAppButton language="fr" />
    </div>
  )
}
