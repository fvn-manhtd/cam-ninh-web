import type { Locale } from "@/content/dictionaries";

export type Localized = Record<Locale, string>;

/** Single source of truth for company facts (from the 2026 company profile). */
export const site = {
  url: "https://camninh.com",
  brand: "Cam Ninh",
  legalName: { vi: "CÔNG TY TNHH CAM NINH", en: "CAM NINH COMPANY LIMITED" } as Localized,
  shortName: { vi: "Công ty TNHH Cam Ninh", en: "Cam Ninh Co., Ltd" } as Localized,
  founded: 2011,
  address: {
    vi: "55 Lý Thái Tông, Phường Tam Thắng, Thành Phố Hồ Chí Minh",
    en: "55 Ly Thai Tong, Tam Thang Ward, Ho Chi Minh City, Vietnam",
  } as Localized,
  phoneDisplay: "84-254-3855961",
  phoneHref: "tel:+842543855961",
  email: "info@camninh.com",
  website: "www.camninh.com",
  taxCode: "3502310586",
  representative: { vi: "Ông Bùi Quang Tiến", en: "Mr. Bui Quang Tien" } as Localized,
  position: { vi: "Giám đốc", en: "Director" } as Localized,
  directorName: "Bùi Quang Tiến",
  mapEmbed:
    "https://www.google.com/maps?q=55+L%C3%BD+Th%C3%A1i+T%C3%B4ng,+Tam+Th%E1%BA%AFng&output=embed",
} as const;
