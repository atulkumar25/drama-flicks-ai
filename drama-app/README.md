# DramaHub - Next.js Drama Streaming App

A modern, responsive drama streaming application built with Next.js 15, TypeScript, and Tailwind CSS. This application was created from a Figma design to showcase a complete drama streaming platform with multiple interconnected pages and reusable components.

## 🚀 Features

### Pages & Screens
- **Home Page**: Hero section with featured dramas, trending content, and categorized drama rows
- **Browse Page**: Advanced filtering and search functionality with grid/list view options
- **Drama Details**: Comprehensive drama information with cast, episodes, and related content
- **Watch Page**: Video player interface with episode navigation and comments
- **Profile Page**: User dashboard with watchlist, recently watched, and favorites
- **Search Page**: Powerful search with trending searches and suggestions
- **Favorites**: Personal collection management with filtering and sorting

### Components
- **Reusable UI Components**: Buttons, Cards, Inputs with consistent design system
- **Drama Cards**: Flexible card component with multiple variants (default, compact, featured)
- **Navigation**: Responsive header with search functionality and mobile menu
- **Hero Section**: Auto-rotating featured content with smooth transitions
- **Drama Rows**: Horizontal scrolling content sections

### Technical Features
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Theme**: Consistent dark theme throughout the application
- **TypeScript**: Full type safety and better development experience
- **Modern UI/UX**: Clean, modern interface inspired by popular streaming platforms
- **Performance Optimized**: Optimized images, lazy loading, and efficient rendering

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **Image Optimization**: Next.js Image component

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd drama-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗 Project Structure

```
drama-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── browse/            # Browse page
│   │   ├── drama/[id]/        # Dynamic drama details page
│   │   ├── watch/[id]/        # Video player page
│   │   ├── profile/           # User profile page
│   │   ├── search/            # Search page
│   │   ├── favorites/         # Favorites page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── ui/               # Base UI components
│   │   ├── layout/           # Layout components
│   │   ├── drama-card.tsx    # Drama card component
│   │   ├── drama-row.tsx     # Drama row component
│   │   └── hero-section.tsx  # Hero section component
│   └── lib/
│       └── utils.ts          # Utility functions and mock data
├── public/                   # Static assets
└── tailwind.config.ts       # Tailwind CSS configuration
```

## 🎨 Design System

The application follows a consistent design system with:
- **Colors**: Dark theme with purple/pink accent colors
- **Typography**: Inter font family for clean readability
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Components**: Reusable components with variant support
- **Responsive**: Mobile-first responsive design

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with auto-rotating featured dramas
- Multiple content rows (Trending, New Releases, Popular, Romance)
- Responsive grid layout

### Browse Page (`/browse`)
- Advanced filtering by genre
- Search functionality
- Sort options (popularity, title, year, rating)
- Grid and list view modes

### Drama Details (`/drama/[id]`)
- Full drama information and poster
- Cast and crew details
- Episode list with play buttons
- Related dramas section

### Watch Page (`/watch/[id]`)
- Video player interface (placeholder)
- Episode navigation
- Comments section
- Episode list sidebar

### Profile Page (`/profile`)
- User statistics and avatar
- Tabbed interface (Watchlist, Recently Watched, Favorites)
- Progress tracking for watched content

### Search Page (`/search`)
- Real-time search functionality
- Trending and recent searches
- Popular dramas showcase
- Search tips and examples

### Favorites Page (`/favorites`)
- Personal favorites collection
- Watchlist preview
- Filtering and sorting options
- Grid and list view modes

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Collapsible mobile navigation

### Reusable Components
- **Button**: Multiple variants and sizes
- **Card**: Flexible card component
- **Input**: Styled form inputs
- **DramaCard**: Drama display with hover effects
- **DramaRow**: Horizontal scrolling content

### Navigation & Routing
- Smooth client-side navigation
- Dynamic routes for drama details and watch pages
- Breadcrumb navigation
- Active state indicators

## 🔧 Customization

### Adding New Dramas
Update the `mockDramas` array in `src/lib/utils.ts` to add new drama content.

### Styling
The application uses Tailwind CSS with a custom configuration. Modify `tailwind.config.ts` to customize the design system.

### Components
All components are modular and can be easily customized or extended. Check the `src/components/` directory for component implementations.

## 📝 Development Notes

- The application uses mock data for demonstration purposes
- Video player functionality is implemented as a placeholder
- All images use external URLs from Unsplash for demonstration
- The search functionality works with the mock data set
- User authentication and backend integration are not implemented

## 🚀 Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any other Next.js-compatible hosting service.

```bash
npm run build
npm start
```

## 📄 License

This project is created for demonstration purposes based on a Figma design conversion to Next.js.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**