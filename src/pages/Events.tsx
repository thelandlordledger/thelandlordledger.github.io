import { useState } from "react";
import { Calendar, MapPin, Users, Clock, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  organizer: string;
  category: string;
  image: string;
  description: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "Inman Connect New York 2025",
    date: "January 22–25, 2025",
    location: "New York, NY",
    organizer: "AvaHR",
    category: "Conference",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=400&fit=crop",
    description: "The premier real estate technology and innovation conference bringing together industry leaders."
  },
  {
    id: "2",
    title: "NAHB International Builders' Show (IBS)",
    date: "February 25–27, 2025",
    location: "Las Vegas, NV",
    organizer: "AvaHR",
    category: "Trade Show",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
    description: "The largest annual light construction show in the world, featuring the latest products and services."
  },
  {
    id: "3",
    title: "MFE Leadership Summit",
    date: "March 3–6, 2025",
    location: "Vail, CO",
    organizer: "AvaHR",
    category: "Summit",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=400&fit=crop",
    description: "Multifamily executive leadership summit focused on strategic growth and innovation."
  },
  {
    id: "4",
    title: "RETCon 2025",
    date: "March 10–12, 2025",
    location: "Las Vegas, NV",
    organizer: "AvaHR",
    category: "Convention",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
    description: "Real Estate Technology Convention showcasing cutting-edge PropTech solutions."
  },
  {
    id: "5",
    title: "Inman On Tour Nashville",
    date: "March 11–12, 2025",
    location: "Nashville, TN",
    organizer: "The Close",
    category: "Regional",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    description: "Regional real estate insights and networking for the Nashville market."
  },
  {
    id: "6",
    title: "REALTOR® Broker Summit",
    date: "April 8–9, 2025",
    location: "Louisville, KY",
    organizer: "The Close",
    category: "Summit",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    description: "Exclusive summit for real estate brokers focusing on business growth strategies."
  },
  {
    id: "7",
    title: "ICC Regional Summit – Texas",
    date: "April 9–10, 2025",
    location: "Magnolia Creek Ranch, TX",
    organizer: "The Close",
    category: "Regional",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop",
    description: "Texas regional summit for independent contractors and real estate professionals."
  },
  {
    id: "8",
    title: "Apartment Innovation & Marketing (AIM) Conference",
    date: "May 4–7, 2025",
    location: "Huntington Beach, CA",
    organizer: "AvaHR",
    category: "Conference",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=400&fit=crop",
    description: "Multifamily marketing and innovation conference with latest industry trends."
  }
];

const categories = ["All", "Conference", "Summit", "Trade Show", "Convention", "Regional"];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
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
            {categories.map((category) => (
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <Card 
              key={event.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Organized by {event.organizer}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 group/btn">
                    <span>Learn More</span>
                    <Clock className="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
    </div>
  );
}