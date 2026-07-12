"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const labels = {
  zh: {
    name: "姓名",
    email: "邮箱",
    phone: "电话",
    product: "感兴趣的产品",
    message: "询盘内容",
    submit: "提交询盘",
    success: "询盘已提交，我们会尽快联系您。",
    error: "提交失败，请稍后重试。"
  },
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    product: "Product of interest",
    message: "Inquiry details",
    submit: "Submit Inquiry",
    success: "Inquiry submitted. We will contact you shortly.",
    error: "Submission failed. Please try again later."
  }
};

export function InquiryForm({ locale, product }: { locale: Locale; product?: string }) {
  const t = labels[locale];
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, locale })
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
          {t.name}
          <input required name="name" className="rounded-md border border-ink/15 bg-white px-3 py-3 text-sm outline-none focus:border-marine dark:border-white/15 dark:bg-ink" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
          {t.email}
          <input required name="email" type="email" className="rounded-md border border-ink/15 bg-white px-3 py-3 text-sm outline-none focus:border-marine dark:border-white/15 dark:bg-ink" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
          {t.phone}
          <input name="phone" className="rounded-md border border-ink/15 bg-white px-3 py-3 text-sm outline-none focus:border-marine dark:border-white/15 dark:bg-ink" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
          {t.product}
          <input name="product" defaultValue={product} className="rounded-md border border-ink/15 bg-white px-3 py-3 text-sm outline-none focus:border-marine dark:border-white/15 dark:bg-ink" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink dark:text-white">
        {t.message}
        <textarea required name="message" rows={5} className="rounded-md border border-ink/15 bg-white px-3 py-3 text-sm outline-none focus:border-marine dark:border-white/15 dark:bg-ink" />
      </label>
      <button disabled={status === "loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-marine px-6 py-3 text-sm font-bold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60 dark:hover:bg-mint dark:hover:text-ink">
        <Send size={18} />
        {status === "loading" ? "..." : t.submit}
      </button>
      {status === "success" && <p className="text-sm font-semibold text-marine dark:text-mint">{t.success}</p>}
      {status === "error" && <p className="text-sm font-semibold text-red-600">{t.error}</p>}
    </form>
  );
}
