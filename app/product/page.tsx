"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Check, Minus, Plus, ShoppingCart } from "lucide-react"
import { Suspense, useState } from "react"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Minimalist Watch", price: "$149.99", category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=900&auto=format&fit=crop", description: "A timeless everyday watch with a clean dial, brushed metal case, and soft leather strap.", features: ["Stainless steel case", "Genuine leather strap", "Water resistant to 30m"] },
  { id: 2, name: "Leather Backpack", price: "$89.99", category: "Bags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=900&auto=format&fit=crop", description: "A durable leather backpack with room for your daily essentials and a comfortable carry.", features: ["Full-grain leather", "Padded laptop sleeve", "Adjustable shoulder straps"] },
  { id: 3, name: "Wireless Earbuds", price: "$129.99", category: "Electronics", image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=900&auto=format&fit=crop", description: "Clear, balanced sound in a compact wireless design made for everyday listening.", features: ["Active noise cancellation", "24-hour charging case", "Sweat resistant"] },
  { id: 4, name: "Cotton T-Shirt", price: "$29.99", category: "Clothing", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop", description: "A soft, breathable cotton tee with a relaxed fit that works from morning to night.", features: ["100% cotton", "Relaxed fit", "Machine washable"] },
]

function ProductPageContent() {
  const searchParams = useSearchParams()
  const product = products.find((item) => item.id === Number(searchParams.get("id"))) ?? products[0]
  const suggestions = products.filter((item) => item.id !== product.id)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to shop
        </Link>
        <div className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-xl bg-slate-100">
            <Image src={product.image} alt={`${product.name} product photo`} width={900} height={900} className="h-full w-full object-cover" priority />
          </div>
          <section className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-700">{product.category} / Featured</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight">{product.name}</h1>
            <p className="mt-4 text-3xl font-bold">{product.price}</p>
            <p className="mt-6 leading-7 text-slate-600">{product.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">{product.features.map((feature) => <li key={feature}>• {feature}</li>)}</ul>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center rounded-md border border-slate-300" aria-label="Quantity">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-slate-600 hover:text-slate-950"><Minus className="h-4 w-4" aria-hidden="true" /></button>
                <span className="min-w-10 text-center" aria-live="polite">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)} className="p-3 text-slate-600 hover:text-slate-950"><Plus className="h-4 w-4" aria-hidden="true" /></button>
              </div>
              <Button className="flex-1 bg-orange-600 hover:bg-orange-700" onClick={() => setAdded(true)}><ShoppingCart className="mr-2 h-4 w-4" aria-hidden="true" /> Add to cart</Button>
            </div>
            {added && <Link href="/cart" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700"><Check className="h-4 w-4" aria-hidden="true" /> Added. View cart</Link>}
          </section>
        </div>
        <section className="mt-16 rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-md" aria-labelledby="suggestions-heading">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">More from the collection</p>
          <h2 id="suggestions-heading" className="mt-2 text-2xl font-bold">You may also like</h2>
          <p className="mt-2 text-slate-500">Explore a few more customer favorites before you check out.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {suggestions.map((item) => <Link key={item.id} href={`/product?id=${item.id}`} tabIndex={40 + item.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600">
              <Image src={item.image} alt="" width={500} height={400} className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105" />
              <div className="p-4"><p className="text-sm text-slate-400">{item.category}</p><h3 className="mt-1 font-semibold">{item.name}</h3><p className="mt-2 font-bold">{item.price}</p></div>
            </Link>)}
          </div>
        </section>
      </div>
    </main>
  )
}

export default function ProductPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950"><div className="mx-auto max-w-6xl">Loading product...</div></main>}>
      <ProductPageContent />
    </Suspense>
  )
}
