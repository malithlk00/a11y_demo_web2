import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop",
    count: "124 products",
  },
  {
    id: 2,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1000&auto=format&fit=crop",
    count: "64 products",
  },
  {
    id: 3,
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
    count: "97 products",
  },
]

export default function Categories() {
  return (
    <section className="w-full bg-muted/50 py-8 md:py-12 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Shop by Category
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our collections and find what you're looking for
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 mt-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  //alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <h5 className="text-xl sm:text-2xl font-bold">{category.name}</h5>
                  <p className="mt-2 text-xs sm:text-sm">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

