"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
<<<<<<< HEAD
import { Search, Menu, X, User, Heart, Bell } from "lucide-react"
=======
import { Search, Menu, X, User, Heart, Bell, Home, Compass, Play, BookOpen } from "lucide-react"
>>>>>>> 16fa85071ee1dde0fd0325629937d156e1a69d03
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const navigation = [
<<<<<<< HEAD
  { name: "Home", href: "/" },
  { name: "Browse", href: "/browse" },
  { name: "Favorites", href: "/favorites" },
  { name: "My List", href: "/profile" },
=======
  { name: "Home", href: "/", icon: Home },
  { name: "Browse", href: "/browse", icon: Compass },
  { name: "Watchlist", href: "/favorites", icon: BookOpen },
  { name: "Profile", href: "/profile", icon: User },
>>>>>>> 16fa85071ee1dde0fd0325629937d156e1a69d03
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
<<<<<<< HEAD
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
=======
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">HD</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
                  DramaBox
                </span>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search dramas, actors..."
                  className="pl-10 pr-4 bg-muted/50 border-0 rounded-full h-10"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Mobile Search */}
              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Notifications */}
              <Button size="icon" variant="ghost" className="hidden sm:flex relative">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </Button>

              {/* Profile */}
              <Link href="/profile">
                <Button size="icon" variant="ghost" className="hidden sm:flex">
                  <div className="w-7 h-7 bg-gradient-to-br from-pink-500 to-violet-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
>>>>>>> 16fa85071ee1dde0fd0325629937d156e1a69d03
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
<<<<<<< HEAD
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
=======
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto px-4 py-4">
              <nav className="grid grid-cols-2 gap-4">
                {navigation.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-3 p-3 rounded-xl transition-colors",
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Bottom Navigation - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t">
        <nav className="flex items-center justify-around py-2">
          {navigation.map((item) => {
            const IconComponent = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors min-w-0 flex-1",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <IconComponent className={cn("w-5 h-5", isActive && "fill-current")} />
                <span className="text-xs font-medium truncate">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex items-center space-x-4 p-4 border-b">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search dramas, actors..."
                className="pl-10 pr-4 bg-muted/50 border-0 rounded-full h-10"
                autoFocus
              />
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground">Recent searches will appear here...</p>
          </div>
        </div>
      )}
    </>
>>>>>>> 16fa85071ee1dde0fd0325629937d156e1a69d03
  )
}