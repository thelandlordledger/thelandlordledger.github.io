-- Add description column to deals table
ALTER TABLE public.deals 
ADD COLUMN description TEXT;

-- Update existing deals with proper descriptions
UPDATE public.deals 
SET description = 'Landmark 52-story office building in Midtown Manhattan featuring premium tenants and recent renovations.'
WHERE deal_id = 'FEAT-001';

UPDATE public.deals 
SET description = 'Iconic mixed-use tower in Hudson Yards featuring Class A office space and premium retail components.'
WHERE deal_id = 'REC-001';

UPDATE public.deals 
SET description = 'Transformative mixed-use waterfront development featuring residential, office, and retail components with panoramic views.'
WHERE deal_id = 'PIP-001';