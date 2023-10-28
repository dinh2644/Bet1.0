import { createClient } from "@supabase/supabase-js";
const URL = "https://exryfxildsysexncaurx.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4cnlmeGlsZHN5c2V4bmNhdXJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MTcyNjUsImV4cCI6MjAxNDA5MzI2NX0.SohUdVNrZ324fwvNRLwkA2eF3Y6ZQWSDm6EmUMObzsM";

export const supabase = createClient(URL, API_KEY);
