-- Update published events to have future dates
UPDATE events 
SET 
  start_date = CASE 
    WHEN id = '0e64b54b-20e6-43b1-b16e-f904c3b8724e' THEN '2025-08-17 09:00:00+00'::timestamptz  -- NAR Conference
    WHEN id = '60e69fca-a131-42dd-bd90-49a554e28455' THEN '2025-09-10 08:00:00+00'::timestamptz  -- Austin Green Building
    WHEN id = '1b8336ce-d0bb-42c9-837a-7157344a4d4d' THEN '2025-07-25 14:00:00+00'::timestamptz  -- Investment Seminar
    WHEN id = 'fc50f4e8-bf3f-4554-844e-8316c56a3c27' THEN '2025-08-05 13:00:00+00'::timestamptz  -- Housing Market Outlook
    WHEN id = 'd891bec8-75db-40c9-8030-351e1c6bd6ad' THEN '2025-09-28 10:00:00+00'::timestamptz  -- Austin Real Estate Expo
    WHEN id = 'e68b5d64-9129-4564-8902-59ba218a1b9f' THEN '2025-08-22 15:00:00+00'::timestamptz  -- TAR Regional Meeting
    ELSE start_date
  END,
  end_date = CASE 
    WHEN id = '0e64b54b-20e6-43b1-b16e-f904c3b8724e' THEN '2025-08-20 17:00:00+00'::timestamptz  -- NAR Conference (3 days)
    WHEN id = '60e69fca-a131-42dd-bd90-49a554e28455' THEN '2025-09-10 17:00:00+00'::timestamptz  -- Austin Green Building (1 day)
    WHEN id = '1b8336ce-d0bb-42c9-837a-7157344a4d4d' THEN '2025-07-25 18:00:00+00'::timestamptz  -- Investment Seminar (1 day)
    WHEN id = 'fc50f4e8-bf3f-4554-844e-8316c56a3c27' THEN '2025-08-05 16:00:00+00'::timestamptz  -- Housing Market Outlook (1 day)
    WHEN id = 'd891bec8-75db-40c9-8030-351e1c6bd6ad' THEN '2025-09-30 18:00:00+00'::timestamptz  -- Austin Real Estate Expo (3 days)
    WHEN id = 'e68b5d64-9129-4564-8902-59ba218a1b9f' THEN '2025-08-22 17:00:00+00'::timestamptz  -- TAR Regional Meeting (1 day)
    ELSE end_date
  END,
  updated_at = now()
WHERE published = true 
  AND start_date < now();