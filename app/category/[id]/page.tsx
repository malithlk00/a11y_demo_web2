import Image from "next/image"
import Link from "next/link"

const categories = [
  { id: "1", name: "Clothing", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop" },
  { id: "2", name: "Accessories", image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1000&auto=format&fit=crop" },
  { id: "3", name: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop" },
]

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const category = categories.find((item) => item.id === id) ?? categories[0]

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-950">Back to shop</Link>
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
          <Image src={category.image} alt="" width={1200} height={360} className="h-56 w-full object-cover" />
          <div className="p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500">Category collection</p>
            <h1 className="mt-2 text-4xl font-bold">{category.name}</h1>
            <p className="mt-3 text-slate-600">Explore products from this collection.</p>
            <Link href="/product?id=1" className="mt-6 inline-flex rounded-md bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700">Browse products</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
