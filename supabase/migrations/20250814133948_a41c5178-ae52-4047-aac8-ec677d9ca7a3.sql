-- Final batch to complete comprehensive coverage
-- Add remaining trending people to reach 50+ target
INSERT INTO snapshot_trending_people (name, position, company, description, image_url, change_percentage, region_id, country_id, sector_id, published) VALUES

('Catherine Liu', 'Head of Asia Real Estate', 'GIC Private Limited', 'Managing $15B real estate portfolio across APAC with focus on sustainable mixed-use developments', '/api/placeholder/150/150', 29.4,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'singapore'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), true),

('Roberto Silva', 'Director Latin America', 'Hines', 'Expanding industrial portfolio across Mexico and Brazil with $2.1B investment pipeline', '/api/placeholder/150/150', 35.8,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'industrial'), true),

('Dr. Hans Mueller', 'Chief Sustainability Officer', 'Allianz Real Estate', 'Leading €8B green building initiative across European commercial portfolio', '/api/placeholder/150/150', 21.7,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'commercial'), true),

('Priya Sharma', 'Managing Director India', 'Brookfield Properties', 'Overseeing $4.2B residential and commercial development across Mumbai and Delhi NCR', '/api/placeholder/150/150', 42.3,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'residential'), true),

('Michael Thompson', 'Senior VP Development', 'Related Companies', 'Leading $3.8B mixed-use development pipeline across Florida and Texas markets', '/api/placeholder/150/150', 27.6,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), true),

('Yuki Tanaka', 'Regional Director', 'Mitsubishi Estate', 'Executing $2.9B Tokyo office and retail redevelopment strategy', '/api/placeholder/150/150', 18.9,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'commercial'), true),

('Elena Rodriguez', 'Head of European Logistics', 'Segro', 'Managing €12B warehouse and logistics portfolio across UK, France, and Germany', '/api/placeholder/150/150', 33.1,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'industrial'), true),

('Omar Al-Rashid', 'CEO', 'Majid Al Futtaim Properties', 'Driving $6B retail and mixed-use expansion across MENA region', '/api/placeholder/150/150', 38.7,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  (SELECT id FROM snapshot_countries WHERE slug = 'uae'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), true),

('Jennifer Kim', 'Head of Residential', 'AvalonBay Communities', 'Leading $5.1B multifamily development across US growth markets', '/api/placeholder/150/150', 24.2,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'residential'), true),

('Alexander Petrov', 'Managing Director EMEA', 'Brookfield Asset Management', 'Overseeing €18B diversified real estate portfolio across European markets', '/api/placeholder/150/150', 31.5,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), true),

('Lisa Wang', 'VP Asia Pacific', 'Blackstone Real Estate', 'Managing $8.7B logistics and industrial portfolio across Australia, Japan, and Singapore', '/api/placeholder/150/150', 26.8,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'industrial'), true),

('Carlos Martinez', 'Regional Head', 'CBRE Global Investors', 'Leading $4.3B office and retail investment strategy across Latin American markets', '/api/placeholder/150/150', 29.7,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'commercial'), true),

('Sophie Laurent', 'Director Hospitality', 'Accor Invest', 'Executing €3.2B hotel development and acquisition strategy across European cities', '/api/placeholder/150/150', 22.4,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'france'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), true),

('Rajesh Patel', 'Head of Development', 'DLF Limited', 'Overseeing $3.7B commercial and residential pipeline across Indian tier-1 cities', '/api/placeholder/150/150', 34.6,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'residential'), true);

-- Add remaining trending projects to reach 50+ target  
INSERT INTO snapshot_trending_projects (name, location, project_value, project_status, description, image_url, change_percentage, region_id, country_id, city_id, sector_id, sub_sector_id, published) VALUES

('Hudson Yards Phase 2', 'New York, USA', '$15 billion', 'Planning', 'Continuation of Manhattan largest private development with additional office, residential, and retail space', '/api/placeholder/400/300', 52.3,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('King Abdullah Financial District', 'Riyadh, Saudi Arabia', '$8.3 billion', 'Under Construction', 'Major financial hub development with office towers, residential, and commercial facilities', '/api/placeholder/400/300', 43.7,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  NULL, NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'commercial'), NULL, true),

