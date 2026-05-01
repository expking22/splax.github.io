import { SlidersHorizontal, Star } from "lucide-react";
import { categories } from "@/lib/products";

export function FilterSidebar() {
  return (
    <aside className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 lg:sticky lg:top-24 lg:self-start">
      <div className="flex items-center gap-2">
        <SlidersHorizontal size={18} />
        <h2 className="text-lg font-black">Filters</h2>
      </div>
      <div className="mt-6 grid gap-6">
        <section>
          <h3 className="font-black">Category</h3>
          <div className="mt-3 grid gap-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                <input type="checkbox" className="h-4 w-4 accent-[#202940]" />
                {category}
              </label>
            ))}
          </div>
        </section>
        <section>
          <h3 className="font-black">Price</h3>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <input
              aria-label="Minimum price"
              placeholder="৳0"
              className="focus-ring rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm"
            />
            <input
              aria-label="Maximum price"
              placeholder="৳30,000"
              className="focus-ring rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm"
            />
          </div>
        </section>
        <section>
          <h3 className="font-black">Rating</h3>
          <div className="mt-3 grid gap-2">
            {[4, 3].map((rating) => (
              <label key={rating} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                <input type="radio" name="rating" className="h-4 w-4 accent-[#202940]" />
                <span className="flex items-center gap-1">
                  {rating}+ <Star size={14} className="fill-yellow-400 text-yellow-400" />
                </span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
