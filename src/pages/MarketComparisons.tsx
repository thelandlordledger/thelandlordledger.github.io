import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  Filter, 
  Globe, 
  Building, 
  ArrowUpDown,
  Target,
  Zap,
  DollarSign,
  Activity,
  MapPin,
  Calendar
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useMarketTrends } from "@/hooks/useMarketTrends";

interface MarketComparison {
  id: string;
  title: string;
  description: string | null;
  comparison_type: string;
  comparison_data: any;
  region_id: string | null;
  country_id: string | null;
  sector_id: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const MarketComparisons = () => {
  const [comparisons, setComparisons] = useState<MarketComparison[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedSector, setSelectedSector] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // Use market trends hook for taxonomy data
  const {
    regions,
    sectors,
    loading: taxonomyLoading
  } = useMarketTrends();

  // Fetch market comparisons from database
  const fetchComparisons = async () => {
    try {
      let query = supabase
        .from('snapshot_market_comparisons')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      // Apply filters if selected
      if (selectedRegion !== "all") {
        const region = regions.find(r => r.slug === selectedRegion);
        if (region) {
          query = query.eq('region_id', region.id);
        }
      }

      if (selectedSector !== "all") {
        const sector = sectors.find(s => s.slug === selectedSector);
        if (sector) {
          query = query.eq('sector_id', sector.id);
        }
      }

      if (selectedType !== "all") {
        query = query.eq('comparison_type', selectedType);
      }

      const { data, error } = await query;

      if (error) throw error;
      setComparisons(data || []);
    } catch (error) {
      console.error('Error fetching market comparisons:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!taxonomyLoading && regions.length > 0) {
      fetchComparisons();
    }
  }, [selectedRegion, selectedSector, selectedType, taxonomyLoading, regions, sectors]);

  // Get comparison type icon
  const getComparisonTypeIcon = (type: string) => {
    switch (type) {
      case 'regional': return Globe;
      case 'sector': return Building;
      case 'performance': return TrendingUp;
      case 'pricing': return DollarSign;
      case 'yield': return Target;
      default: return BarChart3;
    }
  };

  // Render comparison data visualization
  const renderComparisonData = (comparison: MarketComparison) => {
    const data = comparison.comparison_data;
    
    if (!data || typeof data !== 'object') {
      return <p className="text-muted-foreground">No comparison data available</p>;
    }

    // Handle different comparison types
    switch (comparison.comparison_type) {
      case 'regional':
        return renderRegionalComparison(data);
      case 'sector':
        return renderSectorComparison(data);
      case 'performance':
        return renderPerformanceComparison(data);
      case 'pricing':
        return renderPricingComparison(data);
      default:
        return renderGenericComparison(data);
    }
  };

  const renderRegionalComparison = (data: any) => {
    if (data.markets && Array.isArray(data.markets)) {
      return (
        <div className="space-y-4">
          {data.markets.map((market: any, index: number) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <h4 className="font-semibold">{market.name}</h4>
                  <p className="text-sm text-muted-foreground">{market.region}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">{market.value}</div>
                <div className={`text-sm flex items-center gap-1 ${
                  market.change && market.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {market.change && market.change.startsWith('+') ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {market.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return renderGenericComparison(data);
  };

  const renderSectorComparison = (data: any) => {
    if (data.sectors && Array.isArray(data.sectors)) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.sectors.map((sector: any, index: number) => (
            <div key={index} className="p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Building className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">{sector.name}</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Performance</span>
                  <span className="font-medium">{sector.performance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Volume</span>
                  <span className="font-medium">{sector.volume}</span>
                </div>
                {sector.outlook && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Outlook</span>
                    <Badge variant={sector.outlook === 'positive' ? 'default' : 'secondary'}>
                      {sector.outlook}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
    return renderGenericComparison(data);
  };

  const renderPerformanceComparison = (data: any) => {
    if (data.metrics && Array.isArray(data.metrics)) {
      return (
        <div className="space-y-3">
          {data.metrics.map((metric: any, index: number) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="font-medium">{metric.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold">{metric.value}</span>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {metric.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return renderGenericComparison(data);
  };

  const renderPricingComparison = (data: any) => {
    if (data.pricing && Array.isArray(data.pricing)) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.pricing.map((item: any, index: number) => (
            <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
              <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">{item.location}</h4>
              <div className="text-2xl font-bold text-primary mb-1">{item.price}</div>
              <div className="text-sm text-muted-foreground">{item.metric}</div>
              {item.change && (
                <div className={`text-sm mt-1 ${
                  item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
    return renderGenericComparison(data);
  };

  const renderGenericComparison = (data: any) => {
    return (
      <div className="bg-muted/30 rounded-lg p-4">
        <pre className="text-sm text-muted-foreground whitespace-pre-wrap overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
  };

  const comparisonTypes = [
    { value: "all", label: "All Types" },
    { value: "regional", label: "Regional" },
    { value: "sector", label: "Sector" },
    { value: "performance", label: "Performance" },
    { value: "pricing", label: "Pricing" },
    { value: "yield", label: "Yield Analysis" }
  ];

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-subtle-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
          <h1 className="font-primary text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 lg:mb-6">
            MARKET
            <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">COMPARISONS</span>
          </h1>
          <p className="font-secondary text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 lg:mb-8 leading-relaxed">
            Side-by-side analysis of real estate markets, sectors, and performance metrics to identify opportunities and optimize investment strategies
          </p>
          
          {/* Stats Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
              <ArrowUpDown className="w-4 h-4 text-primary" />
              <span className="font-accent text-sm font-medium text-foreground">Cross-Market Analysis</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="font-accent text-sm font-medium text-foreground">Performance Metrics</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
              <Target className="w-4 h-4 text-primary" />
              <span className="font-accent text-sm font-medium text-foreground">Investment Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">Filter Comparisons:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Comparison Type" />
                </SelectTrigger>
                <SelectContent>
                  {comparisonTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map(region => (
                    <SelectItem key={region.id} value={region.slug}>
                      {region.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  {sectors.map(sector => (
                    <SelectItem key={sector.id} value={sector.slug}>
                      {sector.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          {loading ? (
            // Loading skeletons
            <div className="space-y-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                      <Skeleton className="h-10 w-16" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-64 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : comparisons.length === 0 ? (
            <div className="text-center py-16">
              <ArrowUpDown className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Comparisons Available</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Market comparison data will appear here once it's been added to the database. 
                Try adjusting your filters or check back later.
              </p>
            </div>
          ) : (
            // Comparisons grid
            <div className="space-y-8">
              {comparisons.map((comparison) => {
                const IconComponent = getComparisonTypeIcon(comparison.comparison_type);
                
                return (
                  <Card key={comparison.id} className="overflow-hidden hover-lift transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-5 w-5 text-primary" />
                            <Badge variant="outline" className="capitalize">
                              {comparison.comparison_type}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {comparison.title}
                          </CardTitle>
                          {comparison.description && (
                            <p className="text-muted-foreground leading-relaxed">
                              {comparison.description}
                            </p>
                          )}
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(comparison.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {renderComparisonData(comparison)}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketComparisons;