"use client";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-page py-16">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
        <h1 className="text-4xl font-black">Something went wrong</h1>
        <p className="mx-auto mt-3 max-w-md leading-7 text-[var(--muted)]">
          {error.message || "The marketplace hit an unexpected issue while loading this page."}
        </p>
        <button type="button" onClick={reset} className="mt-6 rounded-full bg-[#202940] px-6 py-3 font-black text-white">
          Try again
        </button>
      </div>
    </div>
  );
}
