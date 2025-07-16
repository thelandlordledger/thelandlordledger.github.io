-- Add published_date column to articles table
ALTER TABLE public.articles 
ADD COLUMN published_date DATE;