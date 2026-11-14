import type { Dictionary, Locale } from "@/content/dictionaries";
import { site } from "@/content/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About({ locale, dict }: { locale: Locale; dict: Dictionary["about"] }) {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: dict.info.name, value: `${site.legalName.vi} / ${site.legalName.en}` },
    { label: dict.info.address, value: site.address[locale] },
    { label: dict.info.hotline, value: <a className="underline underline-offset-4" href={site.phoneHref}>{site.phoneDisplay}</a> },
    { label: dict.info.email, value: <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a> },
    { label: dict.info.website, value: site.website },
    { label: dict.info.taxCode, value: site.taxCode },
    { label: dict.info.representative, value: site.representative[locale] },
    { label: dict.info.position, value: site.position[locale] },
  ];
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading id="about-title" title={dict.title} />
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div data-reveal>
            <p className="text-lg">{dict.body}</p>
            <div className="mt-8 border-b-[6px] border-ink bg-brand p-6 font-medium text-ink sm:p-8">
              {dict.letter.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mb-4">{paragraph}</p>
              ))}
              <p>{dict.regards}</p>
              <p className="mt-5 text-right">
                <span className="block">{site.legalName[locale]}</span>
                <span className="block italic">{site.position[locale]}</span>
                <span className="block font-display text-2xl font-bold">{site.directorName}</span>
              </p>
            </div>
          </div>
          <div data-reveal>
            <h3 className="font-display text-3xl font-semibold">{dict.infoTitle}</h3>
            <dl className="mt-5 border-t-2 border-ink">
              {rows.map(({ label, value }) => (
                <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-3.5 sm:grid-cols-[9rem_1fr]">
                  <dt className="font-semibold text-steel">{label}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
