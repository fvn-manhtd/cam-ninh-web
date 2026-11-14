"use client";

import { useEffect, useState } from "react";
import { localePath, type Dictionary, type Locale } from "@/content/dictionaries";
import { site } from "@/content/data/site";
import { PhoneIcon } from "@/components/ui/Icons";

export function Header({ locale, nav }: { locale: Locale; nav: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);
  const other: Locale = locale === "vi" ? "en" : "vi";
  const links = [
    { href: "#about", label: nav.about },
    { href: "#service", label: nav.services },
    { href: "#projects", label: nav.projects },
    { href: "#partners", label: nav.partners },
    { href: "#contact", label: nav.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const langSwitch = (
    <a
      href={localePath[other]}
      hrefLang={other}
      lang={other}
      data-lang-switch
      aria-label={nav.switchLabel}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border-2 border-ink px-3 font-display text-lg font-semibold hover:bg-ink hover:text-white"
    >
      {nav.switchShort}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2">
        {nav.skip}
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="shrink-0" aria-label={site.shortName[locale]}>
          <img src="/images/brand/logo.webp" alt={site.brand} width={800} height={248} className="h-10 w-auto sm:h-11" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="rounded-md px-3 py-2 font-medium text-ink hover:bg-brand-soft">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="btn btn-primary hidden !min-h-11 sm:inline-flex">
            <PhoneIcon className="h-4 w-4" />
            <span className="tabular-nums">{site.phoneDisplay}</span>
          </a>
          {langSwitch}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? nav.close : nav.menu}
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-line bg-white lg:hidden">
        <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line last:border-0">
              <a href={link.href} className="block py-3.5 text-lg font-medium" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="py-3 sm:hidden">
            <a href={site.phoneHref} className="btn btn-primary w-full">
              <PhoneIcon className="h-4 w-4" />
              <span className="tabular-nums">{site.phoneDisplay}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
