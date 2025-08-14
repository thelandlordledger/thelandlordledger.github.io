-- Continue expanding market metrics for more comprehensive coverage
INSERT INTO snapshot_market_metrics (metric_name, metric_category, metric_family, current_value, change_percentage, change_direction, data_date, region_id, country_id, city_id, sector_id, sub_sector_id, sparkline_data) VALUES

-- Europe-Office combinations
('Average Office Rent', 'Pricing', 'Rental Rates', '€45/sq ft/year', 8.2, 'up', CURRENT_DATE, 
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'united-kingdom'),
  (SELECT id FROM snapshot_cities WHERE slug = 'london'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'office'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'grade-a-office'), 
  '[38, 42, 39, 43, 45, 47, 45]'),

('Office Vacancy Rate', 'Market Health', 'Occupancy', '12.8%', -2.1, 'down', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'united-kingdom'),
  (SELECT id FROM snapshot_cities WHERE slug = 'london'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'office'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'grade-a-office'),
  '[15.2, 14.8, 13.9, 13.1, 12.8, 12.5, 12.8]'),

('Construction Completions', 'Development', 'Supply Pipeline', '2.4M sq ft', 15.3, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'united-kingdom'),
  (SELECT id FROM snapshot_cities WHERE slug = 'london'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'office'),
  NULL,
  '[1.8, 2.1, 2.2, 2.0, 2.4, 2.6, 2.4]'),

-- Europe-Retail combinations
('Retail Sales per sq ft', 'Performance', 'Revenue', '€850/sq ft/year', 6.7, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'france'),
  (SELECT id FROM snapshot_cities WHERE slug = 'paris'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'retail'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'shopping-centers'),
  '[780, 820, 840, 825, 850, 865, 850]'),

('Footfall Recovery', 'Market Health', 'Activity', '89% of pre-COVID', 12.4, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'france'),
  (SELECT id FROM snapshot_cities WHERE slug = 'paris'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'retail'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'shopping-centers'),
  '[65, 72, 78, 83, 86, 89, 89]'),

-- Asia Pacific-Office combinations
('Grade A Office Rent', 'Pricing', 'Rental Rates', 'HK$55/sq ft/month', -3.2, 'down', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'hong-kong'),
  (SELECT id FROM snapshot_cities WHERE slug = 'hong-kong'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'office'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'grade-a-office'),
  '[58, 57, 56, 55.5, 55, 54.8, 55]'),

('Office Take-up', 'Activity', 'Leasing', '1.2M sq ft', -18.5, 'down', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'hong-kong'),
  (SELECT id FROM snapshot_cities WHERE slug = 'hong-kong'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'office'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'grade-a-office'),
  '[1.8, 1.6, 1.4, 1.3, 1.2, 1.1, 1.2]'),

-- Asia Pacific-Residential combinations
('Residential Price Index', 'Pricing', 'Property Values', '142.8 (Base: 100)', 4.9, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'australia'),
  (SELECT id FROM snapshot_cities WHERE slug = 'sydney'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'residential'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'single-family'),
  '[130, 135, 138, 140, 142.8, 144, 142.8]'),

('Median House Price', 'Pricing', 'Property Values', 'AUD $1.35M', 8.1, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'australia'),
  (SELECT id FROM snapshot_cities WHERE slug = 'sydney'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'residential'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'single-family'),
  '[1.15, 1.22, 1.28, 1.32, 1.35, 1.38, 1.35]'),

('Days on Market', 'Market Health', 'Liquidity', '28 days', -15.2, 'down', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'australia'),
  (SELECT id FROM snapshot_cities WHERE slug = 'sydney'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'residential'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'single-family'),
  '[35, 33, 30, 29, 28, 27, 28]'),

-- Middle East-Mixed Use combinations
('Mixed-Use Development Value', 'Pricing', 'Property Values', 'AED 12,500/sq ft', 11.2, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  (SELECT id FROM snapshot_countries WHERE slug = 'uae'),
  (SELECT id FROM snapshot_cities WHERE slug = 'dubai'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'),
  NULL,
  '[10800, 11200, 11500, 12000, 12500, 12800, 12500]'),

('Hotel Occupancy', 'Performance', 'Hospitality', '78.5%', 22.3, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  (SELECT id FROM snapshot_countries WHERE slug = 'uae'),
  (SELECT id FROM snapshot_cities WHERE slug = 'dubai'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'hospitality'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'luxury-hotels'),
  '[58, 63, 68, 72, 75, 78.5, 78.5]'),

-- North America additional combinations
('Warehouse Rent', 'Pricing', 'Rental Rates', '$18.50/sq ft/year', 12.8, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  (SELECT id FROM snapshot_cities WHERE slug = 'los-angeles'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'industrial'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'warehouses'),
  '[15.2, 16.1, 17.0, 17.8, 18.5, 19.2, 18.5]'),

('Logistics Absorption', 'Activity', 'Leasing', '8.2M sq ft', 25.4, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  (SELECT id FROM snapshot_cities WHERE slug = 'los-angeles'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'industrial'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'warehouses'),
  '[5.8, 6.2, 6.8, 7.4, 8.2, 8.8, 8.2]'),

('E-commerce Penetration', 'Market Health', 'Digital Transformation', '68%', 18.9, 'up', CURRENT_DATE,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'retail'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'e-commerce'),
  '[48, 52, 58, 62, 65, 68, 68]');

