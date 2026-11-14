import type { Localized } from "./site";

export const equipment: { group: Localized; items: string[] }[] = [
  {
    group: { vi: "Thiết bị mạng", en: "Network devices" },
    items: ["Fortinet Firewall", "Network Switch", "Network Hub", "Media Converter", "Modem", "Gateway", "Access Point"],
  },
  {
    group: { vi: "Safety Supervisory System", en: "Safety Supervisory System" },
    items: ["Camera", "Network Video Recorder", "Storage Server", "Access Control", "Fire Alarm System"],
  },
  {
    group: { vi: "Cáp và phụ kiện", en: "Cabling and accessories" },
    items: ["Patch Panel", "FOPP", "Network cable Cat5e", "Cat6", "Cat6a", "Cat7"],
  },
  {
    group: { vi: "Liên lạc và nhà thông minh", en: "Communication and smart home" },
    items: ["Intercom", "Smart Home (Loxone)"],
  },
];
