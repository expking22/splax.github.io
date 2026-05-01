"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { BarChart3, Eye, LockKeyhole, PackagePlus, Trash2 } from "lucide-react";
import { products, type Product, formatPrice } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const adminPassword = "splax-admin-2026";
const storageKey = "splax-admin-products";
const fieldClass =
  "focus-ring mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3";

type ProductForm = {
  title: string;
  category: string;
  price: string;
  compareAt: string;
  stock: string;
  image: string;
  description: string;
};

const emptyForm: ProductForm = {
  title: "",
  category: "Electronics",
  price: "",
  compareAt: "",
  stock: "",
  image: "",
  description: ""
};

export function AdminDashboardClient() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [adminProducts, setAdminProducts] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState(products[0]?.id ?? "");

  useEffect(() => {
    setIsUnlocked(window.localStorage.getItem("splax-admin-unlocked") === "true");
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      setAdminProducts(JSON.parse(stored) as Product[]);
    }
  }, []);

  const allProducts = useMemo(() => [...adminProducts, ...products], [adminProducts]);
  const selectedProduct = allProducts.find((product) => product.id === selectedId) ?? allProducts[0];
  const inventoryValue = allProducts.reduce((total, product) => total + product.price * product.stock, 0);

  function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password === adminPassword) {
      window.localStorage.setItem("splax-admin-unlocked", "true");
      setIsUnlocked(true);
    }
  }

  function addProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const product: Product = {
      id: `admin-${Date.now()}`,
      title: form.title,
      category: form.category,
      price: Number(form.price),
      compareAt: Number(form.compareAt || form.price),
      rating: 5,
      reviews: 0,
      image:
        form.image ||
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
      gallery: [
        form.image ||
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
      ],
      badge: "Owner Added",
      stock: Number(form.stock),
      seller: "SPLAX Official",
      delivery: "Delivery after confirmation",
      description: form.description,
      specs: {
        Source: "Owner dashboard",
        Status: "Draft product",
        Currency: "BDT"
      }
    };
    const nextProducts = [product, ...adminProducts];
    setAdminProducts(nextProducts);
    setSelectedId(product.id);
    setForm(emptyForm);
    window.localStorage.setItem(storageKey, JSON.stringify(nextProducts));
  }

  function removeProduct(productId: string) {
    const nextProducts = adminProducts.filter((product) => product.id !== productId);
    setAdminProducts(nextProducts);
    window.localStorage.setItem(storageKey, JSON.stringify(nextProducts));
  }

  if (!isUnlocked) {
    return (
      <div className="container-page py-16">
        <section className="mx-auto max-w-xl rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
          <LockKeyhole className="text-[#202940] dark:text-[#BFC9D1]" size={34} />
          <h1 className="mt-4 text-4xl font-black">Owner dashboard</h1>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            This route is for SPLAX owner access. Demo password: splax-admin-2026.
          </p>
          <form onSubmit={unlock} className="mt-6 grid gap-4">
            <label>
              <span className="text-sm font-bold">Admin password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={fieldClass}
                placeholder="Enter owner password"
              />
            </label>
            <button type="submit" className="rounded-full bg-[#202940] px-6 py-3 font-black text-white">
              Unlock dashboard
            </button>
          </form>
          <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
            For true private access on your hosting, protect this route with server authentication or a backend admin panel.
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <section className="rounded-xl bg-[#202940] p-8 text-white">
        <p className="text-sm font-black uppercase tracking-wide text-[#BFC9D1]">Owner only</p>
        <h1 className="mt-2 text-4xl font-black">Professional SPLAX dashboard</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-200">
          Add products, inspect product details, review inventory value, and manage order collection through {siteConfig.supportEmail}.
        </p>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-3">
        {[
          ["Total products", String(allProducts.length), PackagePlus],
          ["Owner-added products", String(adminProducts.length), Eye],
          ["Inventory value", formatPrice(inventoryValue), BarChart3]
        ].map(([label, value, Icon]) => (
          <article key={String(label)} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <Icon className="text-[#202940] dark:text-[#BFC9D1]" size={24} />
            <p className="mt-4 text-sm font-bold text-[var(--muted)]">{String(label)}</p>
            <h2 className="mt-1 text-2xl font-black">{String(value)}</h2>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={addProduct} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-2xl font-black">Add product</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="text-sm font-bold">Product title</span>
              <input required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className={fieldClass} placeholder="SPLAX premium gadget" />
            </label>
            <label>
              <span className="text-sm font-bold">Category</span>
              <input required value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className={fieldClass} placeholder="Electronics" />
            </label>
            <label>
              <span className="text-sm font-bold">Stock</span>
              <input required type="number" min="0" value={form.stock} onChange={(event) => setForm({ ...form, stock: event.target.value })} className={fieldClass} placeholder="20" />
            </label>
            <label>
              <span className="text-sm font-bold">Price in taka</span>
              <input required type="number" min="0" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} className={fieldClass} placeholder="15000" />
            </label>
            <label>
              <span className="text-sm font-bold">Compare price</span>
              <input type="number" min="0" value={form.compareAt} onChange={(event) => setForm({ ...form, compareAt: event.target.value })} className={fieldClass} placeholder="18000" />
            </label>
            <label className="sm:col-span-2">
              <span className="text-sm font-bold">Image URL</span>
              <input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} className={fieldClass} placeholder="https://..." />
            </label>
            <label className="sm:col-span-2">
              <span className="text-sm font-bold">Description</span>
              <textarea required rows={4} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className={`${fieldClass} resize-none`} placeholder="Write product benefits, quality, delivery, and warranty details." />
            </label>
          </div>
          <button type="submit" className="mt-5 rounded-full bg-[#202940] px-6 py-3 font-black text-white">
            Add product to dashboard
          </button>
        </form>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-2xl font-black">Product details</h2>
          <select value={selectedProduct?.id} onChange={(event) => setSelectedId(event.target.value)} className={fieldClass} aria-label="Select product">
            {allProducts.map((product) => (
              <option key={product.id} value={product.id}>{product.title}</option>
            ))}
          </select>
          {selectedProduct ? (
            <article className="mt-5 overflow-hidden rounded-lg border border-[var(--border)]">
              <div className="relative aspect-[4/3] bg-[var(--background)]">
                <Image src={selectedProduct.image} alt={selectedProduct.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="grid gap-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black">{selectedProduct.title}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">{selectedProduct.category} - {selectedProduct.seller}</p>
                  </div>
                  {selectedProduct.id.startsWith("admin-") ? (
                    <button type="button" onClick={() => removeProduct(selectedProduct.id)} className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-2 text-sm font-bold text-red-600">
                      <Trash2 size={15} />
                      Remove
                    </button>
                  ) : null}
                </div>
                <p className="text-2xl font-black">{formatPrice(selectedProduct.price)}</p>
                <p className="leading-7 text-[var(--muted)]">{selectedProduct.description}</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  <div className="rounded-lg bg-[var(--background)] p-3"><strong>Stock</strong><p>{selectedProduct.stock}</p></div>
                  <div className="rounded-lg bg-[var(--background)] p-3"><strong>Rating</strong><p>{selectedProduct.rating}</p></div>
                  <div className="rounded-lg bg-[var(--background)] p-3"><strong>Delivery</strong><p>{selectedProduct.delivery}</p></div>
                </div>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="text-2xl font-black">Order and customer details</h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          Checkout orders and account support forms are sent to {siteConfig.supportEmail} through FormSubmit. To view all order details inside this dashboard across devices, connect your hosting to a backend database such as Supabase, Firebase, MongoDB, or your own API.
        </p>
      </section>
    </div>
  );
}
