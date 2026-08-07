"use client";

import { FormEvent, useState } from "react";
import { dictionary, Locale, services } from "@/lib/site-content";

type ContactFormProps = {
  locale: Locale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const t = dictionary[locale].contact;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      serviceType: String(formData.get("serviceType") || ""),
      message: String(formData.get("message") || ""),
      captchaAnswer: String(formData.get("captchaAnswer") || ""),
      company: String(formData.get("company") || ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as { ok: boolean; message: string };
    if (response.ok && data.ok) {
      setStatus("success");
      setMessage(data.message);
      event.currentTarget.reset();
      return;
    }

    setStatus("error");
    setMessage(data.message || (locale === "en" ? "Something went wrong." : "حدث خطأ."));
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          <span>{t.fullName}</span>
          <input
            name="fullName"
            required
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-[#e8a33d]"
          />
        </label>
        <label className="text-sm">
          <span>{t.phone}</span>
          <input
            name="phone"
            required
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-[#e8a33d]"
          />
        </label>
        <label className="text-sm">
          <span>{t.email}</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-[#e8a33d]"
          />
        </label>
        <label className="text-sm">
          <span>{t.serviceType}</span>
          <select
            name="serviceType"
            required
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-[#e8a33d]"
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

      <label className="mt-4 block text-sm">
        <span>{t.message}</span>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-[#e8a33d]"
        />
      </label>

      <label className="mt-4 block text-sm">
        <span>{locale === "en" ? "Human check: 7 + 5 = ?" : "تحقق بشري: 5 + 7 = ؟"}</span>
        <input
          name="captchaAnswer"
          required
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-[#e8a33d]"
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
        className="mt-6 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#333]"
      >
        {t.submit}
      </button>

      {status !== "idle" && (
        <p className={`mt-3 text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
