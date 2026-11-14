import { vi, type Dictionary } from "./vi";
import { en } from "./en";

export type Locale = "vi" | "en";
export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { vi, en };

/** URL of each locale's home page (Vietnamese is the default at the site root). */
export const localePath: Record<Locale, string> = { vi: "/", en: "/en/" };
