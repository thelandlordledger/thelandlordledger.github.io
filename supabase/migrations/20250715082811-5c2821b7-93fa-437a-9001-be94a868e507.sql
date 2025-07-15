-- Update existing events to use new event types
UPDATE public.events 
SET event_type = CASE 
  WHEN event_type IN ('Conference', 'Summit') THEN 'Online'
  WHEN event_type IN ('Trade Show', 'Convention', 'Regional') THEN 'In Person'
  ELSE 'In Person'
END;

-- Add the new constraint with only 'Online' and 'In Person'
ALTER TABLE public.events 
ADD CONSTRAINT events_event_type_check 
CHECK (event_type IN ('Online', 'In Person'));