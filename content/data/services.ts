import type { Localized } from "./site";

export type Service = {
  id: string;
  name: Localized;
  intro: Localized;
  points: Localized[];
  photos: { image: string; label: Localized | string }[];
};

export const services: Service[] = [
  {
    id: "precom",
    name: { vi: "Pre-com / Commissioning", en: "Pre-commissioning / Commissioning" },
    intro: {
      vi: "Cung cấp dịch vụ hoàn thiện chạy thử hệ thống HV/MV/LV/ELV và các hệ thống điều khiển:",
      en: "Completion and commissioning services for HV/MV/LV/ELV systems and control systems:",
    },
    points: [
      { vi: "GIS, Shunt Reactor, Transformer, Generator", en: "GIS, shunt reactor, transformer, generator" },
      { vi: "UPS & DC switchboard, LV switchgear", en: "UPS & DC switchboard, LV switchgear" },
      { vi: "Sub-control, ACMS, PAGA", en: "Sub-control, ACMS, PAGA" },
      { vi: "HVAC, Lighting & Socket", en: "HVAC, lighting & socket" },
      { vi: "ELV, Telecom", en: "ELV, telecom" },
    ],
    photos: [
      { image: "services/precom-gis-system", label: "GIS System" },
      { image: "services/precom-main-transformer", label: "Main transformer" },
      { image: "services/precom-hv-mv-cable", label: "HV/MV Cable" },
      { image: "services/precom-lv-switchgear", label: "LV Switchgear" },
      { image: "services/precom-ups-dc-system", label: "UPS & DC System" },
      { image: "services/precom-hvac", label: "HVAC" },
    ],
  },
  {
    id: "sss",
    name: { vi: "Hệ thống Safety Supervisory System (SSS)", en: "Safety Supervisory System (SSS)" },
    intro: {
      vi: "Cung cấp các giải pháp an ninh giám sát tích hợp hiện đại giúp khách hàng:",
      en: "Modern integrated security and surveillance solutions that help customers:",
    },
    points: [
      { vi: "Tăng cường an ninh, đảm bảo an toàn", en: "Strengthen security and ensure safety" },
      { vi: "Nâng cao khả năng kiểm soát, giám sát tập trung hiệu quả", en: "Improve control with effective centralised monitoring" },
      { vi: "Giảm thiểu rủi ro vận hành", en: "Reduce operational risk" },
      { vi: "Dễ dàng mở rộng và tích hợp", en: "Expand and integrate easily" },
    ],
    photos: [
      { image: "services/sss-cctv", label: "CCTV System" },
      { image: "services/sss-access-control", label: "Access Control System" },
      { image: "services/sss-fire-alarm", label: "Fire Alarm System" },
    ],
  },
  {
    id: "datacenter",
    name: { vi: "Hệ thống Server / Data Center", en: "Server / Data Center" },
    intro: {
      vi: "Triển khai giải pháp hạ tầng kỹ thuật cho doanh nghiệp với tiêu chuẩn:",
      en: "Technical infrastructure for businesses, built to these standards:",
    },
    points: [
      { vi: "Vận hành ổn định", en: "Stable operation" },
      { vi: "Hiệu suất tối ưu", en: "Optimal performance" },
      { vi: "Dễ dàng mở rộng", en: "Easy to scale" },
      { vi: "Quản lý tập trung hiệu quả", en: "Effective centralised management" },
    ],
    photos: [
      { image: "services/datacenter-cooling", label: "Cooling System" },
      { image: "services/datacenter-rack-cabinet", label: "Rack & Cabinet System" },
      { image: "services/datacenter-network-infrastructure", label: "Network Infrastructure" },
      { image: "services/datacenter-environment-management", label: "Data Center & Environment Management" },
    ],
  },
  {
    id: "intercom",
    name: { vi: "Hệ thống Intercom - Communication", en: "Intercom & Communication System" },
    intro: {
      vi: "Triển khai giải pháp liên lạc và truyền thông phục vụ cho nhà xưởng, văn phòng, khu công nghiệp hoặc các công trình đặc thù:",
      en: "Intercom and communication solutions for factories, offices, industrial parks and specialised facilities:",
    },
    points: [
      { vi: "Kết nối ổn định", en: "Stable connection" },
      { vi: "Truyền tải thông tin nhanh chóng", en: "Fast delivery of information" },
      { vi: "Hỗ trợ xử lý tình huống khẩn cấp", en: "Support for emergency response" },
    ],
    photos: [
      { image: "services/intercom-intercom-devices", label: { vi: "Thiết bị intercom và âm thanh thông báo", en: "Intercom and public address devices" } },
      { image: "services/intercom-touch-panels", label: { vi: "Màn hình điều khiển", en: "Control panels" } },
    ],
  },
  {
    id: "smarthome",
    name: { vi: "Hệ thống Smart Home", en: "Smart Home" },
    intro: {
      vi: "Cung cấp giải pháp nhà thông minh và tự động hóa:",
      en: "Smart home and automation solutions:",
    },
    points: [
      { vi: "Nâng cao trải nghiệm sử dụng tiện nghi hiện đại", en: "A more comfortable, modern living experience" },
      { vi: "Điều khiển linh hoạt", en: "Flexible control" },
      { vi: "Tiết kiệm năng lượng sử dụng", en: "Lower energy use" },
    ],
    photos: [
      { image: "services/smarthome-smart-house", label: { vi: "Nhà thông minh", en: "Smart house" } },
      { image: "services/smarthome-smart-control", label: { vi: "Điều khiển trên điện thoại", en: "Control from a phone" } },
    ],
  },
  {
    id: "solar",
    name: { vi: "Hệ thống điện NLMT có lưu trữ (Solar)", en: "Solar Power with Storage" },
    intro: {
      vi: "Cung cấp giải pháp hệ thống điện mặt trời hòa lưới có lưu trữ:",
      en: "Grid-tied solar power systems with battery storage:",
    },
    points: [
      { vi: "Chủ động được nguồn điện", en: "Control over your own power supply" },
      { vi: "Tiết kiệm chi phí hàng tháng", en: "Lower monthly costs" },
      { vi: "Đảm bảo ưu tiên các thiết bị quan trọng", en: "Priority supply for critical equipment" },
      { vi: "Vận hành yên tĩnh, bền bỉ, tối ưu", en: "Quiet, durable, optimised operation" },
    ],
    photos: [
      { image: "services/solar-building", label: "Building" },
      { image: "services/solar-factory-workshop", label: "Factory & Workshop" },
      { image: "services/solar-coffee-pickleball", label: "Coffee & Pickleball" },
    ],
  },
];
