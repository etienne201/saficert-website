export type BlogPost = {
    title: { fr: string; en: string }
    description: { fr: string; en: string }
    date: string
    author: string
    category: { fr: string; en: string }
  }
  
  export const blogPostsData: BlogPost[] = [
    {
      title: {
        fr: "Les dernières tendances en certification ISO",
        en: "Latest trends in ISO certification",
      },
      description: {
        fr: "Découvrez les nouvelles normes ISO et leur impact sur votre entreprise.",
        en: "Discover the new ISO standards and their impact on your business.",
      },
      date: "2025-01-15",
      author: "SafiCert Team",
      category: { fr: "Certification", en: "Certification" },
    },
    {
      title: {
        fr: "Guide complet de l'assurance qualité logicielle",
        en: "Complete guide to software quality assurance",
      },
      description: {
        fr: "Tout ce que vous devez savoir sur l'assurance qualité dans le développement logiciel.",
        en: "Everything you need to know about quality assurance in software development.",
      },
      date: "2025-01-10",
      author: "SafiCert Team",
      category: { fr: "Développement", en: "Development" },
    },
    {
      title: {
        fr: "L'importance de l'audit système en 2025",
        en: "The importance of system audit in 2025",
      },
      description: {
        fr: "Pourquoi l'audit de vos systèmes informatiques est crucial pour votre entreprise.",
        en: "Why auditing your IT systems is crucial for your business.",
      },
      date: "2025-01-05",
      author: "SafiCert Team",
      category: { fr: "Audit", en: "Audit" },
    },
  ]
  