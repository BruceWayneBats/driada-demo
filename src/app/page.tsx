import Link from "next/link";
import { CategoryCard } from "@/components/ProductCard";
import { ArrowIcon } from "@/components/Icons";
import { WoodArt } from "@/components/WoodArt";
import { CallButton, Container, WhatsAppButton } from "@/components/ui";
import { categories, getProducts } from "@/content/catalog";
import { promos } from "@/content/promo";
import { site } from "@/content/site";

const advantages = [
  ["Натуральная древесина", "Работаем с сосной, лиственницей, липой, ясенем и дубом."],
  ["Для частных клиентов и организаций", "Штучные изделия и оптовые партии, документы для юрлиц."],
  ["Изготовление по размерам", "Подгоним изделие под ваш проект и интерьер."],
];

export default function Home() {
  return (
    <>
      <section className="border-b border-oak-100 bg-gradient-to-b from-oak-50 to-birch">
        <Container className="grid items-center gap-10 py-14 sm:py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">{site.tagline}</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Тёплое дерево для дома и бизнеса
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-walnut-soft">{site.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-walnut px-6 py-3.5 font-semibold text-birch hover:bg-oak-700"
              >
                Смотреть каталог <ArrowIcon />
              </Link>
              <CallButton className="bg-transparent !text-walnut ring-1 ring-oak-200 hover:!bg-oak-100" />
            </div>
          </div>
          <div className="hidden overflow-hidden rounded-[2rem] md:block">
            <WoodArt kind="furniture" seed="hero" className="h-full w-full" />
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Каталог</h2>
          <Link href="/catalog" className="hidden items-center gap-2 text-oak-700 hover:underline sm:flex">
            Все товары <ArrowIcon />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} count={getProducts(c.slug).length} />
          ))}
        </div>
      </Container>

      <section className="bg-oak-50">
        <Container className="grid gap-8 py-16 sm:grid-cols-3">
          {advantages.map(([title, text]) => (
            <div key={title}>
              <div className="mb-4 h-px w-12 bg-oak-400" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-walnut-soft">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      {promos.length > 0 && (
        <Container className="py-16 sm:py-20">
          <div className="rounded-3xl border border-oak-200 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">Акция</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">{promos[0].title}</h2>
            <p className="mt-3 max-w-2xl text-walnut-soft">{promos[0].text}</p>
            <Link href="/promo" className="mt-6 inline-flex items-center gap-2 font-semibold text-oak-700 hover:underline">
              Все акции <ArrowIcon />
            </Link>
          </div>
        </Container>
      )}

      <Container className="text-center">
        <h2 className="font-serif text-3xl font-semibold">Подберём изделие под вашу задачу</h2>
        <p className="mx-auto mt-3 max-w-xl text-walnut-soft">
          Позвоните или напишите — расскажем о наличии, сроках и вариантах исполнения.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton />
        </div>
      </Container>
    </>
  );
}
