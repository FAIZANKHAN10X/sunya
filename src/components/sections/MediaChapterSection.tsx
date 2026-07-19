"use client";

import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
    title: "Morning stillness",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    title: "Breath in practice",
  },
  {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1600&q=80",
    title: "The held room",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
    title: "Quiet form",
  },
  {
    src: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1600&q=80",
    title: "Return to body",
  },
] as const;

/**
 * Expandable accordion image gallery.
 * Hover expands a panel; titles appear only on the active card.
 */
export default function MediaChapterSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="presence"
      aria-label="Practice gallery"
      className="relative scroll-mt-20 w-full sm:scroll-mt-24"
    >
      <ul
        className="flex h-[500px] w-full flex-col gap-1 md:flex-row md:gap-1.5"
        onMouseLeave={() => setActiveIndex(0)}
      >
        {images.map((image, index) => {
          const isActive = activeIndex === index;

          return (
            <li
              key={image.src}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative min-h-0 min-w-0 cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
                isActive
                  ? "flex-[2.2] md:flex-[3]"
                  : "flex-[0.55] md:flex-[0.5]"
              }`}
            >
              {/*
                Fixed-scale image (no zoom on expand): always 500px tall and
                at least full-viewport wide, centered; the panel only clips.
              */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.title}
                className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[100vw] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />

              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pt-16 pb-4 transition-opacity duration-500 ease-out sm:px-5 sm:pb-5 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-sm font-medium tracking-tight text-white sm:text-base">
                  {image.title}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
