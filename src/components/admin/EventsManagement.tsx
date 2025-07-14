import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Calendar,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  MapPin,
  Users,
  Clock,
  Star,
  DollarSign
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Event {
  id: string;
  title: string;
  description?: string;
  event_type: string;
  start_date: string;
  end_date?: string;
  location?: string;
  venue?: string;
  image_url?: string;
  registration_url?: string;
  price?: number;
  capacity?: number;
  organizer?: string;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const eventTypes = [
  'Conference',
  'Trade Show',
  'Summit',
  'Convention',
  'Regional'
];

export const EventsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const { toast } = useToast();

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    event_type: "",
    start_date: "",
    end_date: "",
    location: "",
    venue: "",
    image_url: "",
    registration_url: "",
    price: "",
    capacity: "",
    organizer: "",
    featured: false,
    published: true
  });

  // Fetch events from Supabase
  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('start_date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast({
        title: "Error",
        description: "Failed to fetch events",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.organizer?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setNewEvent({
      title: "",
      description: "",
      event_type: "",
      start_date: "",
      end_date: "",
      location: "",
      venue: "",
      image_url: "",
      registration_url: "",
      price: "",
      capacity: "",
      organizer: "",
      featured: false,
      published: true
    });
    setEditingEvent(null);
  };

  const handleSaveEvent = async () => {
    if (!newEvent.title || !newEvent.start_date || !newEvent.event_type) {
      toast({
        title: "Error",
        description: "Please fill in all required fields (Title, Start Date, Event Type)",
        variant: "destructive"
      });
      return;
    }

    try {
      const eventData = {
        ...newEvent,
        price: newEvent.price ? parseFloat(newEvent.price) : null,
        capacity: newEvent.capacity ? parseInt(newEvent.capacity) : null
      };

      if (editingEvent) {
        const { error } = await supabase
          .from('events')
          .update(eventData)
          .eq('id', editingEvent.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Event updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('events')
          .insert([eventData]);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Event created successfully"
        });
      }

      await fetchEvents();
      resetForm();
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error saving event:', error);
      toast({
        title: "Error",
        description: "Failed to save event",
        variant: "destructive"
      });
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

      if (error) throw error;

      await fetchEvents();
      toast({
        title: "Success",
        description: "Event deleted successfully"
      });
    } catch (error) {
      console.error('Error deleting event:', error);
      toast({
        title: "Error",
        description: "Failed to delete event",
        variant: "destructive"
      });
    }
  };

  const toggleFeatured = async (id: string, currentFeatured: boolean) => {
    try {
      const { error } = await supabase
        .from('events')
        .update({ featured: !currentFeatured })
        .eq('id', id);

      if (error) throw error;

      await fetchEvents();
      toast({
        title: "Success",
        description: `Event ${!currentFeatured ? 'featured' : 'unfeatured'} successfully`
      });
    } catch (error) {
      console.error('Error updating featured status:', error);
      toast({
        title: "Error",
        description: "Failed to update featured status",
        variant: "destructive"
      });
    }
  };

  const togglePublished = async (id: string, currentPublished: boolean) => {
    try {
      const { error } = await supabase
        .from('events')
        .update({ published: !currentPublished })
        .eq('id', id);

      if (error) throw error;

      await fetchEvents();
      toast({
        title: "Success",
        description: `Event ${!currentPublished ? 'published' : 'unpublished'} successfully`
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

  const handleEditEvent = (event: Event) => {
    setNewEvent({
      title: event.title,
      description: event.description || "",
      event_type: event.event_type,
      start_date: new Date(event.start_date).toISOString().split('T')[0],
      end_date: event.end_date ? new Date(event.end_date).toISOString().split('T')[0] : "",
      location: event.location || "",
      venue: event.venue || "",
      image_url: event.image_url || "",
      registration_url: event.registration_url || "",
      price: event.price?.toString() || "",
      capacity: event.capacity?.toString() || "",
      organizer: event.organizer || "",
      featured: event.featured,
      published: event.published
    });
    setEditingEvent(event);
    setIsDialogOpen(true);
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
          <h1 className="text-3xl font-bold">Events Management</h1>
          <p className="text-muted-foreground">
            Manage upcoming real estate events and conferences
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingEvent ? 'Edit Event' : 'Add New Event'}</DialogTitle>
              <DialogDescription>
                {editingEvent ? 'Update the event details' : 'Create a new real estate event for the platform'}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label htmlFor="title">Event Title *</Label>
                <Input
                  id="title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  placeholder="Enter event title"
                />
              </div>
              
              <div>
                <Label htmlFor="event_type">Event Type *</Label>
                <Select value={newEvent.event_type} onValueChange={(value) => setNewEvent({...newEvent, event_type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="organizer">Organizer</Label>
                <Input
                  id="organizer"
                  value={newEvent.organizer}
                  onChange={(e) => setNewEvent({...newEvent, organizer: e.target.value})}
                  placeholder="Event organizer"
                />
              </div>
              
              <div>
                <Label htmlFor="start_date">Start Date *</Label>
                <Input
                  id="start_date"
                  type="date"
                  value={newEvent.start_date}
                  onChange={(e) => setNewEvent({...newEvent, start_date: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="end_date">End Date</Label>
                <Input
                  id="end_date"
                  type="date"
                  value={newEvent.end_date}
                  onChange={(e) => setNewEvent({...newEvent, end_date: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                  placeholder="City, State"
                />
              </div>
              
              <div>
                <Label htmlFor="venue">Venue</Label>
                <Input
                  id="venue"
                  value={newEvent.venue}
                  onChange={(e) => setNewEvent({...newEvent, venue: e.target.value})}
                  placeholder="Venue name"
                />
              </div>
              
              <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={newEvent.price}
                  onChange={(e) => setNewEvent({...newEvent, price: e.target.value})}
                  placeholder="Event price"
                />
              </div>
              
              <div>
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  type="number"
                  value={newEvent.capacity}
                  onChange={(e) => setNewEvent({...newEvent, capacity: e.target.value})}
                  placeholder="Maximum attendees"
                />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="registration_url">Registration URL</Label>
                <Input
                  id="registration_url"
                  value={newEvent.registration_url}
                  onChange={(e) => setNewEvent({...newEvent, registration_url: e.target.value})}
                  placeholder="https://example.com/register"
                />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  value={newEvent.image_url}
                  onChange={(e) => setNewEvent({...newEvent, image_url: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                  placeholder="Event description"
                  rows={3}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={newEvent.featured}
                  onCheckedChange={(checked) => setNewEvent({...newEvent, featured: checked})}
                />
                <Label htmlFor="featured">Featured Event</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={newEvent.published}
                  onCheckedChange={(checked) => setNewEvent({...newEvent, published: checked})}
                />
                <Label htmlFor="published">Published</Label>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveEvent}>
                {editingEvent ? 'Update Event' : 'Create Event'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <div className="grid gap-6">
        {filteredEvents.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No Events Found</h3>
              <p className="text-muted-foreground">
                {searchTerm ? 'No events match your search criteria' : 'No events have been created yet'}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredEvents.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {event.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{event.event_type}</Badge>
                    {event.featured && (
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge variant={event.published ? "default" : "secondary"}>
                      {event.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.start_date).toLocaleDateString()} 
                    {event.end_date && ` - ${new Date(event.end_date).toLocaleDateString()}`}
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  )}
                  {event.capacity && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.capacity} capacity
                    </div>
                  )}
                  {event.price && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      ${event.price}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Featured</span>
                      <Switch
                        checked={event.featured}
                        onCheckedChange={() => toggleFeatured(event.id, event.featured)}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Published</span>
                      <Switch
                        checked={event.published}
                        onCheckedChange={() => togglePublished(event.id, event.published)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleEditEvent(event)}>
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};