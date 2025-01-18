import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://wisnpsaotnokckvuepeq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpc25wc2FvdG5va2NrdnVlcGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxOTkxMTQsImV4cCI6MjA1Mjc3NTExNH0.sdYO0yT1aJp1MTr87ncGnyLKl_8Q0Rs4Nj6xsllN3og"
);
