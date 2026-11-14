import type { Dictionary, Locale } from "@/content/dictionaries";
import { services } from "@/content/data/services";
import { equipment } from "@/content/data/equipment";
import { img } from "@/content/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceTabs, type ServicePanel } from "@/components/ui/ServiceTabs";

export function Services({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const panels: ServicePanel[] = services.map((service) => ({
    id: service.id,
    name: service.name[locale],
    intro: service.intro[locale],
    points: service.points.map((point) => point[locale]),
    photos: service.photos.map((photo) => ({
      ...img(photo.image),
      label: typeof photo.label === "string" ? photo.label : photo.label[locale],
    })),
  }));

  return (
    <section id="service" aria-labelledby="service-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading id="service-title" title={dict.services.title} lead={dict.services.lead} />
        <ServiceTabs panels={panels} label={dict.services.tabsLabel} />

        <div className="mt-20" data-reveal>
          <h3 id="equipment" className="font-display text-3xl font-semibold md:text-4xl">{dict.equipment.title}</h3>
          <p className="mt-2 max-w-2xl text-steel">{dict.equipment.lead}</p>
          <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((group) => (
              <div key={group.group.en}>
                <h4 className="border-b-2 border-ink pb-2 font-semibold">{group.group[locale]}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-line py-2.5 text-steel">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
