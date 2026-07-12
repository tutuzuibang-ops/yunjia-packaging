"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { dictionary, localizedPath, navItems, type Locale } from "@/lib/i18n";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dict = dictionary[locale];
  const pathWithoutLocale = pathname.replace(/^\/(zh|en)/, "") || "/";

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl dark:border-white/10 dark:bg-ink/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={localizedPath(locale)} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-marine text-lg font-black text-white">YJ</span>
          <span>
            <span className="block text-base font-bold text-ink dark:text-white">{dict.brand}</span>
            <span className="block text-xs text-ink/60 dark:text-white/60">{locale === "zh" ? "Packaging Manufacturer" : "Since Shenzhen"}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems[locale].map((item) => {
            const href = localizedPath(locale, item.href);
            const active = pathname === href;
            return (
              <Link
                key={item.href}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active ? "bg-marine text-white" : "text-ink/75 hover:bg-white hover:text-marine dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle label={dict.darkMode} />
          <LocaleSwitcher locale={locale} path={pathWithoutLocale} />
          <Link href={localizedPath(locale, "/contact")} className="rounded-full bg-citrus px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-mint">
            {dict.inquiry}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink lg:hidden dark:border-white/15 dark:bg-white/10 dark:text-white"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 px-4 py-4 lg:hidden dark:border-white/10">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems[locale].map((item) => (
              <Link
                key={item.href}
                href={localizedPath(locale, item.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-white dark:text-white dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <ThemeToggle label={dict.darkMode} />
              <LocaleSwitcher locale={locale} path={pathWithoutLocale} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
