import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://andntmcyuubdvgbzzqsy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZG50bWN5dXViZHZnYnp6cXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2MjI2MjEsImV4cCI6MjAzNjE5ODYyMX0.EgjzU7C-ksmTkmwwfAAeKOH9Kxe0d35KDIVUE0BEYec";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
