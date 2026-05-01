import Link from "next/link";
import Image from "next/image";
import { CreditCard, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Verified sellers" },
  { icon: CreditCard, label: "Secure payments" },
  { icon: Truck, label: "Fast shipping" },
  { icon: RotateCcw, label: "Easy returns" }
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-page py-10">
        <div className="grid gap-6 rounded-xl bg-[#202940] p-6 text-white sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon size={22} className="text-[#BFC9D1]" />
              <span className="font-bold">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/splax-logo.webp"
              alt="SPLAX"
              width={150}
              height={48}
              className="h-12 w-auto rounded-lg object-contain"
            />
            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
              A premium ecommerce marketplace for trusted deals, quick discovery, and confident checkout.
            </p>
          </div>
          {[
            ["Shop", "Electronics", "Fashion", "Home", "Best sellers"],
            ["Company", "About", "Sellers", "Careers", "Press"],
            ["Support", "Help center", "Returns", "Shipping", "Contact"]
          ].map(([title, ...links]) => (
            <div key={title}>
              <h2 className="text-sm font-black uppercase tracking-wide">{title}</h2>
              <div className="mt-3 grid gap-2">
                {links.map((link) => (
                  <Link
                    key={link}
                    href="/products"
                    className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-[var(--muted)]">Copyright 2026 SPLAX. Built for secure global commerce.</p>
      </div>
    </footer>
  );
}
