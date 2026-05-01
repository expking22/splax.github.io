"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export function CartPageClient() {
  const { detailedItems, subtotal, updateQuantity, removeItem } = useCart();
  const shipping = subtotal > 10000 || subtotal === 0 ? 0 : 120;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  if (!detailedItems.length) {
    return (
      <div className="container-page py-16">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
          <h1 className="text-4xl font-black">Your cart is empty</h1>
          <p className="mx-auto mt-3 max-w-md leading-7 text-[var(--muted)]">
            Add a few trusted deals and they'll appear here with quantity controls and checkout totals.
          </p>
          <Link href="/products" className="mt-6 inline-flex rounded-full bg-[#202940] px-6 py-3 font-black text-white">
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-4xl font-black">Shopping cart</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="grid gap-4" aria-label="Cart products">
          {detailedItems.map((item) => (
            <article key={item.productId} className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 sm:grid-cols-[140px_1fr_auto]">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-[var(--background)]">
                <Image src={item.product.image} alt={item.product.title} fill sizes="140px" className="object-cover" />
              </div>
              <div>
                <h2 className="text-lg font-black">{item.product.title}</h2>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.product.seller} - {item.product.delivery}</p>
                <p className="mt-3 text-xl font-black">{formatPrice(item.product.price)}</p>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:justify-between">
                <div className="flex items-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                  <button type="button" className="p-3" onClick={() => updateQuantity(item.productId, item.quantity - 1)} aria-label="Decrease quantity">
                    <Minus size={16} />
                  </button>
                  <span className="min-w-8 text-center font-black">{item.quantity}</span>
                  <button type="button" className="p-3" onClick={() => updateQuantity(item.productId, item.quantity + 1)} aria-label="Increase quantity">
                    <Plus size={16} />
                  </button>
                </div>
                <button type="button" onClick={() => removeItem(item.productId)} className="inline-flex items-center gap-2 text-sm font-bold text-red-600">
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-2xl font-black">Price breakdown</h2>
          <div className="mt-5 grid gap-3 text-sm">
            <div className="flex justify-between"><span className="text-[var(--muted)]">Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div className="flex justify-between"><span className="text-[var(--muted)]">Shipping</span><strong>{shipping ? formatPrice(shipping) : "Free"}</strong></div>
            <div className="flex justify-between"><span className="text-[var(--muted)]">Estimated tax</span><strong>{formatPrice(tax)}</strong></div>
            <div className="border-t border-[var(--border)] pt-3 text-lg">
              <div className="flex justify-between"><span className="font-black">Total</span><strong>{formatPrice(total)}</strong></div>
            </div>
          </div>
          <Link href="/checkout" className="mt-6 inline-flex w-full justify-center rounded-full bg-[#202940] px-6 py-3 font-black text-white transition hover:bg-[#12192b]">
            Checkout securely
          </Link>
        </aside>
      </div>
    </div>
  );
}
