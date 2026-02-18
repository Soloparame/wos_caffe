"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";

const aboutImage = "/assets/about-origin.png";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-gradient-to-b from-cream to-cream-dark/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream shadow-glass"
          >
            <ImageWithFallback
              src={aboutImage}
              alt="Ethiopian coffee origin — birthplace of coffee"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </motion.div>
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-sans text-sm font-medium uppercase tracking-widest text-gold"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 font-serif text-3xl font-semibold text-coffee sm:text-4xl"
            >
              Ethiopia — The Birthplace of Coffee
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 font-sans text-base leading-relaxed text-coffee-muted"
            >
              Coffee was first discovered in the ancient highlands of Ethiopia,
              where it still grows wild. Legend tells of a herder named Kaldi,
              whose discovery of vibrant coffee cherries revealed a remarkable
              energy. From this sacred land, coffee became a treasured heritage
              and began its journey to the world.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 font-sans text-base leading-relaxed text-coffee-muted"
            >
              Woscaffe honors this legacy by sourcing premium single-origin beans from
              Ethiopia&apos;s most celebrated regions. We emphasize authenticity,
              heritage, and the direct connection between farmer and cup.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
