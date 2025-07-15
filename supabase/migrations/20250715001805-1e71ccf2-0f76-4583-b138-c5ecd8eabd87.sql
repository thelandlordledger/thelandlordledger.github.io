-- Update the placeholder events with real registration URLs
UPDATE public.events 
SET registration_url = CASE 
  WHEN title = 'Real Estate Investment Summit 2025' THEN 'https://www.nareit.com/events'
  WHEN title = 'PropTech Innovation Conference' THEN 'https://www.proptech-conference.com'
  WHEN title = 'Regional Housing Market Trade Show' THEN 'https://www.housingmarket-expo.com'
  ELSE registration_url
END
WHERE title IN ('Real Estate Investment Summit 2025', 'PropTech Innovation Conference', 'Regional Housing Market Trade Show');