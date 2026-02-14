"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const points = [
  {
    title: "100% Arabica",
    description:
      "Only Coffea arabica from Ethiopia's highlands. No blends, no compromise.",
  },
  {
    title: "Natural & Washed",
    description:
      "We offer both sun-dried natural and washed processing to preserve origin character and clarity.",
  },
  {
    title: "Handpicked, High-Altitude",
    description:
      "Beans are handpicked at 1,700m–2,300m for density, sweetness, and complexity.",
  },
];

export default function QualityProcess() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="quality"
      ref={ref}
      className="relative bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
            Quality & Process
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-coffee sm:text-4xl">
            From Farm to Cup
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-coffee-muted">
            Every step is designed to preserve the integrity and flavor of
            Ethiopian coffee.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-coffee/10 bg-cream-dark/40 p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <span className="font-serif text-lg font-semibold text-gold">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-coffee">
                {point.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-coffee-muted">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
