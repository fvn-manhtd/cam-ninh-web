import type { Dictionary } from "@/content/dictionaries";
import { certificates, clients, partners } from "@/content/data/partners";
import { img } from "@/content/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Gallery } from "@/components/ui/Gallery";

function LogoTile({ name, image, className = "h-28 w-44 shrink-0" }: { name: string; image: string; className?: string }) {
  const logo = img(image);
  return (
    <li className={`flex ${className} items-center justify-center overflow-hidden rounded-xl border-2 border-brand bg-white`}>
      <img src={logo.src} alt={name} width={logo.width} height={logo.height} loading="lazy" className="h-full w-full object-contain" />
    </li>
  );
}

export function Partners({ dict }: { dict: Dictionary }) {
  const labels = { open: dict.projects.open, close: dict.projects.close, prev: dict.projects.prev, next: dict.projects.next };
  return (
    <section id="partners" aria-labelledby="partners-title" className="hex-bg bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading id="partners-title" title={dict.partners.title} />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4" data-reveal>
          {partners.map((partner) => <LogoTile key={partner.name} {...partner} className="h-32" />)}
        </ul>

        <h3 className="mb-8 mt-20 font-display text-3xl font-semibold md:text-4xl">{dict.partners.clientsTitle}</h3>
      </div>
      {/* Client logos drift sideways; with reduced motion they sit in a static wrapped grid. */}
      <div className="marquee overflow-hidden px-4">
        <ul className="marquee-track">
          {clients.map((client) => <LogoTile key={client.name} {...client} />)}
          <li className="marquee-copy" aria-hidden="true">
            <ul className="contents">
              {clients.map((client) => <LogoTile key={client.name} name="" image={client.image} />)}
            </ul>
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
        <SectionHeading id="certificates-title" title={dict.certificates.title} lead={dict.certificates.lead} />
        <Gallery
          columns="documents"
          labels={labels}
          items={certificates.map((certificate) => ({ ...img(certificate.image), caption: certificate.title }))}
        />
      </div>
    </section>
  );
}
