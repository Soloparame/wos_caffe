"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSupabase } from "@/lib/supabaseClient";
import Link from "next/link";

export const dynamic = "force-dynamic";

function SignupContent() {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/products";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const client = getSupabase();
    if (!client) {
      setError("Auth not configured.");
      setLoading(false);
      return;
    }
    const { data, error } = await client.auth.signUp({
      email,
      password,
    });
    if (error || !data.user) {
      setError("Could not create account.");
      setLoading(false);
      return;
    }
    router.push(redirect);
  };

  return (
    <section className="relative bg-gradient-to-b from-black/5 via-cream-dark/30 to-cream py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-coffee sm:text-4xl text-center">Create Account</h1>
        <form onSubmit={onSubmit} className="mt-8 rounded-xl border border-coffee/10 bg-cream p-6 shadow-soft">
          <div>
            <label className="block font-sans text-sm font-medium text-coffee">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-coffee/20 bg-cream px-3 py-2 font-sans text-coffee placeholder:text-coffee-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              placeholder="you@example.com"
            />
          </div>
          <div className="mt-4">
            <label className="block font-sans text-sm font-medium text-coffee">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-coffee/20 bg-cream px-3 py-2 font-sans text-coffee placeholder:text-coffee-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="mt-3 font-sans text-sm text-coffee-muted">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2.5 font-sans text-sm font-medium text-coffee transition-colors hover:bg-gold-light disabled:opacity-60"
          >
            Create Account
          </button>
          <p className="mt-4 text-center font-sans text-sm text-coffee-muted">
            Already have an account?{" "}
            <Link href={`/login?redirect=${encodeURIComponent(redirect)}`} className="text-gold hover:text-gold-light">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center font-sans text-coffee">Loading…</div>}>
      <SignupContent />
    </Suspense>
  );
}
