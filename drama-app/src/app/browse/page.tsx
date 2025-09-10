"use client"

import { useState } from "react"
import Image from "next/image"
import { Grid, List } from "lucide-react"
import { DramaCard } from "@/components/drama-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { mockDramas, genres } from "@/lib/utils"

export default function BrowsePage() {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popularity")

  const filteredDramas = mockDramas.filter(drama => {
    const matchesGenre = selectedGenre === "All" || drama.genre.includes(selectedGenre)
    const matchesSearch = drama.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesGenre && matchesSearch
  })

  const sortedDramas = [...filteredDramas].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title)
      case "year":
        return b.year - a.year
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Browse Dramas</h1>
          <p className="text-gray-400">Discover your next favorite drama</p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Search dramas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 text-sm"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="title">Sort by Title</option>
                <option value="year">Sort by Year</option>
                <option value="rating">Sort by Rating</option>
              </select>

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
          </div>

          {/* Genre Filters */}
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Button
                key={genre}
                size="sm"
                variant={selectedGenre === genre ? "default" : "outline"}
                onClick={() => setSelectedGenre(genre)}
                className={`${
                  selectedGenre === genre
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "border-gray-700 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            {sortedDramas.length} drama{sortedDramas.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Drama Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {sortedDramas.map((drama) => (
              <DramaCard key={drama.id} drama={drama} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedDramas.map((drama) => (
              <div
                key={drama.id}
                className="flex bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
              >
                <div className="w-32 h-48 relative flex-shrink-0">
                  <Image
                    src={drama.poster}
                    alt={drama.title}
                    width={128}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {drama.title}
                  </h3>
                  <p className="text-gray-400 mb-2">
                    {drama.genre} • {drama.year} • {drama.episodes} episodes
                  </p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {drama.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-yellow-400 font-semibold">
                        ⭐ {drama.rating}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {drama.status}
                      </span>
                    </div>
                    <Button size="sm" variant="secondary">
                      Watch Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {sortedDramas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">No dramas found</p>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}