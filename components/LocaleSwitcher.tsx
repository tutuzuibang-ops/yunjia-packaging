import Link from "next/link";
import { altLocale, dictionary, type Locale } from "@/lib/i18n";

export function LocaleSwitcher({ locale, path }: { locale: Locale; path: string }) {
  const nextLocale = altLocale(locale);
  const cleanPath = path === "/" ? "" : path;

  return (
    <Link
      href={`/${nextLocale}${cleanPath}`}
      className="inline-flex h-10 items-center rounded-full border border-ink/10 bg-white px-4 text-sm font-semibold text-ink transition hover:border-marine hover:text-marine dark:border-white/15 dark:bg-white/10 dark:text-white"
    >
      {dictionary[locale].switchLanguage}
    </Link>
  );
}
