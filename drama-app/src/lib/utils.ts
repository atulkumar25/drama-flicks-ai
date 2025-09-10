import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mockDramas = [
  {
    id: 1,
    title: "Moonlight Romance",
    genre: "Romance, Drama",
    year: 2024,
    rating: 9.2,
    episodes: 16,
    status: "Completed",
    poster: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&h=450&fit=crop",
    description: "A heartwarming story of love that blooms under the moonlight between two souls from different worlds.",
    cast: ["Lee Min-ho", "Park Shin-hye", "Kim Woo-bin"],
    director: "Kim Eun-sook"
  },
  {
    id: 2,
    title: "City of Dreams",
    genre: "Thriller, Mystery",
    year: 2024,
    rating: 8.8,
    episodes: 20,
    status: "Ongoing",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=450&fit=crop",
    description: "In a bustling metropolis, secrets unfold as a detective uncovers a conspiracy that shakes the city.",
    cast: ["Song Joong-ki", "Jun Ji-hyun", "Lee Jung-jae"],
    director: "Park Chan-wook"
  },
  {
    id: 3,
    title: "Spring Awakening",
    genre: "Coming of Age, Drama",
    year: 2023,
    rating: 9.0,
    episodes: 12,
    status: "Completed",
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
    description: "A coming-of-age story about friendship, dreams, and the challenges of growing up.",
    cast: ["Park Bo-gum", "Kim Go-eun", "Yoo Ah-in"],
    director: "Lee Chang-dong"
  },
  {
    id: 4,
    title: "Ocean's Heart",
    genre: "Romance, Melodrama",
    year: 2024,
    rating: 8.5,
    episodes: 18,
    status: "Ongoing",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    description: "A love story that spans across oceans, bringing together two hearts against all odds.",
    cast: ["Hyun Bin", "Son Ye-jin", "Kim Soo-hyun"],
    director: "Kim Eun-sook"
  }
]

export const genres = [
  "All", "Romance", "Drama", "Comedy", "Thriller", "Mystery", "Action", "Fantasy", "Historical", "Coming of Age"
]