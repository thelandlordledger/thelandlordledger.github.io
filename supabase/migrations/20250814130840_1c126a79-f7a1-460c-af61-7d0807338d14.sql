-- Add much more comprehensive and specific data for all filter combinations

-- First, add more metrics for specific country and city combinations
-- Americas + USA + New York + Commercial + Office
INSERT INTO public.snapshot_market_metrics (metric_name, metric_category, metric_family, current_value, change_percentage, change_direction, sparkline_data, region_id, country_id, city_id, sector_id, sub_sector_id) VALUES 
('Office Transaction Volume', 'market_activity', 'Market Activity', '$89.2B', 15.8, 'up', '[95, 98, 102, 108, 112, 118, 125]', 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'new-york'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office')),

('Class A Office Rents', 'investment_metrics', 'Valuation', '$85.50/SF', 12.4, 'up', '[75, 78, 80, 82, 84, 85, 85.5]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'new-york'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office')),

('Office Vacancy Rate', 'investment_metrics', 'Occupancy', '13.2%', -2.8, 'down', '[16, 15.5, 15, 14.2, 13.8, 13.5, 13.2]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'new-york'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office')),

-- Americas + USA + Los Angeles + Residential + Single Family
('Single Family Sales', 'market_activity', 'Market Activity', '$45.8B', 8.3, 'up', '[38, 40, 42, 44, 45, 45.5, 45.8]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'los-angeles'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'single-family')),

('Median Home Price', 'investment_metrics', 'Valuation', '$1.2M', 18.5, 'up', '[950, 980, 1050, 1100, 1150, 1180, 1200]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'los-angeles'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'single-family')),

-- Europe + UK + London + Commercial + Office
('Office Leasing Activity', 'market_activity', 'Market Activity', '£12.8B', 6.7, 'up', '[11, 11.5, 12, 12.2, 12.5, 12.7, 12.8]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-kingdom'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'london'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office')),

('Prime Office Yields', 'investment_metrics', 'Valuation', '3.8%', -0.3, 'down', '[4.2, 4.1, 4.0, 3.9, 3.8, 3.8, 3.8]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-kingdom'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'london'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office')),

-- Europe + Germany + Berlin + Residential + Multifamily  
('Multifamily Investment', 'market_activity', 'Market Activity', '€8.9B', 22.1, 'up', '[6.5, 7.2, 7.8, 8.2, 8.5, 8.7, 8.9]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'germany'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'berlin'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily')),

('Average Rent/Sqm', 'investment_metrics', 'Valuation', '€18.50', 14.2, 'up', '[15, 15.8, 16.5, 17.2, 17.8, 18.2, 18.5]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'germany'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'berlin'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily')),

-- Asia-Pacific + Japan + Tokyo + Commercial + Retail
('Retail Sales Volume', 'market_activity', 'Market Activity', '¥450B', -3.2, 'down', '[480, 470, 465, 460, 455, 452, 450]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'japan'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'tokyo'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'retail')),

('Retail Rent per Tsubo', 'investment_metrics', 'Valuation', '¥42,000', 5.8, 'up', '[38, 39, 40, 41, 41.5, 41.8, 42]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'japan'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'tokyo'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'retail')),

-- Asia-Pacific + China + Shanghai + Industrial + Warehouse
('Logistics Investment', 'market_activity', 'Market Activity', '¥68.5B', 28.9, 'up', '[45, 50, 55, 60, 63, 66, 68.5]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'china'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'shanghai'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'warehouse')),

('Warehouse Rent/Sqm', 'investment_metrics', 'Valuation', '¥1.8/sqm/day', 19.2, 'up', '[1.4, 1.5, 1.6, 1.65, 1.7, 1.75, 1.8]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'china'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'shanghai'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'warehouse')),

-- Middle East + UAE + Dubai + Mixed-Use
('Mixed-Use Development', 'market_activity', 'Market Activity', 'AED 15.2B', 35.8, 'up', '[9, 10.5, 12, 13.2, 14.1, 14.8, 15.2]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'uae'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'dubai'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'),
NULL),

('Development Yield', 'investment_metrics', 'Valuation', '6.8%', 1.2, 'up', '[6.2, 6.3, 6.5, 6.6, 6.7, 6.75, 6.8]',
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'), 
(SELECT id FROM public.snapshot_countries WHERE slug = 'uae'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'dubai'),
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'),
NULL);

-- Add comprehensive sector intelligence for specific combinations
INSERT INTO public.snapshot_sector_intelligence (title, content, metrics, sector_id, sub_sector_id, region_id, country_id) VALUES 
('New York Office Market Deep Dive', 'Manhattan office market showing strong recovery post-pandemic. Class A towers in Midtown commanding premium rents while Financial District sees increased tech tenant demand. Flight to quality continues with older buildings struggling.',
'{"new_leases": "2.8M SF", "sublease_availability": "15.2M SF", "average_asking_rent": "$85.50", "construction_pipeline": "8.9M SF"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states')),

('Los Angeles Single Family Housing Analysis', 'LA single family market remains highly competitive despite affordability challenges. Inventory shortage driving bidding wars in prime neighborhoods. New construction limited by zoning constraints.',
'{"months_inventory": "1.2", "avg_days_market": "18", "cash_sales_pct": "28%", "new_listings": "3,450/month"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'single-family'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states')),

('London Office Investment Trends', 'London office investment market adapting to hybrid work trends. ESG-compliant buildings commanding yield compression. International capital targeting trophy assets in prime locations.',
'{"total_returns": "8.2%", "prime_yields": "3.8%", "green_premium": "15%", "international_investment": "68%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-kingdom')),

('Berlin Multifamily Investment Market', 'Berlin residential investment driven by strong rental demand and population growth. Rent regulations creating opportunities in value-add strategies. International institutions increasing allocation.',
'{"rental_yield": "3.2%", "vacancy_rate": "1.8%", "population_growth": "1.5%", "avg_rent_increase": "4.2%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'germany')),

('Tokyo Retail Real Estate Dynamics', 'Tokyo retail market experiencing bifurcation with prime locations thriving while secondary areas struggle. E-commerce impact driving demand for last-mile logistics integration.',
'{"prime_retail_yields": "2.8%", "vacancy_rate_prime": "3.2%", "online_sales_impact": "-12%", "omnichannel_demand": "+25%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'retail'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'japan')),

('Shanghai Logistics Infrastructure Boom', 'Shanghai logistics market benefiting from e-commerce growth and Belt & Road initiative. Automated warehouses and cross-border facilities driving institutional interest.',
'{"automation_adoption": "45%", "ecommerce_space_demand": "+38%", "cross_border_facilities": "12", "avg_lease_length": "8.5 years"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'warehouse'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'china')),

('Dubai Mixed-Use Development Surge', 'Dubai mixed-use projects aligning with Vision 2071 goals. Integration of residential, commercial, and hospitality creating new investment paradigms. International expo legacy driving demand.',
'{"mega_projects": "8", "total_investment": "AED 45B", "completion_2025": "15 projects", "international_buyers": "72%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'),
NULL,
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'uae'));

-- Add more specific trending people for different combinations
INSERT INTO public.snapshot_trending_people (name, company, position, change_percentage, description, sector_id, region_id, country_id) VALUES 
('James Mitchell', 'Manhattan Capital Partners', 'Head of Office Acquisitions', 32.5, 'Leading $4.2B office acquisition spree in NYC focusing on Class A properties with ESG certifications and flexible workspace capabilities.', 
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states')),

('Sofia Martinez', 'West Coast Residential Group', 'Senior Vice President', 28.9, 'Spearheading $1.8B single family acquisition program across prime California markets, focusing on supply-constrained coastal communities.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states')),

('Oliver Hamilton', 'London Property Advisors', 'Managing Director', 24.7, 'Orchestrating £2.1B in London office transactions, specializing in sustainable retrofits and hybrid-work optimized buildings.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-kingdom')),

('Klaus Weber', 'Berlin Housing Solutions', 'Chief Investment Officer', 31.2, 'Managing €950M multifamily portfolio across German cities, pioneering energy-efficient affordable housing developments.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'germany')),

('Akiko Tanaka', 'Tokyo Retail Properties', 'Executive Director', 18.5, 'Transforming ¥320B retail portfolio to omnichannel-ready formats, integrating digital experiences with physical retail spaces.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'japan')),

('Li Wei', 'Shanghai Logistics Ventures', 'Regional Head', 42.8, 'Developing ¥2.8B automated logistics network across Yangtze River Delta, serving major e-commerce platforms and international trade.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'china')),

('Rashid Al-Mansouri', 'Emirates Development Group', 'Chief Development Officer', 38.4, 'Leading AED 3.5B mixed-use megaproject combining luxury residential, Grade A offices, and entertainment districts.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'uae'));

-- Add more specific trending projects
INSERT INTO public.snapshot_trending_projects (name, location, project_value, project_status, change_percentage, description, sector_id, sub_sector_id, region_id, country_id, city_id) VALUES 
('One Manhattan West Tower C', 'New York, NY', '$2.8B', 'Pre-Leasing', 45.2, 'State-of-the-art office tower featuring advanced air filtration, flexible floor plates, and rooftop amenities targeting tech and finance tenants.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'new-york')),

('Beverly Hills Estates Collection', 'Los Angeles, CA', '$650M', 'Sales Launch', 52.8, 'Ultra-luxury single family home development featuring smart home technology, private vineyards, and wellness centers.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'single-family'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'los-angeles')),

('Canary Wharf Sustainable Campus', 'London, UK', '£1.9B', 'Phase 2 Construction', 38.9, 'Net-zero carbon office development with integrated public spaces, targeting BREEAM Outstanding certification.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-kingdom'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'london')),

('Berlin Living Quarter Mitte', 'Berlin, Germany', '€780M', 'Construction', 29.1, 'Mixed-income residential community with co-working spaces, urban farming, and community energy systems.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'germany'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'berlin')),

('Ginza Digital Retail Hub', 'Tokyo, Japan', '¥180B', 'Renovation', 22.6, 'Transformation of traditional department store into experiential retail destination with AR/VR integration and popup spaces.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'retail'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'japan'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'tokyo')),

('Shanghai Free Trade Zone Logistics Park', 'Shanghai, China', '¥4.2B', 'Phase 1 Complete', 48.7, 'Automated logistics facility with AI-powered sorting, cross-border e-commerce capabilities, and cold storage.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'industrial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'warehouse'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'china'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'shanghai')),

('Dubai Future District', 'Dubai, UAE', 'AED 8.5B', 'Master Planning', 61.3, 'Integrated smart city development combining residential towers, innovation labs, cultural venues, and sustainable transportation.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'),
NULL,
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'uae'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'dubai'));