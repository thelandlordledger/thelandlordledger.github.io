import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Building2, MapPin, DollarSign, Calendar, TrendingUp, ArrowRight, Users, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
interface Deal {
  id: string;
  deal_name: string;
  deal_status: string;
  deal_value: number;
  property_name: string;
  property_type: string;
  city: string;
  state_province: string;
  buyer?: string;
  seller?: string;
  announcement_date?: string;
  closing_date?: string;
  square_footage?: number;
  cap_rate?: number;
  occupancy_rate?: number;
  image_url?: string;
  featured_deal?: boolean;
  recent_deal?: boolean;
  pipeline_deal?: boolean;
}

const KeyDeals = () => {
  const [featuredDeals, setFeaturedDeals] = useState<Deal[]>([]);
  const [recentDeals, setRecentDeals] = useState<Deal[]>([]);
  const [pipelineDeals, setPipelineDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(0)}M`;
    }
    return `$${value.toLocaleString()}`;
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatSquareFootage = (sqft?: number) => {
    if (!sqft) return '';
    if (sqft >= 1000000) {
      return `${(sqft / 1000000).toFixed(1)}M`;
    } else if (sqft >= 1000) {
      return `${(sqft / 1000).toFixed(0)}K`;
    }
    return sqft.toString();
  };

  const formatPercentage = (rate?: number) => {
    if (!rate) return '';
    return `${(rate * 100).toFixed(1)}%`;
  };

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        // Fetch featured deals
        const { data: featured } = await supabase
          .from('deals')
          .select('*')
          .eq('featured_deal', true)
          .eq('published', true)
          .order('created_at', { ascending: false });

        // Fetch recent deals
        const { data: recent } = await supabase
          .from('deals')
          .select('*')
          .eq('recent_deal', true)
          .eq('published', true)
          .order('created_at', { ascending: false });

        // Fetch pipeline deals
        const { data: pipeline } = await supabase
          .from('deals')
          .select('*')
          .eq('pipeline_deal', true)
          .eq('published', true)
          .order('created_at', { ascending: false });

        setFeaturedDeals(featured || []);
        setRecentDeals(recent || []);
        setPipelineDeals(pipeline || []);
      } catch (error) {
        console.error('Error fetching deals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);
  const marketActivity = [{
    metric: "Total Transaction Volume",
    value: "$47.3B",
    change: "+12.8%",
    period: "Q4 2024"
  }, {
    metric: "Number of Deals",
    value: "1,247",
    change: "+8.4%",
    period: "This Quarter"
  }, {
    metric: "Average Deal Size",
    value: "$38M",
    change: "+4.2%",
    period: "YTD 2024"
  }, {
    metric: "Cap Rate Average",
    value: "5.1%",
    change: "-0.3%",
    period: "Current"
  }];
  const upcomingDeals = [{
    title: "Seattle Waterfront Development",
    location: "Seattle, WA",
    estimate: "$1.2B",
    type: "Mixed-Use",
    timeline: "Q1 2025",
    status: "Marketing"
  }, {
    title: "Dallas Office Portfolio",
    location: "Dallas, TX",
    estimate: "$875M",
    type: "Office",
    timeline: "Q1 2025",
    status: "Due Diligence"
  }, {
    title: "Florida Retail Centers",
    location: "Orlando, FL",
    estimate: "$540M",
    type: "Retail",
    timeline: "Q2 2025",
    status: "Bidding"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section - Streamlined */}
        <section className="py-12 lg:py-16 bg-subtle-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
            <h1 className="font-primary text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 lg:mb-6">
              KEY
              <br />
              <span className="bg-hero-gradient bg-clip-text text-transparent">DEALS</span>
            </h1>
            <p className="font-secondary text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 lg:mb-8 leading-relaxed">
              Exclusive insights into major real estate transactions, market-moving deals, and strategic investments shaping the industry
            </p>
            
            {/* Hero Stats Cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8 max-w-lg mx-auto">
              <div className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="font-accent text-sm font-medium text-foreground">$47.3B Total Volume</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-accent text-sm font-medium text-foreground">Q4 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Deals - Enhanced Layout */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-primary text-3xl lg:text-4xl font-semibold text-foreground mb-3 lg:mb-4">
                Featured Transactions
              </h2>
              <p className="font-secondary text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Landmark deals and strategic acquisitions driving market dynamics and setting new benchmarks
              </p>
            </div>

            {/* Deal Cards */}
            <div className="space-y-8 lg:space-y-12">
              {loading ? (
                // Loading skeletons
                Array.from({ length: 3 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                      <div className="lg:col-span-2 aspect-[16/10] lg:aspect-auto">
                        <Skeleton className="w-full h-full" />
                      </div>
                      <div className="lg:col-span-3 p-6 lg:p-8">
                        <Skeleton className="h-6 w-20 mb-3" />
                        <Skeleton className="h-8 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2 mb-4" />
                        <Skeleton className="h-16 w-full mb-6" />
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton key={i} className="h-16 w-full" />
                          ))}
                        </div>
                        <Skeleton className="h-12 w-full" />
                      </div>
                    </div>
                  </Card>
                ))
              ) : featuredDeals.length > 0 ? (
                featuredDeals.map((deal) => {
                  const location = `${deal.city}, ${deal.state_province}`;
                  const value = formatCurrency(deal.deal_value);
                  const date = formatDate(deal.closing_date || deal.announcement_date);
                  
                  // Create details object
                  const details: { [key: string]: string } = {};
                  if (deal.square_footage) {
                    details.sqft = formatSquareFootage(deal.square_footage);
                  }
                  if (deal.cap_rate) {
                    details.capRate = formatPercentage(deal.cap_rate);
                  }
                  if (deal.occupancy_rate) {
                    details.occupancy = formatPercentage(deal.occupancy_rate);
                  }

                  return (
                    <Card key={deal.id} className="overflow-hidden hover-lift transition-all duration-300 group shadow-card">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                        {/* Image Section */}
                        <div className="lg:col-span-2 aspect-[16/10] lg:aspect-auto relative">
                          <img 
                            src={deal.image_url || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'} 
                            alt={deal.deal_name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <div className="absolute top-4 left-4">
                            <Badge 
                              variant={deal.deal_status === "Closed" ? "default" : "secondary"} 
                              className="bg-background/90 backdrop-blur-sm shadow-sm"
                            >
                              {deal.deal_status}
                            </Badge>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent lg:hidden"></div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="lg:col-span-3 p-6 lg:p-8">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 lg:mb-6">
                            <div className="flex-1">
                              <Badge variant="outline" className="mb-3">{deal.property_type}</Badge>
                              <h3 className="font-primary text-xl lg:text-2xl font-semibold text-foreground mb-2 lg:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {deal.deal_name}
                              </h3>
                              <div className="flex items-center gap-2 text-muted-foreground mb-4 lg:mb-0">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span className="font-secondary text-sm lg:text-base">{location}</span>
                              </div>
                            </div>
                            <div className="text-left lg:text-right lg:ml-6">
                              <div className="font-primary text-2xl lg:text-3xl font-bold text-primary">{value}</div>
                              <div className="text-sm text-muted-foreground">{date}</div>
                            </div>
                          </div>
                          
                          <p className="font-secondary text-muted-foreground mb-6 leading-relaxed line-clamp-3 lg:line-clamp-none">
                            {deal.property_name && `Premium ${deal.property_type.toLowerCase()} property featuring strategic location and institutional-quality assets.`}
                          </p>
                          
                          {/* Metrics Grid */}
                          {Object.keys(details).length > 0 && (
                            <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-6">
                              {Object.entries(details).map(([key, value]) => (
                                <div key={key} className="text-center p-3 lg:p-4 bg-muted/30 rounded-lg border border-border/30">
                                  <div className="font-primary text-base lg:text-lg font-semibold text-foreground">{value}</div>
                                  <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{key}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* Transaction Parties */}
                          {(deal.buyer || deal.seller) && (
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm bg-muted/20 rounded-lg p-4">
                              {deal.buyer && (
                                <div>
                                  <span className="text-muted-foreground">Buyer: </span>
                                  <span className="font-medium text-foreground">{deal.buyer}</span>
                                </div>
                              )}
                              {deal.seller && (
                                <div>
                                  <span className="text-muted-foreground">Seller: </span>
                                  <span className="font-medium text-foreground">{deal.seller}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No featured deals available at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Market Activity Dashboard */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Transaction Activity
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">Real-time metrics and trends in real estate deal flow and market velocity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {marketActivity.map((metric, index) => <Card key={index} className="p-6 text-center hover-lift transition-all duration-300 group">
                  <div className="font-primary text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">
                    {metric.value}
                  </div>
                  <div className="font-accent text-sm font-medium text-foreground mb-2">
                    {metric.metric}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    <span className="text-primary font-medium">{metric.change}</span>
                    <span className="text-muted-foreground">{metric.period}</span>
                  </div>
                </Card>)}
            </div>

            {/* Recent Transactions Table */}
            <Card className="p-8">
              <h3 className="font-primary text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Recent Transactions
              </h3>
              <div className="space-y-4">
                {loading ? (
                  Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                      <div className="flex-1">
                        <Skeleton className="h-5 w-1/3 mb-2" />
                        <div className="flex items-center gap-4">
                          <Skeleton className="h-4 w-1/4" />
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-20" />
                        </div>
                      </div>
                      <div className="text-right">
                        <Skeleton className="h-6 w-20 mb-1" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  ))
                ) : recentDeals.length > 0 ? (
                  recentDeals.map((transaction) => {
                    const location = `${transaction.city}, ${transaction.state_province}`;
                    const price = formatCurrency(transaction.deal_value);
                    const date = formatDate(transaction.closing_date || transaction.announcement_date);
                    
                    return (
                      <div key={transaction.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-accent font-medium text-foreground mb-1">{transaction.property_name}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {location}
                            </span>
                            <Badge variant="outline" className="text-xs">{transaction.property_type}</Badge>
                            <span>{date}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-primary text-xl font-bold text-foreground">{price}</div>
                          <div className="flex items-center gap-1 text-sm text-primary">
                            <TrendingUp className="w-3 h-3" />
                            <span>Market Move</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No recent transactions available.</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </section>

        {/* Upcoming Deals Pipeline - Enhanced */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-primary text-3xl lg:text-4xl font-semibold text-foreground mb-3 lg:mb-4">
                Pipeline & Upcoming Opportunities
              </h2>
              <p className="font-secondary text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Exclusive access to deals in various stages of execution and upcoming market opportunities
              </p>
            </div>

            {/* Deal Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
              {loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <Card key={index} className="p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-20" />
                    </div>
                    <Skeleton className="h-6 w-3/4 mb-4" />
                    <div className="space-y-3 mb-6">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </Card>
                ))
              ) : pipelineDeals.length > 0 ? (
                pipelineDeals.map((deal) => {
                  const location = `${deal.city}, ${deal.state_province}`;
                  const estimate = formatCurrency(deal.deal_value);
                  const timeline = formatDate(deal.announcement_date) || 'Q1 2025';
                  
                  return (
                    <Card key={deal.id} className="p-6 hover-lift transition-all duration-300 group shadow-card h-full">
                      {/* Status Badges */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-xs">{deal.property_type}</Badge>
                        <Badge 
                          variant={deal.deal_status === "Marketed" ? "default" : "secondary"} 
                          className="text-xs"
                        >
                          {deal.deal_status}
                        </Badge>
                      </div>
                      
                      {/* Deal Title */}
                      <h3 className="font-primary text-lg lg:text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {deal.deal_name}
                      </h3>
                      
                      {/* Deal Details */}
                      <div className="space-y-3 text-sm mb-6 flex-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <DollarSign className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium text-foreground">Est. {estimate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span>{timeline}</span>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <Button variant="ghost" className="w-full group/btn border border-border/50 hover:border-primary/30">
                        Track Opportunity
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Card>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No pipeline deals available at the moment.</p>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-4 p-8 bg-muted/20 rounded-2xl border border-border/50">
                <h3 className="font-primary text-xl lg:text-2xl font-semibold text-foreground">
                  Access Premium Deal Intelligence
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base max-w-md">
                  Get exclusive access to our complete deal pipeline and advanced market analytics
                </p>
                <Button size="lg" className="group">
                  Access Full Deal Pipeline
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default KeyDeals;