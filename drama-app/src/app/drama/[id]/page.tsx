import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Play, Plus, Heart, Share, Star, Calendar, Tv } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DramaRow } from "@/components/drama-row"
import { mockDramas } from "@/lib/utils"

interface PageProps {
  params: {
    id: string
  }
}

export default function DramaDetailsPage({ params }: PageProps) {
  const drama = mockDramas.find(d => d.id === parseInt(params.id))
  
  if (!drama) {
    notFound()
  }

  const relatedDramas = mockDramas.filter(d => 
    d.id !== drama.id && 
    d.genre.split(", ").some(genre => drama.genre.includes(genre))
  ).slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={drama.backdrop}
          alt={drama.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Poster */}
              <div className="w-64 h-96 relative flex-shrink-0 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={drama.poster}
                  alt={drama.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {drama.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{drama.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-5 h-5" />
                    <span>{drama.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tv className="w-5 h-5" />
                    <span>{drama.episodes} Episodes</span>
                  </div>
                  <span className="px-2 py-1 bg-red-600 text-white text-sm rounded">
                    {drama.status}
                  </span>
                </div>

                <p className="text-gray-300 text-lg max-w-2xl">
                  {drama.genre}
                </p>

                <p className="text-gray-200 text-lg max-w-3xl leading-relaxed">
                  {drama.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href={`/watch/${drama.id}`}>
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Now
                    </Button>
                  </Link>
                  <Button size="lg" variant="secondary" className="bg-gray-600/80 text-white hover:bg-gray-600">
                    <Plus className="w-5 h-5 mr-2" />
                    Add to List
                  </Button>
                  <Button size="lg" variant="ghost" className="text-white border border-gray-500 hover:bg-white/10">
                    <Heart className="w-5 h-5 mr-2" />
                    Favorite
                  </Button>
                  <Button size="lg" variant="ghost" className="text-white border border-gray-500 hover:bg-white/10">
                    <Share className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Cast & Crew */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Cast & Crew</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Main Cast</h3>
                <ul className="space-y-2">
                  {drama.cast.map((actor, index) => (
                    <li key={index} className="text-gray-300">
                      {actor}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Production</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Director:</span>
                    <span className="text-gray-300 ml-2">{drama.director}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Episodes:</span>
                    <span className="text-gray-300 ml-2">{drama.episodes}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Status:</span>
                    <span className="text-gray-300 ml-2">{drama.status}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Episodes List */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Episodes</h2>
          <div className="grid gap-4">
            {Array.from({ length: Math.min(drama.episodes, 5) }, (_, i) => (
              <Card key={i} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-12 bg-gray-700 rounded flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          Episode {i + 1}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Duration: 60 minutes
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {drama.episodes > 5 && (
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4 text-center">
                  <p className="text-gray-400">
                    +{drama.episodes - 5} more episodes
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Related Dramas */}
        {relatedDramas.length > 0 && (
          <DramaRow title="More Like This" dramas={relatedDramas} />
        )}
      </div>
    </div>
  )
}