"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BarChart3, Heart, LogOut, PackageCheck, ShieldCheck, ShoppingCart, Truck, UserRound } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

type LocalUser = {
  name: string;
  email: string;
  signedInAt: string;
};

export function DashboardClient() {
  const { count, subtotal, detailedItems } = useCart();
  const [user, setUser] = useState<LocalUser | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("splax-user");
    if (stored) {
      setUser(JSON.parse(stored) as LocalUser);
    }
  }, []);

  function signOut() {
    window.localStorage.removeItem("splax-user");
    setUser(null);
  }

  const stats = [
    { label: "Cart items", value: String(count), icon: ShoppingCart },
    { label: "Cart value", value: formatPrice(subtotal), icon: BarChart3 },
    { label: "Saved deals", value: "6", icon: Heart },
    { label: "Buyer protection", value: "Active", icon: ShieldCheck }
  ];

  return (
    <div className="container-page py-10">
      <section className="grid gap-6 rounded-xl bg-[#202940] p-6 text-white lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#BFC9D1] text-[#202940]">
              <UserRound size={24} />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-200">Professional dashboard</p>
              <h1 className="text-3xl font-black">
                {user ? `Welcome, ${user.name}` : "Welcome to your SPLAX dashboard"}
              </h1>
            </div>
          </div>
          <p className="mt-4 max-w-2xl leading-7 text-slate-200">
            Manage cart activity, order progress, saved products, profile status, and support requests from one clean workspace.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/products" className="rounded-full bg-[#BFC9D1] px-5 py-3 font-black text-[#202940]">
            Shop deals
          </Link>
          {user ? (
            <button type="button" onClick={signOut} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-black text-white">
              <LogOut size={18} />
              Sign out
            </button>
          ) : (
            <Link href="/auth" className="rounded-full border border-white/20 px-5 py-3 font-black text-white">
              Sign in
            </Link>
          )}
        </div>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <stat.icon size={22} className="text-[#202940] dark:text-[#BFC9D1]" />
            <p className="mt-4 text-sm font-bold text-[var(--muted)]">{stat.label}</p>
            <h2 className="mt-1 text-2xl font-black">{stat.value}</h2>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black">Order process</h2>
              <p className="mt-1 text-[var(--muted)]">A clear journey from cart to delivery.</p>
            </div>
            <PackageCheck className="text-[#202940] dark:text-[#BFC9D1]" />
          </div>
          <div className="mt-6 grid gap-4">
            {[
              ["Cart review", "Confirm product quantity and total before checkout."],
              ["Shipping details", "Customer address and phone number are collected securely."],
              ["Payment selection", "Cash on delivery, card, or mobile payment option can be connected."],
              ["Order email", "Order details are sent to splax.bd@gmail.com through FormSubmit."],
              ["Delivery follow-up", "Status can be updated manually or connected to a backend later."]
            ].map(([title, copy], index) => (
              <div key={title} className="grid grid-cols-[40px_1fr] gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#202940] text-sm font-black text-white">{index + 1}</span>
                <div>
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black">Current cart</h2>
              <p className="mt-1 text-[var(--muted)]">Ready for checkout when the shopper is.</p>
            </div>
            <Truck className="text-[#202940] dark:text-[#BFC9D1]" />
          </div>
          <div className="mt-6 grid gap-3">
            {detailedItems.length ? (
              detailedItems.slice(0, 4).map((item) => (
                <div key={item.productId} className="flex items-center justify-between gap-4 rounded-lg bg-[var(--background)] p-3">
                  <div>
                    <p className="font-black">{item.product.title}</p>
                    <p className="text-sm text-[var(--muted)]">Quantity: {item.quantity}</p>
                  </div>
                  <strong>{formatPrice(item.product.price * item.quantity)}</strong>
                </div>
              ))
            ) : (
              <div className="rounded-lg bg-[var(--background)] p-6 text-center">
                <p className="font-black">No cart items yet</p>
                <p className="mt-1 text-sm text-[var(--muted)]">Products added to cart will appear here.</p>
              </div>
            )}
          </div>
          <Link href="/checkout" className="mt-6 inline-flex w-full justify-center rounded-full bg-[#202940] px-5 py-3 font-black text-white">
            Continue to checkout
          </Link>
        </div>
      </section>
    </div>
  );
}
