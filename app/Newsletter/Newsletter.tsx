"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface NewsletterProps {
  language: "fr" | "en"
}

export function Newsletter({ language }: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSuccess(true)
        setEmail("")
      } else {
        setError(language === "fr" 
          ? "Impossible de s'abonner. Réessayez." 
          : "Unable to subscribe. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setError(language === "fr" 
        ? "Erreur serveur. Réessayez plus tard." 
        : "Server error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              {language === "fr" ? "Restez informé" : "Stay informed"}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Abonnez-vous à notre newsletter pour recevoir nos actualités, conseils et offres exclusives."
                : "Subscribe to our newsletter to receive our news, tips and exclusive offers."}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="bg-blue-700 hover:bg-blue-800 whitespace-nowrap" 
              disabled={loading}
            >
              {loading 
                ? (language === "fr" ? "Envoi..." : "Sending...") 
                : (language === "fr" ? "S'abonner" : "Subscribe")
              }
            </Button>
          </form>

          {success && (
            <p className="text-green-600 mt-4 text-center">
              {language === "fr" ? "✅ Merci pour votre abonnement !" : "✅ Thank you for subscribing!"}
            </p>
          )}
          {error && (
            <p className="text-red-600 mt-4 text-center">{error}</p>
          )}
        </div>
      </div>
    </section>
  )
}
