import type { Metadata } from "next";
import { CartPageClient } from "@/components/cart/cart-page-client";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your cart, adjust quantities, see price breakdowns, and continue to secure checkout.",
  openGraph: {
    title: "Cart | MarketPro",
    description: "Review selected marketplace deals and checkout securely."
  }
};

export default function CartPage() {
  return <CartPageClient />;
}
