// Контакты и общие данные компании.
// ДЕМО: телефоны, почта и адреса — заглушки, заменить на реальные.

export type Phone = { label: string; display: string; tel: string };
export type Branch = {
  city: string;
  address: string;
  hours: string;
  phone: Phone;
  mapUrl: string;
};

export const site = {
  name: "Дриада",
  tagline: "Изделия из натурального дерева",
  description:
    "Деревянная мебель, погонаж, обрезной материал, панно и лестничные элементы для организаций и частных клиентов.",
  url: "https://driada-demo.vercel.app",
  email: "info@driada.ru",
  whatsapp: "79000000000",
  phones: [
    { label: "Отдел продаж", display: "+7 (900) 000-00-00", tel: "+79000000000" },
    { label: "Для организаций", display: "+7 (900) 000-00-01", tel: "+79000000001" },
  ] satisfies Phone[],
  branches: [
    {
      city: "Главный офис и склад",
      address: "г. Город, ул. Лесная, 1",
      hours: "Пн–Пт 9:00–18:00, Сб 10:00–15:00",
      phone: { label: "Офис", display: "+7 (900) 000-00-00", tel: "+79000000000" },
      mapUrl: "https://yandex.ru/maps/?text=ул.+Лесная,+1",
    },
    {
      city: "Филиал",
      address: "г. Город, пр. Строителей, 25",
      hours: "Пн–Сб 9:00–17:00",
      phone: { label: "Филиал", display: "+7 (900) 000-00-02", tel: "+79000000002" },
      mapUrl: "https://yandex.ru/maps/?text=пр.+Строителей,+25",
    },
  ] satisfies Branch[],
};

export const mainPhone = site.phones[0];

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О компании" },
  { href: "/promo", label: "Акции" },
  { href: "/contacts", label: "Контакты" },
];
