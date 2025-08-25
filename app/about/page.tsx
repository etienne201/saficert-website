"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Award, Zap, Shield, Users, Target, Heart, Send, ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import { translations } from "@/lib/translations"
import { Newsletter } from "@/app/Newsletter/Newsletter"

export default function AboutPage() {
  const t = translations["fr"].aboutPage
  const commonT = translations["fr"]

  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [email, setEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle")
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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'envoi de newsletter
    try {
      // Ici vous intégrerez votre service d'email (Mailchimp, Sendinblue, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setNewsletterStatus("success")
      setEmail("")
      setTimeout(() => setNewsletterStatus("idle"), 3000)
    } catch (error) {
      setNewsletterStatus("error")
      setTimeout(() => setNewsletterStatus("idle"), 3000)
    }
  }

  const values = [
    { title: t.excellence, description: t.excellenceDesc, icon: Award },
    { title: t.innovation, description: t.innovationDesc, icon: Zap },
    { title: t.reliability, description: t.reliabilityDesc, icon: Shield },
    { title: t.collaboration, description: t.collaborationDesc, icon: Users },
    { title: t.transparency, description: t.transparencyDesc, icon: Target },
    { title: t.passion, description: t.passionDesc, icon: Heart },
  ]

  const team = [
    { title: t.qaEngineers, description: t.qaEngineersDesc, image: "/qa-engineers-team.png" },
    { title: t.developers, description: t.developersDesc, image: "/expert-software-developers.png" },
    { title: t.designers, description: t.designersDesc, image: "/placeholder-1qj4x.png" },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header language="fr" onLanguageChange={() => {}} translations={commonT} />

      {/* Hero section modernisée */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              {t.heroSubtitle}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t.heroTitle}{" "}
              <span className="text-blue-600 inline-block relative">
                <span className="border-r-2 border-blue-600 animate-pulse">{typedText}</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.whoWeAreText1} {t.whoWeAreText2}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                Découvrir nos services <ArrowRight size={16} />
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Nous contacter
              </button>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-16 -left-4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-d600-61f8-87b8-18ff95cb2a8d/raw?se=2025-08-25T22%3A51%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=d775e592-391d-5469-99b6-f25594960334&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-25T20%3A23%3A45Z&ske=2025-08-26T20%3A23%3A45Z&sks=b&skv=2024-08-04&sig=3UvdlKuz97Cr0/v2AYcBziMPK29AVITkdoxEfPLXMS8%3D" 
                alt="SafiCert Team" 
                className="w-full h-auto object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/70 to-transparent p-6 text-white">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nosvaleur-9JWKyXukxaj1nrlzz1SSJ10dLONGBF.webp" 
                    alt="SafiCert Logo" 
                    className="w-10 h-10 object-contain" 
                  />
                  <span className="font-semibold">SafiCert - Expertise et Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs avec alternance image/texte */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.ourValues}</h2>
            <p className="text-lg text-gray-700">{t.ourValuesText}</p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl -rotate-2"></div>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nosvaleur-9JWKyXukxaj1nrlzz1SSJ10dLONGBF.webp" 
                  alt="Nos valeurs" 
                  className="relative rounded-xl shadow-lg w-full" 
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid md:grid-cols-2 gap-6">
                {values.slice(0, 4).map(({ title, description, icon: Icon }) => (
                  <div key={title} className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-lg mb-3">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.slice(4).map(({ title, description, icon: Icon }) => (
              <div key={title} className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4 mx-auto">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe d'experts avec alternance image/texte */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.expertTeam}</h2>
            <p className="text-lg text-gray-700">{t.expertTeamText}</p>
          </div>
          
          {team.map((member, index) => (
            <div 
              key={member.title} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-16 last:mb-0`}
            >
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-100 to-indigo-100' : 'from-blue-100 to-purple-100'} rounded-2xl rotate-2 opacity-70 group-hover:rotate-0 transition-transform duration-500`}></div>
                  <img 
                    src={member.image} 
                    alt={member.title} 
                    className="relative rounded-xl shadow-lg w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{member.title}</h3>
                <p className="text-gray-700 text-lg mb-6">{member.description}</p>
                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Rencontrer l'équipe <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi choisir SafiCert avec alternance image/texte */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.whyChoose}</h2>
              <p className="text-lg text-gray-700 mb-8">{t.whyChooseText}</p>
              
              <div className="space-y-4">
                {[
                  t.whyChooseList1,
                  t.whyChooseList2,
                  t.whyChooseList3,
                  t.whyChooseList4
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                Commencer avec SafiCert <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl -rotate-2"></div>
                <img 
                  src="/quality-assurance-team.png" 
                  alt="Équipe SafiCert" 
                  className="relative rounded-xl shadow-lg w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

 
   {/* Newsletter Section */}
   <Newsletter language={"fr"} />
      <Footer translations={commonT} />
      <WhatsAppButton language="fr" />

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}