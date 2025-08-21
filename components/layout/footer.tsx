import { SafiCertLogo } from "@/components/saficert-logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FooterProps {
  translations: any
}

export function Footer({ translations }: FooterProps) {
  const t = translations

  return (
    <footer className="bg-black border-t border-[#1940BF]/20 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <SafiCertLogo className="mb-6" />
            <p className="text-gray-400 mb-6 max-w-md">{t.footer.description}</p>
            <div className="flex space-x-4">{/* Social links */}</div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold mb-4 text-white">{t.footer.menu}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-[#1940BF] transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/services" className="hover:text-[#1940BF] transition-colors">{t.nav.services}</Link></li>
              <li><Link href="/about" className="hover:text-[#1940BF] transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/blog" className="hover:text-[#1940BF] transition-colors">{t.nav.blog}</Link></li>
              <li><Link href="/faq" className="hover:text-[#1940BF] transition-colors">{t.nav.faq}</Link></li>
              <li><Link href="/contact" className="hover:text-[#1940BF] transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4 text-white">{t.footer.services}</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <p className="text-sm text-gray-400">{t.footer.newsletter}</p>
              <div className="flex gap-2">
                <label htmlFor="newsletter" className="sr-only">
                  {t.footer.newsletter}
                </label>
                <input
                  id="newsletter"
                  type="email"
                  placeholder="contact@email.com"
                  className="flex-1 px-3 py-2 text-sm border border-[#1940BF]/20 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#1940BF]"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-[#1940BF] hover:bg-[#1940BF]/90"
                >
                  {t.footer.subscribe}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1940BF]/20 pt-8 text-center text-gray-400">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
