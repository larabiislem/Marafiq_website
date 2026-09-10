"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/assets/hero-gallery-1.png", position: "object-center" },
  { src: "/assets/hero-gallery-2.png", position: "object-center" },
  { src: "/assets/hero-gallery-3.png", position: "object-center" },
  { src: "/assets/hero-gallery-4.png", position: "object-center" },
  { src: "/assets/industrial-inspection.jpg", position: "object-center" },
  { src: "/assets/facade-cleaning.jpg", position: "object-top" },
  { src: "/assets/deep-cleaning.jpg", position: "object-center" },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#111]">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt="Hero background"
            fill
            className={`object-cover ${slide.position}`}
            priority={index === 0}
          />
        </div>
      ))}
      {/* Dark gradient overlay so text remains readable but images are clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 z-20" />
    </div>
  );
}
