import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  Search, 
  Plus, 
  Edit, 
  Eye, 
  Trash2, 
  TrendingUp, 
  FileText, 
  Target,
  Newspaper,
  Star,
  Clock,
  User,
  Calendar
} from 'lucide-react';

// Content types with their icons and colors
const contentTypes = [
  { name: 'Market Trends', slug: 'market-trends', icon: TrendingUp, color: 'bg-blue-100 text-blue-800' },
  { name: 'Key Deals', slug: 'key-deals', icon: Target, color: 'bg-green-100 text-green-800' },
  { name: 'Investment Strategy', slug: 'investment-strategy', icon: FileText, color: 'bg-purple-100 text-purple-800' },
  { name: 'News', slug: 'news', icon: Newspaper, color: 'bg-orange-100 text-orange-800' },
];

interface Article {
  id: string;
  title: string;
  subtitle?: string;
  content?: string;
  category: string;
  author_name?: string;
  published: boolean;
  featured: boolean;
  featured_order?: number;
  view_count: number;
  excerpt?: string;
  created_at: string;
  updated_at: string;
  slug?: string;
}

interface CategoryCount {
  category: string;
  count: number;
}

export const ContentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [articles, setArticles] = useState<Article[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<CategoryCount[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [newArticle, setNewArticle] = useState({
    title: "",
    subtitle: "",
    content: "",
    category: "",
    author_name: "",
    excerpt: "",
    published: false,
    featured: false
  });
  const { toast } = useToast();

  // Fetch articles from Supabase
  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
      toast({
        title: "Error",
        description: "Failed to fetch articles",
        variant: "destructive"
      });
    }
  };

  // Fetch category counts
  const fetchCategoryCounts = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('category')
        .eq('published', true);

      if (error) throw error;

      const counts = contentTypes.map(type => ({
        category: type.name,
        count: data?.filter(article => article.category === type.name).length || 0
      }));

      setCategoryCounts(counts);
    } catch (error) {
      console.error('Error fetching category counts:', error);
    }
  };

  // Toggle featured status
  const toggleFeatured = async (articleId: string, currentFeatured: boolean) => {
    try {
      const { error } = await supabase
        .from('articles')
        .update({ featured: !currentFeatured })
        .eq('id', articleId);

      if (error) throw error;

      await fetchArticles();
      toast({
        title: "Success",
        description: `Article ${!currentFeatured ? 'added to' : 'removed from'} featured articles`,
      });
    } catch (error: any) {
      console.error('Error updating featured status:', error);
      toast({
        title: "Error",
        description: error.message?.includes('more than 9') 
          ? "Cannot have more than 9 featured articles"
          : "Failed to update featured status",
        variant: "destructive"
      });
    }
  };

  // Delete article
  const deleteArticle = async (articleId: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;

    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', articleId);

      if (error) throw error;

      await fetchArticles();
      await fetchCategoryCounts();
      toast({
        title: "Success",
        description: "Article deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting article:', error);
      toast({
        title: "Error",
        description: "Failed to delete article",
        variant: "destructive"
      });
    }
  };

  // Toggle published status
  const togglePublished = async (articleId: string, currentPublished: boolean) => {
    try {
      const { error } = await supabase
        .from('articles')
        .update({ published: !currentPublished })
        .eq('id', articleId);

      if (error) throw error;

      await fetchArticles();
      await fetchCategoryCounts();
      toast({
        title: "Success",
        description: `Article ${!currentPublished ? 'published' : 'unpublished'} successfully`,
      });
    } catch (error) {
      console.error('Error updating published status:', error);
      toast({
        title: "Error",
        description: "Failed to update published status",
        variant: "destructive"
      });
    }
  };

  // Reset form function
  const resetForm = () => {
    setNewArticle({
      title: "",
      subtitle: "",
      content: "",
      category: "",
      author_name: "",
      excerpt: "",
      published: false,
      featured: false
    });
    setEditingArticle(null);
  };

  // Save article function
  const handleSaveArticle = async () => {
    if (!newArticle.title || !newArticle.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const articleData = {
        ...newArticle,
        content: newArticle.content || null,
        subtitle: newArticle.subtitle || null,
        author_name: newArticle.author_name || null,
        excerpt: newArticle.excerpt || null
      };

      if (editingArticle) {
        const { error } = await supabase
          .from('articles')
          .update(articleData)
          .eq('id', editingArticle.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Article updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('articles')
          .insert([articleData]);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Article created successfully"
        });
      }

      await fetchArticles();
      await fetchCategoryCounts();
      setIsDialogOpen(false);
      resetForm();
    } catch (error: any) {
      console.error('Error saving article:', error);
      toast({
        title: "Error",
        description: error.message?.includes('more than 9') 
          ? "Cannot have more than 9 featured articles"
          : "Failed to save article",
        variant: "destructive"
      });
    }
  };

  // Handle edit article
  const handleEditArticle = (article: Article) => {
    setNewArticle({
      title: article.title,
      subtitle: article.subtitle || "",
      content: article.content || "",
      category: article.category,
      author_name: article.author_name || "",
      excerpt: article.excerpt || "",
      published: article.published,
      featured: article.featured
    });
    setEditingArticle(article);
    setIsDialogOpen(true);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchArticles(), fetchCategoryCounts()]);
      setLoading(false);
    };
    loadData();
  }, []);

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author_name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get category count for display
  const getCategoryCount = (categoryName: string) => {
    return categoryCounts.find(c => c.category === categoryName)?.count || 0;
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center py-12">
          <Clock className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content Management</h1>
          <p className="text-muted-foreground">
            Manage your real estate articles and featured content
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={resetForm}>
              <Plus className="h-4 w-4" />
              Create Article
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingArticle ? 'Edit Article' : 'Create New Article'}</DialogTitle>
              <DialogDescription>
                {editingArticle ? 'Update the article details' : 'Create a new article for your real estate platform'}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({...newArticle, title: e.target.value})}
                  placeholder="Enter article title"
                />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={newArticle.subtitle}
                  onChange={(e) => setNewArticle({...newArticle, subtitle: e.target.value})}
                  placeholder="Enter article subtitle"
                />
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <Select 
                  value={newArticle.category} 
                  onValueChange={(value) => setNewArticle({...newArticle, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type.name} value={type.name}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="author">Author Name</Label>
                <Input
                  id="author"
                  value={newArticle.author_name}
                  onChange={(e) => setNewArticle({...newArticle, author_name: e.target.value})}
                  placeholder="Enter author name"
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={newArticle.excerpt}
                  onChange={(e) => setNewArticle({...newArticle, excerpt: e.target.value})}
                  placeholder="Enter a brief excerpt for the article"
                  rows={3}
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={newArticle.content}
                  onChange={(e) => setNewArticle({...newArticle, content: e.target.value})}
                  placeholder="Enter the full article content"
                  rows={8}
                />
              </div>

              <div className="col-span-2 flex gap-6">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={newArticle.published}
                    onCheckedChange={(checked) => setNewArticle({...newArticle, published: checked})}
                  />
                  <Label>Published</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={newArticle.featured}
                    onCheckedChange={(checked) => setNewArticle({...newArticle, featured: checked})}
                    disabled={!newArticle.published}
                  />
                  <Label>Featured</Label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveArticle}>
                {editingArticle ? 'Update Article' : 'Create Article'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Content Type Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contentTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Card key={type.slug} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold text-sm">{type.name}</h3>
                <p className="text-2xl font-bold text-primary mt-1">
                  {getCategoryCount(type.name)}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Featured Articles Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Featured Articles
          </CardTitle>
          <CardDescription>
            {articles.filter(a => a.featured).length} of 9 slots used for homepage featured articles
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                {contentTypes.map((type) => (
                  <TabsTrigger key={type.slug} value={type.name}>
                    {type.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
      </Card>

      {/* Articles List */}
      <Card>
        <CardHeader>
          <CardTitle>Articles Library</CardTitle>
          <CardDescription>
            {filteredArticles.length} articles found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No articles found matching your criteria</p>
              </div>
            ) : (
              filteredArticles.map((article) => (
                <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">{article.title}</h3>
                      <Badge variant={article.published ? "default" : "secondary"}>
                        {article.published ? "Published" : "Draft"}
                      </Badge>
                      {article.featured && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline">
                        {article.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author_name || 'Unknown Author'}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.created_at).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {article.view_count} views
                      </div>
                    </div>
                    {article.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Featured</span>
                      <Switch
                        checked={article.featured}
                        onCheckedChange={() => toggleFeatured(article.id, article.featured)}
                        disabled={!article.published}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Published</span>
                      <Switch
                        checked={article.published}
                        onCheckedChange={() => togglePublished(article.id, article.published)}
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" onClick={() => handleEditArticle(article)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-destructive hover:text-destructive"
                        onClick={() => deleteArticle(article.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};