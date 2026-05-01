import type { Metadata } from "next";
import { CreditCard, LockKeyhole, MapPin, Truck } from "lucide-react";
import { formatPrice } from "@/lib/products";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout UI with shipping details, payment method selection, and order summary.",
  openGraph: {
    title: "Checkout | SPLAX",
    description: "Complete your shipping and payment details in a secure checkout experience."
  }
};

export default function CheckoutPage() {
  const demoTotal = 47040;

  return (
    <div className="container-page py-10">
      <div className="flex items-center gap-3">
        <LockKeyhole className="text-[#202940] dark:text-[#BFC9D1]" />
        <h1 className="text-4xl font-black">Secure checkout</h1>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <form className="grid gap-6">
          <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <h2 className="text-xl font-black">Shipping details</h2>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {["Full name", "Email address", "Phone number", "City", "Address", "Postal code"].map((label) => (
                <label key={label} className={label === "Address" ? "sm:col-span-2" : ""}>
                  <span className="text-sm font-bold">{label}</span>
                  <input className="focus-ring mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3" placeholder={label} />
                </label>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-center gap-2">
              <CreditCard size={20} />
              <h2 className="text-xl font-black">Payment method</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {["Credit or debit card", "PayPal", "Cash on delivery"].map((method, index) => (
                <label key={method} className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 font-bold">
                  <input type="radio" name="payment" defaultChecked={index === 0} className="h-4 w-4 accent-[#202940]" />
                  {method}
                </label>
              ))}
            </div>
          </section>
        </form>

        <aside className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-2xl font-black">Order summary</h2>
          <div className="mt-5 grid gap-3 text-sm">
            <div className="flex justify-between"><span className="text-[var(--muted)]">Items</span><strong>{formatPrice(demoTotal)}</strong></div>
            <div className="flex justify-between"><span className="text-[var(--muted)]">Shipping</span><strong>Free</strong></div>
            <div className="flex justify-between"><span className="text-[var(--muted)]">Buyer protection</span><strong>Included</strong></div>
            <div className="border-t border-[var(--border)] pt-3 text-lg">
              <div className="flex justify-between"><span className="font-black">Total</span><strong>{formatPrice(demoTotal)}</strong></div>
            </div>
          </div>
          <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#202940] px-6 py-3 font-black text-white transition hover:bg-[#12192b]">
            <Truck size={18} /> Place order
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-[var(--muted)]">
            This checkout is UI-only and ready to connect to payment and order APIs.
          </p>
        </aside>
      </div>
    </div>
  );
}
