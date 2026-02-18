"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabaseClient";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { coffees } from "@/lib/data";

type CartItem = {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
};

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      let sessionData: { session: { user: { id: string } } | null } = { session: null };
      try {
        const { data } = await getSupabase().auth.getSession();
        sessionData = data as any;
      } catch {
        setLoading(false);
        return;
      }
      if (!sessionData.session) {
        router.replace("/login?redirect=/cart");
        return;
      }
      try {
        const { data, error } = await getSupabase()
          .from("cart_items")
          .select("*")
          .eq("user_id", sessionData.session.user.id);
        if (!error && data) {
          setItems(data as CartItem[]);
        }
      } catch {
        // ignore
      }
      setLoading(false);
    };
    load();
  }, [router]);

  if (loading) {
    return (
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-coffee">Loading…</p>
        </div>
      </section>
    );
  }

  const mapped = items
    .map((i) => {
      const p = coffees.find((c) => c.id === i.product_id);
      if (!p) return null;
      return { item: i, product: p };
    })
    .filter(Boolean) as Array<{ item: CartItem; product: typeof coffees[number] }>;

  return (
    <section className="relative bg-gradient-to-b from-black/5 via-cream-dark/30 to-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-coffee sm:text-4xl">Your Cart</h1>
        {!mapped.length ? (
          <div className="mt-6 rounded-xl border border-coffee/10 bg-cream p-6">
            <p className="font-sans text-coffee-muted">Your cart is empty.</p>
            <Link href="/products" className="mt-4 inline-block rounded-lg bg-gold px-4 py-2 font-sans text-sm font-medium text-coffee">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mapped.map(({ item, product }) => (
              <div key={item.id} className="rounded-xl border border-coffee/10 bg-cream overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.region}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <Link href={`/products/${product.id}`} className="font-serif text-lg font-semibold text-coffee">
                    {product.region}
                  </Link>
                  <p className="mt-1 font-sans text-sm text-coffee-muted">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
