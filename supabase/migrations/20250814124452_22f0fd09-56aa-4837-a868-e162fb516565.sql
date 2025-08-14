-- Create geographic taxonomy tables
CREATE TABLE public.snapshot_geographic_regions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.snapshot_countries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  region_id UUID NOT NULL REFERENCES public.snapshot_geographic_regions(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.snapshot_cities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  country_id UUID NOT NULL REFERENCES public.snapshot_countries(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(slug, country_id)
);

-- Create sector taxonomy tables
CREATE TABLE public.snapshot_sectors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.snapshot_sub_sectors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  sector_id UUID NOT NULL REFERENCES public.snapshot_sectors(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(slug, sector_id)
);

-- Create market metrics table
CREATE TABLE public.snapshot_market_metrics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name TEXT NOT NULL,
  metric_category TEXT NOT NULL, -- 'market_activity', 'investment_metrics', 'financing_metrics'
  metric_family TEXT NOT NULL, -- 'Market Activity', 'Valuation', 'Occupancy', etc.
  current_value TEXT NOT NULL,
  change_percentage DECIMAL(5,2),
  change_direction TEXT CHECK (change_direction IN ('up', 'down', 'stable')),
  sparkline_data JSONB, -- Array of numbers for mini charts
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  city_id UUID REFERENCES public.snapshot_cities(id),
  sector_id UUID REFERENCES public.snapshot_sectors(id),
  sub_sector_id UUID REFERENCES public.snapshot_sub_sectors(id),
  data_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create sector intelligence table
CREATE TABLE public.snapshot_sector_intelligence (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  metrics JSONB, -- Sector-specific metrics object
  sector_id UUID NOT NULL REFERENCES public.snapshot_sectors(id),
  sub_sector_id UUID REFERENCES public.snapshot_sub_sectors(id),
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create trending people table
CREATE TABLE public.snapshot_trending_people (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  image_url TEXT,
  change_percentage DECIMAL(5,2),
  description TEXT,
  sector_id UUID REFERENCES public.snapshot_sectors(id),
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create trending projects table
CREATE TABLE public.snapshot_trending_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  project_value TEXT NOT NULL,
  project_status TEXT NOT NULL,
  image_url TEXT,
  change_percentage DECIMAL(5,2),
  description TEXT,
  sector_id UUID REFERENCES public.snapshot_sectors(id),
  sub_sector_id UUID REFERENCES public.snapshot_sub_sectors(id),
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  city_id UUID REFERENCES public.snapshot_cities(id),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create market comparisons table
CREATE TABLE public.snapshot_market_comparisons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  comparison_type TEXT NOT NULL, -- 'regional', 'sector', 'temporal'
  title TEXT NOT NULL,
  description TEXT,
  comparison_data JSONB NOT NULL, -- Flexible data structure for different comparison types
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  sector_id UUID REFERENCES public.snapshot_sectors(id),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.snapshot_geographic_regions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_sub_sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_market_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_sector_intelligence ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_trending_people ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_trending_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_market_comparisons ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_geographic_regions FOR SELECT USING (true);
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_countries FOR SELECT USING (true);
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_cities FOR SELECT USING (true);
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_sectors FOR SELECT USING (true);
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_sub_sectors FOR SELECT USING (true);
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_market_metrics FOR SELECT USING (true);
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_sector_intelligence FOR SELECT USING (published = true);
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_trending_people FOR SELECT USING (published = true);
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_trending_projects FOR SELECT USING (published = true);
CREATE POLICY "Market trends data is viewable by everyone" ON public.snapshot_market_comparisons FOR SELECT USING (published = true);

-- Create admin policies (placeholder for future admin functionality)
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_geographic_regions FOR ALL USING (true);
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_countries FOR ALL USING (true);
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_cities FOR ALL USING (true);
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_sectors FOR ALL USING (true);
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_sub_sectors FOR ALL USING (true);
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_market_metrics FOR ALL USING (true);
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_sector_intelligence FOR ALL USING (true);
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_trending_people FOR ALL USING (true);
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_trending_projects FOR ALL USING (true);
CREATE POLICY "Admins can manage market trends data" ON public.snapshot_market_comparisons FOR ALL USING (true);

-- Create indexes for better query performance
CREATE INDEX idx_market_metrics_region ON public.snapshot_market_metrics(region_id);
CREATE INDEX idx_market_metrics_country ON public.snapshot_market_metrics(country_id);
CREATE INDEX idx_market_metrics_city ON public.snapshot_market_metrics(city_id);
CREATE INDEX idx_market_metrics_sector ON public.snapshot_market_metrics(sector_id);
CREATE INDEX idx_market_metrics_sub_sector ON public.snapshot_market_metrics(sub_sector_id);
CREATE INDEX idx_market_metrics_category ON public.snapshot_market_metrics(metric_category);
CREATE INDEX idx_market_metrics_date ON public.snapshot_market_metrics(data_date);

-- Create triggers for updated_at
CREATE TRIGGER update_snapshot_geographic_regions_updated_at
  BEFORE UPDATE ON public.snapshot_geographic_regions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_countries_updated_at
  BEFORE UPDATE ON public.snapshot_countries
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_cities_updated_at
  BEFORE UPDATE ON public.snapshot_cities
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_sectors_updated_at
  BEFORE UPDATE ON public.snapshot_sectors
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_sub_sectors_updated_at
  BEFORE UPDATE ON public.snapshot_sub_sectors
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_market_metrics_updated_at
  BEFORE UPDATE ON public.snapshot_market_metrics
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_sector_intelligence_updated_at
  BEFORE UPDATE ON public.snapshot_sector_intelligence
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_trending_people_updated_at
  BEFORE UPDATE ON public.snapshot_trending_people
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_trending_projects_updated_at
  BEFORE UPDATE ON public.snapshot_trending_projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_market_comparisons_updated_at
  BEFORE UPDATE ON public.snapshot_market_comparisons
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert placeholder data
-- Geographic Regions
INSERT INTO public.snapshot_geographic_regions (name, slug) VALUES 
('Americas', 'americas'),
('Europe', 'europe'),
('Asia-Pacific', 'asia-pacific'),
('Middle East & Africa', 'middle-east-africa');

-- Countries (getting region IDs for foreign keys)
INSERT INTO public.snapshot_countries (name, slug, region_id) VALUES 
('United States', 'united-states', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas')),
('Canada', 'canada', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas')),
('United Kingdom', 'united-kingdom', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe')),
('Germany', 'germany', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe')),
('China', 'china', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific')),
('Japan', 'japan', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific')),
('UAE', 'uae', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'));

-- Cities
INSERT INTO public.snapshot_cities (name, slug, country_id) VALUES 
('New York', 'new-york', (SELECT id FROM public.snapshot_countries WHERE slug = 'united-states')),
('Los Angeles', 'los-angeles', (SELECT id FROM public.snapshot_countries WHERE slug = 'united-states')),
('Chicago', 'chicago', (SELECT id FROM public.snapshot_countries WHERE slug = 'united-states')),
('Toronto', 'toronto', (SELECT id FROM public.snapshot_countries WHERE slug = 'canada')),
('London', 'london', (SELECT id FROM public.snapshot_countries WHERE slug = 'united-kingdom')),
('Berlin', 'berlin', (SELECT id FROM public.snapshot_countries WHERE slug = 'germany')),
('Shanghai', 'shanghai', (SELECT id FROM public.snapshot_countries WHERE slug = 'china')),
('Tokyo', 'tokyo', (SELECT id FROM public.snapshot_countries WHERE slug = 'japan')),
('Dubai', 'dubai', (SELECT id FROM public.snapshot_countries WHERE slug = 'uae'));

-- Sectors
INSERT INTO public.snapshot_sectors (name, slug) VALUES 
('Commercial', 'commercial'),
('Residential', 'residential'),
('Mixed-Use', 'mixed-use'),
('Industrial', 'industrial');

-- Sub-sectors
INSERT INTO public.snapshot_sub_sectors (name, slug, sector_id) VALUES 
('Office', 'office', (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Retail', 'retail', (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Hospitality', 'hospitality', (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Multifamily', 'multifamily', (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),
('Single Family', 'single-family', (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),
('Warehouse', 'warehouse', (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial')),
('Manufacturing', 'manufacturing', (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'));

-- Market Metrics (Core KPIs with filter combinations)
INSERT INTO public.snapshot_market_metrics (metric_name, metric_category, metric_family, current_value, change_percentage, change_direction, sparkline_data, region_id, sector_id) VALUES 
('Transaction Volume', 'market_activity', 'Market Activity', '$245.2B', 12.3, 'up', '[100, 105, 110, 115, 120, 125, 130]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Property Listings', 'market_activity', 'Market Activity', '15,432', 8.7, 'up', '[95, 98, 102, 108, 112, 118, 125]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Active Buyers', 'market_activity', 'Market Activity', '8,234', -5.2, 'down', '[120, 115, 110, 105, 100, 95, 90]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Average Cap Rate', 'investment_metrics', 'Valuation', '6.2%', -0.3, 'down', '[6.8, 6.6, 6.4, 6.3, 6.2, 6.1, 6.2]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Price per SF', 'investment_metrics', 'Valuation', '$425', 15.2, 'up', '[350, 365, 380, 395, 410, 420, 425]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Occupancy Rate', 'investment_metrics', 'Occupancy', '87.3%', 2.1, 'up', '[85, 85.5, 86, 86.5, 87, 87.2, 87.3]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'));

-- Europe metrics
INSERT INTO public.snapshot_market_metrics (metric_name, metric_category, metric_family, current_value, change_percentage, change_direction, sparkline_data, region_id, sector_id) VALUES 
('Transaction Volume', 'market_activity', 'Market Activity', '€198.7B', 8.9, 'up', '[90, 95, 100, 105, 110, 115, 118]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Property Listings', 'market_activity', 'Market Activity', '12,876', 6.4, 'up', '[88, 92, 96, 100, 104, 108, 112]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Average Cap Rate', 'investment_metrics', 'Valuation', '5.8%', -0.2, 'down', '[6.2, 6.0, 5.9, 5.8, 5.8, 5.7, 5.8]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'));

-- Residential metrics
INSERT INTO public.snapshot_market_metrics (metric_name, metric_category, metric_family, current_value, change_percentage, change_direction, sparkline_data, region_id, sector_id) VALUES 
('Transaction Volume', 'market_activity', 'Market Activity', '$180.4B', 10.5, 'up', '[85, 90, 95, 100, 105, 110, 115]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),
('Median Home Price', 'investment_metrics', 'Valuation', '$425,000', 12.8, 'up', '[375, 385, 395, 405, 415, 420, 425]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),
('Days on Market', 'market_activity', 'Market Activity', '28 days', -15.2, 'down', '[35, 33, 31, 30, 29, 28, 28]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'));

-- Sector Intelligence
INSERT INTO public.snapshot_sector_intelligence (title, content, metrics, sector_id, region_id) VALUES 
('Commercial Office Market Analysis', 'The commercial office sector continues to show resilience with increasing demand for flexible workspace solutions. Class A properties in prime locations are commanding premium rents, while secondary markets show strong fundamentals.', 
'{"vacancy_rate": "12.3%", "net_absorption": "2.4M SF", "under_construction": "15.2M SF", "rent_growth": "3.8%"}', 
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas')),

('Residential Market Insights', 'Single-family home demand remains robust across major metropolitan areas. First-time buyer activity has increased 18% year-over-year, supported by favorable lending conditions and employment growth.',
'{"median_price": "$425,000", "inventory_months": "2.8", "price_appreciation": "12.8%", "mortgage_rate": "6.2%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas')),

('Industrial Warehouse Dynamics', 'E-commerce growth continues to drive warehouse demand. Last-mile distribution facilities are particularly sought after, with rental rates increasing 8.5% annually in major logistics hubs.',
'{"vacancy_rate": "4.2%", "net_absorption": "45.6M SF", "asking_rent_psf": "$8.50", "construction_pipeline": "180M SF"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'));

-- Trending People
INSERT INTO public.snapshot_trending_people (name, company, position, change_percentage, description, sector_id, region_id) VALUES 
('Sarah Chen', 'Metropolitan Capital', 'Managing Director', 24.5, 'Leading $2.8B in commercial acquisitions this quarter, focusing on sustainable office developments in gateway cities.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas')),
('Michael Rodriguez', 'Urban Development Partners', 'Head of Acquisitions', 18.2, 'Spearheading mixed-use developments with emphasis on affordable housing components across major metropolitan areas.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas')),
('Emma Thompson', 'Global Real Estate Advisors', 'Senior Vice President', 15.7, 'Recognized for innovative industrial property strategies in the e-commerce fulfillment sector.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe')),
('David Kim', 'Pacific Property Group', 'Chief Investment Officer', 22.1, 'Leading residential development initiatives with focus on sustainable and smart home technologies.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'));

-- Trending Projects
INSERT INTO public.snapshot_trending_projects (name, location, project_value, project_status, change_percentage, description, sector_id, region_id, city_id) VALUES 
('Hudson Yards Phase III', 'New York, NY', '$4.2B', 'Under Construction', 28.5, 'Mixed-use development featuring Class A office space, luxury retail, and residential components.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_cities WHERE slug = 'new-york')),
('The Exchange District', 'Toronto, ON', '$1.8B', 'Planning Phase', 19.3, 'Sustainable commercial hub with LEED Platinum certification and smart building technology.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_cities WHERE slug = 'toronto')),
('Canary Wharf East', 'London, UK', '£3.2B', 'Under Construction', 31.2, 'Next-generation office and residential complex with integrated transportation hub.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_cities WHERE slug = 'london')),
('Berlin Innovation Quarter', 'Berlin, Germany', '€2.1B', 'Pre-Development', 25.8, 'Technology-focused mixed-use development with emphasis on flexible workspace solutions.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_cities WHERE slug = 'berlin'));

-- Market Comparisons
INSERT INTO public.snapshot_market_comparisons (comparison_type, title, description, comparison_data, region_id) VALUES 
('regional', 'Americas vs Europe Performance', 'Comparative analysis of key market indicators across major regions', 
'{"americas": {"transaction_volume": "$245.2B", "cap_rate": "6.2%", "occupancy": "87.3%"}, "europe": {"transaction_volume": "€198.7B", "cap_rate": "5.8%", "occupancy": "89.1%"}}',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas')),

('sector', 'Commercial vs Residential Trends', 'Analysis of performance differences between major property sectors',
'{"commercial": {"volume_growth": "12.3%", "price_growth": "15.2%", "activity_score": 8.7}, "residential": {"volume_growth": "10.5%", "price_growth": "12.8%", "activity_score": 9.2}}',
NULL);