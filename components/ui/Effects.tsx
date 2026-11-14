"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement for the whole page (renders nothing):
 *  - [data-reveal] blocks below the fold fade in when scrolled to
 *  - [data-countup] numbers count up once when visible
 *  - [data-lang-switch] links keep the section the visitor is reading
 * The server HTML is complete and visible without this script.
 */
export function Effects() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[data-lang-switch]");
      if (link && window.location.hash) link.href = link.pathname + window.location.hash;
    };
    document.addEventListener("click", onClick);

    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (!motionOk || !("IntersectionObserver" in window)) {
      return () => document.removeEventListener("click", onClick);
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("reveal-pending");
        revealObserver.observe(el);
      }
    });

    const countObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        countObserver.unobserve(entry.target);
        const el = entry.target as HTMLElement;
        const target = Number(el.dataset.countup);
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 900, 1);
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    document.querySelectorAll("[data-countup]").forEach((el) => countObserver.observe(el));

    return () => {
      document.removeEventListener("click", onClick);
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, []);

  return null;
}
