import { HeroSection } from "@/components/hero-section"
import { DramaRow } from "@/components/drama-row"
import { DramaCard } from "@/components/drama-card"
import { CategoryTabs } from "@/components/category-tabs"
import { TrendingSection } from "@/components/trending-section"
import { mockDramas } from "@/lib/utils"

export default function Home() {
  const trendingDramas = mockDramas
  const newReleases = mockDramas.slice(0, 6)
  const popularDramas = [...mockDramas].reverse()
  const romanceDramas = mockDramas.filter(drama => drama.genre.includes("Romance"))
  const koreanDramas = mockDramas.slice(0, 5)
  const ongoingDramas = mockDramas.filter(drama => drama.status === "Ongoing")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Content */}
      <div className="container mx-auto px-4 space-y-8 py-8">
        {/* Category Tabs */}
        <CategoryTabs />

        {/* Trending Section */}
        <TrendingSection dramas={trendingDramas.slice(0, 10)} />

        {/* Continue Watching */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Continue Watching</h2>
            <button className="text-sm text-primary hover:text-primary/80">See All</button>
          </div>
          <div className="space-y-3">
            {mockDramas.slice(0, 3).map((drama) => (
              <div key={`continue-${drama.id}`} className="bg-card rounded-2xl border p-3 flex items-center space-x-3">
                <div className="relative w-16 h-20 flex-shrink-0 overflow-hidden rounded-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={drama.poster} alt={drama.title} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">{drama.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{drama.description}</p>
                </div>
                <button className="text-sm text-primary hover:text-primary/80 whitespace-nowrap">Resume</button>
              </div>
            ))}
          </div>
        </section>

        {/* Drama Rows */}
        <DramaRow 
          title="🔥 Hot This Week" 
          dramas={trendingDramas} 
        />
        
        <DramaRow 
          title="🆕 New Releases" 
          dramas={newReleases} 
          variant="compact"
        />
        
        <DramaRow 
          title="🇰🇷 Korean Dramas" 
          dramas={koreanDramas}
        />
        
        <DramaRow 
          title="💕 Romance Collection" 
          dramas={romanceDramas}
        />
        
        <DramaRow 
          title="📺 Currently Airing" 
          dramas={ongoingDramas}
        />

        {/* Recommended for You */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Recommended for You</h2>
            <button className="text-sm text-primary hover:text-primary/80">Refresh</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {popularDramas.slice(0, 10).map((drama) => (
              <DramaCard key={`rec-${drama.id}`} drama={drama} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}