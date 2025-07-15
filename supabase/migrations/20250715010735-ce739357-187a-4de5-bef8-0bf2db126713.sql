-- Update event dates to be in the future
UPDATE public.events 
SET 
  start_date = CASE 
    WHEN title = 'Real Estate Investment Summit 2025' THEN '2025-08-15 14:00:00+00'::timestamptz
    WHEN title = 'PropTech Innovation Conference' THEN '2025-09-22 15:30:00+00'::timestamptz
    WHEN title = 'Regional Housing Market Trade Show' THEN '2025-10-08 14:00:00+00'::timestamptz
    ELSE start_date
  END,
  end_date = CASE 
    WHEN title = 'Real Estate Investment Summit 2025' THEN '2025-08-17 22:00:00+00'::timestamptz
    WHEN title = 'PropTech Innovation Conference' THEN '2025-09-24 01:00:00+00'::timestamptz
    WHEN title = 'Regional Housing Market Trade Show' THEN '2025-10-10 20:00:00+00'::timestamptz
    ELSE end_date
  END
WHERE title IN ('Real Estate Investment Summit 2025', 'PropTech Innovation Conference', 'Regional Housing Market Trade Show');