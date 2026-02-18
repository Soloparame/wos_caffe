"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";

const packagingImages = [
  "/assets/photo_2026-02-14_13-25-00-removebg-preview.png",
  "/assets/photo_2026-02-14_13-25-23.jpg",
  "/assets/photo_2026-02-14_14-00-27-removebg-preview.png",
  "/assets/photo_2026-02-15_18-01-52.jpg",
  "/assets/processed-image-1771082386916.png",
];

export default function Packaging() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % packagingImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + packagingImages.length) % packagingImages.length);
  const next = () => setCurrent((c) => (c + 1) % packagingImages.length);

  return (
    <section
      id="packaging"
      ref={ref}
      className="relative bg-gradient-to-b from-cream-dark/40 to-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex w-full max-w-md items-center gap-4 mx-auto"
        >
          <span className="h-px flex-1 bg-coffee/20" aria-hidden />
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-gold">Packaging</span>
          <span className="h-px flex-1 bg-coffee/20" aria-hidden />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-center font-serif text-3xl font-semibold text-coffee sm:text-4xl"
        >
          Modern, Export-Ready Packaging
        </motion.h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream shadow-glass"
            >
              <motion.div
                key={packagingImages[current]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={packagingImages[current]}
                  alt="Woscaffe vacuum-sealed packaging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </motion.div>
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white p-2 hover:bg-black/50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white p-2 hover:bg-black/50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" /></svg>
              </button>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {packagingImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${i === current ? "bg-gold" : "bg-white/60 hover:bg-white"}`}
                  />
                ))}
              </div>
            </motion.div>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { size: "250g", tag: "Compact" },
                { size: "500g", tag: "Popular" },
                { size: "1kg", tag: "Best value" },
              ].map((s) => (
                <span
                  key={s.size}
                  className="inline-flex items-center gap-2 rounded-lg border border-coffee/20 bg-cream px-4 py-2 font-sans text-sm text-coffee shadow-soft"
                >
                  <span className="font-medium">{s.size}</span>
                  <span className="rounded-full bg-coffee/10 px-2 py-0.5 text-xs">{s.tag}</span>
                </span>
              ))}
            </div>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 font-sans text-base leading-relaxed text-coffee-muted"
            >
              Our coffee is packed in vacuum-sealed bags to preserve freshness
              and flavor. Suitable for retail and international distribution.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 font-sans text-sm text-coffee-muted"
            >
              Private labeling available for distributors and partners.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 space-y-2"
            >
              {[
                "Vacuum-sealed",
                "Resealable closure",
                "Eco-conscious materials",
                "Private labeling",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 font-sans text-sm text-coffee">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
