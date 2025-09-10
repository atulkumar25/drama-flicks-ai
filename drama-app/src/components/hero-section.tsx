"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Plus, Info, Star, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { mockDramas } from "@/lib/utils"

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featuredDramas = mockDramas.slice(0, 3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredDramas.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredDramas.length])

  const currentDrama = featuredDramas[currentIndex]

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={currentDrama.backdrop}
          alt={currentDrama.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-4 pb-8 md:pb-16">
          <div className="max-w-lg">
            {/* Badge */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20">
                Featured
              </div>
              {currentDrama.status === "Ongoing" && (
                <div className="bg-red-500/20 backdrop-blur-sm text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-500/20 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  <span>New Episode</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
              {currentDrama.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{currentDrama.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{currentDrama.year}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{currentDrama.episodes} Episodes</span>
              </div>
              <span className="px-2 py-1 bg-muted rounded text-xs font-medium">
                {currentDrama.genre.split(", ")[0]}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
              {currentDrama.description}
            </p>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Link href={`/watch/${currentDrama.id}`}>
                <Button size="lg" className="rounded-full font-semibold">
                  <Play className="w-5 h-5 mr-2 fill-current" />
                  Watch Now
                </Button>
              </Link>
              <Button size="lg" variant="secondary" className="rounded-full">
                <Plus className="w-5 h-5 mr-2" />
                My List
              </Button>
              <Link href={`/drama/${currentDrama.id}`}>
                <Button size="lg" variant="outline" className="rounded-full">
                  <Info className="w-5 h-5 mr-2" />
                  Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {featuredDramas.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-6" 
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Mini Carousel */}
      <div className="absolute bottom-4 left-4 hidden md:flex space-x-2">
        {featuredDramas.map((drama, index) => (
          <button
            key={drama.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-16 h-20 rounded-lg overflow-hidden transition-all ${
              index === currentIndex 
                ? "ring-2 ring-primary scale-110" 
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={drama.poster}
              alt={drama.title}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  )
}