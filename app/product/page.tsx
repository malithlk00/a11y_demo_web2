"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Minus, Plus, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>
        <div className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
          <div className="overflow-hidden rounded-xl bg-slate-100">
            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop" alt="" width={900} height={900} className="h-full w-full object-cover" />
          </div>
          <section className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">Accessories / Featured</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight">Minimalist Watch</h1>
            <p className="mt-4 text-3xl font-bold">$149.99</p>
            <p className="mt-6 leading-7 text-slate-600">A timeless everyday watch with a clean dial, brushed metal case, and soft leather strap. Designed to disappear into your wardrobe while keeping every moment in view.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600"><li>• Stainless steel case</li><li>• Genuine leather strap</li><li>• Water resistant to 30m</li></ul>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center rounded-md border border-slate-300">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-slate-500 hover:text-slate-950"><Minus className="h-4 w-4" /></button>
                <span className="min-w-10 text-center">{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-3 text-slate-500 hover:text-slate-950"><Plus className="h-4 w-4" /></button>
              </div>
              <Button className="flex-1 bg-orange-600 hover:bg-orange-700" onClick={() => setAdded(true)}><ShoppingCart className="mr-2 h-4 w-4" /> Add to cart</Button>
            </div>
            {added && <Link href="/cart" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700"><Check className="h-4 w-4" /> Added. View cart</Link>}
          </section>
        </div>
      </div>
    </main>
  )
}
