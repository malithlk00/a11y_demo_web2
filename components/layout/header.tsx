"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, User, Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import CategoryMenu from "./category-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories", hasSubmenu: true },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 md:px-6">
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" tabIndex={10}>
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px] md:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base sm:text-lg font-medium transition-colors hover:text-primary"
                    id="nav-item"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2" tabIndex={1}>
            <span className="text-lg sm:text-xl font-bold">A11Y ShopNow</span>
          </Link>
          <nav className="hidden lg:flex lg:gap-6 lg:ml-10">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary py-2"
                  tabIndex={index === 2 ? 8 : index === 1 ? 4 : 3}
                  id="main-nav-item"
                >
                  {item.name}
                </Link>
                {item.hasSubmenu && <CategoryMenu />}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {showSearch ? (
            <div className="relative flex items-center">
              <Input
                className="w-[150px] sm:w-[200px] md:w-[300px]"
                placeholder="Search products..."
                type="search"
                tabIndex={2}
                id="search-input"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0"
                onClick={() => setShowSearch(false)}
                tabIndex={7}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)} tabIndex={5} id="search-button">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex" tabIndex={6} id="account-button">
            <User className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative" tabIndex={9} id="cart-button">
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Cart</span>
            <span className="absolute right-0 top-0 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-primary text-[8px] sm:text-[10px] font-medium text-primary-foreground">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

