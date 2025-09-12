"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DramaCard } from "@/components/drama-card"
import { Button } from "@/components/ui/button"

interface Drama {
  id: number
  title: string
  genre: string
  year: number
  rating: number
  episodes: number
  status: string
  poster: string
  description: string
}

export interface DramaRowProps {
  title: string
  dramas: Drama[]
  variant?: "default" | "compact" | "featured"
  showMore?: boolean
}

export function DramaRow({ title, dramas, variant = "default", showMore = false }: DramaRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
          <div className="flex items-center space-x-2">
            {showMore && (
              <button className="text-sm text-primary hover:text-primary/80">
                See All
              </button>
            )}
            <div className="flex space-x-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={scrollLeft}
                className="w-8 h-8 text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={scrollRight}
                className="w-8 h-8 text-muted-foreground hover:text-foreground"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Drama Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {dramas.map((drama) => (
            <div
              key={drama.id}
              className={`flex-shrink-0 ${
                variant === "compact" ? "w-48" : "w-60"
              }`}
            >
              <DramaCard drama={drama} variant={variant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}