-- Add more trending people for expanded coverage
INSERT INTO snapshot_trending_people (name, position, company, description, image_url, change_percentage, region_id, country_id, sector_id, published) VALUES

('Sarah Chen', 'Managing Director, Asia Pacific', 'Brookfield Asset Management', 'Leading $2.8B acquisition spree across Asian office markets with focus on ESG-compliant buildings', '/api/placeholder/150/150', 24.5, 
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'singapore'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'office'), true),

('Marcus Weber', 'Head of European Retail', 'Unibail-Rodamco-Westfield', 'Pioneering omnichannel retail strategies across European shopping centers, driving 15% footfall recovery', '/api/placeholder/150/150', 18.7,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'france'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'retail'), true),

('Dr. Fatima Al-Zahra', 'Chief Investment Officer', 'Emirates REIT', 'Orchestrating $1.2B portfolio expansion in Dubai mixed-use developments', '/api/placeholder/150/150', 31.2,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  (SELECT id FROM snapshot_countries WHERE slug = 'uae'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), true),

('James Rodriguez', 'VP Industrial Development', 'Prologis', 'Leading last-mile logistics expansion across LA metro, delivered 12M sq ft in 2024', '/api/placeholder/150/150', 22.8,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'industrial'), true),

('Isabella Rossi', 'Director of Sustainability', 'Covivio', 'Implementing carbon-neutral strategies across €24B European portfolio', '/api/placeholder/150/150', 19.4,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'italy'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'office'), true),

('David Kim', 'Head of Residential', 'CapitaLand Development', 'Overseeing $3.2B residential pipeline across Singapore and Australia', '/api/placeholder/150/150', 26.3,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'singapore'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'residential'), true),

('Ahmed Hassan', 'Regional Director', 'Emaar Properties', 'Leading hospitality expansion with 8 new luxury hotels across MENA region', '/api/placeholder/150/150', 33.7,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  (SELECT id FROM snapshot_countries WHERE slug = 'uae'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'hospitality'), true),

('Rachel Thompson', 'Senior VP Acquisitions', 'Blackstone Real Estate', 'Executing $4.6B warehouse acquisition strategy across US Sun Belt markets', '/api/placeholder/150/150', 28.1,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'industrial'), true);

-- Add more trending projects for expanded coverage  
INSERT INTO snapshot_trending_projects (name, location, project_value, project_status, description, image_url, change_percentage, region_id, country_id, city_id, sector_id, sub_sector_id, published) VALUES

('Canary Wharf East', 'London, UK', '£8.5 billion', 'Under Construction', 'Massive mixed-use development featuring 10M sq ft of office space, residential towers, and retail', '/api/placeholder/400/300', 34.2,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'united-kingdom'),
  (SELECT id FROM snapshot_cities WHERE slug = 'london'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('La Défense 2030', 'Paris, France', '€12 billion', 'Planning', 'Comprehensive renovation and expansion of Europe largest business district', '/api/placeholder/400/300', 41.8,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'france'),
  (SELECT id FROM snapshot_cities WHERE slug = 'paris'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'office'), 
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'grade-a-office'), true),

('Raffles City Hangzhou', 'Hangzhou, China', '¥18.5 billion', 'Completed', 'Integrated development with two 250m towers, luxury hotel, and shopping mall', '/api/placeholder/400/300', 28.9,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  NULL, NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Sydney Metro West Stations', 'Sydney, Australia', 'AUD $3.2 billion', 'Under Construction', 'Transit-oriented developments across 8 metro stations', '/api/placeholder/400/300', 22.7,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'australia'),
  (SELECT id FROM snapshot_cities WHERE slug = 'sydney'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Dubai Creek Harbour', 'Dubai, UAE', 'AED 55 billion', 'Phased Delivery', 'Mega waterfront development with residential towers, retail, and cultural district', '/api/placeholder/400/300', 39.4,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  (SELECT id FROM snapshot_countries WHERE slug = 'uae'),
  (SELECT id FROM snapshot_cities WHERE slug = 'dubai'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('NEOM The Line', 'NEOM, Saudi Arabia', '$500 billion', 'Planning', 'Revolutionary 170km linear smart city development', '/api/placeholder/400/300', 156.7,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  NULL, NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Amazon HQ2 Expansion', 'Arlington, Virginia', '$4.8 billion', 'Under Construction', 'Second headquarters featuring sustainable office towers and public amenities', '/api/placeholder/400/300', 31.5,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'office'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'grade-a-office'), true),

('LA Airport Cargo Hub', 'Los Angeles, USA', '$2.1 billion', 'Completed', 'State-of-the-art cargo and logistics facility supporting e-commerce growth', '/api/placeholder/400/300', 45.3,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  (SELECT id FROM snapshot_cities WHERE slug = 'los-angeles'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'industrial'),
  (SELECT id FROM snapshot_sub_sectors WHERE slug = 'warehouses'), true);