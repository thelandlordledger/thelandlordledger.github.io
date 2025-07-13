import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Brain, Database, Zap, ArrowRight, Activity, Globe, Users, Target, Calendar, Download } from "lucide-react";

const Intelligence = () => {
  const intelligenceProducts = [
    {
      title: "Market Intelligence Dashboard",
      category: "Real-Time Data",
      description: "Live market metrics, transaction analysis, and trend identification across all major commercial real estate sectors.",
      features: ["Real-time pricing data", "Transaction flow analysis", "Market velocity tracking", "Comparative market analysis"],
      pricing: "Enterprise",
      users: "1,200+ subscribers",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    },
    {
      title: "Predictive Analytics Suite",
      category: "AI-Powered Insights",
      description: "Advanced machine learning models predicting market movements, pricing trends, and investment opportunities.",
      features: ["Price prediction models", "Risk assessment algorithms", "Opportunity scoring", "Portfolio optimization"],
      pricing: "Premium",
      users: "850+ institutions",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
    },
    {
      title: "Deal Flow Intelligence",
      category: "Transaction Data",
      description: "Comprehensive database of commercial real estate transactions with advanced search and analysis capabilities.",
      features: ["Historical transaction data", "Deal sourcing alerts", "Comparable sales analysis", "Market participant tracking"],
      pricing: "Professional",
      users: "2,100+ professionals",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
  ];

  const dataSources = [
    {
      source: "Public Records",
      coverage: "99.2%",
      updateFreq: "Daily",
      dataPoints: "15M+"
    },
    {
      source: "MLS Integration",
      coverage: "95.8%", 
      updateFreq: "Real-time",
      dataPoints: "8.5M+"
    },
    {
      source: "Financial Filings",
      coverage: "100%",
      updateFreq: "Quarterly",
      dataPoints: "500K+"
    },
    {
      source: "Market Surveys",
      coverage: "Major Markets",
      updateFreq: "Monthly",
      dataPoints: "2.2M+"
    }
  ];

  const analyticsCapabilities = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Advanced algorithms processing millions of data points to identify patterns and predict market movements.",
      capabilities: ["Price prediction", "Risk assessment", "Trend identification", "Anomaly detection"]
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Real-time ingestion and analysis of structured and unstructured data from hundreds of sources.",
      capabilities: ["Data normalization", "Quality assurance", "Real-time updates", "Historical analysis"]
    },
    {
      icon: Globe,
      title: "Market Intelligence",
      description: "Comprehensive market analysis combining quantitative data with qualitative insights from industry experts.",
      capabilities: ["Market reports", "Sector analysis", "Regional studies", "Economic indicators"]
    },
    {
      icon: Target,
      title: "Investment Scoring", 
      description: "Proprietary algorithms ranking investment opportunities based on risk-adjusted return potential.",
      capabilities: ["Opportunity scoring", "Risk rating", "Market timing", "Portfolio fit analysis"]
    }
  ];

  const reportLibrary = [
    {
      title: "Q4 2024 Market Outlook",
      type: "Quarterly Report",
      date: "December 2024",
      pages: 45,
      downloads: "2,340",
      premium: false
    },
    {
      title: "Sunbelt Growth Analysis",
      type: "Regional Study",
      date: "November 2024", 
      pages: 28,
      downloads: "1,875",
      premium: true
    },
    {
      title: "Industrial Real Estate Trends",
      type: "Sector Report",
      date: "November 2024",
      pages: 32,
      downloads: "1,654",
      premium: false
    },
    {
      title: "Interest Rate Impact Study",
      type: "Economic Analysis",
      date: "October 2024",
      pages: 22,
      downloads: "2,120",
      premium: true
    },
    {
      title: "ESG in Commercial Real Estate",
      type: "Thematic Report",
      date: "October 2024",
      pages: 38,
      downloads: "987",
      premium: false
    },
    {
      title: "Proptech Innovation Report",
      type: "Technology Study",
      date: "September 2024",
      pages: 41,
      downloads: "1,432",
      premium: true
    }
  ];

  const platformFeatures = [
    {
      feature: "Custom Dashboards",
      description: "Build personalized analytics dashboards tailored to your investment focus and portfolio needs."
    },
    {
      feature: "Alert System",
      description: "Real-time notifications for market movements, deals, and opportunities matching your criteria."
    },
    {
      feature: "API Access",
      description: "Direct data integration with your existing systems and investment management platforms."
    },
    {
      feature: "Team Collaboration",
      description: "Share insights, reports, and analysis with team members and external partners."
    },
    {
      feature: "Historical Analysis",
      description: "Access to 20+ years of historical market data for trend analysis and backtesting."
    },
    {
      feature: "Export & Integration",
      description: "Export data and reports in multiple formats for external analysis and presentation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-subtle-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551334787-21e6bd041b74?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="font-primary text-5xl md:text-6xl font-semibold text-foreground mb-6">
              MARKET
              <br />
              <span className="bg-hero-gradient bg-clip-text text-transparent">INTELLIGENCE</span>
            </h1>
            <p className="font-secondary text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Advanced analytics, predictive modeling, and comprehensive market intelligence powered by AI and big data processing
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span>26M+ Data Points</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Real-Time Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Insights</span>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligence Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Intelligence Platform
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive suite of analytics tools and data products designed for real estate investment professionals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {intelligenceProducts.map((product, index) => (
                <Card key={index} className="overflow-hidden hover-lift transition-all duration-300 group">
                  <div className="aspect-video relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">{product.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-90">{product.users}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-primary text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">{product.pricing}</Badge>
                    </div>
                    
                    <p className="font-secondary text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="premium" className="w-full group/btn">
                      Explore Platform
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Data Coverage */}
            <Card className="p-8 bg-muted/30">
              <h3 className="font-primary text-2xl font-semibold text-foreground mb-6 text-center">
                Comprehensive Data Coverage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dataSources.map((source, index) => (
                  <div key={index} className="text-center p-6 bg-background rounded-lg">
                    <h4 className="font-accent font-medium text-foreground mb-2">{source.source}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Coverage:</span>
                        <span className="font-medium text-primary">{source.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Updates:</span>
                        <span className="font-medium">{source.updateFreq}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Points:</span>
                        <span className="font-medium">{source.dataPoints}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Analytics Capabilities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Advanced Analytics Capabilities
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology and sophisticated models delivering actionable insights for real estate investment decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsCapabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <Card key={index} className="p-8 hover-lift transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-primary text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {capability.title}
                        </h3>
                        <p className="font-secondary text-muted-foreground mb-4 leading-relaxed">
                          {capability.description}
                        </p>
                        <div className="space-y-2">
                          {capability.capabilities.map((cap, capIndex) => (
                            <div key={capIndex} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-muted-foreground">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Research Library */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Research Library
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive reports, market analysis, and research studies from our team of experts and industry specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {reportLibrary.map((report, index) => (
                <Card key={index} className="p-6 hover-lift transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-xs">{report.type}</Badge>
                    {report.premium && <Badge variant="default" className="text-xs">Premium</Badge>}
                  </div>
                  
                  <h3 className="font-primary text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {report.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{report.date}</span>
                    <span>{report.pages} pages</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Download className="w-3 h-3" />
                      <span>{report.downloads} downloads</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Download
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="premium" size="lg" className="group">
                Access Full Research Library
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold mb-4">
                Platform Features
              </h2>
              <p className="font-secondary text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Powerful tools and capabilities designed to enhance your real estate investment workflow and decision-making process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-accent font-medium text-lg">{feature.feature}</h3>
                  <p className="font-secondary text-sm text-primary-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="elegant" size="lg" className="group">
                Start Free Trial
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

export default Intelligence;