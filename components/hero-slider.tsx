"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/assets/project-p2.png",
  "/assets/hero-gallery-3.png",
  "/assets/project-p5.jpg",
  "/assets/hero-gallery-1.png",
  "/assets/project-p1.jpg",
  "/assets/hero-gallery-4.png",
  "/assets/project-p3.jpg",
  "/assets/project-p4.jpg",
  "/assets/hero-gallery-2.jpg",
  "/assets/hero-gallery-5.jpg",
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#111]">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt="Hero background"
            fill
            className={`object-cover transition-transform duration-[6000ms] ease-out ${
              index === currentIndex ? "scale-105" : "scale-100"
            }`}
            priority={index === 0}
          />
        </div>
      ))}
      {/* Dark gradient overlay so text remains perfectly readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-20" />
    </div>
  );
}
