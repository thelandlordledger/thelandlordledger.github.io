import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Clock, 
  TrendingUp, 
  Target, 
  FileText, 
  Newspaper, 
  Eye,
  Calendar,
  User,
  ArrowRight
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  id: string;
  title: string;
  subtitle?: string;
  content?: string;
  category: string;
  author_name?: string;
  view_count: number;
  excerpt?: string;
  created_at: string;
  image_url?: string;
  read_time?: number;
  metric_value?: string;
  slug?: string;
}

const categoryTabs = [
  { value: "all", label: "All Articles", icon: FileText },
  { value: "Market Trends", label: "Market Trends", icon: TrendingUp },
  { value: "Key Deals", label: "Key Deals", icon: Target },
  { value: "Investment Strategy", label: "Investment Strategy", icon: FileText },
  { value: "News", label: "News", icon: Newspaper },
];

export default function MarketAnalysis() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

  // Category to icon mapping
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Market Trends': return TrendingUp;
      case 'Key Deals': return Target;
      case 'Investment Strategy': return FileText;
      case 'News': return Newspaper;
      default: return FileText;
    }
  };

  // Fetch articles from Supabase
  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    
    setSearchParams(params, { replace: true });
  }, [searchTerm, selectedCategory, setSearchParams]);

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author_name?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-primary text-4xl md:text-5xl font-bold text-foreground mb-4">
            Market Analysis & Insights
          </h1>
          <p className="font-secondary text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis and expert insights on real estate markets, investment strategies, and key deals shaping the industry.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              {categoryTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger key={tab.value} value={tab.value} className="text-xs md:text-sm">
                    <Icon className="h-4 w-4 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-muted-foreground text-center">
            {loading ? 'Loading articles...' : `${filteredArticles.length} articles found`}
          </p>
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-muted animate-pulse"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-1/2"></div>
                </div>
              </Card>
            ))}
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Articles Found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {searchTerm || selectedCategory !== 'all' 
                ? 'No articles match your current filters. Try adjusting your search or category selection.'
                : 'No published articles are available at the moment.'
              }
            </p>
            {(searchTerm || selectedCategory !== 'all') && (
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const IconComponent = getCategoryIcon(article.category);
              
              return (
                <Card 
                  key={article.id}
                  className="group overflow-hidden border-0 bg-gradient-to-br from-background via-background/90 to-primary/5 backdrop-blur-sm hover-lift hover:shadow-glow transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={article.image_url || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    
                    {/* Floating Category */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-accent font-medium rounded-full">
                      {article.category}
                    </div>
                    
                    {/* Floating Metric */}
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="font-accent font-bold text-sm text-foreground">
                          {article.metric_value || `${article.view_count} views`}
                        </span>
                      </div>
                    </div>
                    
                    {/* Reading Time */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs text-background bg-foreground/80 px-2 py-1 rounded-full backdrop-blur-sm">
                      <Clock className="w-3 h-3" />
                      {article.read_time ? `${article.read_time} min` : '5 min'}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Headlines */}
                    <div>
                      <h3 className="font-primary text-xl font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h3>
                      <h4 className="font-secondary text-sm text-primary font-medium mb-3 line-clamp-2">
                        {article.subtitle || 'Expert analysis and market insights'}
                      </h4>
                    </div>
                    
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author_name || 'Expert Analysis'}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.created_at).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {article.view_count}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="font-secondary text-muted-foreground leading-relaxed text-sm line-clamp-3">
                      {article.excerpt || article.content?.substring(0, 150) + '...' || 'In-depth analysis providing actionable insights for sophisticated investors.'}
                    </p>
                    
                    {/* CTA */}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group/btn w-full justify-between hover:bg-primary/10 hover:text-primary transition-all"
                      asChild
                    >
                      <Link to={`/article/${article.slug || article.id}`}>
                        <span>Read Full Analysis</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}