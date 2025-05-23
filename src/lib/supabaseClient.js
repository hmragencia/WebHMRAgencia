import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pdzwhnunflyifnpiprja.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkendobnVuZmx5aWZucGlwcmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NjMzMDUsImV4cCI6MjA2MzQzOTMwNX0.8yd61ip0XdtDVJ4eNlKbLKroztq2Ff8i7a-HfKKCS4U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);