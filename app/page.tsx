"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Newsletter } from "@/app/Newsletter/Newsletter"
import {
  Award,
  Phone,
  Shield,
  Globe,
  Briefcase,
  ChevronRight,
  CheckCircle,
  Users,
  Clock,
  Smartphone,
  Server,
  BarChart3,
  Rocket,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react"
import { translations } from "@/lib/translations"

export default function HomePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0)
  const [clientsCount, setClientsCount] = useState(0)
  const [experienceCount, setExperienceCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const [supportHours, setSupportHours] = useState(0)

  const t = translations[language]
  
  const heroContent = language === "fr" 
    ? {
        title: "Welcome to Saficert",
        subtitle1: "Votre partenaire en solutions QA et IT sur-mesure : Développement Web, Applications Mobiles, Cloud et Data Analytics.",
        subtitle2: "Nous garantissons performance, sécurité et innovation pour vos projets digitaux."
      } 
    : {
        title: "Welcome to Saficert",
        subtitle1: "Your partner for custom QA and IT solutions: Web Development, Mobile Apps, Cloud and Data Analytics.",
        subtitle2: "We guarantee performance, security and innovation for your digital projects."
      }

  const servicesContent = language === "fr"
    ? [
        {
          title: "Assurance Qualité",
          description: "Tests rigoureux et validation complète pour garantir la fiabilité et les performances de vos applications.",
          features: ["Tests fonctionnels", "Tests de performance", "Tests de sécurité", "Automatisation"]
        },
        {
          title: "Développement Web",
          description: "Sites web modernes, responsives et optimisés pour une expérience utilisateur exceptionnelle.",
          features: ["React/Next.js", "Design responsive", "SEO optimization", "E-commerce"]
        },
        {
          title: "Applications Mobiles",
          description: "Applications natives et cross-platform offrant une expérience mobile fluide et intuitive.",
          features: ["iOS & Android", "Applications hybrides", "UI/UX design", "Publication"]
        },
        {
          title: "Solutions Cloud",
          description: "Infrastructure cloud scalable et sécurisée pour répondre à vos besoins évolutifs.",
          features: ["Architecture cloud", "Sécurité avancée", "Scalabilité", "Sauvegarde"]
        },
        {
          title: "Consulting IT",
          description: "Conseils stratégiques et accompagnement personnalisé pour vos projets digitaux.",
          features: ["Stratégie digitale", "Audit technique", "Optimisation", "Formation"]
        },
        {
          title: "Data Analytics",
          description: "Transformez vos données en insights actionnables pour une prise de décision éclairée.",
          features: ["Tableaux de bord", "Reporting personnalisé", "Analyse prédictive", "KPI tracking"]
        }
      ]
    : [
        {
          title: "Quality Assurance",
          description: "Rigorous testing and complete validation to guarantee the reliability and performance of your applications.",
          features: ["Functional tests", "Performance tests", "Security tests", "Automation"]
        },
        {
          title: "Web Development",
          description: "Modern, responsive websites optimized for an exceptional user experience.",
          features: ["React/Next.js", "Responsive design", "SEO optimization", "E-commerce"]
        },
        {
          title: "Mobile Applications",
          description: "Native and cross-platform applications offering a smooth and intuitive mobile experience.",
          features: ["iOS & Android", "Hybrid apps", "UI/UX design", "Publishing"]
        },
        {
          title: "Cloud Solutions",
          description: "Scalable and secure cloud infrastructure to meet your evolving needs.",
          features: ["Cloud architecture", "Advanced security", "Scalability", "Backup"]
        },
        {
          title: "IT Consulting",
          description: "Strategic advice and personalized support for your digital projects.",
          features: ["Digital strategy", "Technical audit", "Optimization", "Training"]
        },
        {
          title: "Data Analytics",
          description: "Transform your data into actionable insights for informed decision making.",
          features: ["Dashboards", "Custom reporting", "Predictive analysis", "KPI tracking"]
        }
      ]

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

      {/* Hero Section avec image de fond */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center scale-105 animate-zoomSlow"
        />
        
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Éléments décoratifs animés */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-float"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-ping-slow"></div>
        </div>

        <div className="container mx-auto relative z-10 max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge
                variant="secondary"
                className="mb-8 px-6 py-3 text-lg bg-white/20 text-white border-white/30 backdrop-blur-sm animate-fade-in"
              >
                <Award className="h-5 w-5 mr-2" />
                {language === "fr" ? "Expert en Assurance Qualité" : "Quality Assurance Expert"}
              </Badge>

              {/* Texte principal révisé */}
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                {heroContent.title}
              </h1>

              <p className="text-xl text-blue-100 max-w-2xl leading-relaxed mb-4 backdrop-blur-sm bg-black/20 p-4 rounded-lg">
                {heroContent.subtitle1}
              </p>

              <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-8 backdrop-blur-sm bg-black/20 p-4 rounded-lg">
                {heroContent.subtitle2}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="gap-3 px-10 py-4 text-lg bg-white text-blue-800 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-bounce-slow"
                  >
                    {language === "fr" ? "Découvrir nos services" : "Discover our services"}
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-3 px-10 py-4 text-lg bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="h-6 w-6" />
                    {language === "fr" ? "Nous contacter" : "Contact us"}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-md">
                <div className="absolute -inset-4 bg-blue-400/20 rounded-2xl blur-xl animate-pulse"></div>
                <Image
                  src="/images/saficertlogo.png"
                  alt={language === "fr" ? "Innovation SafiCert" : "SafiCert Innovation"}
                  width={400}
                  height={400}
                  className="relative z-10 rounded-lg shadow-2xl transform transition-all duration-700 hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Rocket className="h-10 w-10 text-blue-900" />
                </div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-xl animate-spin-slow">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section avec fond dégradé animé */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { value: clientsCount, label: language === "fr" ? "Clients Satisfaits" : "Satisfied Clients", icon: Users, color: "bg-blue-100" },
            { value: experienceCount, label: language === "fr" ? "Ans d'Expertise" : "Years of Expertise", icon: Award, color: "bg-purple-100" },
            { value: projectsCount, label: language === "fr" ? "Projets Livrés" : "Projects Delivered", icon: CheckCircle, color: "bg-cyan-100" },
            { value: supportHours, label: language === "fr" ? "Support 24/7" : "24/7 Support", icon: Clock, color: "bg-green-100" },
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110`}>
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

      {/* Services Section avec fond animé */}
      <section className="py-24 px-4 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 animate-fade-in-up">
              {language === "fr" ? "Nos Domaines d'Expertise" : "Our Areas of Expertise"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              {language === "fr" 
                ? "Des solutions complètes pour transformer vos idées en réalités digitales performantes et innovantes."
                : "Complete solutions to transform your ideas into high-performance and innovative digital realities."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesContent.map((service, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-all duration-500 border-blue-100 hover:border-blue-300 bg-white overflow-hidden transform hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                  idx % 6 === 0 ? "from-blue-500 to-blue-700" :
                  idx % 6 === 1 ? "from-purple-500 to-purple-700" :
                  idx % 6 === 2 ? "from-cyan-500 to-cyan-700" :
                  idx % 6 === 3 ? "from-green-500 to-green-700" :
                  idx % 6 === 4 ? "from-orange-500 to-orange-700" :
                  "from-red-500 to-red-700"
                }`}></div>
                <CardHeader className="pb-4 pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110">
                    {idx % 6 === 0 ? <Shield className="h-8 w-8 text-blue-700" /> :
                     idx % 6 === 1 ? <Globe className="h-8 w-8 text-blue-700" /> :
                     idx % 6 === 2 ? <Smartphone className="h-8 w-8 text-blue-700" /> :
                     idx % 6 === 3 ? <Server className="h-8 w-8 text-blue-700" /> :
                     idx % 6 === 4 ? <Briefcase className="h-8 w-8 text-blue-700" /> :
                     <BarChart3 className="h-8 w-8 text-blue-700" />}
                  </div>
                  <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500 transition-all duration-300 hover:text-gray-700 hover:translate-x-1">
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
                className="gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {language === "fr" ? "Explorer tous nos services" : "Explore all our services"}
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section avec animation de flottement */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
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
              <div 
                key={item} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
                style={{ animationDelay: `${item * 100}ms` }}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-2xl font-bold text-blue-700">C{item}</div>
                </div>
                <div className="mt-4 text-center font-semibold text-blue-900">
                  {language === "fr" ? `Client ${item}` : `Client ${item}`}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-center text-white transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {language === "fr" ? "Rejoignez nos clients satisfaits" : "Join our satisfied clients"}
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à réussir."
                : "Contact us today to discuss your project and discover how we can help you succeed."}
            </p>
            
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100 transform hover:scale-105 transition-all">
                {language === "fr" ? "Demander un devis" : "Request a quote"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter language={language} />

      <Footer translations={t} />
      <WhatsAppButton language={language} />

      <style jsx global>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.2; }
          50% { opacity: 0.3; }
          100% { opacity: 0.2; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.5); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.1; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-zoomSlow {
          animation: zoomSlow 20s ease-in-out infinite alternate;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-blob {
          animation: blob 10s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .bg-dots-pattern {
          background-image: radial-gradient(#3b82f6 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  )
}