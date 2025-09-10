"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, X, User, Heart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Browse", href: "/browse" },
  { name: "Favorites", href: "/favorites" },
  { name: "My List", href: "/profile" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-white font-bold text-xl">DramaHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  pathname === item.href
                    ? "text-white"
                    : "text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search dramas..."
                    className="w-64 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    autoFocus
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              ) : (
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-400 hover:text-white"
                >
                  <Search className="w-5 h-5" />
                </Button>
              )}
            </div>

            {/* Mobile Search */}
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden text-gray-400 hover:text-white"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Notifications */}
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <Bell className="w-5 h-5" />
            </Button>

            {/* Favorites */}
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <Heart className="w-5 h-5" />
            </Button>

            {/* Profile */}
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white px-2 py-1",
                    pathname === item.href
                      ? "text-white bg-gray-800 rounded"
                      : "text-gray-300"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Search Bar */}
            <div className="mt-4 px-2">
              <Input
                type="text"
                placeholder="Search dramas..."
                className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}