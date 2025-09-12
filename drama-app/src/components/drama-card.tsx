import Image from "next/image"
import Link from "next/link"
import { Star, Play, Heart, Clock, Calendar } from "lucide-react"
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
  variant?: "default" | "compact" | "featured" | "list"
  className?: string
}

export function DramaCard({ drama, variant = "default", className }: DramaCardProps) {
  if (variant === "list") {
    return (
      <div className={cn("flex bg-card rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-all", className)}>
        <div className="relative w-24 h-32 flex-shrink-0">
          <Image
            src={drama.poster}
            alt={drama.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-foreground line-clamp-1">{drama.title}</h3>
            <Button size="icon" variant="ghost" className="w-8 h-8 text-muted-foreground">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{drama.rating}</span>
            </div>
            <span>•</span>
            <span>{drama.year}</span>
            <span>•</span>
            <span>{drama.episodes} eps</span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{drama.description}</p>
          <div className="flex items-center justify-between">
            <span className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              drama.status === "Ongoing" 
                ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
            )}>
              {drama.status}
            </span>
            <Button size="sm" className="h-7 px-3 rounded-full">
              <Play className="w-3 h-3 mr-1" />
              Watch
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const cardClasses = cn(
    "group relative overflow-hidden rounded-2xl bg-card shadow-sm border hover:shadow-lg transition-all duration-300",
    {
      "aspect-[3/4]": variant === "default",
      "aspect-[4/5]": variant === "compact",
      "aspect-[16/9]": variant === "featured",
    },
    className
  )

  return (
    <div className={cardClasses}>
      <div className="relative w-full h-full">
        <Image
          src={drama.poster}
          alt={drama.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Status Badge */}
        {drama.status === "Ongoing" && (
          <div className="absolute top-3 left-3">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <span>Live</span>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3">
          <div className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full flex items-center space-x-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{drama.rating}</span>
          </div>
        </div>

        {/* Quick Actions - Show on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-3">
            <Button size="icon" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20">
              <Play className="w-5 h-5 text-white fill-white" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Info Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Link href={`/drama/${drama.id}`} className="block">
            <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
              {drama.title}
            </h3>
            <div className="flex items-center space-x-2 text-xs text-gray-300 mb-2">
              <span>{drama.genre.split(", ")[0]}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{drama.year}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{drama.episodes}ep</span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${Math.random() * 100}%` }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}