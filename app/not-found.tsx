import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-16">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
        <h1 className="text-4xl font-black">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md leading-7 text-[var(--muted)]">
          The page may have moved, or the product is no longer available.
        </p>
        <Link href="/products" className="mt-6 inline-flex rounded-full bg-[#202940] px-6 py-3 font-black text-white">
          Browse products
        </Link>
      </div>
    </div>
  );
}
