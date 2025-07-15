import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, ArrowRight, Calendar, Target, PieChart, Shield, BookOpen, Users, Lightbulb, BarChart3 } from "lucide-react";

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

  const marketInsights = [
    {
      title: "Interest Rate Impact Analysis",
      date: "December 15, 2024",
      summary: "Federal Reserve policy changes affecting mortgage demand and home prices across major metropolitan areas.",
      metrics: "mortgage applications down 12%",
      category: "Monetary Policy"
    },
    {
      title: "Luxury Market Dynamics",
      date: "December 12, 2024", 
      summary: "High-end properties ($2M+) showing unique trends divergent from overall market patterns.",
      metrics: "luxury sales up 8.3%",
      category: "Luxury Segment"
    },
    {
      title: "Commercial Real Estate Outlook",
      date: "December 10, 2024",
      summary: "Office space demand evolving post-pandemic with mixed-use developments gaining traction.",
      metrics: "office occupancy 78%",
      category: "Commercial"
    },
    {
      title: "First-Time Buyer Market",
      date: "December 8, 2024",
      summary: "Affordability challenges persist while government programs aim to increase homeownership accessibility.",
      metrics: "first-time buyers 28%",
      category: "Demographics"
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

  const investmentOpportunities = [
    {
      title: "Value-Add Multifamily",
      category: "Multifamily",
      riskLevel: "Medium",
      targetReturn: "15-20%",
      horizon: "3-5 years",
      description: "Acquire underperforming apartment complexes in emerging markets and implement capital improvements, operational efficiencies, and strategic repositioning.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      keyPoints: [
        "Target properties with 70-85% occupancy",
        "Focus on unit renovations and amenity upgrades",
        "Implement professional property management",
        "Exit through refinance or sale to core+ investor"
      ],
      marketConditions: "Favorable in Sunbelt markets with job growth"
    },
    {
      title: "Industrial Sale-Leaseback",
      category: "Industrial", 
      riskLevel: "Low",
      targetReturn: "8-12%",
      horizon: "10+ years",
      description: "Partner with corporations to purchase their industrial facilities and lease them back, providing capital for business operations while securing stable income.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
      keyPoints: [
        "Target investment-grade corporate tenants",
        "Focus on mission-critical facilities",
        "Structure long-term triple-net leases",
        "Built-in rent escalations and renewal options"
      ],
      marketConditions: "Strong demand from e-commerce and logistics"
    },
    {
      title: "Opportunistic Office Repositioning",
      category: "Office",
      riskLevel: "High", 
      targetReturn: "20-30%",
      horizon: "2-4 years",
      description: "Acquire distressed office properties in prime locations and convert to mixed-use developments, life sciences, or alternative asset classes.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      keyPoints: [
        "Target Class B/C properties in A locations",
        "Evaluate conversion feasibility early",
        "Secure zoning and regulatory approvals",
        "Execute repositioning within 18-24 months"
      ],
      marketConditions: "Opportunities in secondary CBD markets"
    },
    {
      title: "Build-to-Rent Communities",
      category: "Residential",
      riskLevel: "Medium-High",
      targetReturn: "12-18%", 
      horizon: "4-7 years",
      description: "Develop single-family rental communities targeting institutional ownership, capitalizing on the growing trend of professional rental management.",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
      keyPoints: [
        "Target high-growth suburban markets",
        "Design for rental optimization and maintenance",
        "Partner with experienced builders and operators",
        "Pre-lease or sell to institutional buyers"
      ],
      marketConditions: "Growing institutional demand for SFR"
    }
  ];

  const sectorOutlook = [
    {
      sector: "Multifamily",
      outlook: "Positive",
      drivers: ["Population growth", "Housing shortage", "Millennial demand"],
      risks: ["Interest rates", "Supply increases", "Rent regulation"],
      recommendation: "Focus on Sunbelt and secondary markets"
    },
    {
      sector: "Industrial", 
      outlook: "Very Positive",
      drivers: ["E-commerce growth", "Supply chain reshoring", "Last-mile delivery"],
      risks: ["Construction costs", "Labor shortages", "Automation"],
      recommendation: "Target logistics hubs and urban infill"
    },
    {
      sector: "Office",
      outlook: "Cautious",
      drivers: ["Flight to quality", "Hybrid work models", "Urban revival"],
      risks: ["Remote work trends", "Obsolescence", "Oversupply"],
      recommendation: "Focus on trophy assets and conversions"
    },
    {
      sector: "Retail",
      outlook: "Selective",
      drivers: ["Experiential retail", "Last-mile fulfillment", "Mixed-use"],
      risks: ["E-commerce pressure", "Anchor departures", "Changing consumer habits"],
      recommendation: "Target necessity-based and experiential formats"
    }
  ];

  const expertInsights = [
    {
      expert: "Sarah Chen",
      title: "Managing Director, Institutional Capital",
      insight: "The current environment favors strategies with shorter hold periods and value creation through operational improvements rather than leverage.",
      focus: "Institutional Investment"
    },
    {
      expert: "Michael Rodriguez", 
      title: "Head of Research, Commercial Real Estate",
      insight: "Demographic shifts are creating opportunities in secondary markets, particularly in the Sunbelt, where infrastructure investment is following population growth.",
      focus: "Market Analysis"
    },
    {
      expert: "Jennifer Park",
      title: "Principal, Development & Construction",
      insight: "Build-to-rent strategies are becoming institutionalized, creating opportunities for developers who can deliver at scale with institutional-quality operations.",
      focus: "Development Strategy"
    }
  ];

  const marketIntelligenceResources = [
    {
      title: "Due Diligence Essentials",
      category: "Risk Management",
      readTime: "12 min",
      description: "Comprehensive checklist and best practices for evaluating commercial real estate investments.",
      topics: ["Financial analysis", "Market research", "Physical inspection", "Legal review"],
      difficulty: "Intermediate"
    },
    {
      title: "Capital Stack Optimization",
      category: "Financing",
      readTime: "8 min", 
      description: "Strategies for structuring debt and equity to maximize returns while managing risk.",
      topics: ["Debt selection", "Equity partnerships", "Mezzanine financing", "Exit planning"],
      difficulty: "Advanced"
    },
    {
      title: "Market Cycle Timing",
      category: "Market Analysis",
      readTime: "15 min",
      description: "Understanding real estate cycles and positioning strategies for different market phases.",
      topics: ["Cycle identification", "Timing strategies", "Counter-cyclical plays", "Risk mitigation"],
      difficulty: "Advanced"
    },
    {
      title: "ESG Integration",
      category: "Sustainability",
      readTime: "10 min",
      description: "Incorporating environmental, social, and governance factors into investment decisions.",
      topics: ["Energy efficiency", "Social impact", "Governance standards", "Reporting"],
      difficulty: "Intermediate"
    },
    {
      title: "Technology in Real Estate",
      category: "Innovation",
      readTime: "6 min",
      description: "Leveraging proptech and data analytics to gain competitive advantages.",
      topics: ["Data analytics", "Automation", "Digital marketing", "Smart buildings"],
      difficulty: "Beginner"
    },
    {
      title: "Portfolio Diversification",
      category: "Portfolio Management", 
      readTime: "9 min",
      description: "Building resilient real estate portfolios across asset classes, geographies, and strategies.",
      topics: ["Asset allocation", "Geographic diversification", "Risk correlation", "Rebalancing"],
      difficulty: "Intermediate"
    }
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

        {/* Investment Opportunities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Investment Opportunities by Market Trends
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic investment opportunities identified through current market analysis and emerging trends
              </p>
            </div>

            <div className="space-y-8">
              {investmentOpportunities.map((opportunity, index) => (
                <Card key={index} className="overflow-hidden hover-lift transition-all duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1 aspect-video lg:aspect-auto relative">
                      <img 
                        src={opportunity.image} 
                        alt={opportunity.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">{opportunity.category}</Badge>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-primary text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {opportunity.title}
                          </h3>
                          <p className="font-secondary text-muted-foreground mb-4 leading-relaxed">
                            {opportunity.description}
                          </p>
                        </div>
                        <div className="text-right ml-6">
                          <div className="font-primary text-2xl font-bold text-primary">{opportunity.targetReturn}</div>
                          <div className="text-sm text-muted-foreground">Target IRR</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-3 bg-background/50 rounded-lg">
                          <div className="font-primary text-lg font-semibold text-foreground">{opportunity.riskLevel}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Risk Level</div>
                        </div>
                        <div className="text-center p-3 bg-background/50 rounded-lg">
                          <div className="font-primary text-lg font-semibold text-foreground">{opportunity.horizon}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Time Horizon</div>
                        </div>
                        <div className="text-center p-3 bg-background/50 rounded-lg">
                          <div className="font-primary text-lg font-semibold text-foreground">{opportunity.category}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Asset Class</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-accent font-medium text-foreground mb-3">Key Execution Points:</h4>
                        <ul className="space-y-2">
                          {opportunity.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Market Conditions: </span>
                          <span className="font-medium text-foreground">{opportunity.marketConditions}</span>
                        </div>
                        <Button variant="ghost" className="group/btn">
                          View Analysis
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Intelligence + Expert Insights */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Market Intelligence & Expert Commentary
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                In-depth analysis and expert insights on emerging trends and market dynamics
              </p>
            </div>

            {/* Market Analysis Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {marketInsights.map((insight, index) => (
                <Card key={index} className="p-6 hover-lift transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-accent font-medium text-primary uppercase tracking-wide">
                      <span>{insight.category}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{insight.date}</div>
                  </div>
                  <h3 className="font-primary text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  <p className="font-secondary text-muted-foreground mb-4 leading-relaxed">
                    {insight.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Key Metric: </span>
                      <span className="font-medium text-foreground">{insight.metrics}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Expert Insights */}
            <div className="mb-16">
              <h3 className="font-primary text-2xl font-semibold text-foreground mb-8 text-center">Expert Market Commentary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertInsights.map((expert, index) => (
                  <Card key={index} className="p-6 hover-lift transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-xs font-accent font-medium text-primary uppercase tracking-wide">{expert.focus}</span>
                    </div>
                    <blockquote className="font-secondary text-muted-foreground mb-4 leading-relaxed italic">
                      "{expert.insight}"
                    </blockquote>
                    <div className="border-t border-border/50 pt-4">
                      <div className="font-accent font-medium text-foreground">{expert.expert}</div>
                      <div className="text-sm text-muted-foreground">{expert.title}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button variant="premium" size="lg" className="group">
                Access Full Market Intelligence
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Sector Analysis & Strategic Outlook */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Sector Analysis & Strategic Outlook
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert analysis of market conditions, opportunities, and risks across major commercial real estate sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sectorOutlook.map((sector, index) => (
                <Card key={index} className="p-6 hover-lift transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-primary text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {sector.sector}
                    </h3>
                    <Badge 
                      variant={sector.outlook === "Very Positive" ? "default" : sector.outlook === "Positive" ? "secondary" : "outline"}
                      className="font-medium"
                    >
                      {sector.outlook}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-accent text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Growth Drivers
                      </h4>
                      <ul className="space-y-1">
                        {sector.drivers.map((driver, driverIndex) => (
                          <li key={driverIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {driver}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-accent text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-destructive" />
                        Key Risks
                      </h4>
                      <ul className="space-y-1">
                        {sector.risks.map((risk, riskIndex) => (
                          <li key={riskIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-destructive rounded-full"></div>
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="font-accent text-sm font-medium text-foreground mb-2">Our Recommendation:</h4>
                      <p className="text-sm text-muted-foreground">{sector.recommendation}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Intelligence Resources */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Market Intelligence Resources
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential guides and resources for navigating market trends and making informed investment decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketIntelligenceResources.map((guide, index) => (
                <Card key={index} className="p-6 hover-lift transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="text-xs font-accent font-medium text-primary uppercase tracking-wide">{guide.category}</span>
                    </div>
                    <Badge variant={guide.difficulty === "Advanced" ? "default" : guide.difficulty === "Intermediate" ? "secondary" : "outline"}>
                      {guide.difficulty}
                    </Badge>
                  </div>
                  
                  <h3 className="font-primary text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="font-secondary text-sm text-muted-foreground mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-accent text-xs font-medium text-foreground mb-2 uppercase tracking-wide">Covers:</h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {guide.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Access Guide
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="premium" size="lg" className="group">
                Explore All Resources
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

export default MarketTrends;