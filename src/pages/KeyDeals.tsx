import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, DollarSign, Calendar, TrendingUp, ArrowRight, Users, Clock } from "lucide-react";

const KeyDeals = () => {
  const featuredDeals = [
    {
      title: "Manhattan Office Tower Acquisition",
      location: "New York, NY",
      value: "$2.8B",
      type: "Commercial",
      date: "December 12, 2024",
      buyer: "Blackstone Group",
      seller: "Brookfield Properties",
      description: "Landmark 52-story office building in Midtown Manhattan featuring premium tenants and recent renovations.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      details: {
        sqft: "1.2M",
        capRate: "5.2%",
        occupancy: "94%"
      },
      status: "Closed"
    },
    {
      title: "Sunbelt Multifamily Portfolio",
      location: "Austin, Phoenix, Tampa",
      value: "$1.4B",
      type: "Multifamily", 
      date: "December 10, 2024",
      buyer: "Starwood Capital",
      seller: "AvalonBay Communities",
      description: "Portfolio of 12 Class A apartment communities across high-growth Sunbelt markets.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      details: {
        units: "3,247",
        capRate: "4.8%",
        occupancy: "96%"
      },
      status: "Closed"
    },
    {
      title: "West Coast Logistics Portfolio",
      location: "Los Angeles, CA",
      value: "$950M",
      type: "Industrial",
      date: "December 8, 2024",
      buyer: "Prologis Inc.",
      seller: "EXR Industrial",
      description: "Strategic industrial assets near major ports with long-term e-commerce tenant leases.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
      details: {
        sqft: "2.8M",
        capRate: "4.1%",
        occupancy: "98%"
      },
      status: "Under Contract"
    }
  ];

  const recentTransactions = [
    {
      property: "The Spiral Tower",
      location: "Hudson Yards, NY",
      price: "$4.2B",
      type: "Office",
      date: "Dec 15, 2024",
      trend: "up"
    },
    {
      property: "Miami Beach Resort Portfolio",
      location: "Miami Beach, FL", 
      price: "$850M",
      type: "Hospitality",
      date: "Dec 14, 2024",
      trend: "up"
    },
    {
      property: "Silicon Valley Tech Campus",
      location: "Palo Alto, CA",
      price: "$1.9B",
      type: "Office",
      date: "Dec 13, 2024",
      trend: "down"
    },
    {
      property: "Denver Mixed-Use Development",
      location: "Denver, CO",
      price: "$650M",
      type: "Mixed-Use",
      date: "Dec 12, 2024",
      trend: "up"
    },
    {
      property: "Chicago Multifamily Complex",
      location: "Chicago, IL",
      price: "$425M",
      type: "Multifamily",
      date: "Dec 11, 2024",
      trend: "up"
    },
    {
      property: "Atlanta Distribution Center",
      location: "Atlanta, GA",
      price: "$320M",
      type: "Industrial",
      date: "Dec 10, 2024",
      trend: "up"
    }
  ];

  const marketActivity = [
    { metric: "Total Transaction Volume", value: "$47.3B", change: "+12.8%", period: "Q4 2024" },
    { metric: "Number of Deals", value: "1,247", change: "+8.4%", period: "This Quarter" },
    { metric: "Average Deal Size", value: "$38M", change: "+4.2%", period: "YTD 2024" },
    { metric: "Cap Rate Average", value: "5.1%", change: "-0.3%", period: "Current" }
  ];

  const upcomingDeals = [
    {
      title: "Seattle Waterfront Development",
      location: "Seattle, WA",
      estimate: "$1.2B",
      type: "Mixed-Use",
      timeline: "Q1 2025",
      status: "Marketing"
    },
    {
      title: "Dallas Office Portfolio",
      location: "Dallas, TX", 
      estimate: "$875M",
      type: "Office",
      timeline: "Q1 2025",
      status: "Due Diligence"
    },
    {
      title: "Florida Retail Centers",
      location: "Orlando, FL",
      estimate: "$540M", 
      type: "Retail",
      timeline: "Q2 2025",
      status: "Bidding"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-subtle-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="font-primary text-5xl md:text-6xl font-semibold text-foreground mb-6">
              KEY
              <br />
              <span className="bg-hero-gradient bg-clip-text text-transparent">DEALS</span>
            </h1>
            <p className="font-secondary text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Exclusive insights into major real estate transactions, market-moving deals, and strategic investments shaping the industry
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>$47.3B Total Volume</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Q4 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Deals */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Featured Transactions
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Landmark deals and strategic acquisitions driving market dynamics and setting new benchmarks
              </p>
            </div>

            <div className="space-y-8">
              {featuredDeals.map((deal, index) => (
                <Card key={index} className="overflow-hidden hover-lift transition-all duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto relative">
                      <img 
                        src={deal.image} 
                        alt={deal.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant={deal.status === "Closed" ? "default" : "secondary"} className="bg-background/80 backdrop-blur-sm">
                          {deal.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge variant="outline" className="mb-2">{deal.type}</Badge>
                          <h3 className="font-primary text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {deal.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-3">
                            <MapPin className="w-4 h-4" />
                            <span className="font-secondary">{deal.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-primary text-3xl font-bold text-primary">{deal.value}</div>
                          <div className="text-sm text-muted-foreground">{deal.date}</div>
                        </div>
                      </div>
                      
                      <p className="font-secondary text-muted-foreground mb-6 leading-relaxed">
                        {deal.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(deal.details).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-muted/30 rounded-lg">
                            <div className="font-primary text-lg font-semibold text-foreground">{value}</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <span className="text-muted-foreground">Buyer: </span>
                          <span className="font-medium text-foreground">{deal.buyer}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Seller: </span>
                          <span className="font-medium text-foreground">{deal.seller}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
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
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-time metrics and trends in commercial real estate deal flow and market velocity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {marketActivity.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover-lift transition-all duration-300 group">
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
                </Card>
              ))}
            </div>

            {/* Recent Transactions Table */}
            <Card className="p-8">
              <h3 className="font-primary text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Recent Transactions
              </h3>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-accent font-medium text-foreground mb-1">{transaction.property}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {transaction.location}
                        </span>
                        <Badge variant="outline" className="text-xs">{transaction.type}</Badge>
                        <span>{transaction.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-primary text-xl font-bold text-foreground">{transaction.price}</div>
                      <div className={`flex items-center gap-1 text-sm ${transaction.trend === 'up' ? 'text-primary' : 'text-destructive'}`}>
                        <TrendingUp className={`w-3 h-3 ${transaction.trend === 'down' ? 'rotate-180' : ''}`} />
                        <span>Market Move</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Upcoming Deals Pipeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Pipeline & Upcoming Opportunities
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Exclusive access to deals in various stages of execution and upcoming market opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {upcomingDeals.map((deal, index) => (
                <Card key={index} className="p-6 hover-lift transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-xs">{deal.type}</Badge>
                    <Badge variant="secondary" className="text-xs">{deal.status}</Badge>
                  </div>
                  <h3 className="font-primary text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {deal.title}
                  </h3>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{deal.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      <span>Est. {deal.estimate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{deal.timeline}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full group/btn">
                    Track Opportunity
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="premium" size="lg" className="group">
                Access Full Deal Pipeline
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KeyDeals;