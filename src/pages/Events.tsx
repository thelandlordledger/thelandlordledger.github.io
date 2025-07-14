import { useState, useEffect } from "react";
import { Calendar, MapPin, Users, Clock, Filter, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
}

const eventTypes = ["All", "Conference", "Trade Show", "Summit", "Convention", "Regional"];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from Supabase
  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('published', true)
        .gte('start_date', new Date().toISOString())
        .order('start_date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.event_type === selectedCategory);

  const formatEventDate = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const startFormatted = start.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });

    if (endDate) {
      const end = new Date(endDate);
      const endFormatted = end.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      });
      return `${startFormatted} – ${endFormatted}`;
    }

    return startFormatted;
  };

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upcoming Real Estate Events
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Connect, learn, and grow at the most influential real estate events of 2025. 
              Network with industry leaders and discover the latest trends shaping our market.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-muted animate-pulse"></div>
                <CardContent className="p-6 space-y-3">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-16">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Events Found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {selectedCategory === "All" 
                ? "No upcoming events are currently scheduled." 
                : `No upcoming ${selectedCategory.toLowerCase()} events found.`
              }
            </p>
          </div>
        ) : (
          /* Events Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image_url || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop"} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {event.event_type}
                    </Badge>
                  </div>
                  {event.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description || "Join this exciting real estate event for networking and learning opportunities."}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium">
                        {formatEventDate(event.start_date, event.end_date)}
                      </span>
                    </div>
                    
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    
                    {event.organizer && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>Organized by {event.organizer}</span>
                      </div>
                    )}

                    {event.price && (
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>${event.price}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    {event.registration_url ? (
                      <Button className="flex-1 group/btn" asChild>
                        <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
                          <span>Register Now</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                        </a>
                      </Button>
                    ) : (
                      <Button className="flex-1 group/btn">
                        <span>Learn More</span>
                        <Clock className="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                      </Button>
                    )}
                    <Button variant="outline" size="icon">
                      <Calendar className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Don't Miss Out on Industry Insights</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay ahead of the curve by attending these premier real estate events. Network with industry leaders, 
              discover new technologies, and gain valuable insights to grow your business.
            </p>
            <Button size="lg" className="group">
              Subscribe to Event Updates
              <Users className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}