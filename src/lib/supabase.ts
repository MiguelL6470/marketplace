import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase client: SUPABASE_URL and SUPABASE_ANON_KEY should be set as NEXT_PUBLIC_* variables for client-side usage')
}

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)


