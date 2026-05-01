export function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
      <summary className="cursor-pointer list-none text-base font-black">
        <span className="flex items-center justify-between gap-4">
          {question}
          <span className="text-2xl leading-none text-[var(--muted)] group-open:rotate-45">+</span>
        </span>
      </summary>
      <p className="mt-3 leading-7 text-[var(--muted)]">{answer}</p>
    </details>
  );
}
