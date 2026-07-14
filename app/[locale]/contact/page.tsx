import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return buildMetadata(params.locale, "/contact", params.locale === "zh" ? "联系我们" : "Contact Us");
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const isZh = params.locale === "zh";

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-marine dark:text-mint">{isZh ? "联系我们" : "Contact Us"}</p>
        <h1 className="mt-3 text-4xl font-black sm:text-5xl">{isZh ? "提交需求，获取包装方案" : "Send Your Brief for a Packaging Proposal"}</h1>
        <p className="mt-5 leading-8 text-ink/70 dark:text-white/70">
          {isZh ? "欢迎发送产品尺寸、数量、设计文件、目标市场和交期，我们会尽快评估并回复。" : "Send product size, quantity, artwork, target market, and schedule. We will review and respond quickly."}
        </p>
        <a
  href="https://wa.me/8613812345678"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:text-marine"
>
  <Phone className="text-marine dark:text-mint" size={20} />
  WhatsApp: +8618470513130
</a>
      </div>
      <InquiryForm locale={params.locale} />
    </section>
  );
}
