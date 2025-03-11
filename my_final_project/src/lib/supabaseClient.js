import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://fohqqnnqerdanwlaugtr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvaHFxbm5xZXJkYW53bGF1Z3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NzQ3MTYsImV4cCI6MjA1NzI1MDcxNn0.wGW5D4O_8iHY1IXBH-6_q_7-LUL6FyftNBf_V8M-E1M')