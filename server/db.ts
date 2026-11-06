import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Server-only client. Uses the service role key, which bypasses RLS: never expose it to the browser.
let client: SupabaseClient | null | undefined;

export function getDb(): SupabaseClient | null {
  if (client !== undefined) return client;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.warn("Supabase not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY): submissions will not be persisted.");
    return (client = null);
  }
  return (client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } }));
}

/** Calls an atomic write function. Never throws: persistence must not break the user-facing response. */
export async function persist(fn: string, args: Record<string, unknown>): Promise<string | null> {
  const db = getDb();
  if (!db) return null;
  const { data, error } = await db.rpc(fn, args);
  if (error) {
    console.error(`Supabase ${fn} failed:`, error.message);
    return null;
  }
  return data as string;
}
