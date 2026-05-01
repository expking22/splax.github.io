import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CartProvider } from "@/lib/cart-context";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SPLAX | Premium Global Ecommerce Marketplace",
    template: "%s | SPLAX"
  },
  description:
    "Shop trusted sellers, fast delivery deals, secure payments, and premium product discovery across electronics, fashion, home, beauty, and more.",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "512x512"
      }
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png"
  },
  openGraph: {
    title: "SPLAX | Premium Global Ecommerce Marketplace",
    description:
      "A modern ecommerce marketplace built for fast discovery, trusted sellers, and high-converting shopping experiences.",
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: "/splax-logo.webp",
        alt: "SPLAX"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <CartProvider>
          <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
