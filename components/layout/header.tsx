"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { SafiCertLogo } from "@/components/saficert-logo"
import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  language: "fr" | "en"
  onLanguageChange: (lang: "fr" | "en") => void
  translations: any
}

export function Header({ language, onLanguageChange, translations }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const t = translations

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-[#1940BF]/95 backdrop-blur-sm border-b shadow-lg" : "bg-[#1940BF]/90"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="hover:scale-105 transition-transform duration-300">
            <SafiCertLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105"
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105"
            >
              {t.nav.faq}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher currentLang={language} onLanguageChange={onLanguageChange} />
            <ThemeToggle />
            <Link href="/contact">
              <Button
                variant="secondary"
                size="sm"
                className="hidden sm:flex items-center gap-2 bg-white text-[#1940BF] hover:bg-yellow-300 hover:text-[#1940BF] transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                {t.nav.contact}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-yellow-300 hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-[#1940BF]/95 backdrop-blur-sm animate-fade-in-up">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.blog}
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.faq}
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white hover:text-yellow-300 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
