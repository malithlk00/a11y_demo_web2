import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Minimalist Watch",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    category: "Bags",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=800&auto=format&fit=crop",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    category: "Clothing",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Featured Products
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our handpicked selection of premium products
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 mt-8">
          {products.map((product, index) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  // alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  id="product-image"
                />
              </div>
              <CardContent className="p-4">
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-muted-foreground">{product.category}</p>
                  <h3 className="text-sm sm:text-base font-medium">{product.name}</h3>
                  <p className="text-sm sm:text-base font-bold">{product.price}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full text-xs sm:text-sm"
                  tabIndex={index === 0 ? 50 : index === 1 ? 35 : index === 2 ? 45 : 40}
                  id="add-to-cart"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-10">
          <Link href="/products">
            <Button variant="outline" size="lg" className="text-xs sm:text-sm" tabIndex={60} id="view-all">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

