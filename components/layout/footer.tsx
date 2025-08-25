"use client"

import { SafiCertLogo } from "@/components/saficert-logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

interface FooterProps {
  translations: any
}

export function Footer({ translations }: FooterProps) {
  const t = translations.footer
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
        setError("Impossible de s'abonner. Réessayez.")
      }
    } catch (err) {
      console.error(err)
      setError("Erreur serveur. Réessayez plus tard.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-black border-t border-[#1940BF]/20 py-16 px-4 text-gray-400">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">

        {/* Col 1 : Logo + Contacts */}
        <div>
          <SafiCertLogo className="mb-4" />
          <h2 className="text-white font-bold mb-2">SafiCert</h2>
          <p className="mb-4">{t.description}</p>
          <div className="mb-4">
            <p>Contacts :</p>
            <p>📞 +237 6 79 26 95 66</p>
            <p>✉️ contact@saficert.com</p>
            <p>📍 Logbessou, Douala, Cameroun</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-[#1940BF] transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-[#1940BF] transition-colors">X</Link>
            <Link href="#" className="hover:text-[#1940BF] transition-colors">LinkedIn</Link>
          </div>
        </div>

        {/* Col 2 : Menu */}
        <div>
          <h3 className="text-white font-bold mb-4">{t.menu}</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#1940BF] transition-colors">{translations.nav.home}</Link></li>
            <li><Link href="/about" className="hover:text-[#1940BF] transition-colors">{translations.nav.about}</Link></li>
            <li><Link href="/blog" className="hover:text-[#1940BF] transition-colors">{translations.nav.blog}</Link></li>
            <li><Link href="/faq" className="hover:text-[#1940BF] transition-colors">{translations.nav.faq}</Link></li>
            <li><Link href="/services" className="hover:text-[#1940BF] transition-colors">{translations.nav.services}</Link></li>
            <li><Link href="/contact" className="hover:text-[#1940BF] transition-colors">{translations.nav.contact}</Link></li>
          </ul>
        </div>

        {/* Col 3 : Nos Offres */}
        <div>
          <h3 className="text-white font-bold mb-4">Nos Offres</h3>
          <ul className="space-y-2">
            <li>Assurance Qualité Logicielle</li>
            <li>Développement d'Applications</li>
            <li>Création de Sites Web</li>
            <li>Audit & Optimisation des Systèmes</li>
            <li>Solutions d’Infrastructure & Cloud</li>
          </ul>
        </div>

        {/* Col 4 : Newsletter / Services */}
        <div>
          <h3 className="text-white font-bold mb-4">{t.services}</h3>
          <p className="text-sm mb-4">{t.newsletter}</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contact@saficert.com"
              className="px-3 py-2 text-sm border border-[#1940BF]/20 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#1940BF]"
              required
            />
            <Button type="submit" size="sm" className="bg-[#1940BF] hover:bg-[#1940BF]/90" disabled={loading}>
              {loading ? "Envoi..." : t.subscribe}
            </Button>
            {success && <p className="text-green-500 mt-2">Merci pour votre abonnement !</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#1940BF]/20 pt-8 text-center text-gray-400 mt-8">
        <p>{t.rights}. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
