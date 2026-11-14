import type { Metadata } from "next";
import { dictionaries, localePath, type Locale } from "@/content/dictionaries";
import { site } from "@/content/data/site";

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = dictionaries[locale];
  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath[locale],
      languages: { vi: localePath.vi, en: localePath.en, "x-default": localePath.vi },
    },
    openGraph: {
      type: "website",
      url: localePath[locale],
      siteName: site.brand,
      title: meta.title,
      description: meta.description,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      images: [{ url: "/images/hero/team-switchgear.webp" }],
    },
    icons: { icon: "/favicon.ico" },
  };
}
