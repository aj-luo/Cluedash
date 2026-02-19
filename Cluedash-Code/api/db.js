import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const words = createClient(
  process.env.SUPABASE_WORDS_URL,
  process.env.SUPABASE_WORDS_KEY
);

module.exports = {
  supabase,
  words
};