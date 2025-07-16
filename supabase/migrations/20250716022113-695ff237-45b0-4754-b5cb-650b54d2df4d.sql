-- Clear existing categories and insert new ones
DELETE FROM public.categories;

-- Insert new article categories
INSERT INTO public.categories (name, slug, description, color) VALUES
('Transaction', 'transaction', 'Deal analysis and transaction insights', 'blue'),
('News', 'news', 'Latest market news and updates', 'green'),
('Profile', 'profile', 'Company and people profiles', 'purple'),
('Strategy', 'strategy', 'Investment strategies and market approaches', 'orange'),
('Market', 'market', 'Market trends and analysis', 'red');