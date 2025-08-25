// app/projets/page.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight, ExternalLink, Filter, Building, CreditCard, Heart, MessageCircle, Car, Shield, Activity } from "lucide-react"
import { translations } from "@/lib/translations"
import Link from "next/link"

export default function ProjetsPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const t = translations[language]

  const filters = [
    { id: "all", label: { fr: "Tous les projets", en: "All projects" }, icon: Filter },
    { id: "finance", label: { fr: "Finance", en: "Finance" }, icon: CreditCard },
    { id: "health", label: { fr: "Santé", en: "Health" }, icon: Heart },
    { id: "insurance", label: { fr: "Assurance", en: "Insurance" }, icon: Shield },
    { id: "customer", label: { fr: "Service client", en: "Customer service" }, icon: MessageCircle },
    { id: "car", label: { fr: "Location de voiture", en: "Car rental" }, icon: Car },
  ]

  const projects = [
    {
      id: 1,
      title: { fr: "Eneo Pay", en: "Eneo Pay" },
      category: "finance",
      description: {
        fr: "Un écosystème d'APIs, d'applications web et mobiles qui aident à la collecte des paiements des factures d'électricité.",
        en: "An ecosystem of APIs, web and mobile applications that help in the collection of payments for electricity bills."
      },
      details: {
        fr: "Déployé par Eneo Cameroun, Eneopay a plus que doublé sa collecte de paiements mensuels depuis 2020, enregistrant les plus grands montants collectés par semestre dans le pays.",
        en: "Deployed by Eneo Cameroon, Eneopay Apps has more than doubled its monthly payment collection since 2020, recording the largest amounts collected per semester in the country."
      },
      image: "/projects/eneo-pay.jpg",
      link: "#"
    },
    {
      id: 2,
      title: { fr: "ADAM", en: "ADAM" },
      category: "finance",
      description: {
        fr: "Un service automatisé de transfert d'argent et de dépôt pour les institutions de microfinance accessible via un chatbot WhatsApp.",
        en: "An automated money transfer and deposit service for micro-finance institutions accessible via a WhatsApp chat bot."
      },
      details: {
        fr: "Permet aux utilisateurs d'effectuer des dépôts et des transferts entre comptes via de simples messages texte avec un chatbot.",
        en: "Make deposits and transfers across accounts via simple text messages with a chatbot."
      },
      image: "/projects/adam.jpg",
      link: "#"
    },
    {
      id: 3,
      title: { fr: "Payunit", en: "Payunit" },
      category: "finance",
      description: {
        fr: "Une collection d'APIs de paiement pour agréger différents fournisseurs de services de paiement.",
        en: "A collection of Payment APIs to aggregate different payment service providers."
      },
      details: {
        fr: "Opérationnel depuis 2021, Payunit sert plus de 700 marchands dont 80% sont des entreprises camerounaises en ligne.",
        en: "Running since 2021, Payunit serves over 700 merchants 80% of which are Cameroonian online businesses."
      },
      image: "/projects/payunit.jpg",
      link: "#"
    },
    {
      id: 4,
      title: { fr: "Lab2Doctor", en: "Lab2Doctor" },
      category: "health",
      description: {
        fr: "Une solution complète à la demande pour les prestataires médicaux, les réseaux et les patients.",
        en: "A full-service on-demand solution for medical providers, networks, and patients."
      },
      details: {
        fr: "Ils sont détenus et gérés par des médecins en laboratoire compétents pour collecter des échantillons de qualité, interpréter les résultats de laboratoire inhabituels et consulter les problèmes liés aux résultats de laboratoire discordants.",
        en: "They are owned and managed by doctors in lab medicine skillful at collecting quality samples, testing blood work, interpreting unusual lab results, and consulting issues related to discrepant lab results."
      },
      image: "/projects/lab2doctor.jpg",
      link: "#"
    },
    {
      id: 5,
      title: { fr: "Activa ShowRoom", en: "Activa ShowRoom" },
      category: "insurance",
      description: {
        fr: "Une suite d'applications aidant Activa Group à mieux servir ses clients et commercialiser ses produits plus rapidement et plus facilement.",
        en: "A suite of applications helping Activa Group better serve its clients and commercialize its product offerings faster and seamlessly."
      },
      details: {
        fr: "Une salle de service entièrement digitalisée permettant aux utilisateurs de découvrir rapidement l'écosystème des produits et services d'assurance offerts par Activa Group.",
        en: "There's a fully digitalized service room allowing users to quickly connect and discover the ecosystem of insurance products and services offered at a given agency by Activa Group."
      },
      image: "/projects/activa.jpg",
      link: "#"
    },
    {
      id: 6,
      title: { fr: "Qwaba", en: "Qwaba" },
      category: "customer",
      description: {
        fr: "Une unification des APIs de paiement pour agréger différents fournisseurs de services de paiement.",
        en: "A unification of Payment APIs to aggregate different payment service providers."
      },
      details: {
        fr: "Opérationnel depuis 2021, Qwaba sert plus de 700 marchands dont 80% sont des entreprises camerounaises en ligne.",
        en: "Running since 2021, Qwaba serves over 700 merchants 80% of which are Cameroonian online businesses."
      },
      image: "/projects/qwaba.jpg",
      link: "#"
    },
    {
      id: 7,
      title: { fr: "SDN", en: "SDN" },
      category: "customer",
      description: {
        fr: "Une application de service client permettant aux agents de distribution d'acheter rapidement du crédit pour leurs clients sur le réseau Camtel.",
        en: "A customer service app allowing distribution agents to quickly purchase airtime for their clients on the Camtel Network operator."
      },
      details: {
        fr: "Solution optimisée pour les agents de distribution avec interface intuitive et processus simplifié.",
        en: "Optimized solution for distribution agents with intuitive interface and simplified process."
      },
      image: "/projects/sdn.jpg",
      link: "#"
    },
    {
      id: 8,
      title: { fr: "Hallovoiture", en: "Hallovoiture" },
      category: "car",
      description: {
        fr: "Une application de location et d'achat de voitures permettant aux utilisateurs d'acheter, de vendre ou de louer des voitures en ligne.",
        en: "A car rental and purchase application allowing users to buy, sell or rent cars online."
      },
      details: {
        fr: "Cet annuaire en ligne de services automobiles permet aux utilisateurs, depuis le confort de leur domicile, de trouver des voitures à acheter ou à louer à leur convenance.",
        en: "This online directory of car services allows users from the comfort of their homes, to find cars to buy or rent at their convenience."
      },
      image: "/projects/hallovoiture.jpg",
      link: "#"
    }
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#1940BF] via-[#1940BF]/90 to-[#1940BF]/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in-up">
            {language === "fr" ? "Nos Réalisations" : "Our Projects"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up-delay">
            {language === "fr"
              ? "Découvrez comment nous transformons des idées innovantes en solutions digitales performantes qui impactent positivement les entreprises et leurs utilisateurs."
              : "Discover how we transform innovative ideas into high-performance digital solutions that positively impact businesses and their users."}
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 bg-gray-50 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto">
          <h2 className="text-lg font-semibold text-center mb-6 text-gray-700">
            {language === "fr" ? "Explorer nos solutions par" : "Explore our solutions by"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={activeFilter === id ? "default" : "outline"}
                className={`rounded-full px-6 py-3 flex items-center gap-2 transition-all ${
                  activeFilter === id 
                    ? "bg-[#1940BF] text-white" 
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => setActiveFilter(id)}
              >
                <Icon className="h-4 w-4" />
                {label[language]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100 relative overflow-hidden flex items-center justify-center">
                  <div className="text-5xl font-bold text-blue-300/50">{project.title[language].charAt(0)}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <Link href={project.link} className="w-full">
                      <Button className="bg-white text-[#1940BF] hover:bg-gray-100 w-full">
                        {language === "fr" ? "Voir le projet" : "View project"}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-gray-900">{project.title[language]}</CardTitle>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {filters.find(f => f.id === project.category)?.label[language]}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {project.description[language]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-sm mb-4">{project.details[language]}</p>
                  <Link href={project.link}>
                    <Button variant="outline" className="w-full group-hover:bg-[#1940BF] group-hover:text-white transition-colors">
                      {language === "fr" ? "En savoir plus" : "Learn more"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Activity className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">
                {language === "fr" ? "Aucun projet trouvé" : "No projects found"}
              </h3>
              <p className="text-gray-400">
                {language === "fr" 
                  ? "Aucun projet ne correspond à ce filtre. Essayez une autre catégorie." 
                  : "No projects match this filter. Try another category."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === "fr" ? "Prêt à transformer votre idée en réalité ?" : "Ready to turn your idea into reality?"}
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            {language === "fr" 
              ? "Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider à créer une solution digitale exceptionnelle." 
              : "Contact us to discuss your project and discover how we can help you create an exceptional digital solution."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#1940BF] text-white hover:bg-[#1940BF]/90 px-8 py-6 text-lg">
                {language === "fr" ? "Discuter de votre projet" : "Discuss your project"}
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-[#1940BF] text-[#1940BF] hover:bg-[#1940BF]/10">
                {language === "fr" ? "Voir nos services" : "View our services"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer translations={t} />
      <WhatsAppButton language={language} />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  )
}