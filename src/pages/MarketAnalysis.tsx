import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  TrendingUp, 
  Target, 
  FileText, 
  Newspaper, 
  User
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
  { value: "Market", label: "Market Trends", icon: TrendingUp },
  { value: "Transaction", label: "Key Deals", icon: Target },
  { value: "Strategy", label: "Investment Strategy", icon: FileText },
  { value: "Profile", label: "Profile", icon: User },
  { value: "News", label: "News", icon: Newspaper },
];

export default function MarketAnalysis() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

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
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
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
              <div key={i} className="overflow-hidden rounded-lg border bg-card">
                <div className="h-48 bg-muted animate-pulse"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-1/2"></div>
                </div>
              </div>
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
            {filteredArticles.map((article) => (
              <ArticleCard 
                key={article.id}
                article={article}
                variant="default"
                showShare={false}
              />
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}