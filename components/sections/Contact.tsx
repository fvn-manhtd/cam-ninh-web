import type { Dictionary, Locale } from "@/content/dictionaries";
import { site } from "@/content/data/site";
import { services } from "@/content/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

export function Contact({ locale, dict }: { locale: Locale; dict: Dictionary["contact"] }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading id="contact-title" title={dict.title} lead={dict.lead} />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <QuoteForm dict={dict.form} topics={services.map((service) => service.name[locale])} />

          <div>
            <ul className="space-y-5 border-t-2 border-ink pt-6 text-lg">
              <li className="flex gap-4">
                <PhoneIcon className="mt-1 h-6 w-6 shrink-0 text-brand-deep" />
                <div>
                  <p className="text-sm font-semibold text-steel">{dict.phoneLabel}</p>
                  <a href={site.phoneHref} className="font-display text-3xl font-bold tabular-nums underline-offset-4 hover:underline">{site.phoneDisplay}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <MailIcon className="mt-1 h-6 w-6 shrink-0 text-brand-deep" />
                <div>
                  <p className="text-sm font-semibold text-steel">{dict.emailLabel}</p>
                  <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">{site.email}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <PinIcon className="mt-1 h-6 w-6 shrink-0 text-brand-deep" />
                <div>
                  <p className="text-sm font-semibold text-steel">{dict.addressLabel}</p>
                  <p className="font-semibold">{site.address[locale]}</p>
                </div>
              </li>
            </ul>
            <iframe
              title={dict.mapTitle}
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 h-72 w-full rounded-xl border-2 border-brand"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
