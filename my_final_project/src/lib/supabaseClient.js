import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://tosizvorzloqyvazjvte.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvc2l6dm9yemxvcXl2YXpqdnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NTI5MTAsImV4cCI6MjA1NzAyODkxMH0.6W9smma-NX24IYAXAiqlTJpRYVovML_51MkWweVDo-s')