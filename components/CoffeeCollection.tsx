"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";
import { coffees } from "@/lib/data";

const cardColors: Record<string, string> = {
  yellow: "bg-amber-100/80 border-amber-200/50",
  gold: "bg-amber-50/80 border-amber-300/50",
  blue: "bg-sky-50/80 border-sky-200/50",
  green: "bg-emerald-50/80 border-emerald-200/50",
  purple: "bg-violet-50/80 border-violet-200/50",
  burgundy: "bg-burgundy/10 border-burgundy/30",
};

export default function CoffeeCollection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 600);
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;
    const mid = Math.floor(items.length / 2);
    const target = items[mid];
    const offset = target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
    el.scrollTo({ left: Math.max(offset, 0) });
  }, []);
  return (
    <section
      id="products"
      ref={ref}
      className="relative bg-gradient-to-b from-black/5 via-cream-dark/30 to-cream py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
            Coffee Collection
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-coffee sm:text-4xl">
            Six Origins, One Standard of Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-coffee-muted">
            High-altitude Ethiopian coffee from 1,700m–2,300m. Each region
            brings a distinct character; all share our commitment to quality.
          </p>
        </motion.div>

        <div className="relative mt-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {coffees.map((coffee, i) => (
              <motion.article
                key={coffee.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`snap-center min-w-[85%] sm:min-w-[55%] md:min-w-[40%] lg:min-w-[30%] xl:min-w-[28%] group flex flex-col overflow-hidden rounded-xl border ${cardColors[coffee.color] || "bg-cream/90 border-coffee/10"} shadow-soft hover:shadow-medium transition-transform duration-300 hover:-translate-y-1 backdrop-blur-sm`}
              >
                <div className="relative aspect-[3/4] bg-cream">
                  <ImageWithFallback
                    src={coffee.image}
                    alt={`${coffee.region} — ${coffee.slogan}`}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="font-serif text-lg font-semibold text-coffee">
                    {coffee.region}
                  </div>
                  <p className="mt-0.5 font-sans text-sm italic text-coffee-muted">
                    &ldquo;{coffee.slogan}&rdquo;
                  </p>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-coffee-muted">
                    {coffee.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {coffee.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="rounded-full bg-coffee/10 px-2.5 py-0.5 font-sans text-xs font-medium text-coffee shadow-soft"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-coffee-muted">
                    <span>Alt. {coffee.altitude}</span>
                    <span>{coffee.processing}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => scrollByCards("prev")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-coffee/10 bg-cream text-coffee shadow-soft hover:bg-gold/10"
              aria-label="Previous"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => scrollByCards("next")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-coffee/10 bg-cream text-coffee shadow-soft hover:bg-gold/10"
              aria-label="Next"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
