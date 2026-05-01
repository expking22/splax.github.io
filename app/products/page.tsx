import type { Metadata } from "next";
import { ProductListingClient } from "@/components/products/product-listing-client";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse marketplace products with category filters, ratings, sale badges, responsive product cards, and secure add-to-cart actions.",
  openGraph: {
    title: "Products | MarketPro",
    description: "Browse trusted marketplace deals across electronics, fashion, home, kitchen, travel, and wearables."
  }
};

export default function ProductsPage() {
  return (
    <div className="container-page py-10">
      <ProductListingClient />
    </div>
  );
}
