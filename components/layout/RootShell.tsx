import type { ReactNode } from "react";
import type { Locale } from "@/content/dictionaries";
import { bodyFont, displayFont } from "@/lib/fonts";
import "@/app/globals.css";

/** Shared <html>/<body> for both locale root layouts, so each locale gets the right lang. */
export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
