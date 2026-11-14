import type { Dictionary, Locale } from "@/content/dictionaries";
import { site } from "@/content/data/site";
import { Gear } from "@/components/ui/Gear";

/** Orange closing block with the gear watermark, after the profile's back cover. */
export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#service", label: dict.nav.services },
    { href: "#projects", label: dict.nav.projects },
    { href: "#partners", label: dict.nav.partners },
    { href: "#contact", label: dict.nav.contact },
  ];
  return (
    <footer className="relative overflow-hidden bg-brand text-ink">
      <Gear className="pointer-events-none absolute -bottom-56 -right-40 h-[38rem] w-[38rem] text-white/15" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold leading-tight">{site.legalName.vi}</p>
          <p className="font-display text-2xl font-semibold">{site.legalName.en}</p>
          <p className="mt-4 max-w-md font-medium">{dict.footer.tagline}</p>
          <address className="mt-6 space-y-1 border-t-2 border-ink/70 pt-5 font-medium not-italic">
            <p>{site.address[locale]}</p>
            <p>
              <a className="underline-offset-4 hover:underline" href={site.phoneHref}>{site.phoneDisplay}</a>
              {" / "}
              <a className="underline-offset-4 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>{dict.footer.taxCode}: {site.taxCode}</p>
          </address>
        </div>
        <nav aria-label="Footer" className="md:justify-self-end">
          <ul className="space-y-2 text-lg font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="underline-offset-4 hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative bg-ink py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} {site.shortName[locale]}. {dict.footer.rights}
      </div>
    </footer>
  );
}
