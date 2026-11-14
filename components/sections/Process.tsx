import type { Dictionary } from "@/content/dictionaries";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Three steps in sequence, drawn as the profile's chevrons pointing to the next step. */
export function Process({ dict }: { dict: Dictionary["process"] }) {
  return (
    <section aria-labelledby="process-title" className="hex-bg bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading id="process-title" title={dict.title} />
        <ol className="grid gap-6 md:grid-cols-3 md:gap-0" data-reveal>
          {dict.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col md:-ml-px md:first:ml-0">
              <div
                className="flex min-h-24 items-center gap-4 bg-brand px-6 py-4 text-ink md:pl-12 md:[clip-path:polygon(0_0,calc(100%-2rem)_0,100%_50%,calc(100%-2rem)_100%,0_100%,2rem_50%)] md:first:pl-6 md:first:[clip-path:polygon(0_0,calc(100%-2rem)_0,100%_50%,calc(100%-2rem)_100%,0_100%)]"
              >
                <span className="font-display text-5xl font-bold leading-none" aria-hidden="true">{index + 1}</span>
                <h3 className="font-display text-2xl font-bold leading-tight">{step.title}</h3>
              </div>
              <p className="flex-1 border-x-2 border-b-2 border-brand bg-white p-6 text-lg md:mr-8 md:rounded-b-xl">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
