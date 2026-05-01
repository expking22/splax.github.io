"use client";

import Link from "next/link";
import { ShoppingCart, Zap } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function AddToCartButton({
  productId,
  variant = "primary",
  fullWidth = false
}: {
  productId: string;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}) {
  const { addItem } = useCart();
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:shadow-lg";
  const styles =
    variant === "primary"
      ? "bg-[#202940] text-white hover:bg-[#12192b]"
      : "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--background)]";

  return (
    <button
      type="button"
      onClick={() => addItem(productId)}
      className={`${base} ${styles} ${fullWidth ? "w-full" : ""}`}
    >
      <ShoppingCart size={18} />
      Add to cart
    </button>
  );
}

export function BuyNowButton({ productId }: { productId: string }) {
  const { addItem } = useCart();
  return (
    <Link
      href="/checkout"
      onClick={() => addItem(productId)}
      className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#BFC9D1] px-5 py-3 text-sm font-black text-[#202940] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
    >
      <Zap size={18} />
      Buy now
    </Link>
  );
}
