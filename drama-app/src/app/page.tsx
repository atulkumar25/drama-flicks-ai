import { HeroSection } from "@/components/hero-section"
import { DramaRow } from "@/components/drama-row"
<<<<<<< HEAD
import { mockDramas } from "@/lib/utils"

export default function Home() {
  const trendingDramas = mockDramas
  const newReleases = mockDramas.slice(0, 3)
  const popularDramas = [...mockDramas].reverse()
  const romanceDramas = mockDramas.filter(drama => drama.genre.includes("Romance"))
=======
import { DramaCard } from "@/components/drama-card"
import { CategoryTabs } from "@/components/category-tabs"
import { TrendingSection } from "@/components/trending-section"
import { mockDramas } from "@/lib/utils"

export default function Home() {
  const featuredDramas = mockDramas.slice(0, 3)
  const trendingDramas = mockDramas
  const newReleases = mockDramas.slice(0, 6)
  const popularDramas = [...mockDramas].reverse()
  const romanceDramas = mockDramas.filter(drama => drama.genre.includes("Romance"))
  const koreanDramas = mockDramas.slice(0, 5)
  const ongoingDramas = mockDramas.filter(drama => drama.status === "Ongoing")
>>>>>>> 16fa85071ee1dde0fd0325629937d156e1a69d03

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

<<<<<<< HEAD
      {/* Content Sections */}
      <div className="space-y-8 pb-12">
        <DramaRow title="Trending Now" dramas={trendingDramas} />
        <DramaRow title="New Releases" dramas={newReleases} variant="compact" />
        <DramaRow title="Popular Dramas" dramas={popularDramas} />
        <DramaRow title="Romance Collection" dramas={romanceDramas} />
=======
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
              <DramaCard key={`continue-${drama.id}`} drama={drama} variant="list" />
            ))}
          </div>
        </section>

        {/* Drama Rows */}
        <DramaRow 
          title="🔥 Hot This Week" 
          dramas={trendingDramas} 
          showMore={true}
        />
        
        <DramaRow 
          title="🆕 New Releases" 
          dramas={newReleases} 
          variant="compact"
          showMore={true}
        />
        
        <DramaRow 
          title="🇰🇷 Korean Dramas" 
          dramas={koreanDramas}
          showMore={true}
        />
        
        <DramaRow 
          title="💕 Romance Collection" 
          dramas={romanceDramas}
          showMore={true}
        />
        
        <DramaRow 
          title="📺 Currently Airing" 
          dramas={ongoingDramas}
          showMore={true}
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
>>>>>>> 16fa85071ee1dde0fd0325629937d156e1a69d03
      </div>
    </div>
  )
}