"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [overHero, setOverHero] = useState(() => pathname === "/");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") {
      setOverHero(false);
      return;
    }
    const hero = document.getElementById("home");
    let cleanup: (() => void) | null = null;
    if (!hero) {
      const onScroll = () => setOverHero(window.scrollY < 80);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanup = () => window.removeEventListener("scroll", onScroll);
    } else {
      setOverHero(true);
      const observer = new IntersectionObserver(
        ([entry]) => setOverHero(entry.isIntersecting),
        { root: null, threshold: 0.01, rootMargin: "-64px 0px 0px 0px" }
      );
      observer.observe(hero);
      cleanup = () => observer.disconnect();
    }
    return () => {
      if (cleanup) cleanup();
    };
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        overHero ? "bg-transparent" : "bg-cream/85 backdrop-blur-md border-b border-coffee/5"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className={`group flex items-center gap-3 no-underline ${
            overHero ? "text-cream" : "text-coffee"
          }`}
        >
          <span
            className={`text-2xl md:text-3xl font-extrabold tracking-wide transition-colors ${
              overHero
                ? "bg-gradient-to-r from-gold to-cream bg-clip-text text-transparent"
                : "text-coffee"
            }`}
          >
            Woscaffe
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group font-sans text-sm font-medium transition-all relative py-1 ${
                overHero ? "text-cream/80 hover:text-cream" : "text-coffee-muted hover:text-coffee"
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: search, cart, Sign in */}
        <div className="flex items-center gap-4">
          {searchOpen ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/products?q=${encodeURIComponent(query)}`);
                setSearchOpen(false);
                setQuery("");
              }}
              className="hidden sm:flex items-center gap-2 rounded-full border border-coffee/10 bg-cream px-3 py-1.5"
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="bg-transparent outline-none font-sans text-sm text-coffee"
              />
              <button type="submit" className="text-coffee-muted hover:text-gold">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          ) : (
            <button
              type="button"
              className={`hidden sm:flex p-2 hover:text-gold transition-colors rounded-full ${
                overHero ? "text-cream/80 hover:bg-white/10" : "text-coffee-muted hover:bg-coffee/5"
              }`}
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}
          <Link
            href="/cart"
            className={`hidden sm:flex p-2 hover:text-gold transition-colors rounded-full relative ${
              overHero ? "text-cream/80 hover:bg-white/10" : "text-coffee-muted hover:bg-coffee/5"
            }`}
            aria-label="Cart"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-burgundy ring-2 ring-cream" />
          </Link>
          <Link
            href="/login"
            className="hidden sm:inline-flex rounded-full bg-coffee px-6 py-2.5 font-sans text-sm font-medium text-cream shadow-soft transition-all hover:bg-coffee-light hover:shadow-medium hover:-translate-y-0.5"
          >
            Sign in
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`md:hidden p-2 transition-transform active:scale-95 ${
              overHero ? "text-cream" : "text-coffee"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${
              overHero
                ? "border-t border-white/10 bg-black/60 backdrop-blur-lg"
                : "border-t border-coffee/10 bg-cream/95 backdrop-blur-xl"
            }`}
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 font-sans font-medium transition-colors ${
                    overHero
                      ? "text-cream hover:bg-white/10 hover:text-gold-light"
                      : "text-coffee hover:bg-gold/10 hover:text-gold-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-coffee/10" />
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center rounded-lg bg-coffee px-4 py-3 font-sans font-medium text-cream hover:bg-coffee-light"
              >
                Sign in
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
