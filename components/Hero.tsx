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

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center px-4 pt-6 pb-16 lg:px-8 lg:pb-20">
        <div className="w-full text-center">
          <div className="flex w-full max-w-md mx-auto items-center gap-4">
            <span className="h-px flex-1 bg-white/30" aria-hidden />
            <span className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
              Woscaffe
            </span>
            <span className="h-px flex-1 bg-white/30" aria-hidden />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent"
          >
            Experience the Art of Coffee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-white/90 font-sans mx-auto"
          >
            From the birthplace of coffee to your cup. Explore our premium selection of handcrafted Ethiopian beans, ethically sourced and roasted to perfection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white/10 backdrop-blur px-8 py-3.5 font-sans text-sm font-semibold text-white transition-all hover:bg-white hover:text-coffee hover:shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/about#wholesale"
              className="inline-flex items-center gap-2 rounded-lg border border-white/60 bg-transparent px-8 py-3.5 font-sans text-sm font-semibold text-white/95 transition-all hover:bg-white/10 hover:shadow-lg"
            >
              Become a Distributor
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
