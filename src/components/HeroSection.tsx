import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BarChart3 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with Gradient */}
      <div className="absolute inset-0 bg-subtle-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary/20 mb-8">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-accent font-medium text-foreground/80">
              Real Estate Market Intelligence
            </span>
          </div>
          
          {/* Main Headlines */}
          <h1 className="font-primary text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 tracking-tight leading-[0.9]">
            MARKET
            <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              INSIGHTS
            </span>
          </h1>
          
          <p className="font-secondary text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Premium analysis on real estate trends, key deals, and investment strategies shaping the industry
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="premium" size="hero" className="group">
              Explore Latest Analysis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="elegant" size="hero" className="group">
              <BarChart3 className="w-5 h-5" />
              Market Dashboard
            </Button>
          </div>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { metric: "$2.4T", label: "Market Volume Tracked" },
              { metric: "500+", label: "Key Deals Analyzed" },
              { metric: "95%", label: "Prediction Accuracy" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-primary text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">
                  {stat.metric}
                </div>
                <div className="font-secondary text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};