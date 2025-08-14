-- COMPREHENSIVE PLACEHOLDER DATA - PHASE 1 CONTINUED: Major City & Sector Combinations

-- Americas + USA + Chicago + Commercial + Office
INSERT INTO public.snapshot_market_metrics (metric_name, metric_category, metric_family, current_value, change_percentage, change_direction, sparkline_data, region_id, country_id, city_id, sector_id, sub_sector_id) VALUES 
('Chicago Office Sales', 'market_activity', 'Market Activity', '$12.4B', 9.2, 'up', '[10.5, 11.2, 11.8, 12.1, 12.3, 12.4, 12.4]', 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'chicago'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office')),

('Loop District Rents', 'investment_metrics', 'Valuation', '$42.80/SF', 6.8, 'up', '[38, 39.5, 40.8, 41.5, 42.2, 42.6, 42.8]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'chicago'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office')),

('Downtown Vacancy', 'investment_metrics', 'Occupancy', '16.8%', -1.9, 'down', '[19, 18.5, 17.8, 17.2, 17, 16.9, 16.8]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'chicago'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office')),

-- Americas + Canada + Toronto + Residential + Multifamily
('Toronto Condo Sales', 'market_activity', 'Market Activity', 'CAD 8.9B', 14.3, 'up', '[7.2, 7.8, 8.1, 8.4, 8.6, 8.8, 8.9]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'canada'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'toronto'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily')),

('Average Condo Price', 'investment_metrics', 'Valuation', 'CAD 720K', 11.2, 'up', '[620, 650, 680, 700, 710, 715, 720]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'toronto'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily')),

('Condo Inventory', 'market_activity', 'Market Activity', '2.1 months', -18.6, 'down', '[3.2, 2.9, 2.6, 2.4, 2.2, 2.1, 2.1]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'canada'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'toronto'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily')),

-- Europe + France + Paris + Commercial + Retail  
('Paris Retail Investment', 'market_activity', 'Market Activity', '€4.2B', 8.5, 'up', '[3.6, 3.8, 3.9, 4.0, 4.1, 4.15, 4.2]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'france'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'paris'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'retail')),

('Champs-Élysées Rents', 'investment_metrics', 'Valuation', '€12,500/sqm', 5.2, 'up', '[11800, 12000, 12200, 12300, 12400, 12450, 12500]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'france'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'paris'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'retail')),

('Prime Retail Yields', 'investment_metrics', 'Valuation', '3.2%', -0.4, 'down', '[3.8, 3.6, 3.4, 3.3, 3.2, 3.2, 3.2]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'france'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'paris'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'retail')),

-- Asia-Pacific + Australia + Sydney + Mixed-Use
('Sydney Mixed-Use Dev', 'market_activity', 'Market Activity', 'AUD 6.8B', 23.1, 'up', '[5.2, 5.6, 6.0, 6.3, 6.5, 6.7, 6.8]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'australia'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'sydney'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'),
NULL),

('Harbourside Projects', 'investment_metrics', 'Valuation', 'AUD 18,500/sqm', 16.8, 'up', '[15000, 16000, 17000, 17800, 18200, 18400, 18500]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'australia'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'sydney'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'),
NULL),

-- Asia-Pacific + South Korea + Seoul + Residential + Multifamily
('Seoul Apartment Sales', 'market_activity', 'Market Activity', '₩45.2T', 7.9, 'up', '[40, 41.5, 42.8, 43.9, 44.6, 45.0, 45.2]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'south-korea'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'seoul'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily')),

('Gangnam Apt Price', 'investment_metrics', 'Valuation', '₩2.1B', 12.4, 'up', '[1.8, 1.85, 1.9, 1.98, 2.05, 2.08, 2.1]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'south-korea'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'seoul'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily')),

-- Middle East + Saudi Arabia + Riyadh + Commercial + Office
('Riyadh Office Investment', 'market_activity', 'Market Activity', 'SAR 12.8B', 42.6, 'up', '[8.5, 9.2, 10.1, 11.2, 12.0, 12.5, 12.8]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'saudi-arabia'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'riyadh'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office')),

('King Abdullah District', 'investment_metrics', 'Valuation', 'SAR 4,200/sqm', 28.5, 'up', '[3000, 3300, 3600, 3900, 4000, 4100, 4200]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'saudi-arabia'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'riyadh'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office'));