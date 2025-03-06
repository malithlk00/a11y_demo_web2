import Link from "next/link"
import {
  Laptop,
  Sofa,
  Heart,
  Gamepad2,
  Briefcase,
  Lightbulb,
  Car,
  Watch,
  Smartphone,
  Cat,
  Shirt,
  Scissors,
} from "lucide-react"

const categories = [
  { name: "Furniture", icon: Sofa, href: "/category/furniture" },
  { name: "Beauty & Health", icon: Heart, href: "/category/beauty-health" },
  { name: "Toys & Games", icon: Gamepad2, href: "/category/toys-games" },
  { name: "Luggage, Bags & Shoes", icon: Briefcase, href: "/category/luggage-bags" },
  { name: "Home Improvement & Lighting", icon: Lightbulb, href: "/category/home-improvement" },
  { name: "Automotive & Motorcycle", icon: Car, href: "/category/automotive" },
  { name: "Jewelry, Watches & Accessories", icon: Watch, href: "/category/jewelry" },
  { name: "Consumer Electronics", icon: Smartphone, href: "/category/electronics" },
  { name: "Pet Supplies", icon: Cat, href: "/category/pet-supplies" },
  { name: "Plus Sized Clothing", icon: Shirt, href: "/category/plus-size" },
  { name: "Hair Extensions & Wigs", icon: Scissors, href: "/category/hair" },
  { name: "Computer, Office & Education", icon: Laptop, href: "/category/computer-office" },
]

export default function CategoryMenu() {
  return (
    <div className="absolute left-0 top-full z-50 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out delay-100">
      <div className="rounded-md border bg-background shadow-md">
        <nav className="py-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                href={category.href}
                className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

