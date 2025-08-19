"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, X, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WhatsAppButtonProps {
  language: "en" | "fr"
}

export function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const [showServices, setShowServices] = useState(false)

  const services = {
    fr: [
      {
        name: "Assurance Qualité",
        message:
          "Bonjour ! Je suis intéressé par vos services d'Assurance Qualité. Pourriez-vous me fournir plus d'informations sur vos tests et validations ?",
      },
      {
        name: "Développement",
        message:
          "Bonjour ! J'aimerais en savoir plus sur vos services de développement sur mesure. Pouvez-vous me présenter vos solutions ?",
      },
      {
        name: "Solutions Web",
        message:
          "Bonjour ! Je recherche des solutions web modernes pour mon entreprise. Pourriez-vous me présenter vos services ?",
      },
      {
        name: "Audit & Conseil",
        message: "Bonjour ! J'ai besoin d'un audit et de conseils pour améliorer mes systèmes. Pouvez-vous m'aider ?",
      },
      {
        name: "Infrastructure",
        message: "Bonjour ! Je souhaite moderniser mon infrastructure IT. Pourriez-vous me présenter vos solutions ?",
      },
      {
        name: "Formation",
        message:
          "Bonjour ! Je suis intéressé par vos formations spécialisées. Pourriez-vous me donner plus de détails ?",
      },
    ],
    en: [
      {
        name: "Quality Assurance",
        message:
          "Hello! I'm interested in your Quality Assurance services. Could you provide more information about your testing and validation processes?",
      },
      {
        name: "Development",
        message: "Hello! I'd like to know more about your custom development services. Can you present your solutions?",
      },
      {
        name: "Web Solutions",
        message: "Hello! I'm looking for modern web solutions for my business. Could you present your services?",
      },
      {
        name: "Audit & Consulting",
        message: "Hello! I need an audit and consulting to improve my systems. Can you help me?",
      },
      {
        name: "Infrastructure",
        message: "Hello! I want to modernize my IT infrastructure. Could you present your solutions?",
      },
      {
        name: "Training",
        message: "Hello! I'm interested in your specialized training programs. Could you give me more details?",
      },
    ],
  }

  const handleServiceClick = (message: string) => {
    const phoneNumber = "+237679269566"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setShowServices(false)
  }

  const generalMessage = {
    en: "Hello! I'm interested in SafiCert's services. Could you please provide more information?",
    fr: "Bonjour ! Je suis intéressé par les services de SafiCert. Pourriez-vous me fournir plus d'informations ?",
  }

  const handleGeneralWhatsAppClick = () => {
    const phoneNumber = "+237679269566"
    const message = encodeURIComponent(generalMessage[language])
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {showServices && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white shadow-2xl animate-scale-in">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-[#1940BF]">
                  {language === "fr" ? "Choisir un service" : "Choose a service"}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setShowServices(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {services[language].map((service, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-4 hover:bg-[#1940BF]/5 hover:border-[#1940BF] transition-all duration-300 bg-transparent"
                  onClick={() => handleServiceClick(service.message)}
                >
                  <div>
                    <div className="font-medium text-[#1940BF]">{service.name}</div>
                  </div>
                </Button>
              ))}
              <div className="pt-2 border-t">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-4 hover:bg-green-50 hover:border-green-500 transition-all duration-300 bg-transparent"
                  onClick={handleGeneralWhatsAppClick}
                >
                  <div>
                    <div className="font-medium text-green-600">
                      {language === "fr" ? "Message général" : "General message"}
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <div className="group">
          <Button
            onClick={() => setShowServices(true)}
            className="rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transform hover:scale-110 animate-bounce-slow relative"
            size="icon"
          >
            <MessageCircle className="h-7 w-7 text-white" />
            <ChevronDown className="h-3 w-3 text-white absolute -bottom-1 -right-1 bg-green-600 rounded-full p-0.5" />
            <span className="sr-only">Contact via WhatsApp</span>
          </Button>

          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {language === "fr" ? "Contactez-nous sur WhatsApp" : "Contact us on WhatsApp"}
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/90 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>

        <div className="group">
          <Button
            onClick={() => window.open("tel:+237679269566", "_self")}
            className="rounded-full w-14 h-14 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-[#1940BF] to-[#1940BF]/80 hover:from-[#1940BF]/90 hover:to-[#1940BF] transform hover:scale-110"
            size="icon"
          >
            <Phone className="h-6 w-6 text-white" />
            <span className="sr-only">Appeler directement</span>
          </Button>

          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {language === "fr" ? "Appeler directement" : "Call directly"}
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/90 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </div>
    </>
  )
}
