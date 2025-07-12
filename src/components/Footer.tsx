import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Twitter, Linkedin, Globe, ArrowRight } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Information",
      links: [
        { name: "Market Reports", href: "#" },
        { name: "Research", href: "#" },
        { name: "Data Insights", href: "#" },
        { name: "Methodology", href: "#" }
      ]
    },
    {
      title: "Services", 
      links: [
        { name: "Premium Analytics", href: "#" },
        { name: "Custom Research", href: "#" },
        { name: "API Access", href: "#" },
        { name: "Consulting", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Compliance", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Brand & Newsletter */}
            <div className="space-y-8">
              <div>
                <img 
                  src="/lovable-uploads/a2a90567-f17c-4437-9cad-9f68e2885544.png" 
                  alt="Landlord Ledger" 
                  className="h-10 w-auto mb-6 filter brightness-0 invert"
                />
                <p className="font-secondary text-lg text-background/80 leading-relaxed max-w-md">
                  Premium real estate market intelligence providing institutional-grade insights 
                  and analysis for sophisticated investors and industry professionals.
                </p>
              </div>
              
              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h3 className="font-primary text-xl font-semibold text-background">
                  Market Intelligence Newsletter
                </h3>
                <p className="font-secondary text-background/70 text-sm">
                  Weekly insights, market updates, and exclusive analysis delivered to your inbox.
                </p>
                <div className="flex gap-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                  />
                  <Button variant="gold" size="default">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-background/80">
                  <Mail className="w-4 h-4" />
                  <span className="font-secondary text-sm">contact@landlordledger.com</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <Phone className="w-4 h-4" />
                  <span className="font-secondary text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <MapPin className="w-4 h-4" />
                  <span className="font-secondary text-sm">New York, NY</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="font-accent text-sm font-semibold text-background uppercase tracking-wide">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          className="font-secondary text-sm text-background/70 hover:text-background transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="font-secondary text-sm text-background/60">
              © 2024 Landlord Ledger. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
            
          </div>
        </div>
        
      </div>
    </footer>
  );
};