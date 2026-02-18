"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";
import { IMAGES } from "@/lib/images";

const sizes = ["250g", "500g", "1kg"];
const packagingImage = "/assets/packaging.png";

export default function Packaging() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const gallery = IMAGES.packagingGallery ?? [IMAGES.packaging];

  return (
    <section
      id="packaging"
      ref={ref}
      className="relative bg-gradient-to-b from-cream-dark/40 to-cream py-24 lg:py-32"
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
              src={packagingImage}
              alt="Woscaffe vacuum-sealed packaging"
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
              Packaging
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 font-serif text-3xl font-semibold text-coffee sm:text-4xl"
            >
              Modern, Export-Ready Packaging
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 font-sans text-base leading-relaxed text-coffee-muted"
            >
              Our coffee is packed in vacuum-sealed bags to preserve freshness
              and flavor. Suitable for retail and international distribution.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              {sizes.map((size) => (
                <li
                  key={size}
                  className="rounded-lg border border-coffee/20 bg-cream px-4 py-2 font-sans font-medium text-coffee"
                >
                  {size}
                </li>
              ))}
            </motion.ul>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 font-sans text-sm text-coffee-muted"
            >
              Private labeling available for distributors and partners.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {gallery.map((src, i) => (
                  <div
                    key={String(src) + i}
                    className="snap-start relative aspect-[4/3] min-w-[80%] sm:min-w-[55%] lg:min-w-[40%] overflow-hidden rounded-xl bg-cream border border-coffee/10"
                  >
                    <ImageWithFallback
                      src={src}
                      alt={`Packaging ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
