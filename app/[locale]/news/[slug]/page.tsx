import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { news } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) => news.map((item) => ({ locale, slug: item.slug })));
}

export function generateMetadata({ params }: { params: { locale: Locale; slug: string } }): Metadata {
  const item = news.find((entry) => entry.slug === params.slug);
  if (!item) return buildMetadata(params.locale, "/news");
  return buildMetadata(params.locale, `/news/${item.slug}`, item.title[params.locale], item.excerpt[params.locale]);
}

export default function NewsDetailPage({ params }: { params: { locale: Locale; slug: string } }) {
  const item = news.find((entry) => entry.slug === params.slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <time className="text-sm font-semibold text-marine dark:text-mint">{item.date}</time>
      <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{item.title[params.locale]}</h1>
      <p className="mt-6 text-xl leading-9 text-ink/70 dark:text-white/70">{item.excerpt[params.locale]}</p>
      <div className="mt-10 rounded-lg border border-ink/10 bg-white p-7 text-lg leading-9 text-ink/75 dark:border-white/10 dark:bg-white/5 dark:text-white/75">
        {item.body[params.locale]}
      </div>
    </article>
  );
}
