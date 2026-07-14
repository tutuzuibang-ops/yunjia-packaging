import type { Metadata } from "next";
import { dictionary, type Locale, localizedPath } from "./i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yunjiapackaging.com";

export function buildMetadata(locale: Locale, path = "/", title?: string, description?: string): Metadata {
  const dict = dictionary[locale] || dictionary.zh;
  const pageTitle = title ? `${title} | ${dict.brand}` : dict.seoTitle;
  const pageDescription = description || dict.seoDescription;
  const pathname = localizedPath(locale, path);

  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pathname,
      languages: {
        "zh-CN": localizedPath("zh", path),
        "en-US": localizedPath("en", path)
      }
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pathname,
      siteName: dict.company,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website"
    }
  };
}
