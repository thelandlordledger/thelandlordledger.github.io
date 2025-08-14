-- Update some deals to be published and set featured/recent/pipeline flags
UPDATE public.deals 
SET published = true, featured_deal = true
WHERE deal_id IN ('DEAL_F5C2D80F', 'DEAL_C410EE8F', 'DEAL_7050AD7D');

UPDATE public.deals 
SET published = true, recent_deal = true
WHERE deal_id IN ('DEAL_60B50899', 'DEAL_32F25A1E', 'DEAL_5ABE8360');

UPDATE public.deals 
SET published = true, pipeline_deal = true
WHERE deal_id IN ('DEAL_25BC0D8C', 'DEAL_AB067E6B', 'DEAL_6573E1E6');