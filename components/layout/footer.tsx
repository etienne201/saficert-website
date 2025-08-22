"use client"

import { SafiCertLogo } from "@/components/saficert-logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FooterProps {
  translations: any
}

export function Footer({ translations }: FooterProps) {
  const t = translations

  return (
    <footer className="bg-black border-t border-[#1940BF]/20 py-16 px-4 text-gray-400">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">

        {/* Col 1 : Logo + Contacts */}
        <div>
          <SafiCertLogo className="mb-4" />
          <h2 className="text-white font-bold mb-2">SafiCert</h2>
          <p className="mb-4">SafiCert : Construire, Innover et Réussir Ensemble</p>
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
          <h3 className="text-white font-bold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#1940BF] transition-colors">{t.nav.home}</Link></li>
            <li><Link href="/about" className="hover:text-[#1940BF] transition-colors">{t.nav.about}</Link></li>
            <li><Link href="/blog" className="hover:text-[#1940BF] transition-colors">{t.nav.blog}</Link></li>
            <li><Link href="/faq" className="hover:text-[#1940BF] transition-colors">{t.nav.faq}</Link></li>
            <li><Link href="/services" className="hover:text-[#1940BF] transition-colors">{t.nav.services}</Link></li>
            <li><Link href="/contact" className="hover:text-[#1940BF] transition-colors">{t.nav.contact}</Link></li>
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
          <h3 className="text-white font-bold mb-4">Services</h3>
          <p className="text-sm mb-4">
            Inscrivez-vous à notre newsletter pour être informé du lancement et recevoir des mises à jour exclusives.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="contact@saficert.com"
              className="px-3 py-2 text-sm border border-[#1940BF]/20 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#1940BF]"
              required
            />
            <Button type="submit" size="sm" className="bg-[#1940BF] hover:bg-[#1940BF]/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#1940BF]/20 pt-8 text-center text-gray-400 mt-8">
        <p>© 2025 SafiCert. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
