import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return buildMetadata(params.locale, "/about", params.locale === "zh" ? "关于我们" : "About Us");
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const isZh = params.locale === "zh";

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-marine dark:text-mint">{isZh ? "关于我们" : "About Us"}</p>
        <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
          {isZh ? "扎根深圳，服务全球品牌的包装制造伙伴" : "A Shenzhen-Based Packaging Partner for Global Brands"}
        </h1>
        <p className="mt-6 leading-8 text-ink/70 dark:text-white/70">
          {isZh
            ? "Yovia Pack 致力于帮助品牌将包装创意转化为实际解决方案。我们专注于定制纸质包装，包括彩盒、精品礼盒、纸袋以及其他个性化包装产品。"
            : "Yovia Pack helps brands turn packaging ideas into practical solutions. We specialize in custom paper packaging, including paper boxes, rigid gift boxes, paper bags, and tailored packaging products."}
        </p>
        <p className="mt-4 leading-8 text-ink/70 dark:text-white/70">
          {isZh
            ? "我们不仅提供生产服务，更协助客户解决包装开发过程中的实际问题，包括结构设计优化、材料选择、快速打样和灵活定制。我们相信，包装不只是一个容器，更是品牌形象、产品保护与用户体验的结合。"
            : "Beyond manufacturing, we support customers with structural design, material selection, fast sampling, and flexible solutions. We believe packaging is more than a container — it is a combination of brand identity, product protection, and user experience."}
        </p>
      </div>
      <div className="relative min-h-[420px] overflow-hidden rounded-lg">
        <Image src="/about-packaging.jpg" alt={isZh ? "包装生产车间" : "Packaging production workshop"} fill className="object-cover" />
      </div>
    </section>
  );
}
