export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function altLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export const navItems = {
  zh: [
    { href: "/", label: "首页" },
    { href: "/about", label: "关于我们" },
    { href: "/products", label: "产品中心" },
    { href: "/factory", label: "工厂实力" },
    { href: "/contact", label: "联系我们" }
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/factory", label: "Factory" },
    { href: "/contact", label: "Contact" }
  ]
} satisfies Record<Locale, { href: string; label: string }[]>;

export const dictionary = {
  zh: {
    brand: "韵嘉包装",
    company: "深圳市韵嘉包装制品有限公司",
    tagline: "让包装更可靠，让品牌更出色",
    inquiry: "在线询盘",
    viewProducts: "查看产品",
    learnMore: "了解更多",
    darkMode: "深色模式",
    switchLanguage: "English",
    footerIntro: "专注纸质、塑料与定制化包装解决方案，服务消费电子、美妆、食品、礼品和跨境电商品牌。",
    seoTitle: "深圳市韵嘉包装制品有限公司 | 定制包装解决方案",
    seoDescription: "韵嘉包装提供彩盒、礼盒、纸袋、吸塑托盘、标签贴纸等中英文定制包装服务，支持打样、量产、出口与在线询盘。"
  },
  en: {
    brand: "Yovia Pack",
    company: "Yovia Pack",
    tagline: "More Than Boxes. Packaging Solutions.",
    inquiry: "Request a Quote",
    viewProducts: "View Products",
    learnMore: "Explore Solutions",
    darkMode: "Dark mode",
    switchLanguage: "中文",
    footerIntro: "Custom paper, plastic, and branded packaging solutions for consumer electronics, beauty, food, gifts, and cross-border commerce.",
    seoTitle: "Shenzhen Yunjia Packaging Products Co., Ltd. | Custom Packaging",
    seoDescription: "Yovia Pack supplies custom boxes, gift boxes, paper bags, blister trays, labels, sampling, mass production, export support, and online inquiries."
  }
} satisfies Record<Locale, Record<string, string>>;

export function localizedPath(locale: Locale, path = "/") {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}
