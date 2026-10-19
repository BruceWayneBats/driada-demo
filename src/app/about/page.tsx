import type { Metadata } from "next";
import { WoodArt } from "@/components/WoodArt";
import { CallButton, Container, PageTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "О компании",
  description: "Компания «Дриада» — производство и продажа изделий из натурального дерева.",
};

// ДЕМО-текст: заменить на историю компании.
const facts = [
  ["10+", "лет работы"],
  ["5", "направлений продукции"],
  ["2", "филиала"],
];

export default function AboutPage() {
  return (
    <Container>
      <PageTitle
        title="О компании"
        lead="«Дриада» производит и продаёт изделия из натурального дерева: мебель, погонаж, обрезной материал, панно и элементы лестниц."
      />

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-walnut-soft">
          <p>
            Мы работаем с частными клиентами, строительными и отделочными компаниями, мебельными мастерскими. Для
            каждого заказа подбираем породу древесины и обработку под задачу.
          </p>
          <p>
            Древесина проходит камерную сушку, поэтому изделия сохраняют геометрию. Готовую продукцию можно забрать со
            склада или заказать доставку.
          </p>
          <p>Организациям предоставляем закрывающие документы и работаем по безналичному расчёту.</p>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <WoodArt kind="lumber" seed="about" className="h-full w-full" />
        </div>
      </div>

      <dl className="mt-16 grid gap-6 border-y border-oak-100 py-10 sm:grid-cols-3">
        {facts.map(([n, label]) => (
          <div key={label} className="text-center">
            <dt className="sr-only">{label}</dt>
            <dd className="font-serif text-5xl font-semibold text-oak-600">{n}</dd>
            <dd className="mt-2 text-walnut-soft">{label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 text-center">
        <CallButton />
      </div>
    </Container>
  );
}
