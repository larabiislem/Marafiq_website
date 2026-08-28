"use client";

import { FormEvent, useState } from "react";
import { dictionary, Locale, services } from "@/lib/site-content";
import { CheckCircle2, Loader2 } from "lucide-react";

type ContactFormProps = {
  locale: Locale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const t = dictionary[locale].contact;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    
    setStatus("idle");
    setMessage("");
    setIsSubmitting(true);

    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      serviceType: String(formData.get("serviceType") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { ok: boolean; message: string };
      if (response.ok && data.ok) {
        setStatus("success");
        setMessage(data.message);
        form.reset();
      } else {
        setStatus("error");
        setMessage(data.message || (locale === "en" ? "Something went wrong." : "حدث خطأ."));
      }
    } catch (error) {
      setStatus("error");
      setMessage(locale === "en" ? "Network error. Please try again." : "خطأ في الشبكة. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm animate-in fade-in zoom-in-95 duration-500 fill-mode-both">
        <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 size={48} className="text-green-500 animate-in zoom-in duration-500 delay-150 fill-mode-both" />
        </div>
        <h3 className="mb-3 text-3xl font-bold text-zinc-900">
          {locale === "en" ? "Message Sent!" : "تم الإرسال بنجاح!"}
        </h3>
        <p className="mb-8 text-zinc-600 max-w-sm">
          {locale === "en" 
            ? "Thank you for reaching out. Our team will get back to you shortly." 
            : "شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن."}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 hover:scale-105 active:scale-95"
        >
          {locale === "en" ? "Send another message" : "إرسال رسالة أخرى"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-zinc-700">
          <span className="mb-1 block">{t.fullName}</span>
          <input
            name="fullName"
            required
            disabled={isSubmitting}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-[#e8a33d] focus:ring-2 focus:ring-[#e8a33d]/20 disabled:opacity-60"
          />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          <span className="mb-1 block">{t.phone}</span>
          <input
            name="phone"
            required
            disabled={isSubmitting}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-[#e8a33d] focus:ring-2 focus:ring-[#e8a33d]/20 disabled:opacity-60"
          />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          <span className="mb-1 block">{t.email}</span>
          <input
            type="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-[#e8a33d] focus:ring-2 focus:ring-[#e8a33d]/20 disabled:opacity-60"
          />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          <span className="mb-1 block">{t.serviceType}</span>
          <select
            name="serviceType"
            required
            disabled={isSubmitting}
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-[#e8a33d] focus:ring-2 focus:ring-[#e8a33d]/20 disabled:opacity-60"
            defaultValue=""
          >
            <option value="" disabled>
              --
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service[locale].title}>
                {service[locale].title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-zinc-700">
        <span className="mb-1 block">{t.message}</span>
        <textarea
          name="message"
          required
          rows={4}
          disabled={isSubmitting}
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-[#e8a33d] focus:ring-2 focus:ring-[#e8a33d]/20 disabled:opacity-60"
        />
      </label>

      <input
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 flex w-full md:w-auto items-center justify-center gap-3 rounded-full bg-[#111] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#333] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting && <Loader2 size={18} className="animate-spin" />}
        {isSubmitting 
          ? (locale === "en" ? "Sending Message..." : "جاري الإرسال...") 
          : t.submit}
      </button>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100 animate-in fade-in">
          {message}
        </p>
      )}
    </form>
  );
}
