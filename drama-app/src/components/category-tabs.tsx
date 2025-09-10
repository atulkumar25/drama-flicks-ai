"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All", emoji: "🎬" },
  { id: "korean", name: "Korean", emoji: "🇰🇷" },
  { id: "japanese", name: "Japanese", emoji: "🇯🇵" },
  { id: "chinese", name: "Chinese", emoji: "🇨🇳" },
  { id: "thai", name: "Thai", emoji: "🇹🇭" },
  { id: "romance", name: "Romance", emoji: "💕" },
  { id: "thriller", name: "Thriller", emoji: "🔥" },
  { id: "comedy", name: "Comedy", emoji: "😄" },
]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section>
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
              activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
            )}
          >
            <span>{category.emoji}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}