"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";

const sizes = [
  { value: "250g", label: "Compact" },
  { value: "500g", label: "Popular" },
  { value: "1kg", label: "Best value" },
];

const defaultGallery = [
  "/assets/photo_2026-02-14_13-25-00-removebg-preview.png",
  "/assets/photo_2026-02-14_13-25-23.jpg",
  "/assets/photo_2026-02-14_14-00-27-removebg-preview.png",
  "/assets/photo_2026-02-15_18-01-52.jpg",
  "/assets/processed-image-1771082386916.png",
];

export default function Packaging() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [index, setIndex] = useState(0);
  const gallery = defaultGallery;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % gallery.length), 5000);
    return () => clearInterval(t);
  }, [gallery.length]);

  const go = (dir: "prev" | "next") => {
    setIndex((i) => (dir === "next" ? (i + 1) % gallery.length : (i - 1 + gallery.length) % gallery.length));
  };

  return (
    <section
      id="packaging"
      ref={ref}
      className="relative overflow-hidden bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex w-full max-w-md items-center gap-4">
            <span className="h-px flex-1 bg-coffee/20" aria-hidden />
            <span className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
              Packaging
            </span>
            <span className="h-px flex-1 bg-coffee/20" aria-hidden />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-coffee sm:text-4xl">
            Modern, Export-Ready Packaging
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-base text-coffee-muted">
            Vacuum-sealed to preserve freshness. Suitable for retail and international distribution.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Image carousel — supports 4 or 5 images */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-coffee/10 bg-cream-dark/60 shadow-xl ring-2 ring-coffee/5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={gallery[index]}
                    alt={`Woscaffe packaging ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              {/* Prev / Next */}
              <button
                type="button"
                onClick={() => go("prev")}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-coffee shadow-md backdrop-blur-sm transition hover:bg-white"
                aria-label="Previous image"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                type="button"
                onClick={() => go("next")}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-coffee shadow-md backdrop-blur-sm transition hover:bg-white"
                aria-label="Next image"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" /></svg>
              </button>
              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-6 bg-gold" : "w-2 bg-white/70 hover:bg-white/90"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {sizes.map((s) => (
                <span
                  key={s.value}
                  className="rounded-full border border-gold/50 bg-cream px-5 py-2.5 font-sans text-sm font-semibold text-coffee shadow-sm"
                >
                  {s.value}
                  <span className="ml-1.5 font-normal text-coffee-muted">— {s.label}</span>
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl border border-coffee/10 bg-cream-dark/40 p-6 shadow-sm lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-coffee">
                Built for quality and travel
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-coffee-muted">
                Our bags are designed to protect flavor and aroma from roastery to cup.
                Ideal for specialty retail, gifting, and export.
              </p>
              <ul className="mt-6 space-y-3">
                {["Vacuum-sealed for freshness", "Resealable closure", "Eco-conscious materials", "Private labeling available"].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm text-coffee-muted">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-sans text-xs text-coffee-muted">
                Private labeling available for distributors and partners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
