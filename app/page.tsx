import HeroBanner from "@/components/hero-banner"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import Newsletter from "@/components/newsletter"
import DemoFrame from "@/components/ui/demo-frame"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroBanner />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-bold mb-8">UI Components Demo</h2>
        <DemoFrame />
      </section>
    </main>
  )
}

