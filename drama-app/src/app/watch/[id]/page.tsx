"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Settings, 
  SkipBack, 
  SkipForward,
  ChevronLeft,
  List,
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { mockDramas } from "@/lib/utils"

interface PageProps {
  params: {
    id: string
  }
}

export default function WatchPage({ params }: PageProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentEpisode, setCurrentEpisode] = useState(1)
  const [showEpisodeList, setShowEpisodeList] = useState(false)

  const drama = mockDramas.find(d => d.id === parseInt(params.id))
  
  if (!drama) {
    notFound()
  }

  const episodes = Array.from({ length: drama.episodes }, (_, i) => ({
    number: i + 1,
    title: `Episode ${i + 1}`,
    duration: "60 min",
    watched: i < 3 // Mock watched status
  }))

  return (
    <div className="min-h-screen bg-black">
      {/* Video Player */}
      <div className="relative aspect-video bg-gray-900">
        {/* Video Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Play className="w-12 h-12 text-white" />
            </div>
            <p className="text-white text-lg">
              {drama.title} - Episode {currentEpisode}
            </p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20 w-12 h-12"
            >
              <SkipBack className="w-6 h-6" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:bg-white/20 w-16 h-16"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20 w-12 h-12"
            >
              <SkipForward className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="w-full h-1 bg-gray-600 rounded">
              <div className="w-1/3 h-full bg-red-600 rounded"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/20"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:bg-white/20"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </Button>
              <div className="text-white text-sm">
                20:35 / 60:00
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                <Settings className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <Link href={`/drama/${drama.id}`}>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
        </div>

        {/* Episode List Toggle */}
        <div className="absolute top-4 right-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setShowEpisodeList(!showEpisodeList)}
            className="text-white hover:bg-white/20"
          >
            <List className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Content Below Player */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Episode Info */}
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">
                {drama.title} - Episode {currentEpisode}
              </h1>
              <p className="text-gray-400 mb-4">
                {drama.genre} • {drama.year} • Duration: 60 minutes
              </p>
              <p className="text-gray-300 leading-relaxed">
                {drama.description}
              </p>
            </div>

            {/* Episode Navigation */}
            <div className="flex items-center justify-between py-4 border-t border-b border-gray-800">
              <Button
                variant="outline"
                disabled={currentEpisode === 1}
                onClick={() => setCurrentEpisode(currentEpisode - 1)}
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous Episode
              </Button>

              <span className="text-gray-400">
                Episode {currentEpisode} of {drama.episodes}
              </span>

              <Button
                variant="outline"
                disabled={currentEpisode === drama.episodes}
                onClick={() => setCurrentEpisode(currentEpisode + 1)}
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                Next Episode
                <ChevronLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </div>

            {/* Comments Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Comments
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((comment) => (
                  <Card key={comment} className="bg-gray-900 border-gray-800">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">U</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-white font-medium">User{comment}</span>
                            <span className="text-gray-500 text-xs">2 hours ago</span>
                          </div>
                          <p className="text-gray-300 text-sm">
                            This episode was amazing! The plot twist was unexpected.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Episode List Sidebar */}
          <div className={`lg:block ${showEpisodeList ? 'block' : 'hidden'}`}>
            <Card className="bg-gray-900 border-gray-800 sticky top-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-4">Episodes</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {episodes.map((episode) => (
                    <button
                      key={episode.number}
                      onClick={() => setCurrentEpisode(episode.number)}
                      className={`w-full p-3 rounded-lg text-left transition-colors ${
                        currentEpisode === episode.number
                          ? "bg-purple-600 text-white"
                          : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{episode.title}</p>
                          <p className="text-xs opacity-75">{episode.duration}</p>
                        </div>
                        {episode.watched && (
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}