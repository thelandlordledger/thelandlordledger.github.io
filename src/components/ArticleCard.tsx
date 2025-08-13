import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FallbackImage } from '@/components/FallbackImage';
import { SocialShare } from '@/components/SocialShare';
import { 
  Clock, 
  Eye, 
  Calendar, 
  User, 
  ArrowRight,
  Share2
} from 'lucide-react';
import { generateArticleUrl, generateCanonicalUrl, formatArticleDate, generateArticleDescription } from '@/utils/articleUtils';

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
  published_date?: string;
  image_url?: string;
  read_time?: number;
  metric_value?: string;
  slug?: string;
}

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
  showShare?: boolean;
}

export function ArticleCard({ article, variant = 'default', showShare = false }: ArticleCardProps) {
  const articleUrl = generateArticleUrl(article);
  const canonicalUrl = generateCanonicalUrl(article);
  const description = generateArticleDescription(article);
  
  if (variant === 'compact') {
    return (
      <Card className="p-4 hover-lift transition-all duration-300">
        <div className="flex gap-4">
          {article.image_url && (
            <div className="w-20 h-20 flex-shrink-0">
              <FallbackImage
                src={article.image_url}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <Badge variant="outline" className="mb-2 text-xs">
              {article.category}
            </Badge>
            <h3 className="font-accent text-sm font-medium text-foreground line-clamp-2 mb-2">
              <Link to={articleUrl} className="hover:text-primary transition-colors">
                {article.title}
              </Link>
            </h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.read_time || 5}m
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {article.view_count}
              </span>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden hover-lift transition-all duration-300 group lg:col-span-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="aspect-video lg:aspect-auto relative">
            <FallbackImage
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
                Featured
              </Badge>
            </div>
          </div>
          <div className="p-8">
            <Badge variant="outline" className="mb-4">
              {article.category}
            </Badge>
            <h3 className="font-primary text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-3">
              <Link to={articleUrl}>
                {article.title}
              </Link>
            </h3>
            {article.subtitle && (
              <p className="font-secondary text-muted-foreground mb-4 line-clamp-2">
                {article.subtitle}
              </p>
            )}
            
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author_name || 'Expert Analysis'}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatArticleDate(article.published_date || article.created_at)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.read_time || 5} min
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {article.view_count} views
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="group/btn flex-1 justify-between hover:bg-primary/10 hover:text-primary transition-all"
                asChild
              >
                <Link to={articleUrl}>
                  <span>Read Full Analysis</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              {showShare && (
                <SocialShare 
                  title={article.title}
                  url={canonicalUrl}
                  description={description}
                  className="px-3"
                />
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className="overflow-hidden hover-lift transition-all duration-300 group">
      <div className="aspect-video relative">
        <FallbackImage
          src={article.image_url}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {article.category}
          </Badge>
        </div>
        {article.metric_value && (
          <div className="absolute top-4 right-4">
            <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
              {article.metric_value}
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-primary text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          <Link to={articleUrl}>
            {article.title}
          </Link>
        </h3>
        
        {article.subtitle && (
          <p className="font-secondary text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {article.subtitle}
          </p>
        )}
        
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {article.author_name || 'Expert'}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.read_time || 5}m
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {article.view_count}
          </span>
        </div>
        
        {/* CTA */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="group/btn flex-1 justify-between hover:bg-primary/10 hover:text-primary transition-all"
            asChild
          >
            <Link to={articleUrl}>
              <span>Read Analysis</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          {showShare && (
            <SocialShare 
              title={article.title}
              url={canonicalUrl}
              description={description}
              className="px-3"
            />
          )}
        </div>
      </div>
    </Card>
  );
}