"use client"

import { useState } from "react"
import Image from "next/image"
import { Settings, Heart, Clock, Star, Play, Edit3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DramaCard } from "@/components/drama-card"
import { mockDramas } from "@/lib/utils"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("watchlist")

  // Mock user data
  const user = {
    name: "Sarah Kim",
    email: "sarah.kim@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
    joinDate: "January 2024",
    totalWatched: 45,
    totalHours: 2250,
    favoriteGenre: "Romance"
  }

  const watchlistDramas = mockDramas.slice(0, 3)
  const recentlyWatched = mockDramas.slice(1, 4)
  const favoriteDramas = mockDramas.slice(0, 2)

  const stats = [
    { label: "Dramas Watched", value: user.totalWatched, icon: Play },
    { label: "Hours Watched", value: `${user.totalHours}h`, icon: Clock },
    { label: "Favorites", value: favoriteDramas.length, icon: Heart },
    { label: "Average Rating", value: "4.8", icon: Star },
  ]

  const tabs = [
    { id: "watchlist", label: "My Watchlist", count: watchlistDramas.length },
    { id: "watched", label: "Recently Watched", count: recentlyWatched.length },
    { id: "favorites", label: "Favorites", count: favoriteDramas.length },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-gray-800">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Avatar */}
                <div className="relative">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
                  />
                  <Button
                    size="icon"
                    className="absolute -bottom-2 -right-2 rounded-full bg-purple-600 hover:bg-purple-700"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                  <p className="text-gray-400 mb-4">{user.email}</p>
                  <p className="text-gray-300 mb-6">
                    Member since {user.joinDate} • Favorite genre: {user.favoriteGenre}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                      <Settings className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                      Share Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <Card key={stat.label} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 border-b border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "text-purple-400 border-b-2 border-purple-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "watchlist" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">My Watchlist</h2>
                <p className="text-gray-400">
                  {watchlistDramas.length} drama{watchlistDramas.length !== 1 ? "s" : ""}
                </p>
              </div>
              {watchlistDramas.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {watchlistDramas.map((drama) => (
                    <DramaCard key={drama.id} drama={drama} />
                  ))}
                </div>
              ) : (
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-12 text-center">
                    <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Your watchlist is empty
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Add dramas to your watchlist to keep track of what you want to watch
                    </p>
                    <Button>Browse Dramas</Button>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {activeTab === "watched" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Recently Watched</h2>
                <p className="text-gray-400">
                  {recentlyWatched.length} drama{recentlyWatched.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="space-y-4">
                {recentlyWatched.map((drama) => (
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
                          <h3 className="text-white font-semibold mb-1">{drama.title}</h3>
                          <p className="text-gray-400 text-sm mb-2">{drama.genre}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <div className="w-32 h-2 bg-gray-700 rounded">
                                <div className="w-1/3 h-full bg-purple-600 rounded"></div>
                              </div>
                              <span className="text-xs text-gray-400">33%</span>
                            </div>
                            <span className="text-xs text-gray-500">Episode 5 of 16</span>
                          </div>
                        </div>
                        <Button size="sm" variant="secondary">
                          Continue
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "favorites" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Favorite Dramas</h2>
                <p className="text-gray-400">
                  {favoriteDramas.length} drama{favoriteDramas.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {favoriteDramas.map((drama) => (
                  <DramaCard key={drama.id} drama={drama} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}