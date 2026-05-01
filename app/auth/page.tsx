import type { Metadata } from "next";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { AuthFormClient } from "@/components/auth/auth-form-client";

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

      <div>
        <AuthFormClient />
        <p className="mt-5 text-sm text-[var(--muted)]">
          This front-end demo stores a local session in your browser. Connect a real auth provider before accepting production accounts.
        </p>
        <Link href="/products" className="mt-5 inline-flex font-black text-[#202940] dark:text-[#BFC9D1]">
          Continue as guest
        </Link>
      </div>
    </div>
  );
}
