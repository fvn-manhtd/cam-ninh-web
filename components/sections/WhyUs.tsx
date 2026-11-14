import type { Dictionary } from "@/content/dictionaries";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs({ why, message }: { why: Dictionary["why"]; message: Dictionary["message"] }) {
  return (
    <section aria-labelledby="why-title" className="hex-bg bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading id="why-title" title={why.title} />
        {/* Four commitments around one centre, like the profile's wheel diagram. */}
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2" data-reveal>
          {why.items.map((item) => (
            <li key={item.title} className="bg-white p-7 md:p-10">
              <h3 className="border-l-[6px] border-brand pl-4 font-display text-3xl font-semibold leading-none">{item.title}</h3>
              <p className="mt-4 text-steel">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-10 md:grid-cols-2" data-reveal>
          <h2 className="sr-only">{message.title}</h2>
          <div>
            <h3 className="font-display text-3xl font-semibold">{message.missionTitle}</h3>
            <p className="mt-3">{message.mission}</p>
          </div>
          <div>
            <h3 className="font-display text-3xl font-semibold">{message.visionTitle}</h3>
            <p className="mt-3">{message.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
