import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, MapPin, Building2, Briefcase, BarChart3, Home, PieChart, Globe, Target, DollarSign } from "lucide-react";

export const FeaturedAnalysis = () => {
  const featuredContent = [
    {
      category: "Market Trends",
      title: "The Rise of Secondary Markets",
      subtitle: "How emerging cities are redefining real estate investment",
      description: "Deep dive analysis into markets showing 20%+ growth rates, infrastructure development patterns, and long-term investment potential.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
      readTime: "8 min",
      trend: "+23.4%",
      icon: TrendingUp
    },
    {
      category: "Key Deals",
      title: "Blackstone's $6B Industrial Portfolio",
      subtitle: "Strategic acquisition reshapes logistics real estate",
      description: "Comprehensive breakdown of the largest industrial real estate transaction of 2024, market implications, and future deal flow predictions.",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&q=80",
      readTime: "12 min",
      trend: "$6.2B",
      icon: Building2
    },
    {
      category: "Investment Strategy",
      title: "ESG Integration in Real Estate",
      subtitle: "Sustainable investing drives premium valuations",
      description: "How environmental, social, and governance factors are creating new value propositions in commercial and residential real estate.",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&q=80",
      readTime: "10 min",
      trend: "+18.7%",
      icon: Briefcase
    },
    {
      category: "Market Analysis",
      title: "Residential Price Dynamics",
      subtitle: "Housing affordability reaches critical inflection point",
      description: "Comprehensive analysis of housing price trends across major metropolitan areas, affordability metrics, and policy implications.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      readTime: "7 min",
      trend: "+15.2%",
      icon: Home
    },
    {
      category: "Portfolio Management",
      title: "REIT Performance Outlook",
      subtitle: "Sector rotation drives new opportunities",
      description: "In-depth review of REIT performance by sector, dividend sustainability analysis, and strategic positioning for institutional investors.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      readTime: "9 min",
      trend: "+12.8%",
      icon: PieChart
    },
    {
      category: "Global Markets",
      title: "Cross-Border Capital Flows",
      subtitle: "International investment patterns reshape markets",
      description: "Analysis of foreign direct investment in real estate, currency impacts, and emerging market opportunities for global portfolios.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      readTime: "11 min",
      trend: "+28.1%",
      icon: Globe
    },
    {
      category: "Data Analytics",
      title: "PropTech Market Intelligence",
      subtitle: "Technology disruption accelerates market evolution",
      description: "Comprehensive analysis of property technology adoption, market penetration rates, and impact on traditional real estate operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      readTime: "6 min",
      trend: "+45.3%",
      icon: BarChart3
    },
    {
      category: "Alternative Assets",
      title: "Opportunity Zone Investments",
      subtitle: "Tax incentives drive capital deployment",
      description: "Strategic analysis of Opportunity Zone investments, project pipeline, and long-term return expectations for qualified investors.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      readTime: "13 min",
      trend: "+31.7%",
      icon: Target
    },
    {
      category: "Capital Markets",
      title: "Interest Rate Impact Analysis",
      subtitle: "Fed policy shifts reshape financing landscape",
      description: "Detailed examination of interest rate impacts on real estate valuations, financing costs, and investment strategy adjustments.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
      readTime: "8 min",
      trend: "+5.9%",
      icon: DollarSign
    }
  ];

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-accent font-medium mb-6">
            <Clock className="w-4 h-4" />
            Featured Analysis
          </div>
          
          <h2 className="font-primary text-5xl md:text-6xl font-semibold text-foreground mb-6 tracking-tight">
            TIMELESS INSIGHTS IN
            <br />
            <span className="text-primary">MODERN MARKETS</span>
          </h2>
          
          <p className="font-secondary text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert analysis combining traditional real estate wisdom with cutting-edge market intelligence, 
            delivering actionable insights for today's sophisticated investors.
          </p>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => {
            const IconComponent = content.icon;
            
            return (
              <Card 
                key={index}
                className="group overflow-hidden border-0 bg-gradient-to-br from-background via-background/90 to-primary/5 backdrop-blur-sm hover-lift hover:shadow-glow transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Category */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-accent font-medium rounded-full">
                    {content.category}
                  </div>
                  
                  {/* Floating Metric */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-primary" />
                      <span className="font-accent font-bold text-sm text-foreground">
                        {content.trend}
                      </span>
                    </div>
                  </div>
                  
                  {/* Reading Time */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs text-background bg-foreground/80 px-2 py-1 rounded-full backdrop-blur-sm">
                    <Clock className="w-3 h-3" />
                    {content.readTime}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Headlines */}
                  <div>
                    <h3 className="font-primary text-xl font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                      {content.title}
                    </h3>
                    <h4 className="font-secondary text-sm text-primary font-medium mb-3 line-clamp-2">
                      {content.subtitle}
                    </h4>
                  </div>
                  
                  {/* Description */}
                  <p className="font-secondary text-muted-foreground leading-relaxed text-sm line-clamp-3">
                    {content.description}
                  </p>
                  
                  {/* CTA */}
                  <Button variant="ghost" size="sm" className="group/btn w-full justify-between hover:bg-primary/10 hover:text-primary transition-all">
                    <span>Read Full Analysis</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-16">
          <Button variant="premium" size="lg" className="group">
            View All Market Analysis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
      </div>
    </section>
  );
};