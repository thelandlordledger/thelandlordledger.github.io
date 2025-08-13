-- Create deals table with improved schema
CREATE TABLE public.deals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  deal_id TEXT UNIQUE NOT NULL,
  deal_name TEXT NOT NULL,
  deal_status TEXT NOT NULL DEFAULT 'Draft',
  transaction_type TEXT NOT NULL,
  announcement_date DATE,
  closing_date DATE,
  deal_value BIGINT, -- Store in cents for precision
  deal_value_formatted TEXT,
  deal_size_category TEXT,
  price_per_sf DECIMAL(10,2),
  cap_rate DECIMAL(5,2),
  investment_strategy TEXT,
  
  -- Property details
  property_name TEXT,
  property_type TEXT,
  property_subtype TEXT,
  square_footage INTEGER,
  year_built INTEGER,
  occupancy_rate DECIMAL(5,4), -- Store as decimal (0.95 = 95%)
  image_url TEXT,
  
  -- Address information
  full_address TEXT,
  street_address TEXT,
  city TEXT,
  state_province TEXT,
  country TEXT,
  region TEXT,
  postal_code TEXT,
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  
  -- Parties involved
  buyer TEXT,
  buyer_type TEXT,
  seller TEXT,
  seller_type TEXT,
  broker TEXT,
  lender TEXT,
  
  -- Deal details
  deal_highlights JSONB DEFAULT '[]'::jsonb,
  market_intelligence TEXT,
  strategic_significance TEXT,
  competitive_dynamics TEXT,
  
  -- Metadata
  source TEXT,
  confidence_score DECIMAL(3,3), -- 0.000 to 1.000
  data_quality_score DECIMAL(3,3),
  
  -- Flags
  featured_deal BOOLEAN DEFAULT false,
  recent_deal BOOLEAN DEFAULT false,
  pipeline_deal BOOLEAN DEFAULT false,
  trending_deal BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Deals are viewable by everyone when published" 
ON public.deals 
FOR SELECT 
USING (published = true);

CREATE POLICY "Admins can manage all deals" 
ON public.deals 
FOR ALL 
USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_deals_updated_at
BEFORE UPDATE ON public.deals
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for performance
CREATE INDEX idx_deals_published ON public.deals(published);
CREATE INDEX idx_deals_status ON public.deals(deal_status);
CREATE INDEX idx_deals_featured ON public.deals(featured_deal) WHERE featured_deal = true;
CREATE INDEX idx_deals_recent ON public.deals(recent_deal) WHERE recent_deal = true;
CREATE INDEX idx_deals_pipeline ON public.deals(pipeline_deal) WHERE pipeline_deal = true;
CREATE INDEX idx_deals_trending ON public.deals(trending_deal) WHERE trending_deal = true;
CREATE INDEX idx_deals_closing_date ON public.deals(closing_date);
CREATE INDEX idx_deals_value ON public.deals(deal_value);
CREATE INDEX idx_deals_type ON public.deals(property_type);
CREATE INDEX idx_deals_location ON public.deals(city, state_province, country);

-- Add constraint for deal_status values
ALTER TABLE public.deals ADD CONSTRAINT check_deal_status 
CHECK (deal_status IN ('Draft', 'Rumored', 'Marketed', 'Under Contract', 'Closed', 'Cancelled'));

-- Add constraint for confidence_score range
ALTER TABLE public.deals ADD CONSTRAINT check_confidence_score 
CHECK (confidence_score >= 0 AND confidence_score <= 1);

-- Add constraint for data_quality_score range
ALTER TABLE public.deals ADD CONSTRAINT check_data_quality_score 
CHECK (data_quality_score >= 0 AND data_quality_score <= 1);

-- Add constraint for occupancy_rate range
ALTER TABLE public.deals ADD CONSTRAINT check_occupancy_rate 
CHECK (occupancy_rate >= 0 AND occupancy_rate <= 1);