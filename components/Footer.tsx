import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-coffee/10 bg-cream-dark/60 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#home" className="font-serif text-xl font-semibold text-coffee">
            Woscaffe
          </Link>
          <p className="font-sans text-sm text-coffee-muted">
            From the Birthplace of Coffee to Your Cup
          </p>
          <nav className="flex gap-6">
            <Link href="#products" className="font-sans text-sm text-coffee-muted hover:text-coffee transition-colors">
              Products
            </Link>
            <Link href="#about" className="font-sans text-sm text-coffee-muted hover:text-coffee transition-colors">
              About
            </Link>
            <Link href="#contact" className="font-sans text-sm text-coffee-muted hover:text-coffee transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-coffee/10 pt-8 text-center">
          <p className="font-sans text-xs text-coffee-muted">
            © {new Date().getFullYear()} Woscaffe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
