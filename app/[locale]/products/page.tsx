import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return buildMetadata(params.locale, "/products", params.locale === "zh" ? "产品中心" : "Products");
}

export default function ProductsPage({ params }: { params: { locale: Locale } }) {
  const isZh = params.locale === "zh";

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-marine dark:text-mint">{isZh ? "产品中心" : "Products"}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-5xl">{isZh ? "可定制包装产品" : "Customizable Packaging Products"}</h1>
        <p className="mt-5 leading-8 text-ink/70 dark:text-white/70">
          {isZh ? "根据产品尺寸、品牌视觉、运输方式和预算，组合材料、结构与工艺。" : "Combine material, structure, and finishing around product size, brand identity, shipping method, and budget."}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} locale={params.locale} />
        ))}
      </div>
    </section>
  );
}
