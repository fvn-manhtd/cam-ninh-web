/** Section title under the profile's header rule: a short orange bar running into a thin double line. */
export function SectionHeading({ id, title, lead }: { id: string; title: string; lead?: string }) {
  return (
    <div className="mb-10 md:mb-14" data-reveal>
      <div className="flex items-center gap-4" aria-hidden="true">
        <span className="h-1.5 w-16 bg-brand" />
        <span className="h-[5px] flex-1 border-y border-ink/50" />
      </div>
      <h2 id={id} className="mt-6 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {lead ? <p className="mt-3 max-w-2xl text-lg text-steel">{lead}</p> : null}
    </div>
  );
}
