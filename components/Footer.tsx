import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-coffee text-cream-dark pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-2 text-cream hover:opacity-90 transition-opacity">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21h18v-2H2v2zm18-4H2v-2h18v2zm0-4H2v-2h18v2zm0-6H2V5h18v2zm0-4H2V1h18v2z" /></svg>
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight">Woscaffe</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-cream/70">
              Authentic Ethiopian coffee, ethically sourced from the birthplace of coffee to your cup. Experience the difference of origin.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: 'Products', href: '#products' },
                { name: 'Our Story', href: '#about' },
                { name: 'Quality & Process', href: '#quality' },
                { name: 'Wholesale', href: '#wholesale' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-cream/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Support</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: 'Contact Us', href: '#contact' },
                { name: 'Shipping Policy', href: '#' },
                { name: 'Returns', href: '#' },
                { name: 'Privacy Policy', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-cream/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Stay Updated</h3>
            <p className="mt-4 text-sm text-cream/70">Subscribe to our newsletter for brewing tips and new arrivals.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full min-w-0 flex-auto rounded-lg bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
              <button type="submit" className="flex-none rounded-lg bg-gold px-3.5 py-2.5 text-sm font-semibold text-coffee shadow-sm hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Woscaffe. All rights reserved.
          </p>
          <div className="flex gap-4 opacity-50 hover:opacity-100 transition-opacity">
            {/* Social icons placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-5 w-5 bg-white/20 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
