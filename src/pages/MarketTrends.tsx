import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useMarketTrends } from "@/hooks/useMarketTrends";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, ArrowRight, Calendar, BarChart3, Globe, Building, Filter, Target, PieChart, Activity, DollarSign, ChevronRight, Home, MapPin, Clock, Zap, Construction, CreditCard, TrendingDownIcon, BarChart4, Users, Percent, ArrowUpDown, Eye, Download, Share, Bell, Play, Pause, Info, ExternalLink, MapIcon, Calendar as CalendarIcon } from "lucide-react";
import ChoroplethMap from "@/components/ChoroplethMap";

const MarketTrends = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedSector, setSelectorSector] = useState("all");
  const [selectedSubSector, setSelectedSubSector] = useState("all");

  // Use the market trends hook to fetch data from Supabase
  const {
    metrics,
    sectorIntelligence,
    trendingPeople,
    trendingProjects,
    regions: dbRegions,
    countries: dbCountries,
    cities: dbCities,
    sectors: dbSectors,
    subSectors: dbSubSectors,
    loading,
    error,
    getCountriesForRegion: getDbCountriesForRegion,
    getCitiesForCountry: getDbCitiesForCountry,
    getSubSectorsForSector: getDbSubSectorsForSector,
    getMetricsByCategory
  } = useMarketTrends(
    selectedRegion !== "all" ? selectedRegion : undefined,
    selectedCountry !== "all" ? selectedCountry : undefined,
    selectedCity !== "all" ? selectedCity : undefined,
    selectedSector !== "all" ? selectedSector : undefined,
    selectedSubSector !== "all" ? selectedSubSector : undefined
  );
  const [selectedTimeWindow, setSelectedTimeWindow] = useState("rolling-12");
  const [selectedSubSectors, setSelectedSubSectors] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);
  const [compareSelections, setCompareSelections] = useState<string[]>([]);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [timeTravel, setTimeTravel] = useState(false);
  const [timeTravelYear, setTimeTravelYear] = useState(2024);
  const [selectedKPIModal, setSelectedKPIModal] = useState<string | null>(null);
  const [aiInsightVisible, setAiInsightVisible] = useState(true);

  // Time window options
  const timeWindows = [
    { value: "last-month", label: "Last Month" },
    { value: "last-quarter", label: "Last Quarter" },
    { value: "ytd", label: "YTD" },
    { value: "rolling-12", label: "Rolling 12 Months" },
    { value: "custom", label: "Custom Range" }
  ];

  // Hierarchical geography data structure
  const geographyData = {
    "north-america": {
      label: "North America",
      countries: {
        "usa": { label: "United States", cities: ["new-york", "los-angeles", "chicago", "san-francisco", "miami", "boston", "washington-dc", "atlanta", "dallas", "seattle"] },
        "canada": { label: "Canada", cities: ["toronto", "vancouver", "montreal", "calgary", "ottawa"] },
        "mexico": { label: "Mexico", cities: ["mexico-city", "guadalajara", "monterrey"] }
      }
    },
    "europe": {
      label: "Europe",
      countries: {
        "uk": { label: "United Kingdom", cities: ["london", "manchester", "birmingham", "edinburgh"] },
        "germany": { label: "Germany", cities: ["berlin", "frankfurt", "munich", "hamburg"] },
        "france": { label: "France", cities: ["paris", "lyon", "marseille", "toulouse"] },
        "italy": { label: "Italy", cities: ["milan", "rome", "naples", "turin"] },
        "spain": { label: "Spain", cities: ["madrid", "barcelona", "valencia", "seville"] },
        "netherlands": { label: "Netherlands", cities: ["amsterdam", "rotterdam", "the-hague"] },
        "sweden": { label: "Sweden", cities: ["stockholm", "gothenburg", "malmö"] },
        "poland": { label: "Poland", cities: ["warsaw", "krakow", "gdansk"] },
        "romania": { label: "Romania", cities: ["bucharest", "cluj-napoca"] },
        "turkey": { label: "Türkiye", cities: ["istanbul", "ankara", "izmir"] }
      }
    },
    "asia-pacific": {
      label: "Asia Pacific",
      countries: {
        "japan": { label: "Japan", cities: ["tokyo", "osaka", "nagoya", "fukuoka"] },
        "australia": { label: "Australia", cities: ["sydney", "melbourne", "brisbane", "perth"] },
        "south-korea": { label: "South Korea", cities: ["seoul", "busan", "incheon"] },
        "singapore": { label: "Singapore", cities: ["singapore"] },
        "china": { label: "China", cities: ["shanghai", "beijing", "shenzhen", "guangzhou", "chengdu"] },
        "india": { label: "India", cities: ["mumbai", "delhi", "bangalore", "hyderabad", "chennai"] },
        "thailand": { label: "Thailand", cities: ["bangkok", "chiang-mai"] },
        "malaysia": { label: "Malaysia", cities: ["kuala-lumpur", "johor-bahru"] },
        "indonesia": { label: "Indonesia", cities: ["jakarta", "surabaya"] }
      }
    },
    "latin-america": {
      label: "Latin America", 
      countries: {
        "brazil": { label: "Brazil", cities: ["sao-paulo", "rio-de-janeiro", "brasilia", "salvador"] },
        "mexico": { label: "Mexico", cities: ["mexico-city", "guadalajara", "monterrey"] },
        "argentina": { label: "Argentina", cities: ["buenos-aires", "cordoba", "rosario"] },
        "chile": { label: "Chile", cities: ["santiago", "valparaiso"] },
        "colombia": { label: "Colombia", cities: ["bogota", "medellin", "cartagena"] },
        "peru": { label: "Peru", cities: ["lima", "arequipa"] }
      }
    },
    "middle-east-africa": {
      label: "Middle East & Africa",
      countries: {
        "uae": { label: "United Arab Emirates", cities: ["dubai", "abu-dhabi"] },
        "saudi-arabia": { label: "Saudi Arabia", cities: ["riyadh", "jeddah", "dammam"] },
        "qatar": { label: "Qatar", cities: ["doha"] },
        "south-africa": { label: "South Africa", cities: ["johannesburg", "cape-town", "durban"] },
        "nigeria": { label: "Nigeria", cities: ["lagos", "abuja"] },
        "kenya": { label: "Kenya", cities: ["nairobi", "mombasa"] },
        "egypt": { label: "Egypt", cities: ["cairo", "alexandria"] },
        "israel": { label: "Israel", cities: ["tel-aviv", "jerusalem"] }
      }
    }
  };

  const regions = [
    { value: "all", label: "All Regions" },
    ...Object.entries(geographyData).map(([key, data]) => ({ value: key, label: data.label }))
  ];

  const getCountriesForRegion = (regionValue: string) => {
    if (regionValue === "all") return [{ value: "all", label: "All Countries" }];
    const regionData = geographyData[regionValue as keyof typeof geographyData];
    if (!regionData) return [{ value: "all", label: "All Countries" }];
    
    return [
      { value: "all", label: "All Countries" },
      ...Object.entries(regionData.countries).map(([key, country]) => ({ value: key, label: country.label }))
    ];
  };

  const getCitiesForCountry = (regionValue: string, countryValue: string) => {
    if (regionValue === "all" || countryValue === "all") return [{ value: "all", label: "All Cities" }];
    const regionData = geographyData[regionValue as keyof typeof geographyData];
    if (!regionData) return [{ value: "all", label: "All Cities" }];
    
    const countryData = regionData.countries[countryValue];
    if (!countryData) return [{ value: "all", label: "All Cities" }];
    
    return [
      { value: "all", label: "All Cities" },
      ...countryData.cities.map(city => ({ 
        value: city, 
        label: city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      }))
    ];
  };

  const sectors = [
    { value: "all", label: "All Sectors" },
    { value: "commercial", label: "Commercial" },
    { value: "residential", label: "Residential" },
    { value: "mixed-use", label: "Mixed-Use" }
  ];

  const getSubSectorsForSector = (sectorValue: string) => {
    const allSubSectors = [
      { value: "all", label: "All Sub-Sectors" },
      { value: "office", label: "Office", parent: "commercial" },
      { value: "industrial", label: "Industrial", parent: "commercial" },
      { value: "retail", label: "Retail", parent: "commercial" },
      { value: "hospitality", label: "Hospitality", parent: "commercial" },
      { value: "healthcare", label: "Healthcare", parent: "commercial" },
      { value: "multifamily", label: "Multifamily", parent: "residential" },
      { value: "single-family", label: "Single Family", parent: "residential" },
      { value: "student-housing", label: "Student Housing", parent: "residential" },
      { value: "senior-housing", label: "Senior Housing", parent: "residential" },
      { value: "mixed-use-development", label: "Mixed-Use Development", parent: "mixed-use" },
      { value: "live-work", label: "Live-Work", parent: "mixed-use" }
    ];

    if (sectorValue === "all") return allSubSectors;
    
    return [
      { value: "all", label: "All Sub-Sectors" },
      ...allSubSectors.filter(sub => sub.parent === sectorValue)
    ];
  };

  // Handle cascading filter changes
  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
    setSelectedCountry("all");
    setSelectedCity("all");
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setSelectedCity("all");
  };

  const handleSectorChange = (value: string) => {
    setSelectorSector(value);
    setSelectedSubSector("all");
  };

  const currentCountries = getCountriesForRegion(selectedRegion);
  const currentCities = getCitiesForCountry(selectedRegion, selectedCountry);
  const currentSubSectors = getSubSectorsForSector(selectedSector);

  // Enhanced KPI data with sector-specific details based on the new structure
  const coreKPIFamilies = {
    "market-activity": [
      {
        title: "Transaction Volume",
        value: "$2.1T",
        change: "+12.3%",
        trend: "up",
        description: "Value & number of transactions",
        sparkline: [2.8, 3.1, 2.9, 3.4, 3.2, 3.6, 3.3, 3.8, 3.5, 3.9, 3.7, 4.1],
        icon: DollarSign,
        category: "Market Activity"
      },
      {
        title: "New Listings",
        value: "24.7K",
        change: "+8.4%",
        trend: "up",
        description: "Properties newly listed",
        sparkline: [18, 19, 21, 20, 22, 24, 23, 25, 24, 26, 25, 27],
        icon: Building,
        category: "Market Activity"
      },
      {
        title: "Avg Days on Market",
        value: "67",
        change: "-5.2%",
        trend: "down",
        description: "Time to transaction",
        sparkline: [82, 79, 75, 73, 71, 69, 68, 67, 66, 65, 66, 67],
        icon: Clock,
        category: "Market Activity"
      }
    ],
    "valuation-returns": [
      {
        title: "Price Per SF",
        value: "$312",
        change: "+8.7%",
        trend: "up",
        description: "Average across major markets",
        sparkline: [285, 288, 292, 295, 301, 305, 308, 310, 315, 318, 314, 312],
        icon: Target,
        category: "Valuation & Returns"
      },
      {
        title: "Average Cap Rate",
        value: "6.8%",
        change: "+0.3%",
        trend: "up",
        description: "Weighted by transaction value",
        sparkline: [6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.8, 6.9, 6.8, 6.8, 6.8],
        icon: PieChart,
        category: "Valuation & Returns"
      }
    ],
    "occupancy-demand": [
      {
        title: "Vacancy Rate",
        value: "9.2%",
        change: "-1.1%",
        trend: "down",
        description: "Commercial properties market-wide",
        sparkline: [11.2, 10.8, 10.5, 10.1, 9.8, 9.5, 9.3, 9.2, 9.1, 9.0, 9.1, 9.2],
        icon: Activity,
        category: "Occupancy & Demand"
      },
      {
        title: "Net Absorption",
        value: "12.4M SF",
        change: "+15.6%",
        trend: "up",
        description: "Quarterly leasing activity",
        sparkline: [8.2, 9.1, 9.8, 10.2, 10.8, 11.2, 11.5, 11.8, 12.1, 12.2, 12.3, 12.4],
        icon: Zap,
        category: "Occupancy & Demand"
      }
    ],
    "supply-pipeline": [
      {
        title: "Under Construction",
        value: "47.2M SF",
        change: "+22.1%",
        trend: "up",
        description: "New developments in pipeline",
        sparkline: [35, 37, 39, 41, 43, 45, 46, 47, 48, 47, 47, 47],
        icon: Construction,
        category: "Supply & Pipeline"
      }
    ],
    "financing-cost": [
      {
        title: "Avg CRE Loan Rate",
        value: "7.2%",
        change: "+1.8%",
        trend: "up",
        description: "Commercial real estate financing",
        sparkline: [5.1, 5.4, 5.8, 6.2, 6.5, 6.8, 7.0, 7.1, 7.2, 7.3, 7.2, 7.2],
        icon: CreditCard,
        category: "Financing & Cost"
      },
      {
        title: "% Transactions Financed",
        value: "73%",
        change: "-4.2%",
        trend: "down",
        description: "Share of leveraged transactions",
        sparkline: [82, 80, 78, 76, 75, 74, 73, 73, 72, 73, 73, 73],
        icon: Percent,
        category: "Financing & Cost"
      }
    ],
    "sentiment-access": [
      {
        title: "Cap Rate Spread",
        value: "285 bps",
        change: "+45 bps",
        trend: "up",
        description: "vs 10-year treasury",
        sparkline: [220, 230, 240, 250, 260, 270, 275, 280, 285, 290, 285, 285],
        icon: BarChart4,
        category: "Sentiment & Access"
      }
    ]
  };

  // Combine all KPIs for display
  const allKPIs = [
    ...coreKPIFamilies["market-activity"],
    ...coreKPIFamilies["valuation-returns"],
    ...coreKPIFamilies["occupancy-demand"],
    ...coreKPIFamilies["supply-pipeline"],
    ...coreKPIFamilies["financing-cost"],
    ...coreKPIFamilies["sentiment-access"]
  ];

  // Sector-specific metrics based on the suggestion
  const sectorSpecificMetrics = {
    office: {
      title: "Office Market Intelligence",
      metrics: [
        { label: "CBD Vacancy", value: "12.4%", change: "-0.8%", trend: "down" },
        { label: "Suburban Vacancy", value: "15.2%", change: "+1.2%", trend: "up" },
        { label: "Class A Rent/SF", value: "$65.40", change: "+3.2%", trend: "up" },
        { label: "Sublease Availability", value: "8.7M SF", change: "-12.3%", trend: "down" },
        { label: "Remote Work Index", value: "2.8", change: "-15.4%", trend: "down" }
      ]
    },
    industrial: {
      title: "Industrial & Logistics Intelligence",
      metrics: [
        { label: "Last-Mile Vacancy", value: "3.2%", change: "-0.5%", trend: "down" },
        { label: "Regional Logistics Vacancy", value: "5.8%", change: "+0.3%", trend: "up" },
        { label: "Rent Growth YoY", value: "+8.7%", change: "+2.1%", trend: "up" },
        { label: "Delivery Pipeline", value: "125M SF", change: "+18.5%", trend: "up" },
        { label: "Average Dock Doors", value: "24", change: "+12%", trend: "up" }
      ]
    },
    retail: {
      title: "Retail Market Intelligence",
      metrics: [
        { label: "Sales per SF", value: "$485", change: "+6.2%", trend: "up" },
        { label: "Anchor Vacancy", value: "7.8%", change: "-1.4%", trend: "down" },
        { label: "Inline Vacancy", value: "11.2%", change: "+0.8%", trend: "up" },
        { label: "Footfall Change", value: "+12.3%", change: "+8.1%", trend: "up" },
        { label: "Avg Lease Term", value: "5.2 years", change: "-0.3 years", trend: "down" }
      ]
    },
    residential: {
      title: "Residential Market Intelligence", 
      metrics: [
        { label: "Median Sale Price", value: "$485K", change: "+7.8%", trend: "up" },
        { label: "Rent per Unit", value: "$2,340", change: "+5.4%", trend: "up" },
        { label: "Days on Market", value: "32", change: "-8 days", trend: "down" },
        { label: "New Completions", value: "45K units", change: "+12.7%", trend: "up" },
        { label: "Occupancy Rate", value: "94.2%", change: "+1.1%", trend: "up" }
      ]
    }
  };

  // Top movers data
  const topMovers = [
    { market: "Dubai, UAE", change: "+18.4%", sector: "Industrial", period: "MoM" },
    { market: "Austin, TX", change: "+15.2%", sector: "Office", period: "YoY" },
    { market: "Berlin, Germany", change: "+14.8%", sector: "Multifamily", period: "YoY" },
    { market: "Singapore", change: "+13.9%", sector: "Industrial", period: "YoY" },
    { market: "Miami, FL", change: "+12.7%", sector: "Retail", period: "YoY" }
  ];

  const regionalTrends = [
    {
      region: "North America",
      regionCode: "north-america",
      markets: [
        {
          city: "New York, NY",
          country: "USA",
          change: "+5.2%",
          trend: "up",
          price: "$1,245/sf",
          volume: "$89.2B",
          topSector: "Office",
          image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&q=80"
        },
        {
          city: "Los Angeles, CA",
          country: "USA",
          change: "+3.8%",
          trend: "up",
          price: "$892/sf",
          volume: "$45.1B",
          topSector: "Multifamily",
          image: "https://images.unsplash.com/photo-1444723121441-7a8b7de03dad?w=800&q=80"
        },
        {
          city: "Toronto, ON",
          country: "Canada",
          change: "+7.1%",
          trend: "up",
          price: "$615/sf",
          volume: "$23.7B",
          topSector: "Industrial",
          image: "https://images.unsplash.com/photo-1517391494239-8dd95b4e0da9?w=800&q=80"
        }
      ]
    },
    {
      region: "Europe", 
      regionCode: "europe",
      markets: [
        {
          city: "London, UK",
          country: "United Kingdom",
          change: "+2.4%",
          trend: "up",
          price: "$1,156/sf",
          volume: "$34.8B",
          topSector: "Office",
          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
        },
        {
          city: "Paris, France",
          country: "France",
          change: "+4.1%",
          trend: "up",
          price: "$978/sf",
          volume: "$28.3B",
          topSector: "Retail",
          image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&q=80"
        },
        {
          city: "Berlin, Germany",
          country: "Germany",
          change: "+6.8%",
          trend: "up",
          price: "$567/sf",
          volume: "$19.2B",
          topSector: "Multifamily",
          image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=800&q=80"
        }
      ]
    },
    {
      region: "Asia Pacific",
      regionCode: "asia-pacific", 
      markets: [
        {
          city: "Tokyo, Japan",
          country: "Japan",
          change: "+1.8%",
          trend: "up",
          price: "$1,034/sf",
          volume: "$41.5B",
          topSector: "Office",
          image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80"
        },
        {
          city: "Singapore",
          country: "Singapore",
          change: "+9.3%",
          trend: "up",
          price: "$1,287/sf",
          volume: "$15.7B",
          topSector: "Industrial",
          image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80"
        },
        {
          city: "Sydney, Australia",
          country: "Australia",
          change: "+3.7%",
          trend: "up",
          price: "$789/sf",
          volume: "$22.1B",
          topSector: "Retail",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        }
      ]
    }
  ];

  const sectorPerformance = [
    {
      sector: "Office",
      performance: "+4.2%",
      trend: "up",
      volume: "$387B",
      avgCapRate: "6.2%",
      outlook: "Positive",
      description: "Flight to quality driving premium office demand",
      topMarkets: ["New York", "London", "Tokyo"],
      color: "blue"
    },
    {
      sector: "Industrial",
      performance: "+12.8%",
      trend: "up", 
      volume: "$245B",
      avgCapRate: "5.8%",
      outlook: "Very Positive",
      description: "E-commerce and supply chain driving strong fundamentals",
      topMarkets: ["Los Angeles", "Singapore", "Frankfurt"],
      color: "green"
    },
    {
      sector: "Retail",
      performance: "+2.1%",
      trend: "up",
      volume: "$156B",
      avgCapRate: "7.1%",
      outlook: "Selective",
      description: "Experiential retail and necessity-based formats leading",
      topMarkets: ["Paris", "Sydney", "Dubai"],
      color: "purple"
    },
    {
      sector: "Multifamily",
      performance: "+8.9%",
      trend: "up",
      volume: "$198B",
      avgCapRate: "5.2%",
      outlook: "Positive",
      description: "Housing shortage supporting rental fundamentals",
      topMarkets: ["Los Angeles", "Berlin", "Vancouver"],
      color: "orange"
    },
    {
      sector: "Healthcare",
      performance: "+6.4%",
      trend: "up",
      volume: "$89B",
      avgCapRate: "6.8%",
      outlook: "Positive",
      description: "Aging demographics driving medical real estate demand",
      topMarkets: ["Chicago", "Munich", "Melbourne"],
      color: "red"
    },
    {
      sector: "Student Housing",
      performance: "+5.7%",
      trend: "up",
      volume: "$34B",
      avgCapRate: "5.9%",
      outlook: "Stable",
      description: "University expansion supporting purpose-built demand",
      topMarkets: ["Boston", "Oxford", "Melbourne"],
      color: "indigo"
    }
  ];

  const investmentOpportunities = [
    {
      title: "Industrial Last-Mile Logistics",
      region: "North America",
      sector: "Industrial",
      riskLevel: "Low",
      targetReturn: "8-12%",
      timeHorizon: "5-7 years",
      investmentSize: "$50M - $500M",
      description: "Prime urban infill logistics facilities serving e-commerce distribution",
      keyDrivers: ["E-commerce growth", "Same-day delivery", "Urban densification"],
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80"
    },
    {
      title: "European Data Centers",
      region: "Europe",
      sector: "Industrial",
      riskLevel: "Medium",
      targetReturn: "12-18%",
      timeHorizon: "7-10 years",
      investmentSize: "$100M - $1B",
      description: "Hyperscale data centers in key European connectivity hubs",
      keyDrivers: ["Digital transformation", "Cloud migration", "5G rollout"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
      title: "Asia Pacific Build-to-Rent",
      region: "Asia Pacific",
      sector: "Residential",
      riskLevel: "Medium-High",
      targetReturn: "15-22%",
      timeHorizon: "4-6 years",
      investmentSize: "$25M - $250M",
      description: "Institutional-quality rental communities in high-growth Asian cities",
      keyDrivers: ["Urbanization", "Rental culture shift", "Institutional adoption"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
    }
  ];

  const filteredRegions = selectedRegion === "all" ? regionalTrends : regionalTrends.filter(r => r.regionCode === selectedRegion);
  const filteredSectors = selectedSector === "all" ? sectorPerformance : sectorPerformance.filter(s => s.sector.toLowerCase().replace(/\s+/g, '-') === selectedSector);
  const filteredOpportunities = investmentOpportunities.filter(opp => {
    const regionMatch = selectedRegion === "all" || opp.region.toLowerCase().replace(/\s+/g, '-') === selectedRegion;
    const sectorMatch = selectedSector === "all" || opp.sector.toLowerCase() === selectedSector;
    return regionMatch && sectorMatch;
  });


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">

        {/* Filter Controls */}
        <section className="py-6 bg-muted/30 border-b">
          <div className="container mx-auto px-6">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 mb-6 text-sm">
              <Home className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Market Intelligence</span>
              {selectedRegion !== "all" && (
                <>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground font-medium">
                    {regions.find(r => r.value === selectedRegion)?.label}
                  </span>
                </>
              )}
              {selectedCountry !== "all" && (
                <>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground font-medium">
                    {currentCountries.find(c => c.value === selectedCountry)?.label}
                  </span>
                </>
              )}
              {selectedCity !== "all" && (
                <>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground font-medium">
                    {currentCities.find(c => c.value === selectedCity)?.label}
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center justify-end mb-4">
              {(selectedRegion !== "all" || selectedSector !== "all") && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setSelectedRegion("all");
                    setSelectedCountry("all"); 
                    setSelectedCity("all");
                    setSelectorSector("all");
                    setSelectedSubSector("all");
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear All
                </Button>
              )}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Region</label>
                <Select value={selectedRegion} onValueChange={handleRegionChange}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region.value} value={region.value}>
                        {region.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Country</label>
                <Select value={selectedCountry} onValueChange={handleCountryChange} disabled={selectedRegion === "all"}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="All Countries" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentCountries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">City</label>
                <Select value={selectedCity} onValueChange={setSelectedCity} disabled={selectedCountry === "all"}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="All Cities" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentCities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Sector</label>
                <Select value={selectedSector} onValueChange={handleSectorChange}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="All Sectors" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector.value} value={sector.value}>
                        {sector.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Sub-Sector</label>
                <Select value={selectedSubSector} onValueChange={setSelectedSubSector} disabled={selectedSector === "all"}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="All Sub-Sectors" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentSubSectors.map((subSector) => (
                      <SelectItem key={subSector.value} value={subSector.value}>
                        {subSector.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedRegion !== "all" || selectedSector !== "all") && (
              <div className="mt-4 pt-3 border-t border-border/30">
                <div className="flex flex-wrap gap-1.5">
                  {selectedRegion !== "all" && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {regions.find(r => r.value === selectedRegion)?.label}
                    </Badge>
                  )}
                  {selectedCountry !== "all" && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {currentCountries.find(c => c.value === selectedCountry)?.label}
                    </Badge>
                  )}
                  {selectedCity !== "all" && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {currentCities.find(c => c.value === selectedCity)?.label}
                    </Badge>
                  )}
                  {selectedSector !== "all" && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {sectors.find(s => s.value === selectedSector)?.label}
                    </Badge>
                  )}
                  {selectedSubSector !== "all" && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {currentSubSectors.find(s => s.value === selectedSubSector)?.label}
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Market Metrics Dashboard */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-6">

            {/* Market Activity Section */}
            <div className="mb-8">
              <h3 className="font-accent text-xl font-semibold text-foreground mb-4">Market Activity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {loading ? (
                  Array.from({ length: 4 }).map((_, index) => (
                    <Card key={index} className="p-4 bg-background border">
                      <div className="animate-pulse">
                        <div className="h-4 bg-muted rounded mb-3"></div>
                        <div className="h-6 bg-muted rounded mb-2"></div>
                        <div className="h-3 bg-muted rounded"></div>
                      </div>
                    </Card>
                  ))
                ) : error ? (
                  <Card className="p-4 bg-background border col-span-4">
                    <p className="text-destructive">Error loading market data: {error}</p>
                  </Card>
                ) : getMetricsByCategory('market_activity').length > 0 ? (
                  getMetricsByCategory('market_activity').map((metric, index) => {
                  const isPositive = metric.change_direction === "up";
                  const changePercentage = metric.change_percentage ? `${metric.change_percentage > 0 ? '+' : ''}${metric.change_percentage}%` : 'N/A';
                  const sparklineData = metric.sparkline_data || [1, 2, 3, 4, 5, 6, 7];
                  
                  return (
                    <Card key={metric.id} className="p-4 hover:shadow-lg transition-all duration-200 bg-background border">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-muted/50">
                          <Activity className="w-4 h-4 text-foreground" />
                        </div>
                        <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          <span>{changePercentage}</span>
                        </div>
                      </div>
                      
                      <div className="h-4 mb-3">
                        <svg className="w-full h-full" viewBox="0 0 100 16">
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className={`${isPositive ? 'text-green-500/60' : 'text-red-500/60'}`}
                            points={Array.isArray(sparklineData) ? sparklineData.map((value, i) => 
                              `${(i / (sparklineData.length - 1)) * 100},${16 - (value / Math.max(...sparklineData)) * 14}`
                            ).join(' ') : '0,8 100,8'}
                          />
                        </svg>
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-foreground">{metric.current_value}</h4>
                        <h5 className="text-sm font-medium text-foreground">{metric.metric_name}</h5>
                        <p className="text-xs text-muted-foreground">{metric.metric_family}</p>
                      </div>
                    </Card>
                  );
                })) : (
                  coreKPIFamilies["market-activity"].map((kpi, index) => {
                  const isPositive = kpi.trend === "up";
                  const IconComponent = kpi.icon;
                  return (
                    <Card key={index} className="p-4 hover:shadow-lg transition-all duration-200 bg-background border">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-muted/50">
                          <IconComponent className="w-4 h-4 text-foreground" />
                        </div>
                        <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          <span>{kpi.change}</span>
                        </div>
                      </div>
                      
                      <div className="h-4 mb-3">
                        <svg className="w-full h-full" viewBox="0 0 100 16">
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className={`${isPositive ? 'text-green-500/60' : 'text-red-500/60'}`}
                            points={kpi.sparkline.map((value, i) => 
                              `${(i / (kpi.sparkline.length - 1)) * 100},${16 - (value / Math.max(...kpi.sparkline)) * 14}`
                            ).join(' ')}
                          />
                        </svg>
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-foreground">{kpi.value}</h4>
                        <h5 className="text-sm font-medium text-foreground">{kpi.title}</h5>
                        <p className="text-xs text-muted-foreground">{kpi.description}</p>
                      </div>
                    </Card>
                  );
                }))}
              </div>
            </div>

            {/* Investment Metrics Section */}
            <div className="mb-8">
              <h3 className="font-accent text-xl font-semibold text-foreground mb-4">Investment Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  coreKPIFamilies["valuation-returns"][1], // Cap Rate
                  coreKPIFamilies["occupancy-demand"][0], // Vacancy Rate
                  coreKPIFamilies["occupancy-demand"][1], // Net Absorption
                  coreKPIFamilies["supply-pipeline"][0] // Under Construction
                ].map((kpi, index) => {
                  const isPositive = kpi.trend === "up";
                  const IconComponent = kpi.icon;
                  return (
                    <Card key={index} className="p-4 hover:shadow-lg transition-all duration-200 bg-background border">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-muted/50">
                          <IconComponent className="w-4 h-4 text-foreground" />
                        </div>
                        <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          <span>{kpi.change}</span>
                        </div>
                      </div>
                      
                      <div className="h-4 mb-3">
                        <svg className="w-full h-full" viewBox="0 0 100 16">
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className={`${isPositive ? 'text-green-500/60' : 'text-red-500/60'}`}
                            points={kpi.sparkline.map((value, i) => 
                              `${(i / (kpi.sparkline.length - 1)) * 100},${16 - (value / Math.max(...kpi.sparkline)) * 14}`
                            ).join(' ')}
                          />
                        </svg>
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-foreground">{kpi.value}</h4>
                        <h5 className="text-sm font-medium text-foreground">{kpi.title}</h5>
                        <p className="text-xs text-muted-foreground">{kpi.description}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Financing Metrics Section */}
            <div className="mb-8">
              <h3 className="font-accent text-xl font-semibold text-foreground mb-4">Financing Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  coreKPIFamilies["financing-cost"][0], // Loan Rate
                  coreKPIFamilies["financing-cost"][1], // % Transactions Financed
                  coreKPIFamilies["sentiment-access"][0], // Cap Rate Spread
                  // Add a placeholder for the 4th card or duplicate one if needed
                  coreKPIFamilies["financing-cost"][0] // Duplicate for now to fill the row
                ].slice(0, 3).map((kpi, index) => { // Only show first 3 to match your specification
                  const isPositive = kpi.trend === "up";
                  const IconComponent = kpi.icon;
                  return (
                    <Card key={index} className="p-4 hover:shadow-lg transition-all duration-200 bg-background border">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-muted/50">
                          <IconComponent className="w-4 h-4 text-foreground" />
                        </div>
                        <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          <span>{kpi.change}</span>
                        </div>
                      </div>
                      
                      <div className="h-4 mb-3">
                        <svg className="w-full h-full" viewBox="0 0 100 16">
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className={`${isPositive ? 'text-green-500/60' : 'text-red-500/60'}`}
                            points={kpi.sparkline.map((value, i) => 
                              `${(i / (kpi.sparkline.length - 1)) * 100},${16 - (value / Math.max(...kpi.sparkline)) * 14}`
                            ).join(' ')}
                          />
                        </svg>
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-foreground">{kpi.value}</h4>
                        <h5 className="text-sm font-medium text-foreground">{kpi.title}</h5>
                        <p className="text-xs text-muted-foreground">{kpi.description}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

          </div>
        </section>


        {/* Sector-Specific Intelligence */}
        {selectedSubSector !== "all" && sectorSpecificMetrics[selectedSubSector as keyof typeof sectorSpecificMetrics] && (
          <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-6">
              <div className="mb-8">
                <h2 className="font-primary text-3xl font-semibold text-foreground mb-2">
                  {sectorSpecificMetrics[selectedSubSector as keyof typeof sectorSpecificMetrics].title}
                </h2>
                <p className="text-muted-foreground">
                  Deep dive metrics specific to {selectedSubSector} market dynamics
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {sectorSpecificMetrics[selectedSubSector as keyof typeof sectorSpecificMetrics].metrics.map((metric, index) => {
                  const isPositive = metric.trend === "up";
                  return (
                    <Card key={index} className="p-4 text-center hover-lift transition-all duration-300">
                      <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                      <div className="text-sm font-medium text-foreground mb-2">{metric.label}</div>
                      <div className={`flex items-center justify-center gap-1 text-xs ${isPositive ? 'text-primary' : 'text-destructive'}`}>
                        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        <span>{metric.change}</span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        )}




        {/* Trending People */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <h3 className="font-accent text-xl font-semibold text-foreground mb-4">Trending People</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <Card key={index} className="p-4 bg-background border">
                    <div className="animate-pulse">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-full bg-muted"></div>
                        <div className="w-16 h-4 bg-muted rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded"></div>
                        <div className="h-3 bg-muted rounded w-3/4"></div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : trendingPeople.length > 0 ? (
                trendingPeople.map((person, index) => {
                  const changePercentage = person.change_percentage ? `${person.change_percentage > 0 ? '+' : ''}${person.change_percentage}%` : '';
                  return (
                    <Card key={person.id} className="p-4 hover:shadow-lg transition-all duration-200 bg-background border">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-sm font-medium text-foreground">
                            {person.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        {changePercentage && (
                          <Badge variant="outline" className="text-xs">
                            {changePercentage}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-1 mb-3">
                        <h4 className="text-sm font-semibold text-foreground">{person.name}</h4>
                        <p className="text-xs text-muted-foreground">{person.position}</p>
                        <p className="text-xs font-medium text-primary">{person.company}</p>
                      </div>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {person.description}
                      </p>
                    </Card>
                  );
                })
              ) : (
                [
                  {
                    name: "Sarah Chen",
                    title: "Head of Real Estate",
                    company: "BlackRock",
                    trend: "Leading $2.3B industrial acquisition spree",
                    expertise: "Industrial & Logistics"
                  },
                  {
                    name: "Marcus Rodriguez", 
                    title: "CEO & Founder",
                    company: "PropTech Ventures",
                    trend: "Closed $150M Series C",
                    expertise: "PropTech Innovation"
                  },
                  {
                    name: "Jennifer Walsh",
                    title: "Managing Director", 
                    company: "CBRE Capital Markets",
                    trend: "Structured €800M portfolio sale",
                    expertise: "Capital Markets"
                  },
                  {
                    name: "David Kim",
                    title: "Senior Vice President",
                    company: "Prologis", 
                    trend: "Pioneering sustainable logistics",
                    expertise: "Sustainable Development"
                  }
                ].map((person, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-200 bg-background border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium text-foreground">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {person.expertise}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 mb-3">
                    <h4 className="text-sm font-semibold text-foreground">{person.name}</h4>
                    <p className="text-xs text-muted-foreground">{person.title}</p>
                    <p className="text-xs font-medium text-primary">{person.company}</p>
                  </div>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {person.trend}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Projects */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <h3 className="font-accent text-xl font-semibold text-foreground mb-4">Trending Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: "Hudson Yards Phase III",
                  location: "New York, NY",
                  value: "$4.2B",
                  status: "Under Construction",
                  completion: "Q3 2026",
                  type: "Mixed-Use"
                },
                {
                  name: "Amazon HQ2 Expansion",
                  location: "Arlington, VA", 
                  value: "$2.5B",
                  status: "Phase 1 Complete",
                  completion: "Q4 2025",
                  type: "Corporate Campus"
                },
                {
                  name: "Canary Wharf Life Sciences",
                  location: "London, UK",
                  value: "£1.8B",
                  status: "Pre-Development", 
                  completion: "Q2 2027",
                  type: "Life Sciences"
                },
                {
                  name: "Marina Bay Financial",
                  location: "Singapore",
                  value: "S$3.2B",
                  status: "Under Construction",
                  completion: "Q1 2026", 
                  type: "Financial Hub"
                }
              ].map((project, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-200 bg-background border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-muted/50">
                      <Building className="w-4 h-4 text-foreground" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 mb-3">
                    <h4 className="text-sm font-semibold text-foreground">{project.name}</h4>
                    <p className="text-xs text-muted-foreground">{project.location}</p>
                    <p className="text-xs font-medium text-primary">{project.value}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{project.type}</span>
                    <span>{project.completion}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default MarketTrends;