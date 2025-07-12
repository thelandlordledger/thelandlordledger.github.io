import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, MapPin, Building2, Briefcase } from "lucide-react";

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
        <div className="space-y-12">
          {featuredContent.map((content, index) => {
            const IconComponent = content.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <Card 
                key={index}
                className="overflow-hidden border-0 bg-background/80 backdrop-blur-sm hover-lift hover:shadow-elegant transition-all duration-500"
              >
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[400px]`}>
                  
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img 
                      src={content.image} 
                      alt={content.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
                    
                    {/* Floating Metric */}
                    <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="font-accent font-semibold text-sm text-foreground">
                          {content.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      
                      {/* Category & Reading Time */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-accent font-medium rounded-full">
                          {content.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {content.readTime}
                        </div>
                      </div>
                      
                      {/* Headlines */}
                      <div>
                        <h3 className="font-primary text-3xl lg:text-4xl font-semibold text-foreground mb-3 leading-tight">
                          {content.title}
                        </h3>
                        <h4 className="font-secondary text-lg text-primary font-medium mb-4">
                          {content.subtitle}
                        </h4>
                      </div>
                      
                      {/* Description */}
                      <p className="font-secondary text-muted-foreground leading-relaxed text-base">
                        {content.description}
                      </p>
                      
                      {/* CTA */}
                      <Button variant="outline" className="group w-fit">
                        Read Full Analysis
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      
                    </div>
                  </div>
                  
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