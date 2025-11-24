import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://monbrmtavmnrlpujcdml.supabase.co";
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;