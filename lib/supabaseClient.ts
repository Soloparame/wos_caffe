import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type Supabase = ReturnType<typeof createClient>;
let cached: Supabase | null = null;

export const getSupabase = (): Supabase | null => {
  if (cached) return cached;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return null;
  }
  cached = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return cached;
};
