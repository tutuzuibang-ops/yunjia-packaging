import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { products } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { dictionary, locales, localizedPath, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export function generateMetadata({ params }: { params: { locale: Locale; slug: string } }): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return buildMetadata(params.locale, "/products");
  return buildMetadata(params.locale, `/products/${product.slug}`, product.title[params.locale], product.summary[params.locale]);
}

export default function ProductDetailPage({ params }: { params: { locale: Locale; slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();
  const locale = params.locale;
  const isZh = locale === "zh";

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={product.image} alt={product.title[locale]} fill priority className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-marine dark:text-mint">{product.category[locale]}</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">{product.title[locale]}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70 dark:text-white/70">{product.description[locale]}</p>
          <div className="mt-8 grid gap-3">
            {product.specs[locale].map((spec) => (
              <div key={spec} className="rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm font-semibold dark:border-white/10 dark:bg-white/5">
                {spec}
              </div>
            ))}
          </div>
          <Link href={localizedPath(locale, "/contact")} className="mt-8 inline-flex rounded-full bg-citrus px-6 py-3 font-bold text-ink transition hover:bg-mint">
            {dictionary[locale].inquiry}
          </Link>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-marine dark:text-mint">{isZh ? "在线询盘" : "Online Inquiry"}</p>
          <h2 className="mt-3 text-3xl font-black">{isZh ? "告诉我们您的包装需求" : "Tell Us Your Packaging Needs"}</h2>
          <p className="mt-4 leading-7 text-ink/70 dark:text-white/70">
            {isZh ? "可提供尺寸、数量、材质、工艺、目标交期或参考图片，我们将尽快回复方案与报价。" : "Share size, quantity, material, finish, target lead time, or reference images. We will respond with a proposal and quotation."}
          </p>
        </div>
        <InquiryForm locale={locale} product={product.title[locale]} />
      </div>
    </section>
  );
}
