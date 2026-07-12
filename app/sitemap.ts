import type { MetadataRoute } from "next";
import { news, products } from "@/lib/data";
import { locales, localizedPath } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yunjiapackaging.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/products", "/factory", "/news", "/contact"];
  const entries = locales.flatMap((locale) => [
    ...staticPaths.map((path) => localizedPath(locale, path || "/")),
    ...products.map((product) => localizedPath(locale, `/products/${product.slug}`)),
    ...news.map((item) => localizedPath(locale, `/news/${item.slug}`))
  ]);

  return entries.map((url) => ({
    url: `${siteUrl}${url}`,
    lastModified: new Date()
  }));
}
