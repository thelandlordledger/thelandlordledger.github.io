import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Handshake, Target, BarChart3, Building, Users, MapPin, DollarSign } from "lucide-react";

export const ContentCategories = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "Market Trends",
      description: "Data-driven analysis of emerging patterns, price movements, and sector performance across all asset classes.",
      features: ["Price Analytics", "Sector Performance", "Regional Insights", "Forecast Models"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      color: "primary"
    },
    {
      icon: Handshake,
      title: "Key Deals",
      description: "In-depth breakdowns of significant transactions, deal structures, and market-moving acquisitions.",
      features: ["Transaction Analysis", "Deal Structures", "Market Impact", "Valuation Insights"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
      color: "accent-gold"
    },
    {
      icon: Target,
      title: "Investment Strategies",
      description: "Expert guidance on portfolio construction, risk management, and opportunity identification.",
      features: ["Portfolio Strategy", "Risk Assessment", "Market Timing", "Asset Allocation"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
      color: "primary-light"
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Comprehensive research and analytics platform providing institutional-grade market intelligence.",
      features: ["Research Reports", "Data Analytics", "Market Surveys", "Trend Forecasting"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80",
      color: "accent"
    }
  ];

  const marketHighlights = [
    { icon: Building, metric: "2.4M", label: "Properties Tracked", change: "+12%" },
    { icon: DollarSign, metric: "$847B", label: "Transaction Volume", change: "+23%" },
    { icon: Users, metric: "50K+", label: "Active Subscribers", change: "+45%" },
    { icon: MapPin, metric: "250+", label: "Markets Covered", change: "+8%" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-primary text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            MASTERPIECE OF 
            <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">MARKET INTELLIGENCE</span>
          </h2>
          <p className="font-secondary text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive coverage across all aspects of real estate investment, 
            from micro-market analysis to macro-economic trends.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={index}
                className="group overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover-lift hover:shadow-elegant transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent"></div>
                  
                  {/* Category Icon */}
                  <div className="absolute top-6 left-6 p-3 bg-background/90 backdrop-blur-sm rounded-xl">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-primary text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="font-secondary text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-light">
                    Explore Category
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Market Highlights */}
        <div className="text-center mb-12">
          <h3 className="font-primary text-3xl font-semibold text-foreground mb-8">
            Platform Performance
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {marketHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            
            return (
              <Card key={index} className="p-6 text-center border-0 bg-card/50 backdrop-blur-sm hover-lift transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                <div className="font-primary text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {highlight.metric}
                </div>
                
                <div className="font-secondary text-sm text-muted-foreground mb-2">
                  {highlight.label}
                </div>
                
                <div className="flex items-center justify-center gap-1 text-xs text-primary font-medium">
                  <TrendingUp className="w-3 h-3" />
                  {highlight.change}
                </div>
              </Card>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};