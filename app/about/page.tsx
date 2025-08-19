"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Zap, Users, Award, Shield, Target, Heart } from "lucide-react"
import { translations } from "@/lib/translations"

export default function AboutPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const t = translations[language]

  const words = ["Construire", "Innover", "Réussir Ensemble"]

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentWord.length) {
            setTypedText(currentWord.slice(0, typedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 100 : 150,
    )

    return () => clearTimeout(timeout)
  }, [typedText, currentWordIndex, isDeleting, words])

  const values = [
    { key: "excellence", icon: Award, color: "from-blue-500 to-blue-600" },
    { key: "innovation", icon: Zap, color: "from-purple-500 to-purple-600" },
    { key: "reliability", icon: Shield, color: "from-green-500 to-green-600" },
    { key: "collaboration", icon: Users, color: "from-orange-500 to-orange-600" },
    { key: "transparency", icon: Target, color: "from-red-500 to-red-600" },
    { key: "passion", icon: Heart, color: "from-pink-500 to-pink-600" },
  ]

  const team = [
    {
      title: "Senior QA Engineers",
      description:
        "Nos ingénieurs en assurance qualité appliquent des méthodologies de test avancées afin de garantir la performance et la sécurité des applications avant leur mise sur le marché.",
      image: "/qa-engineers-team.png",
    },
    {
      title: "Expert Developers",
      description:
        "Nos développeurs conçoivent des solutions logicielles évolutives et adaptées aux exigences des entreprises locales et internationales.",
      image: "/expert-software-developers.png",
    },
    {
      title: "Designers & Website Creators",
      description:
        "Nos spécialistes en design et en création de sites web élaborent des interfaces intuitives et attrayantes pour optimiser l'expérience utilisateur.",
      image: "/placeholder-1qj4x.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#1940BF] to-[#1940BF]/90">
        <Header language={language} onLanguageChange={setLanguage} translations={t} />
      </div>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#1940BF] to-[#1940BF]/90 text-white">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">À Propos de SafiCert</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-in-right animation-delay-200">
              Votre partenaire pour{" "}
              <span className="text-yellow-300 font-bold border-r-2 border-yellow-300 animate-pulse">{typedText}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1940BF]">Qui sommes-nous ?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                SafiCert est une Société de Services en Ingénierie Informatique (SSII) basée à Douala, Cameroun,
                spécialisée dans l'assurance qualité (QA), le développement d'applications et la création de sites web.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Avec une expertise reconnue sur le marché local et international, nous accompagnons les entreprises dans
                l'optimisation de leurs produits numériques en garantissant des solutions robustes, performantes et
                adaptées aux standards mondiaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1940BF] animate-slide-in-left">Nos valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-right">
              Chez SafiCert, nous nous appuyons sur des valeurs fondamentales qui définissent notre approche et notre
              vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(({ key, icon: Icon, color }, index) => (
              <div
                key={key}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`bg-gradient-to-br ${color} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1940BF]">
                  {key === "excellence" && "Excellence"}
                  {key === "innovation" && "Innovation"}
                  {key === "reliability" && "Fiabilité"}
                  {key === "collaboration" && "Collaboration"}
                  {key === "transparency" && "Transparence"}
                  {key === "passion" && "Passion"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {key === "excellence" &&
                    "Nous nous engageons à fournir des solutions de haute qualité conformes aux standards internationaux."}
                  {key === "innovation" &&
                    "Nous adoptons les technologies les plus avancées pour créer des solutions numériques performantes."}
                  {key === "reliability" &&
                    "Nous garantissons des produits sécurisés et optimisés pour assurer une continuité d'activité sans faille."}
                  {key === "collaboration" &&
                    "Nous travaillons en étroite synergie avec nos clients pour une parfaite adéquation avec leurs besoins."}
                  {key === "transparency" &&
                    "Nous instaurons une relation de confiance à travers une communication claire et des engagements tenus."}
                  {key === "passion" &&
                    "Nous mettons notre passion au service de l'excellence pour dépasser les attentes de nos clients."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1940BF] animate-slide-in-left">
              Une équipe d'experts à votre service
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-right">
              Notre équipe est composée de professionnels hautement qualifiés, chacun apportant une expertise spécifique
              pour répondre aux défis du numérique avec précision et efficacité.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={member.title}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1940BF]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#1940BF] group-hover:text-[#1940BF]/80 transition-colors">
                    {member.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1940BF] animate-slide-in-left">
              Pourquoi choisir SafiCert ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-slide-in-right">
              SafiCert se distingue par son engagement à fournir des services de qualité qui répondent aux besoins des
              entreprises sur les marchés locaux et internationaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-8 text-[#1940BF]">Nos atouts :</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="bg-[#1940BF] rounded-full w-3 h-3 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-lg">Une approche personnalisée pour chaque client</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-[#1940BF] rounded-full w-3 h-3 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-lg">
                    Une expertise reconnue dans l'assurance qualité et le développement digital
                  </span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-[#1940BF] rounded-full w-3 h-3 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-lg">
                    Une capacité d'intervention sur des projets à échelle locale et internationale
                  </span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="bg-[#1940BF] rounded-full w-3 h-3 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-lg">
                    Une veille technologique continue pour garantir des solutions modernes et adaptées
                  </span>
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="/quality-assurance-team.png"
                alt="Équipe SafiCert"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black">
        <Footer translations={t} />
      </div>

      <WhatsAppButton language={language} />
    </div>
  )
}
