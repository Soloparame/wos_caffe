"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { brewingMethods } from "@/lib/data";

export default function BrewingGuide() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="brewing"
      ref={ref}
      className="relative bg-cream-dark/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
            Brewing Guide
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-coffee sm:text-4xl">
            How to Brew Woscaffe
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-coffee-muted">
            Get the best from our beans with these recommended methods.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brewingMethods.map((method, i) => (
            <motion.article
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-coffee/10 bg-cream p-6 shadow-sm"
            >
              <h3 className="font-serif text-xl font-semibold text-coffee">
                {method.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-coffee-muted">
                {method.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
