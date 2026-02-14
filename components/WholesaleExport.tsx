"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const features = [
  "Bulk supply available",
  "Green beans and roasted beans",
  "Export-ready documentation",
  "Global distribution capability",
];

export default function WholesaleExport() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="wholesale"
      ref={ref}
      className="relative bg-coffee py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-sans text-sm font-medium uppercase tracking-widest text-gold-light"
          >
            Wholesale & Export
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 font-serif text-3xl font-semibold text-cream sm:text-4xl"
          >
            Become a Distributor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-sans text-base text-cream/80"
          >
            We supply international buyers, distributors, and specialty coffee
            markets with premium Ethiopian coffee.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 font-sans text-sm text-cream"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
                {feature}
              </li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-sans text-sm font-medium text-coffee transition-colors hover:bg-gold-light"
            >
              Get in Touch
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
