import { Star } from "lucide-react";

export function TestimonialCard({
  name,
  role,
  quote
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <div className="flex gap-1 text-yellow-400" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={17} className="fill-current" />
        ))}
      </div>
      <p className="mt-4 leading-7 text-[var(--muted)]">"{quote}"</p>
      <div className="mt-5">
        <h3 className="font-black">{name}</h3>
        <p className="text-sm text-[var(--muted)]">{role}</p>
      </div>
    </article>
  );
}
