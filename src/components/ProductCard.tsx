import Link from "next/link";
import { ProductImage } from "./ProductImage";
import type { Category, Product } from "@/content/catalog";

export function ProductCard({ product, category }: { product: Product; category: Category }) {
  return (
    <Link href={`/catalog/${category.slug}/${product.slug}`} className="group block">
      <ProductImage
        src={product.images?.[0]}
        alt={product.name}
        kind={category.kind}
        seed={product.slug}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <h3 className="mt-4 text-lg font-semibold group-hover:text-oak-700">{product.name}</h3>
      <p className="mt-1 text-sm text-walnut-soft">{product.summary}</p>
    </Link>
  );
}

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link
      href={`/catalog/${category.slug}`}
      className="group block rounded-3xl border border-oak-100 bg-white/50 p-3 transition-colors hover:border-oak-200 hover:bg-white"
    >
      <ProductImage
        alt={category.name}
        kind={category.kind}
        seed={category.slug}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex items-baseline justify-between gap-3 px-2 pb-2 pt-4">
        <h3 className="font-serif text-xl font-semibold group-hover:text-oak-700">{category.name}</h3>
        <span className="text-sm text-walnut-soft">{count} поз.</span>
      </div>
      <p className="px-2 pb-2 text-sm text-walnut-soft">{category.description}</p>
    </Link>
  );
}
