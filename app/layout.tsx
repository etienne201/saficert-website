import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
})

/** ✅ SEO & Métadonnées principales */
export const metadata: Metadata = {
  title: "SafiCert  Services B2B",
  description:
    "SafiCert : Leader en certification professionnelle. Services complets de certification B2B, normes internationales, assurance qualité. Expertise reconnue mondialement.",
  keywords: [
    "SafiCert",
    "certification professionnelle",
    "organisme de certification",
    "normes ISO",
    "assurance qualité",
    "certification B2B",
    "audit qualité",
    "conformité internationale",
    "certification entreprise",
  ].join(", "),
  authors: [{ name: "SafiCert", url: "https://saficert.com" }],
  creator: "SafiCert",
  publisher: "SafiCert",
  metadataBase: new URL("https://saficert.com"), 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SafiCert  Services B2B",
    description:
      "Leader en certification professionnelle avec des services B2B complets et une expertise reconnue mondialement.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "https://saficert.com",
    siteName: "SafiCert",
    images: [
      {
        url: "public/saficertlogo.png",
        width: 1200,
        height: 630,
        alt: "SafiCert  Services B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafiCert - Certification Professionnelle",
    description:
      "Leader en certification professionnelle avec expertise reconnue mondialement.",
    images: ["public/images/saficertlogo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://saficert.com",
    languages: {
      "fr-FR": "https://saficert.com/fr",
      "en-US": "https://saficert.com/en",
    },
  },
}

/** ✅ Nouveau bloc dédié viewport & themeColor */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4F46E5" },
    { media: "(prefers-color-scheme: dark)", color: "#6366F1" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/* Préchargement des fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ✅ Favicon pour navigateur */}
        <link rel="icon" href="public/images/saficertlogo.png" sizes="32x32" type="image/png" />
        <link rel="shortcut icon" href="public/images/saficertlogo.png" type="image/png" />

        {/* ✅ JSON-LD Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SafiCert",
              url: "https://saficert.com",
              logo: "public/images/saficertlogo.png",
              description:
                "Organisme de certification professionnel leader en services B2B",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Logbessou, Douala",
                addressLocality: "Douala",
                addressCountry: "CM",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+237 6 79 26 95 66",
                contactType: "customer service",
                email: "contact@saficert.com",
              },
              sameAs: [
                "https://www.facebook.com/saficert",
                "https://www.linkedin.com/company/saficert",
                "https://twitter.com/saficert",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>

        {/* Script pour nettoyer les attributs des extensions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', cleanAttributes);
                } else {
                  cleanAttributes();
                }
                
                function cleanAttributes() {
                  document.body.removeAttribute('cz-shortcut-listen');
                  const inputs = document.querySelectorAll('input');
                  inputs.forEach(input => input.removeAttribute('data-has-listeners'));
                  
                  const originalSetAttribute = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(name, value) {
                    if (name === 'cz-shortcut-listen' || name === 'data-has-listeners') return;
                    return originalSetAttribute.call(this, name, value);
                  };
                }
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
