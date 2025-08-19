"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactModalProps {
  language: "en" | "fr"
}

export function ContactModal({ language }: ContactModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    serviceType: "",
  })
  const { toast } = useToast()

  const translations = {
    en: {
      title: "Contact Us",
      description: "Get in touch with our Quality Assurance experts",
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      subject: "Subject",
      message: "Message",
      serviceType: "Service Type",
      serviceTypes: {
        qa: "Quality Assurance Testing",
        development: "Software Development",
        web: "Web Solutions",
        audit: "Audit & Consulting",
        infrastructure: "Infrastructure Services",
        training: "Training & Formation",
        other: "Other Services",
      },
      send: "Send Message",
      success: "Message sent successfully! We'll get back to you soon.",
      error: "Please fill in all required fields.",
      placeholder: {
        subject: "How can we help you?",
        message: "Tell us about your project requirements...",
      },
    },
    fr: {
      title: "Nous Contacter",
      description: "Contactez nos experts en Assurance Qualité",
      name: "Nom Complet",
      email: "Adresse Email",
      company: "Nom de l'Entreprise",
      subject: "Sujet",
      message: "Message",
      serviceType: "Type de Service",
      serviceTypes: {
        qa: "Tests d'Assurance Qualité",
        development: "Développement Logiciel",
        web: "Solutions Web",
        audit: "Audit & Conseil",
        infrastructure: "Services d'Infrastructure",
        training: "Formation & Accompagnement",
        other: "Autres Services",
      },
      send: "Envoyer le Message",
      success: "Message envoyé avec succès ! Nous vous recontacterons bientôt.",
      error: "Veuillez remplir tous les champs requis.",
      placeholder: {
        subject: "Comment pouvons-nous vous aider ?",
        message: "Parlez-nous de vos besoins de projet...",
      },
    },
  }

  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: t.error,
        variant: "destructive",
      })
      return
    }

    const emailBody = `
Nouveau message de contact SafiCert:

Nom: ${formData.name}
Email: ${formData.email}
Entreprise: ${formData.company || "Non spécifiée"}
Type de service: ${formData.serviceType || "Non spécifié"}
Sujet: ${formData.subject || "Demande générale"}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:contact@saficert.com?subject=${encodeURIComponent(formData.subject || "Nouvelle demande de contact")}&body=${encodeURIComponent(emailBody)}`
    window.open(mailtoLink, "_blank")

    toast({
      title: "Success",
      description: t.success,
    })
    setOpen(false)
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      serviceType: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="gap-3 px-8 py-4 text-lg bg-[#1940BF] hover:bg-[#1940BF]/90 text-white transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-pulse-glow"
        >
          <Mail className="h-6 w-6" />
          {t.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm border-[#1940BF]/20">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-[#1940BF] mb-2">{t.title}</DialogTitle>
          <DialogDescription className="text-lg text-gray-600">{t.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#1940BF] font-semibold">
                {t.name} *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-[#1940BF]/30 focus:border-[#1940BF] transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1940BF] font-semibold">
                {t.email} *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-[#1940BF]/30 focus:border-[#1940BF] transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#1940BF] font-semibold">
                {t.company}
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="border-[#1940BF]/30 focus:border-[#1940BF] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceType" className="text-[#1940BF] font-semibold">
                {t.serviceType}
              </Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
              >
                <SelectTrigger className="border-[#1940BF]/30 focus:border-[#1940BF] transition-colors">
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="qa">{t.serviceTypes.qa}</SelectItem>
                  <SelectItem value="development">{t.serviceTypes.development}</SelectItem>
                  <SelectItem value="web">{t.serviceTypes.web}</SelectItem>
                  <SelectItem value="audit">{t.serviceTypes.audit}</SelectItem>
                  <SelectItem value="infrastructure">{t.serviceTypes.infrastructure}</SelectItem>
                  <SelectItem value="training">{t.serviceTypes.training}</SelectItem>
                  <SelectItem value="other">{t.serviceTypes.other}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-[#1940BF] font-semibold">
              {t.subject}
            </Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder={t.placeholder.subject}
              className="border-[#1940BF]/30 focus:border-[#1940BF] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#1940BF] font-semibold">
              {t.message} *
            </Label>
            <Textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.placeholder.message}
              className="border-[#1940BF]/30 focus:border-[#1940BF] transition-colors resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full py-4 text-lg bg-[#1940BF] hover:bg-[#1940BF]/90 text-white transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <Send className="h-5 w-5 mr-3" />
            {t.send}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
