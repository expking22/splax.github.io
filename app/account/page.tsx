import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Mail, MapPin, Package, Send, Settings, ShieldCheck, UserRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Account",
  description: "Account dashboard UI for orders, saved items, addresses, security, and marketplace preferences.",
  openGraph: {
    title: "Account | SPLAX",
    description: "Manage orders, saved items, addresses, and secure account settings."
  }
};

export default function AccountPage() {
  const cards = [
    { Icon: Package, title: "Orders", copy: "Track recent purchases and delivery status." },
    { Icon: Heart, title: "Saved items", copy: "Return to products you're considering." },
    { Icon: MapPin, title: "Addresses", copy: "Manage shipping destinations." },
    { Icon: ShieldCheck, title: "Security", copy: "Review password and account protection." },
    { Icon: Settings, title: "Preferences", copy: "Tune notifications and shopping settings." }
  ];

  return (
    <div className="container-page py-10">
      <section className="rounded-xl bg-[#202940] p-8 text-white">
        <UserRound size={36} className="text-[#BFC9D1]" />
        <h1 className="mt-4 text-4xl font-black">Welcome back, shopper</h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-200">
          Your account dashboard keeps orders, saved products, addresses, and trust settings within easy reach.
        </p>
        <Link href="/auth" className="mt-6 inline-flex rounded-full bg-[#BFC9D1] px-6 py-3 font-black text-[#202940]">
          Sign in to sync purchases
        </Link>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ Icon, title, copy }) => (
          <article key={title} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:shadow-lg">
            <Icon size={24} className="text-[#202940] dark:text-[#BFC9D1]" />
            <h2 className="mt-4 text-xl font-black">{title}</h2>
            <p className="mt-2 leading-7 text-[var(--muted)]">{copy}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
        <div>
          <Mail size={30} className="text-[#202940] dark:text-[#BFC9D1]" />
          <h2 className="mt-4 text-3xl font-black">Account support request</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            Send account, order, seller, or product questions directly to the SPLAX team. Submissions go to splax.bd@gmail.com.
          </p>
        </div>

        <form
          action="https://formsubmit.co/splax.bd@gmail.com"
          method="POST"
          className="grid gap-4"
        >
          <input type="hidden" name="_subject" value="New SPLAX account support request" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000/account?submitted=true" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span className="text-sm font-bold">Full name</span>
              <input
                name="name"
                required
                className="focus-ring mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3"
                placeholder="Your name"
              />
            </label>
            <label>
              <span className="text-sm font-bold">Email address</span>
              <input
                type="email"
                name="email"
                required
                className="focus-ring mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label>
            <span className="text-sm font-bold">Request type</span>
            <select
              name="request_type"
              required
              className="focus-ring mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3"
              defaultValue=""
            >
              <option value="" disabled>Select a request type</option>
              <option value="Order support">Order support</option>
              <option value="Account access">Account access</option>
              <option value="Seller question">Seller question</option>
              <option value="Product inquiry">Product inquiry</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            <span className="text-sm font-bold">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="focus-ring mt-2 w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3"
              placeholder="Tell us what you need help with"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202940] px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#12192b]"
          >
            <Send size={18} />
            Submit request
          </button>
        </form>
      </section>
    </div>
  );
}
