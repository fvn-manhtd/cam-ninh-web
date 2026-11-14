import type { Dictionary, Locale } from "@/content/dictionaries";
import { gallery, projects } from "@/content/data/projects";
import { img } from "@/content/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gallery } from "@/components/ui/Gallery";

export function Projects({ locale, dict }: { locale: Locale; dict: Dictionary["projects"] }) {
  const labels = { open: dict.open, close: dict.close, prev: dict.prev, next: dict.next };
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading id="projects-title" title={dict.title} />

        {/* Table from md up; the same rows as stacked entries on phones. */}
        <table className="hidden w-full border-collapse text-left md:table" data-reveal>
          <thead>
            <tr className="bg-brand font-display text-xl text-ink">
              <th scope="col" className="w-[30%] px-4 py-3 font-bold">{dict.colClient}</th>
              <th scope="col" className="w-[13%] px-4 py-3 font-bold">{dict.colYear}</th>
              <th scope="col" className="px-4 py-3 font-bold">{dict.colScope}</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b border-line align-top odd:bg-mist/60">
                <th scope="row" className="px-4 py-3.5 font-semibold">{project.client[locale]}</th>
                <td className="whitespace-nowrap px-4 py-3.5 tabular-nums text-steel">{project.year}</td>
                <td className="px-4 py-3.5">{project.scope[locale]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="border-t-2 border-ink md:hidden">
          {projects.map((project, index) => (
            <li key={index} className="border-b border-line py-4">
              <p className="font-display text-xl font-bold tabular-nums text-brand-deep">{project.year}</p>
              <p className="font-semibold">{project.client[locale]}</p>
              <p className="mt-1 text-steel">{project.scope[locale]}</p>
            </li>
          ))}
        </ul>

        <h3 className="mb-8 mt-20 font-display text-3xl font-semibold md:text-4xl">{dict.galleryTitle}</h3>
        <Gallery
          columns="photos"
          labels={labels}
          items={gallery.map((entry) => ({ ...img(entry.image), caption: entry.caption }))}
        />
      </div>
    </section>
  );
}
