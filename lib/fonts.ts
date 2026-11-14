import { Barlow_Condensed, Be_Vietnam_Pro } from "next/font/google";

// Self-hosted at build time; both families ship Vietnamese glyphs.
export const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

export const displayFont = Barlow_Condensed({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});
