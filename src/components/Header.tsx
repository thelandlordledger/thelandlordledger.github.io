import { Button } from "@/components/ui/button";
import { Menu, Search, Bell, User, BarChart3 } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Market Trends", href: "#trends" },
    { name: "Key Deals", href: "#deals" },
    { name: "Strategies", href: "#strategies" },
    { name: "Intelligence", href: "#intelligence" },
    { name: "About", href: "#about" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/a2a90567-f17c-4437-9cad-9f68e2885544.png" 
              alt="Landlord Ledger" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-accent text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-4 h-4" />
            </Button>
            
            {/* Dashboard */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <BarChart3 className="w-4 h-4" />
            </Button>
            
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="hidden md:flex relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
            </Button>
            
            {/* Profile */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-4 h-4" />
            </Button>
            
            {/* CTA Button */}
            <Button variant="premium" size="sm" className="hidden md:flex">
              Subscribe
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
            
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-accent text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <Button variant="ghost" size="sm" className="flex-1">
                  Dashboard
                </Button>
                <Button variant="premium" size="sm" className="flex-1">
                  Subscribe
                </Button>
              </div>
            </nav>
          </div>
        )}
        
      </div>
    </header>
  );
};