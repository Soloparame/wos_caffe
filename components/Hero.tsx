"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";

const heroBgImage = "/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-coffee -mt-20 pt-20"
    >
      {/* Full-bleed background: extends behind navbar */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroBgImage}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col items-center justify-center px-4 pt-6 pb-16 text-center lg:px-8 lg:pb-20">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-widest text-white/95 backdrop-blur-sm"
        >
          From the Birthplace of Coffee
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 font-serif text-4xl font-bold leading-[1.1] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Experience the Art of Coffee
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-5 max-w-xl text-base text-white/90 font-sans leading-relaxed sm:text-lg mx-auto"
        >
          From the birthplace of coffee to your cup. Explore our premium selection of handcrafted Ethiopian beans, ethically sourced and roasted to perfection.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#products"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-8 py-3.5 font-sans text-sm font-semibold text-coffee transition-all hover:bg-white/95 hover:border-white hover:shadow-lg"
          >
            Shop Now
          </Link>
          <Link
            href="#wholesale"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 bg-transparent px-8 py-3.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-white/15 hover:border-white"
          >
            Become a Distributor
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
