// npm install @supabase/supabase-js

import { createClient } from "@supabase/supabase-js";
const URL = "insert_ur_project_url";
const API_KEY = "insert_ur_api_key";

export const supabase = createClient(URL, API_KEY);
