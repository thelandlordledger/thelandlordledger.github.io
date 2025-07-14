import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Target, FileText, Newspaper, BarChart3 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface FeaturedArticle {
  id: string;
  title: string;
  subtitle?: string;
  content?: string;
  category: string;
  author_name?: string;
  featured_order?: number;
  view_count: number;
  excerpt?: string;
  created_at: string;
  image_url?: string;
  read_time?: number;
  metric_value?: string;
  slug?: string;
}

export const FeaturedAnalysis = () => {
  const [featuredArticles, setFeaturedArticles] = useState<FeaturedArticle[]>([]);
  const [loading, setLoading] = useState(true);

  // Category to icon mapping
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Market Trends': return TrendingUp;
      case 'Key Deals': return Target;
      case 'Investment Strategy': return FileText;
      case 'News': return Newspaper;
      default: return BarChart3;
    }
  };

  // Fetch featured articles from Supabase
  const fetchFeaturedArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('featured', true)
        .eq('published', true)
        .order('featured_order', { ascending: true });

      if (error) throw error;
      setFeaturedArticles(data || []);
    } catch (error) {
      console.error('Error fetching featured articles:', error);
      // Fallback to empty array if there's an error
      setFeaturedArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedArticles();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <Clock className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading featured analysis...</p>
          </div>
        </div>
      </section>
    );
  }

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
        {featuredArticles.length === 0 ? (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Featured Articles Yet</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Featured articles will appear here once they are published and marked as featured in the admin panel.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.slice(0, 9).map((article) => {
              const IconComponent = getCategoryIcon(article.category);
              
              return (
                <Card 
                  key={article.id}
                  className="group overflow-hidden border-0 bg-gradient-to-br from-background via-background/90 to-primary/5 backdrop-blur-sm hover-lift hover:shadow-glow transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-64">
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
        
        {/* View All CTA */}
        <div className="text-center mt-16">
          <Button variant="premium" size="lg" className="group" asChild>
            <Link to="/market-analysis">
              View All Market Analysis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
};