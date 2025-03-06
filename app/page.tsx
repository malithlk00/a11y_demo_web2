import HeroBanner from "@/components/hero-banner"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroBanner />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
    </main>
  )
}

