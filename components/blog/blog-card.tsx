"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import type { BlogPost } from "@/app/data/blog-posts"

export function BlogCard({
  post,
  language,
  cta,
}: {
  post: BlogPost
  language: "fr" | "en"
  cta: string
}) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border bg-card/60 backdrop-blur-md dark:bg-card/40 flex flex-col justify-between">
      <div>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
            >
              {post.category[language]}
            </Badge>
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {post.title[language]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed mb-4">
            {post.description[language]}
          </CardDescription>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString(
                language === "fr" ? "fr-FR" : "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </div>
          </div>
        </CardContent>
      </div>

      {/* CTA */}
      <div className="px-6 pb-4">
        <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">
          {cta}
        </button>
      </div>
    </Card>
  )
}
