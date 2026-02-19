import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

// Add 'export' directly before the variable declarations
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY 
);

export const words = createClient(
  process.env.SUPABASE_WORDS_URL,
  process.env.SUPABASE_WORDS_KEY
);