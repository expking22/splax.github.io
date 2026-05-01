import type { Metadata } from "next";
import { CheckoutClient } from "@/components/checkout/checkout-client";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout UI with shipping details, payment method selection, and order summary.",
  openGraph: {
    title: "Checkout | SPLAX",
    description: "Complete your shipping and payment details in a secure checkout experience."
  }
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
