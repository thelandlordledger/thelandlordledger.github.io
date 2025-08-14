-- Add comprehensive market metrics for all filter combinations

-- Additional metrics for Europe + other sectors
INSERT INTO public.snapshot_market_metrics (metric_name, metric_category, metric_family, current_value, change_percentage, change_direction, sparkline_data, region_id, sector_id) VALUES 
-- Europe Residential
('Transaction Volume', 'market_activity', 'Market Activity', '€142.8B', 9.2, 'up', '[88, 92, 96, 100, 104, 108, 112]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),
('Median Home Price', 'investment_metrics', 'Valuation', '€385,000', 11.5, 'up', '[340, 350, 360, 370, 380, 382, 385]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),
('Days on Market', 'market_activity', 'Market Activity', '32 days', -12.8, 'down', '[38, 36, 34, 33, 32, 32, 32]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),

-- Europe Industrial  
('Transaction Volume', 'market_activity', 'Market Activity', '€95.4B', 14.2, 'up', '[75, 80, 85, 90, 92, 94, 95]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial')),
('Warehouse Rent PSF', 'investment_metrics', 'Valuation', '€7.20', 9.8, 'up', '[6.2, 6.4, 6.7, 7.0, 7.1, 7.15, 7.2]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial')),
('Vacancy Rate', 'investment_metrics', 'Occupancy', '3.8%', -1.2, 'down', '[5.2, 4.8, 4.4, 4.0, 3.9, 3.8, 3.8]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial')),

-- Europe Mixed-Use
('Transaction Volume', 'market_activity', 'Market Activity', '€78.2B', 16.7, 'up', '[65, 68, 72, 75, 77, 78, 78]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use')),
('Development Value', 'investment_metrics', 'Valuation', '€520/SF', 13.4, 'up', '[450, 465, 480, 495, 510, 515, 520]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use')),

-- Americas Industrial
('Transaction Volume', 'market_activity', 'Market Activity', '$156.8B', 18.5, 'up', '[125, 130, 135, 140, 145, 150, 157]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial')),
('Warehouse Rent PSF', 'investment_metrics', 'Valuation', '$8.50', 12.3, 'up', '[7.2, 7.5, 7.8, 8.1, 8.3, 8.4, 8.5]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial')),
('Vacancy Rate', 'investment_metrics', 'Occupancy', '4.2%', -2.1, 'down', '[6.8, 6.2, 5.6, 5.0, 4.5, 4.3, 4.2]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial')),

-- Americas Mixed-Use
('Transaction Volume', 'market_activity', 'Market Activity', '$89.3B', 22.1, 'up', '[70, 75, 80, 83, 86, 88, 89]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use')),
('Development Value', 'investment_metrics', 'Valuation', '$485/SF', 17.8, 'up', '[400, 420, 440, 460, 470, 480, 485]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use')),

-- Asia-Pacific Commercial
('Transaction Volume', 'market_activity', 'Market Activity', '$198.5B', 11.7, 'up', '[175, 180, 185, 190, 195, 197, 198]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Average Cap Rate', 'investment_metrics', 'Valuation', '5.2%', -0.4, 'down', '[5.8, 5.6, 5.4, 5.3, 5.2, 5.1, 5.2]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Occupancy Rate', 'investment_metrics', 'Occupancy', '91.2%', 3.5, 'up', '[87, 88, 89, 90, 91, 91.1, 91.2]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),

-- Asia-Pacific Residential
('Transaction Volume', 'market_activity', 'Market Activity', '$225.7B', 8.9, 'up', '[205, 210, 215, 220, 223, 225, 226]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),
('Median Home Price', 'investment_metrics', 'Valuation', '$780,000', 14.2, 'up', '[650, 680, 710, 740, 760, 770, 780]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),
('Days on Market', 'market_activity', 'Market Activity', '22 days', -18.5, 'down', '[30, 28, 26, 24, 23, 22, 22]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),

-- Asia-Pacific Industrial
('Transaction Volume', 'market_activity', 'Market Activity', '$87.2B', 16.3, 'up', '[72, 75, 78, 82, 85, 86, 87]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial')),
('Warehouse Rent PSF', 'investment_metrics', 'Valuation', '$9.80', 11.2, 'up', '[8.5, 8.8, 9.1, 9.4, 9.6, 9.7, 9.8]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial')),

-- Asia-Pacific Mixed-Use
('Transaction Volume', 'market_activity', 'Market Activity', '$112.4B', 19.8, 'up', '[90, 95, 100, 105, 108, 110, 112]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use')),

-- Middle East & Africa metrics
('Transaction Volume', 'market_activity', 'Market Activity', '$45.8B', 25.4, 'up', '[35, 38, 40, 42, 44, 45, 46]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),
('Average Cap Rate', 'investment_metrics', 'Valuation', '7.8%', 0.5, 'up', '[7.2, 7.3, 7.5, 7.6, 7.7, 7.8, 7.8]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial')),

('Transaction Volume', 'market_activity', 'Market Activity', '$32.1B', 28.7, 'up', '[24, 26, 28, 29, 30, 31, 32]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential')),
('Median Home Price', 'investment_metrics', 'Valuation', '$580,000', 22.3, 'up', '[450, 480, 510, 540, 560, 570, 580]', (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'), (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'));

