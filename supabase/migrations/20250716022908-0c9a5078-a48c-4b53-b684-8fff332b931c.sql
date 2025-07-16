-- Update "The Rise of Secondary Markets" article to use the new "Market" category
UPDATE public.articles 
SET category = 'Market' 
WHERE title = 'The Rise of Secondary Markets';