import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-white font-bold text-xl">DramaHub</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Your ultimate destination for Asian dramas. Discover, watch, and fall in love with 
              stories from Korea, Japan, China, Thailand, and more.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Favorites
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-white transition-colors text-sm">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Genres</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/browse?genre=romance" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Romance
                </Link>
              </li>
              <li>
                <Link href="/browse?genre=thriller" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Thriller
                </Link>
              </li>
              <li>
                <Link href="/browse?genre=comedy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Comedy
                </Link>
              </li>
              <li>
                <Link href="/browse?genre=historical" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Historical
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 DramaHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}