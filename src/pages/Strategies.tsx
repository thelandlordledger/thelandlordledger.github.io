import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, PieChart, Shield, Calendar, ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react";

const Strategies = () => {
  const investmentStrategies = [
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

  const marketOutlook = [
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

  const strategyGuides = [
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-subtle-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="font-primary text-5xl md:text-6xl font-semibold text-foreground mb-6">
              INVESTMENT
              <br />
              <span className="bg-hero-gradient bg-clip-text text-transparent">STRATEGIES</span>
            </h1>
            <p className="font-secondary text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Proven strategies, expert insights, and actionable intelligence for navigating commercial real estate investment opportunities
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Risk-Adjusted Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Market-Tested Strategies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Strategies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Featured Investment Strategies
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Detailed analysis of current market opportunities with risk assessments, return projections, and execution frameworks
              </p>
            </div>

            <div className="space-y-8">
              {investmentStrategies.map((strategy, index) => (
                <Card key={index} className="overflow-hidden hover-lift transition-all duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1 aspect-video lg:aspect-auto relative">
                      <img 
                        src={strategy.image} 
                        alt={strategy.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">{strategy.category}</Badge>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-primary text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {strategy.title}
                          </h3>
                          <p className="font-secondary text-muted-foreground mb-4 leading-relaxed">
                            {strategy.description}
                          </p>
                        </div>
                        <div className="text-right ml-6">
                          <div className="font-primary text-2xl font-bold text-primary">{strategy.targetReturn}</div>
                          <div className="text-sm text-muted-foreground">Target IRR</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-3 bg-muted/30 rounded-lg">
                          <div className="font-primary text-lg font-semibold text-foreground">{strategy.riskLevel}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Risk Level</div>
                        </div>
                        <div className="text-center p-3 bg-muted/30 rounded-lg">
                          <div className="font-primary text-lg font-semibold text-foreground">{strategy.horizon}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Time Horizon</div>
                        </div>
                        <div className="text-center p-3 bg-muted/30 rounded-lg">
                          <div className="font-primary text-lg font-semibold text-foreground">{strategy.category}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">Asset Class</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-accent font-medium text-foreground mb-3">Key Execution Points:</h4>
                        <ul className="space-y-2">
                          {strategy.keyPoints.map((point, pointIndex) => (
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
                          <span className="font-medium text-foreground">{strategy.marketConditions}</span>
                        </div>
                        <Button variant="ghost" className="group/btn">
                          View Full Strategy
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

        {/* Market Outlook */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Sector Outlook & Recommendations
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Our expert analysis of market conditions, opportunities, and risks across major commercial real estate sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketOutlook.map((sector, index) => (
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

        {/* Strategy Guides */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Strategy Guides & Resources
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive guides and frameworks for implementing successful real estate investment strategies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {strategyGuides.map((guide, index) => (
                <Card key={index} className="p-6 hover-lift transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-xs">{guide.category}</Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-primary text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="font-secondary text-sm text-muted-foreground mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Difficulty:</span>
                      <Badge variant="secondary" className="text-xs">{guide.difficulty}</Badge>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-2">Topics Covered:</div>
                      <div className="flex flex-wrap gap-1">
                        {guide.topics.slice(0, 2).map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-muted/50 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                        {guide.topics.length > 2 && (
                          <span className="text-xs text-muted-foreground">+{guide.topics.length - 2} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full group/btn">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Guide
                    <ArrowRight className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              ))}
            </div>

            {/* Expert Insights */}
            <Card className="p-8 bg-hero-gradient text-primary-foreground">
              <h3 className="font-primary text-2xl font-semibold mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                Expert Market Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertInsights.map((expert, index) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <h4 className="font-accent font-medium">{expert.expert}</h4>
                      <p className="text-sm text-primary-foreground/80">{expert.title}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">{expert.focus}</Badge>
                    </div>
                    <blockquote className="text-sm italic leading-relaxed">
                      "{expert.insight}"
                    </blockquote>
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

export default Strategies;