"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Grid, List, Filter, SortAsc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DramaCard } from "@/components/drama-card"
import { mockDramas } from "@/lib/utils"

export default function FavoritesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("dateAdded")
  const [filterGenre, setFilterGenre] = useState("All")

  // Mock favorites data - in a real app, this would come from user data
  const favoriteDramas = mockDramas.slice(0, 3)
  const watchlistDramas = mockDramas.slice(1, 4)

  const genres = ["All", "Romance", "Drama", "Thriller", "Comedy", "Historical"]

  const filteredFavorites = favoriteDramas.filter(drama =>
    filterGenre === "All" || drama.genre.includes(filterGenre)
  )

  const sortedFavorites = [...filteredFavorites].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title)
      case "year":
        return b.year - a.year
      case "rating":
        return b.rating - a.rating
      default:
        return 0 // dateAdded would use actual timestamps
    }
  })

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 flex items-center">
            <Heart className="w-8 h-8 mr-3 text-red-500" />
            My Favorites
          </h1>
          <p className="text-gray-400">
            Your collection of favorite dramas and watchlist
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-8 border-b border-gray-800">
            <button className="pb-4 text-purple-400 border-b-2 border-purple-400 font-medium">
              Favorites ({favoriteDramas.length})
            </button>
            <button className="pb-4 text-gray-400 hover:text-white font-medium">
              Watchlist ({watchlistDramas.length})
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Genre Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filterGenre}
                onChange={(e) => setFilterGenre(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <SortAsc className="w-4 h-4 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm"
              >
                <option value="dateAdded">Date Added</option>
                <option value="title">Title</option>
                <option value="year">Year</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* View Mode */}
          <div className="flex border border-gray-700 rounded-md overflow-hidden">
            <Button
              size="sm"
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              onClick={() => setViewMode("grid")}
              className="rounded-none border-0"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant={viewMode === "list" ? "secondary" : "ghost"}
              onClick={() => setViewMode("list")}
              className="rounded-none border-0"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            {sortedFavorites.length} favorite{sortedFavorites.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Content */}
        {sortedFavorites.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {sortedFavorites.map((drama) => (
                <div key={drama.id} className="relative group">
                  <DramaCard drama={drama} />
                  {/* Favorite Badge */}
                  <div className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedFavorites.map((drama) => (
                <Card key={drama.id} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={drama.poster}
                        alt={drama.title}
                        width={64}
                        height={96}
                        className="w-16 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {drama.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          {drama.genre} • {drama.year} • {drama.episodes} episodes
                        </p>
                        <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                          {drama.description}
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">⭐</span>
                            <span className="text-white font-medium">{drama.rating}</span>
                          </div>
                          <span className="text-gray-500 text-sm">{drama.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" variant="secondary">
                          Watch Now
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                          <Heart className="w-4 h-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        ) : (
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-12 text-center">
              <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No favorites yet
              </h3>
              <p className="text-gray-400 mb-6">
                Start adding dramas to your favorites to see them here
              </p>
              <Button>Browse Dramas</Button>
            </CardContent>
          </Card>
        )}

        {/* Watchlist Preview */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Your Watchlist</h2>
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {watchlistDramas.slice(0, 4).map((drama) => (
              <div key={drama.id} className="relative">
                <DramaCard drama={drama} variant="compact" />
                {/* Watchlist Badge */}
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Watchlist
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}