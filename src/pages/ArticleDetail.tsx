import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  Eye, 
  Calendar, 
  User, 
  ArrowLeft,
  Share2,
  BookOpen
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

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
  updated_at: string;
  image_url?: string;
  read_time?: number;
  metric_value?: string;
  slug?: string;
}

export default function ArticleDetail() {
  const { slugOrId } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Fetch article from Supabase
  const fetchArticle = async () => {
    if (!slugOrId) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    try {
      // Try to fetch by slug first, then by ID
      let query = supabase
        .from('articles')
        .select('*')
        .eq('published', true);

      // Check if slugOrId looks like a UUID
      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slugOrId);
      
      if (isUUID) {
        query = query.eq('id', slugOrId);
      } else {
        query = query.eq('slug', slugOrId);
      }

      const { data, error } = await query.single();

      if (error || !data) {
        setNotFound(true);
      } else {
        setArticle(data);
        // Increment view count
        await supabase
          .from('articles')
          .update({ view_count: (data.view_count || 0) + 1 })
          .eq('id', data.id);
      }
    } catch (error) {
      console.error('Error fetching article:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [slugOrId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-28">
        <Header />
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-64 bg-muted rounded"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="min-h-screen bg-background pt-28">
        <Header />
        <main className="container mx-auto px-6 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-6 opacity-50" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/market-analysis">Browse All Articles</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Go Home</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/market-analysis">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Articles
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <div className="space-y-6 mb-12">
            {/* Category Badge */}
            <div>
              <Badge variant="outline" className="mb-4">
                {article.category}
              </Badge>
            </div>

            {/* Title and Subtitle */}
            <div>
              <h1 className="font-primary text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {article.title}
              </h1>
              {article.subtitle && (
                <p className="font-secondary text-xl text-primary font-medium">
                  {article.subtitle}
                </p>
              )}
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author_name || 'Expert Analysis'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.read_time ? `${article.read_time} min read` : '5 min read'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{article.view_count} views</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          {article.image_url && (
            <div className="mb-12">
              <img 
                src={article.image_url} 
                alt={article.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          <Separator className="my-12" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {article.content ? (
              <div className="whitespace-pre-wrap leading-relaxed text-foreground">
                {article.content}
              </div>
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Article content is not available.</p>
              </div>
            )}
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date(article.updated_at).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" asChild>
                  <Link to="/market-analysis">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    More Articles
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/">
                    Explore Platform
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}