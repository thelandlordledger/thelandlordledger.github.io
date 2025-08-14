-- COMPREHENSIVE PLACEHOLDER DATA - PHASE 1: Major City & Sector Combinations

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
(SELECT id FROM public.snapshot_countries WHERE slug = 'canada'),
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

-- Add sector intelligence for these new combinations
INSERT INTO public.snapshot_sector_intelligence (title, content, metrics, sector_id, sub_sector_id, region_id, country_id) VALUES 
('Chicago Office Market Recovery', 'Chicago office market showing steady recovery with corporate relocations from coasts driving demand. Class A towers in the Loop seeing renewed interest from financial services and tech firms.',
'{"leasing_activity": "8.2M SF", "net_absorption": "1.1M SF", "flight_to_quality": "65%", "sublease_reduction": "-22%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states')),

('Toronto Multifamily Investment Boom', 'Toronto condo market driven by immigration and limited supply. Pre-construction sales reaching record levels with international buyers comprising 35% of luxury segment purchases.',
'{"new_completions": "28,500 units", "pre_sales": "85%", "intl_buyers": "35%", "avg_psf": "CAD 1,180"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'canada')),

('Paris Luxury Retail Renaissance', 'Paris retail market benefiting from tourism recovery and luxury brand expansion. Golden Triangle commanding record rents while neighborhood retail struggles with e-commerce pressure.',
'{"tourist_spending": "€18B", "luxury_growth": "+15%", "neighborhood_vacancy": "12%", "flagship_openings": "24"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'retail'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'france')),

('Sydney Mixed-Use Development Wave', 'Sydney mixed-use projects reshaping urban landscape with emphasis on transit-oriented development. Parramatta and Olympic Park emerging as major growth nodes.',
'{"projects_pipeline": "42", "transit_oriented": "78%", "avg_gfa": "85,000 sqm", "residential_component": "60%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'),
NULL,
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'australia')),

('Seoul Apartment Market Dynamics', 'Seoul apartment market driven by reconstruction and redevelopment projects. Gangnam district maintaining premium while new districts like Songdo gaining traction.',
'{"reconstruction_units": "180,000", "avg_holding_period": "8.5 years", "redevelopment_premium": "25%", "new_supply": "45,000 units"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'south-korea')),

('Riyadh Vision 2030 Office Expansion', 'Riyadh office market transforming under Vision 2030 with massive government and private sector relocations. King Abdullah Financial District becoming regional hub.',
'{"govt_relocations": "85 entities", "private_investment": "SAR 45B", "grade_a_pipeline": "2.8M sqm", "occupancy_target": "85%"}',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'saudi-arabia'));

-- Add more specific trending people
INSERT INTO public.snapshot_trending_people (name, company, position, change_percentage, description, sector_id, region_id, country_id) VALUES 
('Robert Chen', 'Chicago Commercial Partners', 'Executive Vice President', 29.4, 'Orchestrating $2.1B Loop district office repositioning strategy, converting traditional offices to flexible hybrid workspaces with amenities.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states')),

('Marie Dubois', 'Paris Retail Ventures', 'Managing Director', 26.8, 'Leading €850M luxury retail expansion across European capitals, specializing in flagship store development and brand positioning.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'france')),

('Sarah Thompson', 'Sydney Development Group', 'Chief Development Officer', 34.2, 'Spearheading AUD 1.8B mixed-use transit hub projects, integrating residential, commercial, and cultural components.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'australia')),

('Kim Min-jun', 'Seoul Housing Solutions', 'Investment Director', 31.7, 'Managing ₩2.2T apartment redevelopment fund targeting premium Seoul districts with focus on smart home integration.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'south-korea')),

('Ahmed Al-Rasheed', 'Riyadh Capital Developments', 'Senior Vice President', 45.8, 'Executing SAR 5.5B Vision 2030 office development program, creating Grade A office spaces for government and private sector.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'saudi-arabia')),

('Jennifer Liu', 'Toronto Residential Capital', 'Portfolio Manager', 27.3, 'Overseeing CAD 1.4B multifamily acquisition strategy focused on transit-oriented developments and student housing.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'), 
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'canada'));

-- Add more specific trending projects
INSERT INTO public.snapshot_trending_projects (name, location, project_value, project_status, change_percentage, description, sector_id, sub_sector_id, region_id, country_id, city_id) VALUES 
('Willis Tower Modernization', 'Chicago, IL', '$500M', 'Phase 2 Construction', 38.5, 'Complete transformation of iconic tower with new elevators, retail podium, observation deck expansion, and flexible office floors.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'united-states'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'chicago')),

('Gallery Saint-Honoré', 'Paris, France', '€320M', 'Luxury Leasing', 41.2, 'Ultra-luxury retail destination featuring international flagship stores, gourmet dining, and cultural exhibitions in historic Haussmann building.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'retail'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'europe'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'france'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'paris')),

('Central Park Sydney', 'Sydney, Australia', 'AUD 2.0B', 'Final Phase', 29.8, 'Sustainable mixed-use precinct featuring residential towers, shopping center, parks, and Australia\'s first heliostat system.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'mixed-use'),
NULL,
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'australia'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'sydney')),

('Gangnam Hyundai Tower', 'Seoul, South Korea', '₩850B', 'Pre-Construction', 43.6, 'Mixed-use supertall combining luxury residences, premium offices, hotel, and cultural center in heart of Gangnam district.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'asia-pacific'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'south-korea'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'seoul')),

('King Abdullah Financial District Phase 3', 'Riyadh, Saudi Arabia', 'SAR 8.2B', 'Construction', 52.3, 'Expansion of financial district with Grade A office towers, luxury hotels, conference facilities, and transport connectivity.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'commercial'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'office'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'middle-east-africa'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'saudi-arabia'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'riyadh')),

('The Well Toronto', 'Toronto, ON', 'CAD 1.5B', 'Leasing Phase', 35.4, 'Transit-connected mixed-use community featuring rental apartments, condos, office space, retail, and public art installations.',
(SELECT id FROM public.snapshot_sectors WHERE slug = 'residential'),
(SELECT id FROM public.snapshot_sub_sectors WHERE slug = 'multifamily'),
(SELECT id FROM public.snapshot_geographic_regions WHERE slug = 'americas'),
(SELECT id FROM public.snapshot_countries WHERE slug = 'canada'),
(SELECT id FROM public.snapshot_cities WHERE slug = 'toronto'));