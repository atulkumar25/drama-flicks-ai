"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Plus, Info, ChevronLeft, ChevronRight } from "lucide-react"
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredDramas.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredDramas.length) % featuredDramas.length)
  }

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentDrama.backdrop}
          alt={currentDrama.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {currentDrama.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-2">
              {currentDrama.genre} • {currentDrama.year} • {currentDrama.episodes} Episodes
            </p>
            <p className="text-base lg:text-lg text-gray-300 mb-8 line-clamp-3 max-w-xl">
              {currentDrama.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href={`/watch/${currentDrama.id}`}>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Now
                </Button>
              </Link>
              <Button size="lg" variant="secondary" className="bg-gray-600/80 text-white hover:bg-gray-600">
                <Plus className="w-5 h-5 mr-2" />
                My List
              </Button>
              <Link href={`/drama/${currentDrama.id}`}>
                <Button size="lg" variant="ghost" className="text-white border border-gray-500 hover:bg-white/10">
                  <Info className="w-5 h-5 mr-2" />
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredDramas.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}