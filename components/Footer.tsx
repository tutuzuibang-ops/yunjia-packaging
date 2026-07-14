import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { dictionary, localizedPath, navItems, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const dict = dictionary[locale];

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
  src="/yovia-logo.png"
  alt="Yovia Pack"
  width={40}
  height={40}
/>
            <span className="font-bold">{dict.company}</span>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/70">{dict.footerIntro}</p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/50">{locale === "zh" ? "网站导航" : "Navigation"}</h2>
          <div className="grid gap-2">
            {navItems[locale].map((item) => (
              <Link key={item.href} href={localizedPath(locale, item.href)} className="text-sm text-white/75 hover:text-citrus">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/50">{locale === "zh" ? "联系方式" : "Contact"}</h2>
          <div className="grid gap-3 text-sm text-white/75">
  <a
    href="https://wa.me/8618470513130"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:text-citrus"
  >
    <Phone className="text-marine dark:text-mint" size={20} />
    WhatsApp: +8618470513130
  </a>

  <a
    href="mailto:info@yoviapack.com"
    className="flex items-center gap-3 hover:text-citrus"
  >
    <Mail className="text-marine dark:text-mint" size={20} />
    info@yoviapack.com
  </a>

  <span className="flex items-start gap-2">
    <MapPin size={16} className="mt-1 shrink-0" />
    {locale === "zh"
      ? "中国广东省深圳市"
      : "Shenzhen, China"}
  </span>
</div>        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © 2026 {dict.company}. {locale === "zh" ? "保留所有权利。" : "All rights reserved."}
      </div>
    </footer>
  );
}