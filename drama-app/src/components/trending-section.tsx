import Image from "next/image"
import Link from "next/link"
import { TrendingUp, Play, Clock, Star } from "lucide-react"
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

interface TrendingSectionProps {
  dramas: Drama[]
}

export function TrendingSection({ dramas }: TrendingSectionProps) {
  const topDramas = dramas.slice(0, 5)

  return (
    <section>
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">Trending Now</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {topDramas.map((drama, index) => (
          <div key={drama.id} className="flex items-center space-x-4 bg-card rounded-2xl p-4 border hover:shadow-md transition-all group">
            {/* Rank */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">#{index + 1}</span>
              </div>
            </div>

            {/* Poster */}
            <div className="relative w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={drama.poster}
                alt={drama.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <Link href={`/drama/${drama.id}`}>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {drama.title}
                </h3>
              </Link>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{drama.rating}</span>
                </div>
                <span>•</span>
                <span>{drama.year}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{drama.episodes} eps</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                {drama.description}
              </p>
            </div>

            {/* Action */}
            <div className="flex-shrink-0">
              <Link href={`/watch/${drama.id}`}>
                <Button size="sm" className="rounded-full">
                  <Play className="w-3 h-3 mr-1" />
                  Watch
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}