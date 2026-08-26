"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type StatItemProps = {
  value: number;
  suffix?: string;
  labelEn: string;
  labelAr: string;
  locale: string;
};

function StatItem({ value, suffix = "", labelEn, labelAr, locale }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * end);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  const isRtl = locale === "ar";

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-5xl font-extrabold md:text-6xl text-[#e8a33d] flex items-center justify-center gap-1 font-sans">
        {isRtl && suffix ? <span className="text-3xl md:text-4xl text-[#f5c06e] font-light">{suffix}</span> : null}
        <span className="tabular-nums tracking-tight">{count}</span>
        {!isRtl && suffix ? <span className="text-3xl md:text-4xl text-[#f5c06e] font-light">{suffix}</span> : null}
      </div>
      <p className="mt-3 text-sm font-medium text-white/80 leading-relaxed max-w-[200px]">
        {locale === "ar" ? labelAr : labelEn}
      </p>
    </div>
  );
}

type StatsSectionProps = {
  locale: string;
};

export function StatsSection({ locale }: StatsSectionProps) {
  const stats = [
    {
      value: 100,
      suffix: "+",
      labelEn: "Projects Completed",
      labelAr: "أكثر من ١٠٠ مشروع منفذ",
    },
    {
      value: 10,
      suffix: "+",
      labelEn: "Years of Experience",
      labelAr: "أكثر من ١٠ سنوات من الخبرة",
    },
    {
      value: 40,
      suffix: "",
      labelEn: "Qualified Team Members",
      labelAr: "٤٠ كادر فني وعامل متخصص",
    },
    {
      value: 4,
      suffix: "",
      labelEn: "Strategic Partners",
      labelAr: "٤ شركاء نجاح رئيسيين",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0e0e16] border-y border-white/5 py-12 md:py-20 text-white">
      {/* Subtle glowing backgrounds */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#e8a33d]/5 blur-[120px]" />
      
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0 divide-x divide-white/5 rtl:divide-x-reverse">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`
                ${i % 2 === 1 ? 'border-r border-white/5 rtl:border-r-0 rtl:border-l' : ''} 
                md:border-none
              `}
            >
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                labelEn={stat.labelEn}
                labelAr={stat.labelAr}
                locale={locale}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
