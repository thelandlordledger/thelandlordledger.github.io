import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Image as ImageIcon, 
  Eye, 
  EyeOff,
  ChevronUp,
  ChevronDown,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CarouselSlide {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaUrl?: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const mockSlides: CarouselSlide[] = [
  {
    id: "1",
    title: "Secondary Market Analytics",
    subtitle: "Real Estate Intelligence",
    description: "Get comprehensive insights into secondary market trends and investment opportunities",
    imageUrl: "/lovable-uploads/3073533b-5f25-413c-962c-1e0463d705fd.png",
    ctaText: "Explore Analytics",
    ctaUrl: "/market-analysis",
    isActive: true,
    order: 1,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "2",
    title: "AI-Powered Market Research",
    subtitle: "Smart Insights",
    description: "Leverage artificial intelligence to discover market trends and investment strategies",
    imageUrl: "/lovable-uploads/a2a90567-f17c-4437-9cad-9f68e2885544.png",
    ctaText: "Try AI Chat",
    ctaUrl: "https://frondex.co",
    isActive: true,
    order: 2,
    createdAt: "2024-01-16T09:30:00Z",
    updatedAt: "2024-01-16T09:30:00Z"
  },
  {
    id: "3",
    title: "Exclusive Market Events",
    subtitle: "Network & Learn",
    description: "Join industry leaders at our exclusive real estate investment events and seminars",
    imageUrl: "/src/assets/secondary-markets-hero.jpg",
    ctaText: "View Events",
    ctaUrl: "/events",
    isActive: false,
    order: 3,
    createdAt: "2024-01-17T14:20:00Z",
    updatedAt: "2024-01-17T14:20:00Z"
  }
];

export const CarouselManagement = () => {
  const [slides, setSlides] = useState<CarouselSlide[]>(mockSlides);
  const [selectedSlide, setSelectedSlide] = useState<CarouselSlide | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    imageUrl: "",
    ctaText: "",
    ctaUrl: "",
    isActive: true
  });
  const { toast } = useToast();

  const handleCreateSlide = () => {
    setSelectedSlide(null);
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      imageUrl: "",
      ctaText: "",
      ctaUrl: "",
      isActive: true
    });
    setIsDialogOpen(true);
  };

  const handleEditSlide = (slide: CarouselSlide) => {
    setSelectedSlide(slide);
    setFormData({
      title: slide.title,
      subtitle: slide.subtitle || "",
      description: slide.description,
      imageUrl: slide.imageUrl,
      ctaText: slide.ctaText || "",
      ctaUrl: slide.ctaUrl || "",
      isActive: slide.isActive
    });
    setIsDialogOpen(true);
  };

  const handleSaveSlide = () => {
    if (!formData.title || !formData.description || !formData.imageUrl) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const now = new Date().toISOString();
    
    if (selectedSlide) {
      // Edit existing slide
      setSlides(prev => prev.map(slide => 
        slide.id === selectedSlide.id 
          ? { ...slide, ...formData, updatedAt: now }
          : slide
      ));
      toast({
        title: "Slide Updated",
        description: "Carousel slide has been updated successfully"
      });
    } else {
      // Create new slide
      const newSlide: CarouselSlide = {
        id: Date.now().toString(),
        ...formData,
        order: slides.length + 1,
        createdAt: now,
        updatedAt: now
      };
      setSlides(prev => [...prev, newSlide]);
      toast({
        title: "Slide Created",
        description: "New carousel slide has been created successfully"
      });
    }

    setIsDialogOpen(false);
  };

  const handleDeleteSlide = (slideId: string) => {
    setSlides(prev => prev.filter(slide => slide.id !== slideId));
    toast({
      title: "Slide Deleted",
      description: "Carousel slide has been deleted successfully"
    });
  };

  const handleToggleActive = (slideId: string) => {
    setSlides(prev => prev.map(slide => 
      slide.id === slideId 
        ? { ...slide, isActive: !slide.isActive, updatedAt: new Date().toISOString() }
        : slide
    ));
  };

  const handleMoveSlide = (slideId: string, direction: 'up' | 'down') => {
    const slideIndex = slides.findIndex(slide => slide.id === slideId);
    if (slideIndex === -1) return;

    const newSlides = [...slides];
    const targetIndex = direction === 'up' ? slideIndex - 1 : slideIndex + 1;

    if (targetIndex < 0 || targetIndex >= newSlides.length) return;

    // Swap slides
    [newSlides[slideIndex], newSlides[targetIndex]] = [newSlides[targetIndex], newSlides[slideIndex]];
    
    // Update order values
    newSlides.forEach((slide, index) => {
      slide.order = index + 1;
      slide.updatedAt = new Date().toISOString();
    });

    setSlides(newSlides);
    toast({
      title: "Slide Moved",
      description: `Slide moved ${direction} successfully`
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Carousel Management</h1>
          <p className="text-muted-foreground">
            Manage homepage carousel slides and their display order
          </p>
        </div>
        <Button onClick={handleCreateSlide} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Slide
        </Button>
      </div>

      <div className="grid gap-4">
        {slides.sort((a, b) => a.order - b.order).map((slide, index) => (
          <Card key={slide.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-32 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  {slide.imageUrl ? (
                    <img 
                      src={slide.imageUrl} 
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                  <div className="absolute top-1 left-1">
                    <Badge variant="secondary" className="text-xs">
                      #{slide.order}
                    </Badge>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg truncate">{slide.title}</h3>
                        <Badge variant={slide.isActive ? "default" : "secondary"}>
                          {slide.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      {slide.subtitle && (
                        <p className="text-sm text-muted-foreground mb-1">{slide.subtitle}</p>
                      )}
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {slide.description}
                      </p>
                      {slide.ctaText && (
                        <div className="mt-2">
                          <span className="text-xs text-primary">CTA: {slide.ctaText}</span>
                          {slide.ctaUrl && (
                            <span className="text-xs text-muted-foreground ml-2">→ {slide.ctaUrl}</span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleMoveSlide(slide.id, 'up')}
                        disabled={index === 0}
                      >
                        <ChevronUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleMoveSlide(slide.id, 'down')}
                        disabled={index === slides.length - 1}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleToggleActive(slide.id)}
                      >
                        {slide.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditSlide(slide)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteSlide(slide.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {selectedSlide ? "Edit Carousel Slide" : "Create New Carousel Slide"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter slide title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Enter slide subtitle (optional)"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter slide description"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL *</Label>
              <Input
                id="imageUrl"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                placeholder="Enter image URL"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ctaText">CTA Text</Label>
                <Input
                  id="ctaText"
                  value={formData.ctaText}
                  onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                  placeholder="Enter call-to-action text"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ctaUrl">CTA URL</Label>
                <Input
                  id="ctaUrl"
                  value={formData.ctaUrl}
                  onChange={(e) => setFormData({ ...formData, ctaUrl: e.target.value })}
                  placeholder="Enter call-to-action URL"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
              />
              <Label htmlFor="isActive">Active (visible on homepage)</Label>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveSlide} className="gap-2">
                <Save className="h-4 w-4" />
                {selectedSlide ? "Update Slide" : "Create Slide"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};