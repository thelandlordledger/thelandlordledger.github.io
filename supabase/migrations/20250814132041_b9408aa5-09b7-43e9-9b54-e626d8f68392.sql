-- Add comprehensive sector intelligence for the new city combinations
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

-- Add more specific trending people for different combinations
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

('Central Park Sydney', 'Sydney, Australia', 'AUD 2.0B', 'Final Phase', 29.8, 'Sustainable mixed-use precinct featuring residential towers, shopping center, parks, and heliostat solar system.',
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