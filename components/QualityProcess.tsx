"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";

const qualityOriginImage = "/assets/730f88423fae795f4c885901b449c9d1.png";
const qualityProcessImage = "/assets/4a997ed657d5a0fba1a73354e4efaf21.png";
const qualityRoastingImage = "/assets/9ea280800b72685cddfbef6605023119.png";

const points = [
  {
    title: "100% Arabica",
    description:
      "Only Coffea arabica from Ethiopia's highlands. No blends, no compromise—single-origin clarity and character.",
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
      className="relative overflow-hidden bg-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title with decorative lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex w-full max-w-md items-center gap-4">
            <span className="h-px flex-1 bg-coffee/20" aria-hidden />
            <span className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
              Quality & Process
            </span>
            <span className="h-px flex-1 bg-coffee/20" aria-hidden />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-coffee sm:text-4xl">
            Ethiopian Coffee — From Farm to Cup
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-base text-coffee-muted">
            Every step is designed to preserve the integrity and flavor of Ethiopian coffee.
          </p>
        </motion.div>

        {/* Image + text: Ethiopian coffee concept */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-coffee/10 bg-cream-dark/60 shadow-lg">
            <ImageWithFallback
              key={qualityOriginImage}
              src={qualityOriginImage}
              alt="Ethiopian coffee origin — birthplace of coffee"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent" />
          </div>
          <div>
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-gold">
              The Birthplace of Coffee
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-coffee sm:text-3xl">
              Ethiopia — Where It All Began
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-coffee-muted">
              Coffee was first discovered in the ancient highlands of Ethiopia, where it still grows wild. Legend tells of a herder named Kaldi, whose discovery of vibrant coffee cherries revealed a remarkable energy. From this sacred land, coffee became a treasured heritage and began its journey to the world.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-coffee-muted">
              Woscaffe sources 100% Arabica beans exclusively from Ethiopia&apos;s most celebrated regions—Jimma, Guji, Wollega, Dilla, Bonga, and Gishen—each with distinct terroir and flavor. Our focus on single-origin Ethiopian coffee ensures authenticity, traceability, and the highest quality.
            </p>
          </div>
        </motion.div>

        {/* Second image block: process */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center"
        >
          <div className="order-2 lg:order-1">
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-gold">
              Our Process
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-coffee sm:text-3xl">
              Handpicked, High-Altitude, Ethically Sourced
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-coffee-muted">
              We work directly with farmers in Ethiopia&apos;s highlands. Beans are handpicked at 1,700m–2,300m, then processed using natural (sun-dried) or washed methods to highlight each region&apos;s character. No additives, no shortcuts—only premium Ethiopian Arabica from farm to cup.
            </p>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl border border-coffee/10 bg-cream-dark/60 shadow-lg lg:order-2">
            <ImageWithFallback
              key={qualityProcessImage}
              src={qualityProcessImage}
              alt="Woscaffe packaging and process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Third image block: roasting / quality */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-coffee/10 bg-cream-dark/60 shadow-lg">
            <ImageWithFallback
              key={qualityRoastingImage}
              src={qualityRoastingImage}
              alt="Ethiopian coffee cherries and quality"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent" />
          </div>
          <div>
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-gold">
              From Cherry to Cup
            </span>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-coffee sm:text-3xl">
              Roasted with Care
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-coffee-muted">
              Our roasting is calibrated to bring out the best in each origin—whether you prefer the fruit-forward notes of natural processing or the clean, bright profile of washed beans. Every batch is cupped and approved before release.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-coffee-muted">
              We package in vacuum-sealed bags to lock in freshness, so your Ethiopian coffee arrives as it left the roastery.
            </p>
          </div>
        </motion.div>

        {/* Three pillars */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="rounded-2xl border border-coffee/10 bg-cream-dark/40 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
