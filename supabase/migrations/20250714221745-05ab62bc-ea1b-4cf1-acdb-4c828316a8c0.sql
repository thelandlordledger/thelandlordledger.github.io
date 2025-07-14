-- Add featured article support and content enhancement fields
ALTER TABLE public.articles 
ADD COLUMN featured boolean DEFAULT false,
ADD COLUMN featured_order integer,
ADD COLUMN excerpt text,
ADD COLUMN author_name text,
ADD COLUMN view_count integer DEFAULT 0;

-- Create index for featured articles ordering
CREATE INDEX idx_articles_featured_order ON public.articles(featured_order) WHERE featured = true;

-- Create function to enforce max 9 featured articles
CREATE OR REPLACE FUNCTION public.check_featured_limit()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.featured = true THEN
        -- Count current featured articles
        IF (SELECT COUNT(*) FROM public.articles WHERE featured = true AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)) >= 9 THEN
            RAISE EXCEPTION 'Cannot have more than 9 featured articles';
        END IF;
        
        -- Auto-assign featured_order if not provided
        IF NEW.featured_order IS NULL THEN
            NEW.featured_order := COALESCE((SELECT MAX(featured_order) FROM public.articles WHERE featured = true), 0) + 1;
        END IF;
    ELSE
        -- Clear featured_order if not featured
        NEW.featured_order := NULL;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to enforce featured limit
CREATE TRIGGER check_featured_articles_limit
    BEFORE INSERT OR UPDATE ON public.articles
    FOR EACH ROW
    EXECUTE FUNCTION public.check_featured_limit();