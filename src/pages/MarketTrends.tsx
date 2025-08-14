import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, ArrowRight, Calendar, BarChart3, Globe, Building, Filter, Target, PieChart, Activity, DollarSign } from "lucide-react";

const MarketTrends = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedSector, setSelectorSector] = useState("all");
  const [selectedSubSector, setSelectedSubSector] = useState("all");

  const regions = [
    { value: "all", label: "All Regions" },
    { value: "north-america", label: "North America" },
    { value: "europe", label: "Europe" },
    { value: "asia-pacific", label: "Asia Pacific" },
    { value: "middle-east", label: "Middle East" },
    { value: "latin-america", label: "Latin America" },
    { value: "africa", label: "Africa" },
    { value: "global", label: "Global" }
  ];

  const sectors = [
    { value: "all", label: "All Sectors" },
    { value: "commercial", label: "Commercial" },
    { value: "residential", label: "Residential" },
    { value: "mixed-use", label: "Mixed-Use" }
  ];

  const subSectors = [
    { value: "all", label: "All Sub-Sectors" },
    { value: "office", label: "Office" },
    { value: "industrial", label: "Industrial" },
    { value: "retail", label: "Retail" },
    { value: "hospitality", label: "Hospitality" },
    { value: "healthcare", label: "Healthcare" },
    { value: "multifamily", label: "Multifamily" },
    { value: "single-family", label: "Single Family" },
    { value: "student-housing", label: "Student Housing" },
    { value: "senior-housing", label: "Senior Housing" },
    { value: "mixed-use-development", label: "Mixed-Use Development" },
    { value: "live-work", label: "Live-Work" }
  ];

  const marketMetrics = [
    {
      title: "Global Transaction Volume",
      value: "$2.1T",
      change: "+12.3%",
      trend: "up",
      description: "YoY commercial real estate investment volume"
    },
    {
      title: "Average Cap Rates",
      value: "6.8%",
      change: "+0.3%",
      trend: "up",
      description: "Weighted average across all asset classes"
    },
    {
      title: "Vacancy Rates",
      value: "9.2%",
      change: "-1.1%",
      trend: "down",
      description: "Commercial properties market-wide"
    },
    {
      title: "Price Per SF",
      value: "$312",
      change: "+8.7%",
      trend: "up",
      description: "Average across major markets"
    }
  ];

  const regionalTrends = [
    {
      region: "North America",
      regionCode: "north-america",
      markets: [
        {
          city: "New York, NY",
          country: "USA",
          change: "+5.2%",
          trend: "up",
          price: "$1,245/sf",
          volume: "$89.2B",
          topSector: "Office",
          image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&q=80"
        },
        {
          city: "Los Angeles, CA",
          country: "USA",
          change: "+3.8%",
          trend: "up",
          price: "$892/sf",
          volume: "$45.1B",
          topSector: "Multifamily",
          image: "https://images.unsplash.com/photo-1444723121441-7a8b7de03dad?w=800&q=80"
        },
        {
          city: "Toronto, ON",
          country: "Canada",
          change: "+7.1%",
          trend: "up",
          price: "$615/sf",
          volume: "$23.7B",
          topSector: "Industrial",
          image: "https://images.unsplash.com/photo-1517391494239-8dd95b4e0da9?w=800&q=80"
        }
      ]
    },
    {
      region: "Europe", 
      regionCode: "europe",
      markets: [
        {
          city: "London, UK",
          country: "United Kingdom",
          change: "+2.4%",
          trend: "up",
          price: "$1,156/sf",
          volume: "$34.8B",
          topSector: "Office",
          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
        },
        {
          city: "Paris, France",
          country: "France",
          change: "+4.1%",
          trend: "up",
          price: "$978/sf",
          volume: "$28.3B",
          topSector: "Retail",
          image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&q=80"
        },
        {
          city: "Berlin, Germany",
          country: "Germany",
          change: "+6.8%",
          trend: "up",
          price: "$567/sf",
          volume: "$19.2B",
          topSector: "Multifamily",
          image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=800&q=80"
        }
      ]
    },
    {
      region: "Asia Pacific",
      regionCode: "asia-pacific", 
      markets: [
        {
          city: "Tokyo, Japan",
          country: "Japan",
          change: "+1.8%",
          trend: "up",
          price: "$1,034/sf",
          volume: "$41.5B",
          topSector: "Office",
          image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80"
        },
        {
          city: "Singapore",
          country: "Singapore",
          change: "+9.3%",
          trend: "up",
          price: "$1,287/sf",
          volume: "$15.7B",
          topSector: "Industrial",
          image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80"
        },
        {
          city: "Sydney, Australia",
          country: "Australia",
          change: "+3.7%",
          trend: "up",
          price: "$789/sf",
          volume: "$22.1B",
          topSector: "Retail",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        }
      ]
    }
  ];

  const sectorPerformance = [
    {
      sector: "Office",
      performance: "+4.2%",
      trend: "up",
      volume: "$387B",
      avgCapRate: "6.2%",
      outlook: "Positive",
      description: "Flight to quality driving premium office demand",
      topMarkets: ["New York", "London", "Tokyo"],
      color: "blue"
    },
    {
      sector: "Industrial",
      performance: "+12.8%",
      trend: "up", 
      volume: "$245B",
      avgCapRate: "5.8%",
      outlook: "Very Positive",
      description: "E-commerce and supply chain driving strong fundamentals",
      topMarkets: ["Los Angeles", "Singapore", "Frankfurt"],
      color: "green"
    },
    {
      sector: "Retail",
      performance: "+2.1%",
      trend: "up",
      volume: "$156B",
      avgCapRate: "7.1%",
      outlook: "Selective",
      description: "Experiential retail and necessity-based formats leading",
      topMarkets: ["Paris", "Sydney", "Dubai"],
      color: "purple"
    },
    {
      sector: "Multifamily",
      performance: "+8.9%",
      trend: "up",
      volume: "$198B",
      avgCapRate: "5.2%",
      outlook: "Positive",
      description: "Housing shortage supporting rental fundamentals",
      topMarkets: ["Los Angeles", "Berlin", "Vancouver"],
      color: "orange"
    },
    {
      sector: "Healthcare",
      performance: "+6.4%",
      trend: "up",
      volume: "$89B",
      avgCapRate: "6.8%",
      outlook: "Positive",
      description: "Aging demographics driving medical real estate demand",
      topMarkets: ["Chicago", "Munich", "Melbourne"],
      color: "red"
    },
    {
      sector: "Student Housing",
      performance: "+5.7%",
      trend: "up",
      volume: "$34B",
      avgCapRate: "5.9%",
      outlook: "Stable",
      description: "University expansion supporting purpose-built demand",
      topMarkets: ["Boston", "Oxford", "Melbourne"],
      color: "indigo"
    }
  ];

  const investmentOpportunities = [
    {
      title: "Industrial Last-Mile Logistics",
      region: "North America",
      sector: "Industrial",
      riskLevel: "Low",
      targetReturn: "8-12%",
      timeHorizon: "5-7 years",
      investmentSize: "$50M - $500M",
      description: "Prime urban infill logistics facilities serving e-commerce distribution",
      keyDrivers: ["E-commerce growth", "Same-day delivery", "Urban densification"],
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80"
    },
    {
      title: "European Data Centers",
      region: "Europe",
      sector: "Industrial",
      riskLevel: "Medium",
      targetReturn: "12-18%",
      timeHorizon: "7-10 years",
      investmentSize: "$100M - $1B",
      description: "Hyperscale data centers in key European connectivity hubs",
      keyDrivers: ["Digital transformation", "Cloud migration", "5G rollout"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
      title: "Asia Pacific Build-to-Rent",
      region: "Asia Pacific",
      sector: "Residential",
      riskLevel: "Medium-High",
      targetReturn: "15-22%",
      timeHorizon: "4-6 years",
      investmentSize: "$25M - $250M",
      description: "Institutional-quality rental communities in high-growth Asian cities",
      keyDrivers: ["Urbanization", "Rental culture shift", "Institutional adoption"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
    }
  ];

  const filteredRegions = selectedRegion === "all" ? regionalTrends : regionalTrends.filter(r => r.regionCode === selectedRegion);
  const filteredSectors = selectedSector === "all" ? sectorPerformance : sectorPerformance.filter(s => s.sector.toLowerCase().replace(/\s+/g, '-') === selectedSector);
  const filteredOpportunities = investmentOpportunities.filter(opp => {
    const regionMatch = selectedRegion === "all" || opp.region.toLowerCase().replace(/\s+/g, '-') === selectedRegion;
    const sectorMatch = selectedSector === "all" || opp.sector.toLowerCase() === selectedSector;
    return regionMatch && sectorMatch;
  });


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-subtle-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="font-primary text-5xl md:text-6xl font-semibold text-foreground mb-6">
              GLOBAL MARKET
              <br />
              <span className="bg-hero-gradient bg-clip-text text-transparent">INTELLIGENCE</span>
            </h1>
            <p className="font-secondary text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive analysis of commercial real estate trends, investment opportunities, and market dynamics across global markets
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Updated December 15, 2024</span>
            </div>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="py-8 bg-muted/30 border-b">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="font-primary text-lg font-semibold text-foreground">Market Filters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Region</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region.value} value={region.value}>
                        {region.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Sector</label>
                <Select value={selectedSector} onValueChange={setSelectorSector}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector.value} value={sector.value}>
                        {sector.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Sub-Sector</label>
                <Select value={selectedSubSector} onValueChange={setSelectedSubSector}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sub-sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {subSectors.map((subSector) => (
                      <SelectItem key={subSector.value} value={subSector.value}>
                        {subSector.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Market Metrics Dashboard */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Global Market Metrics
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Key performance indicators across international commercial real estate markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {marketMetrics.map((metric, index) => {
                const isPositive = metric.trend === "up";
                return (
                  <Card key={index} className="p-6 hover-lift transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {index === 0 && <DollarSign className="w-6 h-6 text-primary" />}
                        {index === 1 && <Target className="w-6 h-6 text-primary" />}
                        {index === 2 && <Activity className="w-6 h-6 text-primary" />}
                        {index === 3 && <PieChart className="w-6 h-6 text-primary" />}
                      </div>
                      <div className={`flex items-center gap-1 ${isPositive ? 'text-primary' : 'text-destructive'}`}>
                        {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span className="text-sm font-medium">{metric.change}</span>
                      </div>
                    </div>
                    <h3 className="font-primary text-2xl font-bold text-foreground mb-1">{metric.value}</h3>
                    <h4 className="font-accent font-medium text-foreground mb-2">{metric.title}</h4>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Regional Market Analysis */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Regional Market Analysis
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Detailed insights into key metropolitan markets worldwide
              </p>
            </div>

            {filteredRegions.map((regionData, regionIndex) => (
              <div key={regionIndex} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="font-primary text-2xl font-semibold text-foreground">{regionData.region}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {regionData.markets.map((market, marketIndex) => {
                    const isPositive = market.trend === "up";
                    return (
                      <Card key={marketIndex} className="overflow-hidden hover-lift transition-all duration-300 group">
                        <div className="aspect-video relative">
                          <img 
                            src={market.image} 
                            alt={market.city}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h4 className="font-primary text-lg font-semibold mb-1">{market.city}</h4>
                            <p className="text-sm opacity-90">{market.country}</p>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-white/20 text-white border-white/30">
                              {market.topSector}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                {isPositive ? <TrendingUp className="w-4 h-4 text-primary" /> : <TrendingDown className="w-4 h-4 text-destructive" />}
                                <span className={`font-primary text-lg font-bold ${isPositive ? 'text-primary' : 'text-destructive'}`}>
                                  {market.change}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground">Price Change</p>
                            </div>
                            <div>
                              <div className="font-primary text-lg font-semibold text-foreground">{market.price}</div>
                              <p className="text-xs text-muted-foreground">Price/SF</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Volume:</span>
                            <span className="font-medium">{market.volume}</span>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sector Performance */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Sector Performance Analysis
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive outlook across commercial real estate asset classes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSectors.map((sector, index) => {
                const isPositive = sector.trend === "up";
                return (
                  <Card key={index} className="p-6 hover-lift transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Building className="w-6 h-6 text-primary" />
                        <h3 className="font-primary text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {sector.sector}
                        </h3>
                      </div>
                      <Badge 
                        variant={sector.outlook === "Very Positive" ? "default" : sector.outlook === "Positive" ? "secondary" : "outline"}
                        className="font-medium"
                      >
                        {sector.outlook}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                        {isPositive ? <TrendingUp className="w-5 h-5 text-primary" /> : <TrendingDown className="w-5 h-5 text-destructive" />}
                        <span className={`font-primary text-2xl font-bold ${isPositive ? 'text-primary' : 'text-destructive'}`}>
                          {sector.performance}
                        </span>
                        <span className="text-sm text-muted-foreground">YoY</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {sector.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/50">
                        <div>
                          <div className="font-primary text-lg font-semibold text-foreground">{sector.volume}</div>
                          <div className="text-xs text-muted-foreground">Transaction Volume</div>
                        </div>
                        <div>
                          <div className="font-primary text-lg font-semibold text-foreground">{sector.avgCapRate}</div>
                          <div className="text-xs text-muted-foreground">Avg Cap Rate</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wide">Top Markets:</h4>
                        <div className="flex flex-wrap gap-1">
                          {sector.topMarkets.map((market, marketIndex) => (
                            <span key={marketIndex} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded">
                              {market}
                            </span>
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

        {/* Investment Opportunities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Investment Opportunities
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic investment themes across global commercial real estate markets
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filteredOpportunities.map((opportunity, index) => (
                <Card key={index} className="overflow-hidden hover-lift transition-all duration-300 group">
                  <div className="aspect-video relative">
                    <img 
                      src={opportunity.image} 
                      alt={opportunity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-white/20 text-white border-white/30">
                          {opportunity.region}
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                          {opportunity.sector}
                        </Badge>
                      </div>
                      <h3 className="font-primary text-lg font-semibold">{opportunity.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {opportunity.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-t border-b border-border/50">
                      <div>
                        <div className="font-primary text-lg font-semibold text-primary">{opportunity.targetReturn}</div>
                        <div className="text-xs text-muted-foreground">Target Return</div>
                      </div>
                      <div>
                        <div className="font-primary text-sm font-medium text-foreground">{opportunity.timeHorizon}</div>
                        <div className="text-xs text-muted-foreground">Time Horizon</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-foreground uppercase tracking-wide">Investment Size:</span>
                        <Badge variant={opportunity.riskLevel === "Low" ? "secondary" : opportunity.riskLevel === "Medium" ? "outline" : "destructive"}>
                          {opportunity.riskLevel} Risk
                        </Badge>
                      </div>
                      <div className="font-primary text-sm font-semibold text-foreground">{opportunity.investmentSize}</div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wide">Key Drivers:</h4>
                      <div className="space-y-1">
                        {opportunity.keyDrivers.map((driver, driverIndex) => (
                          <div key={driverIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {driver}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="premium" size="lg" className="group">
                Explore More Opportunities
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