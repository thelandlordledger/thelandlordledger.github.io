import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, ArrowRight, Calendar, MapPin, Linkedin, Mail, Building, TrendingUp } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      experience: "15+ years",
      background: "Former Managing Director at Goldman Sachs Real Estate, Harvard MBA",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      expertise: ["Institutional Capital", "Strategic Planning", "Market Analysis"],
      linkedin: "sarah-chen-cre"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Research & Analytics",
      experience: "12+ years",
      background: "Former VP Research at CBRE, PhD Economics from Stanford",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      expertise: ["Data Science", "Economic Analysis", "Market Forecasting"],
      linkedin: "michael-rodriguez-research"
    },
    {
      name: "Jennifer Park",
      role: "Chief Technology Officer",
      experience: "14+ years",
      background: "Former Lead Engineer at PropTech unicorn, MIT Computer Science",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&q=80",
      expertise: ["Machine Learning", "Data Architecture", "Product Development"],
      linkedin: "jennifer-park-tech"
    },
    {
      name: "David Thompson",
      role: "Head of Institutional Sales",
      experience: "18+ years",
      background: "Former Director at BlackRock Real Estate, Wharton MBA",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      expertise: ["Institutional Relations", "Product Strategy", "Client Success"],
      linkedin: "david-thompson-re"
    },
    {
      name: "Lisa Wang",
      role: "VP of Market Intelligence",
      experience: "10+ years",
      background: "Former Senior Analyst at CoStar, CFA charterholder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      expertise: ["Market Research", "Transaction Analysis", "Competitive Intelligence"],
      linkedin: "lisa-wang-intelligence"
    },
    {
      name: "Robert Kim",
      role: "Head of Product",
      experience: "11+ years",
      background: "Former Product Lead at Real Capital Analytics, Northwestern MBA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      expertise: ["Product Management", "User Experience", "Platform Development"],
      linkedin: "robert-kim-product"
    }
  ];

  const companyMilestones = [
    {
      year: "2018",
      milestone: "Company Founded",
      description: "Launched with $2M seed funding to democratize real estate market intelligence"
    },
    {
      year: "2019", 
      milestone: "First Enterprise Client",
      description: "Signed major institutional investor, establishing credibility in the market"
    },
    {
      year: "2020",
      milestone: "Series A Funding",
      description: "Raised $15M Series A led by Andreessen Horowitz to expand data capabilities"
    },
    {
      year: "2021",
      milestone: "1,000+ Subscribers",
      description: "Reached milestone of 1,000 professional subscribers across 45 states"
    },
    {
      year: "2022",
      milestone: "AI Platform Launch",
      description: "Introduced predictive analytics and machine learning-powered insights"
    },
    {
      year: "2023",
      milestone: "Series B Funding",
      description: "Completed $35M Series B to accelerate product development and market expansion"
    },
    {
      year: "2024",
      milestone: "Market Leadership",
      description: "Recognized as leading provider of commercial real estate market intelligence"
    }
  ];

  const companyValues = [
    {
      icon: Target,
      title: "Data-Driven Decisions",
      description: "We believe in the power of accurate, timely data to drive better investment decisions and market understanding."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering value that drives real results."
    },
    {
      icon: Globe,
      title: "Market Transparency", 
      description: "We're democratizing access to institutional-quality market intelligence and leveling the playing field."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible with technology and data in real estate."
    }
  ];

  const achievements = [
    {
      metric: "4,500+",
      label: "Active Subscribers",
      description: "Professionals across investment firms, banks, and institutions"
    },
    {
      metric: "$2.4T",
      label: "Assets Tracked",
      description: "Commercial real estate assets under analysis"
    },
    {
      metric: "95%",
      label: "Client Retention",
      description: "Annual subscription renewal rate"
    },
    {
      metric: "50+",
      label: "Team Members", 
      description: "Experts in real estate, technology, and data science"
    }
  ];

  const boardAdvisors = [
    {
      name: "James Patterson",
      role: "Board Chairman",
      background: "Former CEO of Eastdil Secured, 25+ years in real estate finance",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
    },
    {
      name: "Amanda Foster",
      role: "Independent Director",
      background: "Former CTO of CoStar Group, technology and product innovation expert",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80"
    },
    {
      name: "Dr. Richard Chen",
      role: "Strategic Advisor",
      background: "Professor of Real Estate Finance at Wharton, leading academic researcher",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-subtle-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')] bg-cover bg-center opacity-5"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="font-primary text-5xl md:text-6xl font-semibold text-foreground mb-6">
              ABOUT
              <br />
              <span className="bg-hero-gradient bg-clip-text text-transparent">LANDLORD LEDGER</span>
            </h1>
            <p className="font-secondary text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Empowering real estate professionals with institutional-quality market intelligence, advanced analytics, and strategic insights
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Founded 2018</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>50+ Team Members</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-primary text-4xl font-semibold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="font-secondary text-lg text-muted-foreground mb-6 leading-relaxed">
                  To democratize access to institutional-quality real estate market intelligence and empower professionals at every level to make better, more informed investment decisions.
                </p>
                <p className="font-secondary text-lg text-muted-foreground leading-relaxed">
                  We believe that superior data, advanced analytics, and expert insights should not be limited to the largest institutions. Our platform levels the playing field by providing comprehensive market intelligence to professionals across the real estate investment spectrum.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" 
                  alt="Team collaboration"
                  className="w-full rounded-lg shadow-elegant"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Our Values
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and drive our commitment to excellence in real estate market intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="p-6 text-center hover-lift transition-all duration-300 group">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-primary text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="font-secondary text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Our Impact
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Measurable results that demonstrate our commitment to delivering value to the real estate community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-8 text-center hover-lift transition-all duration-300 group">
                  <div className="font-primary text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">
                    {achievement.metric}
                  </div>
                  <div className="font-accent text-lg font-semibold text-foreground mb-2">
                    {achievement.label}
                  </div>
                  <div className="font-secondary text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </Card>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry veterans and technology leaders driving innovation in real estate market intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover-lift transition-all duration-300 group">
                  <div className="aspect-square relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-primary text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <div className="font-accent text-sm font-medium text-primary mb-2">{member.role}</div>
                    <div className="text-sm text-muted-foreground mb-3">{member.experience} experience</div>
                    <p className="font-secondary text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.background}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 1).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {member.expertise.length > 1 && (
                          <span className="text-xs text-muted-foreground">+{member.expertise.length - 1}</span>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
        </section>

        {/* Board & Advisors */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
                Board & Advisors
              </h2>
              <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto">
                Seasoned executives and industry experts providing strategic guidance and oversight
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boardAdvisors.map((advisor, index) => (
                <Card key={index} className="p-6 text-center hover-lift transition-all duration-300 group">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-primary text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {advisor.name}
                  </h3>
                  <div className="font-accent text-sm font-medium text-primary mb-3">{advisor.role}</div>
                  <p className="font-secondary text-sm text-muted-foreground leading-relaxed">
                    {advisor.background}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-primary text-4xl font-semibold mb-4">
                Our Journey
              </h2>
              <p className="font-secondary text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Key milestones in our growth from startup to leading real estate intelligence platform
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {companyMilestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-20 text-right">
                      <div className="font-primary text-xl font-bold">{milestone.year}</div>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-2"></div>
                    <div className="flex-1">
                      <h3 className="font-accent font-semibold text-lg mb-2">{milestone.milestone}</h3>
                      <p className="font-secondary text-primary-foreground/80 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-primary text-4xl font-semibold text-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="font-secondary text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're looking to partner with us, join our team, or learn more about our platform, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" className="group">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="elegant" size="lg" className="group">
                <Users className="w-5 h-5 mr-2" />
                Join Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;