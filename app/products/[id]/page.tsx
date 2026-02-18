"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImageWithFallback from "@/components/ImageWithFallback";
import { coffees } from "@/lib/data";
import { getSupabase } from "@/lib/supabaseClient";

type Props = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: Props) {
  const router = useRouter();
  const product = coffees.find((c) => c.id === params.id);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!product) {
      router.replace("/products");
    }
  }, [product, router]);

  if (!product) return null;

  const addToCart = async () => {
    setLoading(true);
    setMessage(null);
    let session: { user: { id: string } } | null = null;
    try {
      const { data } = await getSupabase().auth.getSession();
      session = data.session;
    } catch {
      setMessage("Auth not configured.");
      setLoading(false);
      return;
    }
    if (!session) {
      router.push("/login?redirect=/cart");
      setLoading(false);
      return;
    }
    const { error } = await getSupabase()
      .from("cart_items")
      .insert({
        user_id: session.user.id,
        product_id: product.id,
        quantity: 1,
      });
    if (error) {
      setMessage("Could not add to cart.");
    } else {
      setMessage("Added to cart.");
    }
    setLoading(false);
  };

  return (
    <section className="relative bg-gradient-to-b from-black/5 via-cream-dark/30 to-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-coffee/10 bg-cream">
            <ImageWithFallback
              src={product.image}
              alt={`${product.region} — ${product.slogan}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-semibold text-coffee sm:text-4xl">
              {product.region}
            </h1>
            <p className="mt-1 font-sans text-sm italic text-coffee-muted">
              “{product.slogan}”
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-coffee-muted">
              {product.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.flavorNotes.map((note) => (
                <span
                  key={note}
                  className="rounded-full bg-coffee/10 px-2.5 py-0.5 font-sans text-xs font-medium text-coffee shadow-soft"
                >
                  {note}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs text-coffee-muted">
              <span>Alt. {product.altitude}</span>
              <span>{product.processing}</span>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={addToCart}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-sans text-sm font-medium text-coffee transition-colors hover:bg-gold-light disabled:opacity-60"
              >
                Add to Cart
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {message && <span className="font-sans text-sm text-coffee-muted">{message}</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
