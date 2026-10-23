import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/product" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950"><ArrowLeft className="h-4 w-4" /> Continue shopping</Link>
        <h1 className="text-4xl font-bold tracking-tight">Your cart</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex gap-5 border-b border-slate-200 pb-6">
              <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" alt="" width={120} height={120} className="h-24 w-24 rounded-lg object-cover" />
              <div className="flex-1"><p className="font-semibold">Minimalist Watch</p><p className="mt-1 text-sm text-slate-500">Leather / Silver</p><p className="mt-3 font-semibold">$149.99</p></div>
              <div className="flex flex-col items-end justify-between"><button className="text-slate-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button><div className="flex items-center rounded-md border border-slate-300"><button className="p-2"><Minus className="h-3 w-3" /></button><span className="px-2 text-sm">1</span><button className="p-2"><Plus className="h-3 w-3" /></button></div></div>
            </div>
            <p className="pt-5 text-sm text-slate-500">Free standard shipping · Arrives in 3–5 business days</p>
          </section>
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-lg font-bold">Order summary</h2><div className="mt-6 space-y-3 text-sm"><div className="flex justify-between"><span>Subtotal</span><span>$149.99</span></div><div className="flex justify-between"><span>Shipping</span><span className="text-emerald-700">Free</span></div><div className="flex justify-between border-t pt-3 text-base font-bold"><span>Total</span><span>$149.99</span></div></div><Button asChild className="mt-6 w-full bg-orange-600 hover:bg-orange-700"><Link href="/payment">Checkout</Link></Button><p className="mt-3 text-center text-xs text-slate-500">Dummy checkout for accessibility testing</p></aside>
        </div>
      </div>
    </main>
  )
}
