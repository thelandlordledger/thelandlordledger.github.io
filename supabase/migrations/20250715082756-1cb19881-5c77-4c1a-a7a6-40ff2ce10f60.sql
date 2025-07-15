-- Drop the existing constraint first
ALTER TABLE public.events 
DROP CONSTRAINT events_event_type_check;