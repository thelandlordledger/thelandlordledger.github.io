import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Building, Activity, Users } from "lucide-react";

export const MarketDashboard = () => {
  const marketMetrics = [
    {
      title: "National Price Index",
      value: "$425,900",
      change: "+2.4%",
      trend: "up",
      icon: TrendingUp,
      description: "Median home price nationwide"
    },
    {
      title: "Market Velocity",
      value: "28 days",
      change: "-5.2%",
      trend: "down",
      icon: Activity,
      description: "Average days on market"
    },
    {
      title: "Investment Volume",
      value: "$847.2B",
      change: "+12.8%",
      trend: "up",
      icon: DollarSign,
      description: "Total commercial transactions"
    },
    {
      title: "New Constructions",
      value: "1.42M",
      change: "+3.1%",
      trend: "up",
      icon: Building,
      description: "Units under construction"
    },
    {
      title: "Active Investors",
      value: "156,400",
      change: "+8.7%",
      trend: "up",
      icon: Users,
      description: "Registered investor accounts"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-primary text-4xl md:text-5xl font-semibold text-foreground mb-4">
            LIVE MARKET INTELLIGENCE
          </h2>
          <p className="font-secondary text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time data and insights from across the real estate ecosystem
          </p>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {marketMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            const isPositive = metric.trend === "up";
            
            return (
              <Card 
                key={index} 
                className="p-6 hover-lift hover:shadow-card transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${isPositive ? 'bg-primary/10' : 'bg-destructive/10'}`}>
                    <IconComponent className={`w-5 h-5 ${isPositive ? 'text-primary' : 'text-destructive'}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    isPositive ? 'text-primary' : 'text-destructive'
                  }`}>
                    {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {metric.change}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-accent text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {metric.title}
                  </h3>
                  <div className="font-primary text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {metric.value}
                  </div>
                  <p className="font-secondary text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Featured Insight Card */}
        <Card className="p-8 bg-hero-gradient text-primary-foreground hover-lift hover:shadow-glow transition-all duration-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-primary text-2xl font-semibold mb-2">
                Market Spotlight: Emerging Opportunities
              </h3>
              <p className="font-secondary text-primary-foreground/80 mb-4">
                Sunbelt markets showing unprecedented growth with 15.2% YoY appreciation. 
                Our analysis identifies key investment corridors for Q1 2024.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Activity className="w-4 h-4" />
                  Live Analysis
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  High Confidence
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="text-right">
                <div className="font-primary text-3xl font-bold mb-1">+15.2%</div>
                <div className="text-sm text-primary-foreground/80">YoY Growth</div>
              </div>
            </div>
          </div>
        </Card>
        
      </div>
    </section>
  );
};