-- Add more sector intelligence for different combinations
INSERT INTO public.snapshot_sector_intelligence (title, content, metrics, sector_id, region_id) VALUES 
('European Office Market Outlook', 'European commercial office markets show strong fundamentals with London and Frankfurt leading demand. Flexible workspace adoption accelerating across major business districts.',
'{"vacancy_rate": "10.8%", "net_absorption": "1.8M SF", "under_construction": "12.1M SF", "rent_growth": "4.2%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe')),

('European Residential Market Trends', 'Sustainable housing developments gaining traction across Europe. Government incentives for energy-efficient homes driving new construction and renovations.',
'{"median_price": "€385,000", "inventory_months": "3.2", "price_appreciation": "11.5%", "mortgage_rate": "4.8%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe')),

('Asia-Pacific Commercial Insights', 'Strong office demand in Tokyo and Singapore. Technology sector expansion driving premium office space absorption in major business districts.',
'{"vacancy_rate": "8.8%", "net_absorption": "3.2M SF", "under_construction": "18.5M SF", "rent_growth": "5.1%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific')),

('Middle East Industrial Growth', 'Dubai and Riyadh emerging as major logistics hubs. Free trade zone developments attracting international distribution centers.',
'{"vacancy_rate": "6.2%", "net_absorption": "2.8M SF", "asking_rent_psf": "$6.80", "construction_pipeline": "45M SF"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'));

-- Add more trending people for different regions/sectors
INSERT INTO public.snapshot_trending_people (name, company, position, change_percentage, description, sector_id, region_id) VALUES 
('Hiroshi Tanaka', 'Tokyo Bay Development', 'Executive Director', 19.8, 'Leading $3.5B mixed-use waterfront development project with sustainable design principles.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific')),
('Lisa Mueller', 'European Property Solutions', 'Managing Partner', 21.3, 'Pioneering energy-efficient residential developments across major European cities.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe')),
('Ahmed Al-Rashid', 'Gulf Real Estate Holdings', 'Chief Development Officer', 26.9, 'Overseeing $2.2B in commercial and mixed-use projects across the Middle East region.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa')),
('Jennifer Wang', 'Pacific Industrial Partners', 'Head of Logistics', 17.4, 'Expanding e-commerce fulfillment network across Asia-Pacific markets with focus on automation.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'));

-- Add more trending projects
INSERT INTO public.snapshot_trending_projects (name, location, project_value, project_status, change_percentage, description, sector_id, region_id, city_id) VALUES 
('Marina Bay Central', 'Singapore', '$2.8B', 'Under Construction', 24.7, 'Integrated commercial and residential complex with sustainable design and smart city features.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), NULL),
('Frankfurt Innovation Hub', 'Frankfurt, Germany', '€1.9B', 'Planning Phase', 29.1, 'Technology-focused commercial development with emphasis on flexible workspace and green building standards.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), NULL),
('Dubai Logistics City Phase II', 'Dubai, UAE', '$1.5B', 'Under Construction', 33.2, 'Expansion of major logistics and industrial hub serving Middle East and African markets.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'), (SELECT id FROM public.snapshot_cities WHERE slug = 'dubai')),
('Tokyo Bay Residences', 'Tokyo, Japan', '¥420B', 'Pre-Development', 22.5, 'Luxury residential towers with integrated retail and community amenities near Tokyo Bay.', (SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'), (SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), (SELECT id FROM public.snapshot_cities WHERE slug = 'tokyo'));