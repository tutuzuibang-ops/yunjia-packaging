import type { Metadata } from "next";
import Image from "next/image";
import { factoryHighlights, processes } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return buildMetadata(params.locale, "/factory", params.locale === "zh" ? "工厂实力" : "Factory Strength");
}

export default function FactoryPage({ params }: { params: { locale: Locale } }) {
  const isZh = params.locale === "zh";

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-marine dark:text-mint">{isZh ? "生产与服务能力" : "Manufacturing Capabilities"}</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">{isZh ? "可靠制造，贴心支持。" : "Reliable Manufacturing with Personal Support."}</h1>
          <p className="mt-5 leading-8 text-ink/70 dark:text-white/70">
            {isZh ? "从快速打样到批量生产，我们以稳定的品质、高效的沟通和灵活的生产，为客户提供可靠的包装制造服务。" : "From fast sampling to mass production, we combine quality manufacturing with responsive communication and flexible production to support every project."}
          </p>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-lg">
          <Image src="/factory-picture.jpg" alt={isZh ? "制造设备" : "Manufacturing equipment"} fill className="object-cover" />
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {factoryHighlights.map((item) => (
          <div key={item.value} className="rounded-lg border border-ink/10 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <strong className="text-3xl font-black text-marine dark:text-mint">{item.value}</strong>
            <p className="mt-2 text-sm text-ink/65 dark:text-white/65">{item[params.locale]}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-6">
        {processes[params.locale].map((step, index) => (
          <div key={step} className="rounded-lg bg-white p-5 text-center shadow-sm dark:bg-white/5">
            <span className="mx-auto mb-3 grid h-9 w-9 place-items-center rounded-full bg-citrus text-sm font-black text-ink">{index + 1}</span>
            <p className="text-sm font-bold">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