('Porte de Versailles', 'Paris, France', '€4.5 billion', 'Phased Delivery', 'Major urban regeneration project with mixed-use development and exhibition center expansion', '/api/placeholder/400/300', 36.2,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'france'),
  (SELECT id FROM snapshot_cities WHERE slug = 'paris'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Marina One Residences', 'Singapore', 'S$2.8 billion', 'Completed', 'Luxury residential towers integrated with Grade A office and premium retail space', '/api/placeholder/400/300', 28.1,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'singapore'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'residential'), NULL, true),

('Miami Worldcenter', 'Miami, USA', '$4 billion', 'Phased Delivery', 'Downtown Miami mega-development with residential towers, hotels, retail, and office space', '/api/placeholder/400/300', 41.9,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'north-america'),
  (SELECT id FROM snapshot_countries WHERE slug = 'usa'),
  NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Olympia London Expansion', 'London, UK', '£1.3 billion', 'Under Construction', 'Major transformation of historic venue with new hotels, performance spaces, and commercial areas', '/api/placeholder/400/300', 33.4,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'united-kingdom'),
  (SELECT id FROM snapshot_cities WHERE slug = 'london'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Tokyo Station City', 'Tokyo, Japan', '¥850 billion', 'Completed', 'Integrated development combining transportation hub with premium office, retail, and hotel facilities', '/api/placeholder/400/300', 25.6,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  NULL, NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'commercial'), NULL, true),

('Lusail City Central', 'Doha, Qatar', '$12 billion', 'Under Construction', 'Sustainable smart city development with residential, commercial, and entertainment districts', '/api/placeholder/400/300', 67.8,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  NULL, NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Barangaroo South', 'Sydney, Australia', 'AUD $6 billion', 'Phased Delivery', 'Waterfront precinct with commercial towers, residential buildings, and public spaces', '/api/placeholder/400/300', 37.5,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  (SELECT id FROM snapshot_countries WHERE slug = 'australia'),
  (SELECT id FROM snapshot_cities WHERE slug = 'sydney'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Al Habtoor City', 'Dubai, UAE', 'AED 8 billion', 'Completed', 'Integrated development with luxury hotels, residential towers, and premium retail spaces', '/api/placeholder/400/300', 32.7,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  (SELECT id FROM snapshot_countries WHERE slug = 'uae'),
  (SELECT id FROM snapshot_cities WHERE slug = 'dubai'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Crossrail Stations Development', 'London, UK', '£3.2 billion', 'Phased Delivery', 'Transit-oriented developments across multiple Elizabeth Line stations', '/api/placeholder/400/300', 29.8,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  (SELECT id FROM snapshot_countries WHERE slug = 'united-kingdom'),
  (SELECT id FROM snapshot_cities WHERE slug = 'london'),
  (SELECT id FROM snapshot_sectors WHERE slug = 'commercial'), NULL, true),

('Incheon Global Campus', 'Seoul, South Korea', '$3.1 billion', 'Under Construction', 'Educational and residential complex with integrated commercial and research facilities', '/api/placeholder/400/300', 44.2,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'asia-pacific'),
  NULL, NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true),

('Frankfurt Gateway Gardens', 'Frankfurt, Germany', '€2.8 billion', 'Phased Delivery', 'Airport city development with office, hotel, logistics, and retail components', '/api/placeholder/400/300', 31.1,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'europe'),
  NULL, NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'commercial'), NULL, true),

('Riyadh Front', 'Riyadh, Saudi Arabia', '$5.7 billion', 'Under Construction', 'Mixed-use development with residential towers, shopping centers, and office buildings', '/api/placeholder/400/300', 48.9,
  (SELECT id FROM snapshot_geographic_regions WHERE slug = 'middle-east'),
  NULL, NULL,
  (SELECT id FROM snapshot_sectors WHERE slug = 'mixed-use'), NULL, true);