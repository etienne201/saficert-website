"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactModal } from "@/components/contact-modal"
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { translations } from "@/lib/translations"

export default function ContactPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const contactInfo = [
    { 
      icon: Phone, 
      text: t.contact.phone, 
      href: `tel:${t.contact.phone}`,
      description: language === "fr" ? "Appelez-nous directement" : "Call us directly"
    },
    { 
      icon: Mail, 
      text: t.contact.email, 
      href: `mailto:${t.contact.email}`,
      description: language === "fr" ? "Envoyez-nous un email" : "Send us an email"
    },
    { 
      icon: MapPin, 
      text: t.contact.address, 
      href: "#",
      description: language === "fr" ? "Venez nous rencontrer" : "Come meet us"
    },
    { 
      icon: Clock, 
      text: language === "fr" ? "Lun-Ven: 9h-18h" : "Mon-Fri: 9am-6pm", 
      href: "#",
      description: language === "fr" ? "Nos horaires d'ouverture" : "Our opening hours"
    },
  ]

  const socialNetworks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} translations={t} />

      <main className="pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{t.contact.title}</h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Informations de contact */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-sm border">
                <h2 className="text-2xl font-semibold mb-8 text-foreground">
                  {language === "fr" ? "Nos coordonnées" : "Our Contact Information"}
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map(({ icon: Icon, text, href, description }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="flex items-start p-4 rounded-xl transition-all duration-300 hover:bg-accent/5 group"
                    >
                      <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{text}</p>
                        <p className="text-sm text-muted-foreground mt-1">{description}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t">
                  <h3 className="text-lg font-medium mb-4 text-foreground">
                    {language === "fr" ? "Suivez-nous" : "Follow Us"}
                  </h3>
                  <div className="flex space-x-4">
                    {socialNetworks.map(({ icon: Icon, href, name }) => (
                      <a
                        key={name}
                        href={href}
                        className="bg-accent/10 rounded-lg p-3 hover:bg-accent/20 transition-colors flex items-center justify-center"
                        aria-label={name}
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-sm border h-full">
                <h2 className="text-2xl font-semibold mb-2 text-foreground">
                  {language === "fr" ? "Envoyez-nous un message" : "Send us a message"}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {language === "fr" 
                    ? "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais." 
                    : "Fill out the form below and we'll get back to you as soon as possible."}
                </p>

                <ContactModal language={language} />
                
                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center mb-3 sm:mb-0">
                      <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {language === "fr" 
                            ? "Contact WhatsApp instantané" 
                            : "Instant WhatsApp contact"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === "fr" 
                            ? "Réponse garantie dans l'heure" 
                            : "Guaranteed response within an hour"}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${t.contact.phone.replace(/\s/g, '')}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {language === "fr" ? "Nous écrire" : "Message us"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carte de localisation */}
          <div className="mt-16 bg-card rounded-2xl overflow-hidden shadow-sm border">
            <h2 className="text-2xl font-semibold mb-6 p-8 pb-0 text-foreground">
              {language === "fr" ? "Notre localisation" : "Our Location"}
            </h2>
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.949238678649!2d9.762221074820652!3d4.040220396082865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d9e0c6d7e5f%3A0x6ce4e7936ef4f6bb!2sLogbessou%2C%20Douala%2C%20Cameroun!5e0!3m2!1sfr!2sus!4v1712345678901!5m2!1sfr!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-2xl"
              ></iframe>
            </div>
            <div className="p-8 pt-6">
              <p className="text-center text-muted-foreground">
                {language === "fr" 
                  ? "Notre bureau est situé au cœur de Logbessou, facilement accessible par les transports en commun." 
                  : "Our office is located in the heart of Logbessou, easily accessible by public transport."}
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-center text-foreground">
              {language === "fr" ? "Questions fréquentes" : "Frequently Asked Questions"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: language === "fr" ? "Quels sont vos délais de réponse ?" : "What are your response times?",
                  answer: language === "fr" ? "Nous répondons à toutes les demandes dans un délai de 24 heures ouvrées." : "We respond to all requests within 24 business hours."
                },
                {
                  question: language === "fr" ? "Proposez-vous des consultations gratuites ?" : "Do you offer free consultations?",
                  answer: language === "fr" ? "Oui, nous proposons une première consultation gratuite de 30 minutes pour discuter de vos besoins." : "Yes, we offer an initial free 30-minute consultation to discuss your needs."
                },
                {
                  question: language === "fr" ? "Quelles sont vos méthodes de paiement ?" : "What are your payment methods?",
                  answer: language === "fr" ? "Nous acceptons les virements bancaires, les cartes de crédit et les mobile money." : "We accept bank transfers, credit cards and mobile money."
                },
                {
                  question: language === "fr" ? "Travaillez-vous à l'international ?" : "Do you work internationally?",
                  answer: language === "fr" ? "Oui, nous travaillons avec des clients partout dans le monde grâce à nos solutions digitales." : "Yes, we work with clients all over the world through our digital solutions."
                }
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-3 text-foreground">
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer translations={t} />
      <WhatsAppButton language={language} />
    </div>
  )
}