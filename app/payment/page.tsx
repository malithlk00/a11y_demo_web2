"use client"

import Link from "next/link"
import { ArrowLeft, LockKeyhole } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PaymentPage() {
  const [paid, setPaid] = useState(false)
  return <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl"><Link href="/cart" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-950"><ArrowLeft className="h-4 w-4" /> Back to cart</Link><div className="grid gap-8 lg:grid-cols-[1fr_320px]"><section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><div className="rounded-full bg-orange-100 p-2 text-orange-700"><LockKeyhole className="h-5 w-5" /></div><div><h1 className="text-2xl font-bold">Payment details</h1><p className="text-sm text-slate-500">This is a dummy payment form.</p></div></div><form className="mt-8 space-y-5" onSubmit={(event) => { event.preventDefault(); setPaid(true) }}><div><label className="mb-2 block text-sm font-medium" htmlFor="name">Name on card</label><Input id="name" placeholder="Alex Morgan" /></div><div><label className="mb-2 block text-sm font-medium" htmlFor="card">Card number</label><Input id="card" placeholder="4242 4242 4242 4242" inputMode="numeric" /></div><div className="grid grid-cols-2 gap-4"><div><label className="mb-2 block text-sm font-medium" htmlFor="expiry">Expiry date</label><Input id="expiry" placeholder="MM / YY" /></div><div><label className="mb-2 block text-sm font-medium" htmlFor="cvc">Security code</label><Input id="cvc" placeholder="123" inputMode="numeric" /></div></div><Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">Pay $149.99</Button>{paid && <p className="rounded-md bg-emerald-100 p-3 text-sm font-medium text-emerald-900" role="status">Payment successful. Your dummy order is confirmed.</p>}</form></section><aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Order total</p><p className="mt-2 text-3xl font-bold">$149.99</p><p className="mt-4 text-sm leading-6 text-slate-500">No real payment will be processed. Use any test card details.</p></aside></div></div></main>
}
