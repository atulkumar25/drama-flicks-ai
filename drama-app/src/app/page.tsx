import { HeroSection } from "@/components/hero-section"
import { DramaRow } from "@/components/drama-row"
import { mockDramas } from "@/lib/utils"

export default function Home() {
  const trendingDramas = mockDramas
  const newReleases = mockDramas.slice(0, 3)
  const popularDramas = [...mockDramas].reverse()
  const romanceDramas = mockDramas.filter(drama => drama.genre.includes("Romance"))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Content Sections */}
      <div className="space-y-8 pb-12">
        <DramaRow title="Trending Now" dramas={trendingDramas} />
        <DramaRow title="New Releases" dramas={newReleases} variant="compact" />
        <DramaRow title="Popular Dramas" dramas={popularDramas} />
        <DramaRow title="Romance Collection" dramas={romanceDramas} />
      </div>
    </div>
  )
}