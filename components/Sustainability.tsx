"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    title: "Direct Farmer Partnerships",
    description:
      "We work directly with growers in Ethiopia's coffee regions, ensuring fair prices and long-term relationships.",
  },
  {
    title: "Ethical Sourcing",
    description:
      "Transparent supply chains and ethical practices at every step, from farm to export.",
  },
  {
    title: "Community Support",
    description:
      "A portion of our work supports community projects in coffee-growing regions.",
  },
];

export default function Sustainability() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sustainability"
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
            Sustainability
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-coffee sm:text-4xl">
            Wholesome Coffee, Ethically Sourced
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-coffee-muted">
            Our commitment to people and place is at the heart of Woscaffe.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-coffee/10 bg-cream-dark/40 p-6"
            >
              <h3 className="font-serif text-xl font-semibold text-coffee">
                {pillar.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-coffee-muted">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
