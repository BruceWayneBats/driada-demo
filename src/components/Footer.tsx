import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site, whatsappUrl } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-oak-100 bg-oak-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-walnut-soft">{site.description}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm" aria-label="Меню в подвале">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-walnut-soft hover:text-oak-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 text-sm">
          {site.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="block font-semibold hover:text-oak-700">
              {p.display}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="block text-walnut-soft hover:text-oak-700">
            {site.email}
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener" className="block text-walnut-soft hover:text-oak-700">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-oak-100 py-5 text-center text-xs text-walnut-soft">
        © {new Date().getFullYear()} {site.name}. Информация на сайте не является публичной офертой.
      </div>
    </footer>
  );
}

