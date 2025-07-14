-- Create articles table for real estate content management
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  content TEXT,
  category TEXT NOT NULL,
  image_url TEXT,
  read_time INTEGER, -- in minutes
  metric_value TEXT, -- e.g., "+23.4%", "$6.2B", "+18.7%"
  slug TEXT UNIQUE,
  author_id UUID,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create categories table for better organization
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  color TEXT DEFAULT 'primary',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default categories based on the image
INSERT INTO public.categories (name, slug, description, color) VALUES
('Market Trends', 'market-trends', 'Analysis of current market movements and trends', 'primary'),
('Key Deals', 'key-deals', 'Major real estate transactions and deals', 'secondary'),
('Investment Strategy', 'investment-strategy', 'Strategic insights for real estate investment', 'accent');

-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Create policies for articles (public read access, admin write access)
CREATE POLICY "Articles are viewable by everyone" 
ON public.articles 
FOR SELECT 
USING (published = true);

CREATE POLICY "Admins can manage all articles" 
ON public.articles 
FOR ALL 
USING (true);

-- Create policies for categories (public read access)
CREATE POLICY "Categories are viewable by everyone" 
ON public.categories 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage categories" 
ON public.categories 
FOR ALL 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
    BEFORE UPDATE ON public.articles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN lower(regexp_replace(regexp_replace(title, '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '-', 'g'));
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-generate slug
CREATE OR REPLACE FUNCTION public.set_article_slug()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.slug IS NULL OR NEW.slug = '' THEN
        NEW.slug = public.generate_slug(NEW.title);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_article_slug_trigger
    BEFORE INSERT OR UPDATE ON public.articles
    FOR EACH ROW
    EXECUTE FUNCTION public.set_article_slug();

-- Insert sample articles based on the image
INSERT INTO public.articles (title, subtitle, content, category, read_time, metric_value, published) VALUES
(
    'The Rise of Secondary Markets',
    'How emerging cities are redefining real estate investment',
    'Deep dive analysis into markets showing 20%+ growth rates, including comprehensive data on emerging secondary markets and their impact on the broader real estate landscape.',
    'Market Trends',
    8,
    '+23.4%',
    true
),
(
    'Blackstone''s $6B Industrial Portfolio',
    'Strategic acquisition reshapes logistics real estate',
    'Comprehensive breakdown of the largest industrial real estate transaction of the year, analyzing the strategic implications and market impact of this major acquisition.',
    'Key Deals',
    12,
    '$6.2B',
    true
),
(
    'ESG Integration in Real Estate',
    'Sustainable investing drives premium valuations',
    'How environmental, social, and governance factors are creating new value propositions in commercial and residential real estate markets.',
    'Investment Strategy',
    10,
    '+18.7%',
    true
);