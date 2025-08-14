import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, ArrowRight, Calendar, BarChart3 } from "lucide-react";

const MarketTrends = () => {
  const trendData = [
    {
      region: "Sunbelt Markets",
      change: "+15.2%",
      trend: "up",
      price: "$385,900",
      description: "Phoenix, Austin, Tampa leading growth",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
    },
    {
      region: "West Coast",
      change: "-3.8%",
      trend: "down", 
      price: "$745,200",
      description: "San Francisco, Seattle adjusting prices",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
    },
    {
      region: "Northeast Corridor",
      change: "+2.1%",
      trend: "up",
      price: "$592,400",
      description: "New York, Boston showing resilience",
      image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&q=80"
    },
    {
      region: "Midwest Hub Cities",
      change: "+8.7%",
      trend: "up",
      price: "$289,500",
      description: "Chicago, Minneapolis gaining momentum",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
    }
  ];


  const regionalData = [
    { city: "Austin, TX", growth: "+18.9%", inventory: "2.1 months", avgPrice: "$425,900" },
    { city: "Phoenix, AZ", growth: "+16.4%", inventory: "1.8 months", avgPrice: "$398,500" },
    { city: "Tampa, FL", growth: "+14.2%", inventory: "2.3 months", avgPrice: "$365,200" },
    { city: "Nashville, TN", growth: "+13.8%", inventory: "2.0 months", avgPrice: "$389,700" },
    { city: "Raleigh, NC", growth: "+12.5%", inventory: "2.4 months", avgPrice: "$358,900" },
    { city: "Denver, CO", growth: "+11.3%", inventory: "2.7 months", avgPrice: "$478,600" }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-subtle-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="font-primary text-5xl md:text-6xl font-semibold text-foreground mb-6">
              MARKET
              <br />
              <span className="bg-hero-gradient bg-clip-text text-transparent">TRENDS</span>
            </h1>
            <p className="font-secondary text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Real-time analysis of market movements, investment opportunities, and strategic intelligence for commercial real estate professionals
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Updated December 15, 2024</span>
            </div>
          </div>
        </section>

        {/* Regional Trends Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Regional Market Dynamics
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive analysis of price movements and market conditions across key metropolitan areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {trendData.map((region, index) => {
                const isPositive = region.trend === "up";
                return (
                  <Card key={index} className="overflow-hidden hover-lift transition-all duration-300 group">
                    <div className="aspect-video relative">
                      <img 
                        src={region.image} 
                        alt={region.region}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-primary text-xl font-semibold mb-1">{region.region}</h3>
                        <p className="text-sm opacity-90">{region.description}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          {isPositive ? <TrendingUp className="w-5 h-5 text-primary" /> : <TrendingDown className="w-5 h-5 text-destructive" />}
                          <span className={`font-primary text-2xl font-bold ${isPositive ? 'text-primary' : 'text-destructive'}`}>
                            {region.change}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-primary text-lg font-semibold text-foreground">{region.price}</div>
                          <div className="text-sm text-muted-foreground">Median Price</div>
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full group/btn">
                        View Regional Report
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Top Growing Cities */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="font-primary text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Top Growing Metropolitan Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionalData.map((city, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-accent font-medium text-foreground">{city.city}</h4>
                      <div className="flex items-center gap-1 text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-primary font-semibold">{city.growth}</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg Price:</span>
                        <span className="font-medium">{city.avgPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Inventory:</span>
                        <span className="font-medium">{city.inventory}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
};

export default MarketTrends;