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
            ? "深圳市韵嘉包装制品有限公司专注定制包装制品研发与生产，围绕纸质包装、礼盒、手提袋、吸塑内托、标签贴纸等产品，为客户提供结构设计、材料建议、打样、批量生产和出口协同服务。"
            : "Shenzhen Yunjia Packaging Products Co., Ltd. develops and manufactures custom packaging across paper boxes, rigid gift boxes, paper bags, blister trays, and labels, supporting structural design, material advice, sampling, mass production, and export coordination."}
        </p>
        <p className="mt-4 leading-8 text-ink/70 dark:text-white/70">
          {isZh
            ? "我们理解包装不只是容器，更是品牌识别、运输保护和用户体验的一部分。团队以清晰沟通、稳定交付和长期合作为核心，为消费电子、美妆、食品、礼品及跨境电商客户提供可落地的包装方案。"
            : "We see packaging as more than a container: it is brand identity, transport protection, and user experience working together. Our team focuses on clear communication, stable delivery, and long-term cooperation for electronics, beauty, food, gifts, and e-commerce brands."}
        </p>
      </div>
      <div className="relative min-h-[420px] overflow-hidden rounded-lg">
        <Image src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80" alt={isZh ? "包装生产车间" : "Packaging production workshop"} fill className="object-cover" />
      </div>
    </section>
  );
}
