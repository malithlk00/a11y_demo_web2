import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-medium">Shop</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/products/new" className="text-muted-foreground hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products/bestsellers" className="text-muted-foreground hover:text-foreground">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/products/sale" className="text-muted-foreground hover:text-foreground">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/products/collections" className="text-muted-foreground hover:text-foreground">
                  Collections
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-medium">Help</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-muted-foreground hover:text-foreground">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-medium">About</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-foreground">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-foreground">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-medium">Connect</h3>
            <div className="flex space-x-3 sm:space-x-4">
              {/* Accessibility violation: Links with no text or accessible name */}
              <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://youtube.com" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-muted-foreground">Subscribe to our newsletter</p>
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  className="flex h-8 sm:h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-xs sm:text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Email"
                  type="text"
                  required
                />
                <button
                  className="inline-flex h-8 sm:h-9 items-center justify-center whitespace-nowrap rounded-md bg-cyan-300 px-3 py-1 text-xs sm:text-sm font-medium text-purple-200 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 border-t pt-6 md:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 ShopNow. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

