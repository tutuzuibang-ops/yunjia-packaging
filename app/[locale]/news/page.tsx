import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { localizedPath, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return buildMetadata(params.locale, "/news", params.locale === "zh" ? "新闻中心" : "News");
}

export default function NewsPage({ params }: { params: { locale: Locale } }) {
  const isZh = params.locale === "zh";

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-widest text-marine dark:text-mint">{isZh ? "新闻中心" : "News"}</p>
      <h1 className="mt-3 text-4xl font-black sm:text-5xl">{isZh ? "包装行业资讯与项目经验" : "Packaging Insights and Project Notes"}</h1>
      <div className="mt-10 grid gap-5">
        {news.map((item) => (
          <Link key={item.slug} href={localizedPath(params.locale, `/news/${item.slug}`)} className="rounded-lg border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/5">
            <time className="text-sm font-semibold text-marine dark:text-mint">{item.date}</time>
            <h2 className="mt-3 text-2xl font-black">{item.title[params.locale]}</h2>
            <p className="mt-3 leading-7 text-ink/70 dark:text-white/70">{item.excerpt[params.locale]}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
