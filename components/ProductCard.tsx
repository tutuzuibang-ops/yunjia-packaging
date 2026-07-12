import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data";
import { localizedPath, type Locale } from "@/lib/i18n";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <Link href={localizedPath(locale, `/products/${product.slug}`)} className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={product.image} alt={product.title[locale]} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-marine dark:text-mint">{product.category[locale]}</span>
          <ArrowUpRight size={18} className="text-ink/40 transition group-hover:text-marine dark:text-white/50" />
        </div>
        <h3 className="text-lg font-bold text-ink dark:text-white">{product.title[locale]}</h3>
        <p className="mt-2 text-sm leading-6 text-ink/65 dark:text-white/65">{product.summary[locale]}</p>
      </div>
    </Link>
  );
}
