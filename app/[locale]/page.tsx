import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Globe2, PackageCheck, ShieldCheck } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { factoryHighlights, processes, products } from "@/lib/data";
import { dictionary, localizedPath, type Locale } from "@/lib/i18n";

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const dict = dictionary[locale];
  const isZh = locale === "zh";

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
            alt={isZh ? "现代包装仓储" : "Modern packaging warehouse"}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/68 to-ink/20" />
        </div>
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl content-center px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur">
              {dict.company}
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">{dict.tagline}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              {isZh
                ? "为全球品牌提供彩盒、礼盒、手提袋、吸塑内托与标签贴纸等一站式定制包装服务，兼顾设计质感、制造稳定性与出口交付效率。"
                : "One-stop custom boxes, gift packaging, paper bags, blister trays, and labels for global brands, balancing premium design, stable manufacturing, and export delivery."}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={localizedPath(locale, "/products")} className="inline-flex items-center gap-2 rounded-full bg-citrus px-6 py-3 font-bold text-ink transition hover:bg-mint">
                {dict.viewProducts} <ArrowRight size={18} />
              </Link>
              <Link href={localizedPath(locale, "/contact")} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-ink">
                {dict.inquiry}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {[
          { icon: PackageCheck, title: isZh ? "多品类定制" : "Broad Custom Range", text: isZh ? "纸盒、礼盒、袋类、吸塑、贴纸组合交付。" : "Boxes, rigid sets, bags, trays, and labels delivered together." },
          { icon: Factory, title: isZh ? "制造协同" : "Manufacturing Control", text: isZh ? "从结构、打样到量产质检闭环管理。" : "Closed-loop control from structure and samples to QC." },
          { icon: Globe2, title: isZh ? "国际化服务" : "Global Ready", text: isZh ? "中英文沟通，支持出口包装与跨境品牌。" : "Bilingual service for export packaging and global brands." },
          { icon: ShieldCheck, title: isZh ? "品质稳定" : "Stable Quality", text: isZh ? "来料、制程、出货多节点检验。" : "Incoming, in-process, and outgoing inspection." }
        ].map((item) => (
          <div key={item.title} className="rounded-lg border border-ink/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <item.icon className="mb-5 text-marine dark:text-mint" size={28} />
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/65 dark:text-white/65">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-marine dark:text-mint">{isZh ? "产品中心" : "Products"}</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{isZh ? "面向品牌增长的包装方案" : "Packaging Solutions for Growing Brands"}</h2>
            </div>
            <Link href={localizedPath(locale, "/products")} className="inline-flex items-center gap-2 font-bold text-marine dark:text-mint">
              {dict.learnMore} <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-marine dark:text-mint">{isZh ? "工厂实力" : "Factory Strength"}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{isZh ? "从样品到量产，每一步都有标准" : "A Standardized Path from Sample to Shipment"}</h2>
          <p className="mt-5 leading-8 text-ink/70 dark:text-white/70">
            {isZh ? "韵嘉包装以项目制管理订单，围绕结构、材料、印刷、成型、组装和质检建立可追踪流程。" : "Yunjia manages orders as projects, making structure, materials, printing, forming, assembly, and QC traceable."}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {factoryHighlights.map((item) => (
            <div key={item.value} className="rounded-lg border border-ink/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <strong className="text-3xl font-black text-marine dark:text-mint">{item.value}</strong>
              <p className="mt-2 text-sm text-ink/65 dark:text-white/65">{item[locale]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-marine py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-6">
            {processes[locale].map((step) => (
              <div key={step} className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                <CheckCircle2 size={20} className="shrink-0 text-citrus" />
                <span className="text-sm font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
