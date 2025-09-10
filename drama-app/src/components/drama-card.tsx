import Image from "next/image"
import Link from "next/link"
import { Star, Play, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

interface DramaCardProps {
  drama: Drama
  variant?: "default" | "compact" | "featured"
  className?: string
}

export function DramaCard({ drama, variant = "default", className }: DramaCardProps) {
  const cardClasses = cn(
    "group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg",
    {
      "aspect-[2/3]": variant === "default",
      "aspect-[3/2]": variant === "featured",
      "aspect-[4/3]": variant === "compact",
    },
    className
  )

  return (
    <Card className={cardClasses}>
      <div className="relative w-full h-full">
        <Image
          src={drama.poster}
          alt={drama.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center space-y-2">
            <Button size="icon" className="rounded-full bg-white/20 hover:bg-white/30">
              <Play className="w-6 h-6 text-white" />
            </Button>
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Status Badge */}
        {drama.status === "Ongoing" && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Ongoing
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{drama.rating}</span>
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <Link href={`/drama/${drama.id}`} className="block">
            <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">
              {drama.title}
            </h3>
            <p className="text-gray-300 text-sm mb-1">{drama.genre}</p>
            <p className="text-gray-400 text-xs">
              {drama.year} • {drama.episodes} episodes
            </p>
          </Link>
        </div>
      </div>
    </Card>
  )
}