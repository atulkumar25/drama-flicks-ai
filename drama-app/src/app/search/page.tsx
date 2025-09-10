"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Search, TrendingUp, Clock, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DramaCard } from "@/components/drama-card"
import { mockDramas } from "@/lib/utils"

function SearchContent() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams?.get('q') || '')
  const [searchResults, setSearchResults] = useState<typeof mockDramas>([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock trending searches and recent searches
  const trendingSearches = [
    "Moonlight Romance",
    "Korean Drama 2024",
    "Romance Drama",
    "City of Dreams",
    "Historical Drama"
  ]

  const recentSearches = [
    "Spring Awakening",
    "Thai Drama",
    "Comedy Drama"
  ]

  const popularDramas = mockDramas.slice(0, 4)

  useEffect(() => {
    if (query.trim()) {
      setIsSearching(true)
      // Simulate search delay
      const timer = setTimeout(() => {
        const results = mockDramas.filter(drama =>
          drama.title.toLowerCase().includes(query.toLowerCase()) ||
          drama.genre.toLowerCase().includes(query.toLowerCase()) ||
          drama.cast.some(actor => actor.toLowerCase().includes(query.toLowerCase()))
        )
        setSearchResults(results)
        setIsSearching(false)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }, [query])

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Search Dramas
          </h1>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for dramas, actors, genres..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 rounded-full"
            />
          </div>
        </div>

        {/* Search Results */}
        {query.trim() && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              {isSearching ? "Searching..." : `Search Results for "${query}"`}
            </h2>
            
            {isSearching ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
              </div>
            ) : searchResults.length > 0 ? (
              <>
                <p className="text-gray-400 mb-6">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {searchResults.map((drama) => (
                    <DramaCard key={drama.id} drama={drama} />
                  ))}
                </div>
              </>
            ) : (
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-12 text-center">
                  <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Try searching with different keywords or check the spelling
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {trendingSearches.slice(0, 3).map((term) => (
                      <Button
                        key={term}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSearch(term)}
                        className="border-gray-700 text-gray-300 hover:bg-gray-800"
                      >
                        {term}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Default Content (when no search) */}
        {!query.trim() && (
          <div className="space-y-12">
            {/* Trending Searches */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-purple-400" />
                Trending Searches
              </h2>
              <div className="flex flex-wrap gap-3">
                {trendingSearches.map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    onClick={() => handleSearch(term)}
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </section>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-purple-400" />
                  Recent Searches
                </h2>
                <div className="flex flex-wrap gap-3">
                  {recentSearches.map((term) => (
                    <Button
                      key={term}
                      variant="ghost"
                      onClick={() => handleSearch(term)}
                      className="text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      {term}
                    </Button>
                  ))}
                </div>
              </section>
            )}

            {/* Popular Dramas */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Star className="w-6 h-6 mr-2 text-purple-400" />
                Popular This Week
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularDramas.map((drama) => (
                  <DramaCard key={drama.id} drama={drama} />
                ))}
              </div>
            </section>

            {/* Search Tips */}
            <section>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Search Tips</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                      <p className="font-medium text-white mb-2">Search by:</p>
                      <ul className="space-y-1">
                        <li>• Drama title</li>
                        <li>• Actor or actress name</li>
                        <li>• Genre (Romance, Thriller, etc.)</li>
                        <li>• Year of release</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">Examples:</p>
                      <ul className="space-y-1">
                        <li>• &quot;Moonlight Romance&quot;</li>
                        <li>• &quot;Lee Min-ho&quot;</li>
                        <li>• &quot;Korean Drama 2024&quot;</li>
                        <li>• &quot;Romance Comedy&quot;</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div></div>}>
      <SearchContent />
    </Suspense>
  )
}