import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole, Mail, UserPlus } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign In or Create Account",
  description: "Sign in and signup UI for customers joining the SPLAX ecommerce marketplace.",
  openGraph: {
    title: "Sign In or Create Account | SPLAX",
    description: "Access your marketplace account, saved products, and protected checkout."
  }
};

export default function AuthPage() {
  return (
    <div className="container-page grid min-h-[calc(100vh-220px)] gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <section className="rounded-xl bg-[#202940] p-8 text-white">
        <UserPlus size={36} className="text-[#BFC9D1]" />
        <h1 className="mt-4 text-4xl font-black">Shop faster with a free account</h1>
        <p className="mt-4 leading-8 text-slate-200">
          Save products, keep addresses ready, review orders, and checkout faster across trusted marketplace sellers.
        </p>
        <div className="mt-6 grid gap-3 text-sm font-bold">
          <span>Buyer protection on eligible orders</span>
          <span>Saved carts across devices</span>
          <span>Delivery and price-drop updates</span>
        </div>
      </section>

      <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
        <h2 className="text-3xl font-black">Sign in / Create account</h2>
        <p className="mt-2 text-[var(--muted)]">Use your email to continue securely.</p>
        <form className="mt-6 grid gap-4">
          <label>
            <span className="text-sm font-bold">Email address</span>
            <div className="mt-2 flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3">
              <Mail size={18} className="text-[var(--muted)]" />
              <input type="email" name="email" className="w-full bg-transparent outline-none" placeholder="you@example.com" />
            </div>
          </label>
          <label>
            <span className="text-sm font-bold">Password</span>
            <div className="mt-2 flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3">
              <LockKeyhole size={18} className="text-[var(--muted)]" />
              <input type="password" name="password" className="w-full bg-transparent outline-none" placeholder="Enter password" />
            </div>
          </label>
          <button type="button" className="mt-2 rounded-full bg-[#202940] px-6 py-3 font-black text-white transition hover:bg-[#12192b]">
            Sign in securely
          </button>
        </form>
        <p className="mt-5 text-sm text-[var(--muted)]">
          By continuing, you agree to protected marketplace terms and seller communication updates.
        </p>
        <Link href="/products" className="mt-5 inline-flex font-black text-[#202940] dark:text-[#BFC9D1]">
          Continue as guest
        </Link>
      </section>
    </div>
  );
}
