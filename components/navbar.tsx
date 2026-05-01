"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCart } from "@/lib/cart-context";

export function Navbar() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl">
      <div className="container-page flex min-h-16 items-center gap-3 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="SPLAX home">
          <Image
            src="/splax-logo.webp"
            alt="SPLAX"
            width={150}
            height={48}
            priority
            className="h-12 w-auto rounded-lg object-contain"
          />
        </Link>

        <form className="mx-auto hidden max-w-xl flex-1 items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-2 md:flex">
          <Search size={18} className="text-[var(--muted)]" />
          <input
            aria-label="Search products"
            className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-[var(--muted)]"
            placeholder="Search headphones, shoes, kitchen tools..."
          />
          <Link
            href="/products"
            className="rounded-full bg-[#202940] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#12192b]"
          >
            Search
          </Link>
        </form>

        <nav className="ml-auto flex items-center gap-2">
          <Link
            href="/products"
            className="hidden rounded-full px-4 py-2 text-sm font-bold text-[var(--foreground)] transition hover:bg-[var(--background)] lg:inline-flex"
          >
            Deals
          </Link>
          <Link
            href="/auth"
            className="inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm font-black text-[var(--foreground)] transition hover:-translate-y-0.5 hover:shadow-md md:w-auto md:px-4 md:py-2"
            aria-label="Sign in"
          >
            <UserRound size={18} />
            <span className="hidden md:inline">Sign in</span>
          </Link>
          <Link
            href="/account"
            className="focus-ring hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition hover:-translate-y-0.5 hover:shadow-md lg:inline-flex"
            aria-label="Account"
          >
            <UserRound size={18} />
          </Link>
          <ThemeToggle />
          <Link
            href="/cart"
            className="focus-ring relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#202940] text-white transition hover:-translate-y-0.5 hover:bg-[#12192b] hover:shadow-md"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#BFC9D1] px-1 text-xs font-black text-[#202940]">
                {count}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] md:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </nav>
      </div>
    </header>
  );
}
