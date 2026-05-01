export default function Loading() {
  return (
    <div className="container-page grid gap-6 py-10">
      <div className="h-10 w-64 animate-pulse rounded-lg bg-[var(--secondary)]/40" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="aspect-[4/3] animate-pulse rounded-lg bg-[var(--secondary)]/40" />
            <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-[var(--secondary)]/40" />
            <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-[var(--secondary)]/40" />
            <div className="mt-5 h-11 animate-pulse rounded-full bg-[var(--secondary)]/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
