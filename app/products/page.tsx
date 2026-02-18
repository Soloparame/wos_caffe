import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { coffees } from "@/lib/data";

type Props = {
  searchParams: { q?: string };
};

export default function ProductsPage({ searchParams }: Props) {
  const query = (searchParams.q ?? "").toLowerCase().trim();
  const filtered = query
    ? coffees.filter(
        (c) =>
          c.id.toLowerCase().includes(query) ||
          c.region.toLowerCase().includes(query) ||
          c.slogan.toLowerCase().includes(query) ||
          c.flavorNotes.some((n) => n.toLowerCase().includes(query))
      )
    : coffees;

  return (
    <section className="relative bg-gradient-to-b from-black/5 via-cream-dark/30 to-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
            Coffee Collection
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-coffee sm:text-4xl">
            Explore Our Origins
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-coffee-muted">
            Search and discover Ethiopian single-origin coffees.
          </p>
          {query && (
            <p className="mt-2 font-sans text-sm text-coffee-muted">
              Showing results for: <span className="font-medium text-coffee">{query}</span>
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((coffee) => (
            <article
              key={coffee.id}
              className="group flex flex-col overflow-hidden rounded-xl border bg-cream/90 border-coffee/10 shadow-soft hover:shadow-medium transition-transform duration-300 hover:-translate-y-1"
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
                  “{coffee.slogan}”
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
                <div className="mt-5">
                  <Link
                    href={`/products/${coffee.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 font-sans text-sm font-medium text-coffee transition-colors hover:bg-gold-light"
                  >
                    View Details
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
          {!filtered.length && (
            <div className="sm:col-span-2 lg:col-span-3 flex items-center justify-center rounded-xl border border-coffee/10 bg-cream p-8">
              <p className="font-sans text-coffee-muted">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
