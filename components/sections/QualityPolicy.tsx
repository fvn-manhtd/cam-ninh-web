import type { Dictionary } from "@/content/dictionaries";
import { CheckIcon } from "@/components/ui/Icons";

export function QualityPolicy({ dict }: { dict: Dictionary["message"] }) {
  return (
    <section aria-labelledby="policy-title" className="bg-brand py-16 text-ink md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_2fr]" data-reveal>
        <h2 id="policy-title" className="font-display text-4xl font-bold leading-tight md:text-5xl">{dict.policyTitle}</h2>
        <ul className="space-y-4 text-lg font-medium">
          {dict.policy.map((line) => (
            <li key={line.slice(0, 24)} className="flex gap-3">
              <CheckIcon className="mt-1.5 h-5 w-5 shrink-0" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
