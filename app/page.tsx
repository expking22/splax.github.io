import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CreditCard, PackageCheck, RotateCcw, Search, ShieldCheck, Truck } from "lucide-react";
import { FAQItem } from "@/components/home/faq-item";
import { TestimonialCard } from "@/components/home/testimonial-card";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop Everything You Need in One Place",
  description:
    "Discover high-value products from trusted sellers with fast delivery, secure checkout, easy returns, and marketplace-wide deals.",
  openGraph: {
    title: "Shop Everything You Need in One Place | SPLAX",
    description: "Fast delivery, trusted sellers, sharp prices, and premium ecommerce discovery."
  }
};

const features = [
  { icon: PackageCheck, title: "Wide product range", copy: "Curated electronics, home, fashion, travel, beauty, and kitchen essentials." },
  { icon: CreditCard, title: "Secure payments", copy: "Encrypted checkout with transparent totals before you place an order." },
  { icon: Truck, title: "Fast delivery", copy: "Priority sellers and clear delivery windows keep your order moving." },
  { icon: RotateCcw, title: "Easy returns", copy: "Simple return options and seller accountability on eligible orders." }
];

export default function HomePage() {
  return (
    <>
      <section className="bg-[var(--surface)]">
        <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div>
            <p className="inline-flex rounded-full bg-[var(--background)] px-4 py-2 text-sm font-black text-[#202940] dark:text-[#BFC9D1]">
              Verified sellers. Real savings. Fast checkout.
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Shop Everything You Need in One Place
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              SPLAX brings premium marketplace discovery, sharp prices, protected payments, and fast delivery into one clean shopping experience.
            </p>
            <form className="mt-7 flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-2 sm:flex-row">
              <label className="flex flex-1 items-center gap-3 px-3">
                <Search size={20} className="text-[var(--muted)]" />
                <span className="sr-only">Search products</span>
                <input
                  className="min-h-12 w-full bg-transparent outline-none placeholder:text-[var(--muted)]"
                  placeholder="Search deals across categories"
                />
              </label>
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#202940] px-6 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#12192b]"
              >
                Shop Now <ArrowRight size={18} />
              </Link>
            </form>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {["10,000+ customers", "4.8 avg rating", "40% avg savings"].map((stat) => (
                <div key={stat} className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-4">
                  <p className="text-sm font-black">{stat}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.slice(0, 2).map((product, index) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className={`${index === 0 ? "sm:row-span-2" : ""} group relative min-h-64 overflow-hidden rounded-xl bg-[#202940]`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                  className="object-cover opacity-85 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <span className="rounded-full bg-[#BFC9D1] px-3 py-1 text-xs font-black text-[#202940]">{product.badge}</span>
                  <h2 className="mt-3 text-xl font-black">{product.title}</h2>
                  <p className="mt-1 text-sm text-slate-200">{product.delivery}</p>
                </div>
              </Link>
            ))}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <h2 className="text-xl font-black">Today's protected deal</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Limited-stock picks with seller verification, secure checkout, and 30-day return support.
              </p>
              <Link href="/products" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#202940] dark:text-[#BFC9D1]">
                Explore deals <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["High prices", "Compare marketplace offers and see meaningful discounts before you buy."],
            ["Slow delivery", "Prioritized logistics and clear delivery promises reduce waiting and guessing."],
            ["Low quality", "Seller ratings, reviews, and return policies make quality easier to judge."]
          ].map(([title, copy]) => (
            <article key={title} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#202940] py-14 text-white">
        <div className="container-page grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-black">A better way to shop global deals</h2>
            <p className="mt-4 leading-8 text-slate-200">
              SPLAX combines competitive pricing, trusted sellers, buyer protection, and a checkout flow designed to keep shoppers confident.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-lg border border-white/15 bg-white/10 p-5">
                <feature.icon className="text-[#BFC9D1]" size={24} />
                <h3 className="mt-4 font-black">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-black">Featured Deals</h2>
            <p className="mt-2 text-[var(--muted)]">High-intent products with strong reviews and urgent savings.</p>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 font-black text-[#202940] dark:text-[#BFC9D1]">
            View all products <ArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="container-page grid gap-5 py-14 lg:grid-cols-3">
        <div className="rounded-lg bg-[#202940] p-6 text-white lg:col-span-1">
          <h2 className="text-3xl font-black">Proof that shoppers feel</h2>
          <p className="mt-3 leading-7 text-slate-200">Real buying signals that build confidence before checkout.</p>
          <div className="mt-6 grid gap-3">
            {["10,000+ happy customers", "2,400+ verified reviews", "97% on-time shipping"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <BadgeCheck className="text-[#BFC9D1]" size={20} />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-3 lg:col-span-2">
          {["Northline", "ApexPay", "ShipGrid", "UrbanKart", "BrightBox", "TrustLayer"].map((brand) => (
            <div key={brand} className="grid min-h-24 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-lg font-black text-[var(--muted)]">
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface)] py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black">Case study: 40% saved on everyday upgrades</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              A repeat shopper bundled headphones, kitchen tools, and travel gear from verified sellers, then used marketplace promos and free-delivery thresholds to save ৳25,680 compared with separate retail purchases.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["৳25,680 saved", "3 sellers", "2-day average delivery"].map((metric) => (
              <div key={metric} className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5 text-center">
                <p className="text-2xl font-black">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <h2 className="text-3xl font-black">Loved by practical shoppers</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <TestimonialCard name="Maya Rahman" role="Small business owner" quote="The product pages made it easy to compare sellers, delivery, and return details. I bought faster because the totals were clear." />
          <TestimonialCard name="Daniel Price" role="Frequent traveler" quote="I found travel gear that arrived before my trip and cost less than my usual stores. The trust badges actually matched the experience." />
          <TestimonialCard name="Sara Ahmed" role="Home office buyer" quote="The checkout felt polished and quick. Reviews, specs, and related products helped me choose without opening ten tabs." />
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-5 md:grid-cols-4">
          {["Browse", "Add to cart", "Checkout", "Delivery"].map((step, index) => (
            <article key={step} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#202940] font-black text-white">{index + 1}</span>
              <h2 className="mt-4 text-xl font-black">{step}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {["Find trusted deals with search and filters.", "Save your picks and adjust quantities.", "Review shipping, payment, and totals.", "Track fast delivery from verified sellers."][index]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-5 py-14 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black">Benefits that remove buying friction</h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            Affordable prices, trusted sellers, quick shipping, and buyer protection work together to make each purchase easier to justify.
          </p>
        </div>
        <div className="grid gap-3">
          <FAQItem question="Are sellers verified?" answer="Marketplace sellers are reviewed for product accuracy, delivery performance, return behavior, and customer ratings." />
          <FAQItem question="Can I return an item?" answer="Eligible products include 30-day return support, and each product page highlights the relevant seller return terms." />
          <FAQItem question="Is checkout secure?" answer="Checkout pages are designed around encrypted payments, clear totals, and visible trust signals before purchase." />
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-xl bg-[#202940] p-8 text-center text-white md:p-12">
          <ShieldCheck className="mx-auto text-[#BFC9D1]" size={34} />
          <h2 className="mt-4 text-3xl font-black">Start Shopping Now</h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-200">
            Explore trusted deals, compare products quickly, and checkout with confidence.
          </p>
          <Link href="/products" className="mt-6 inline-flex rounded-full bg-[#BFC9D1] px-7 py-3 font-black text-[#202940] transition hover:-translate-y-0.5 hover:bg-white">
            Browse best deals
          </Link>
        </div>
      </section>

      <Link href="/products" className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full bg-[#202940] px-6 py-3 text-sm font-black text-white shadow-2xl transition hover:-translate-y-0.5 md:hidden">
        Start Shopping Now
      </Link>
    </>
  );
}
