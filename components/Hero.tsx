"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";

const heroImage1 = "/assets/hero-cups-1.png";
const heroImage2 = "/assets/hero-cups-2.png";

const stats = [
  { value: "1K+", label: "Reviews" },
  { value: "3k+", label: "Best Sell" },
  { value: "150+", label: "Menu" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden bg-cream"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pt-12 pb-32 lg:grid-cols-2 lg:gap-12 lg:pt-16 lg:pb-36">
        {/* Left: product imagery (2nd and 3rd images) */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative flex items-end gap-4">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-64 w-48 sm:h-80 sm:w-56 lg:h-96 lg:w-64"
            >
              <ImageWithFallback
                src={heroImage1}
                alt="Woscaffe premium coffee"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 192px, 256px"
                priority
                unoptimized
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="relative h-56 w-40 sm:h-72 sm:w-48 lg:h-80 lg:w-52"
            >
              <ImageWithFallback
                src={heroImage2}
                alt="Woscaffe coffee cup"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 160px, 208px"
                priority
                unoptimized
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-0 right-0 rounded-full bg-gold px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-lg lg:bottom-8 lg:right-8"
          >
            Start At $7.99
          </motion.div>
        </div>

        {/* Right: headline, subheadline, CTA */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-semibold leading-tight text-coffee sm:text-5xl lg:text-6xl"
          >
            From the Birthplace of Coffee to Your Cup
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-xl font-sans text-base text-coffee-muted sm:text-lg"
          >
            Premium 100% Arabica from Ethiopia&apos;s most celebrated regions.
            Authentic, ethically sourced, and crafted for those who appreciate
            origin and excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-lg bg-coffee px-6 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-coffee-light"
            >
              Explore Our Coffee
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/20">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#wholesale"
              className="inline-flex items-center gap-2 rounded-lg border border-coffee/30 bg-transparent px-6 py-3 font-sans text-sm font-medium text-coffee transition-colors hover:bg-coffee/5"
            >
              Become a Distributor
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats bar (bottom, over subtle bean pattern) */}
      <div className="absolute bottom-0 left-0 right-0 bg-cream-dark/60 bg-pattern-beans py-8">
        <div className="mx-auto flex max-w-7xl justify-center gap-12 px-4 sm:gap-16 lg:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-sans text-2xl font-bold text-coffee sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 font-sans text-sm text-coffee-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
