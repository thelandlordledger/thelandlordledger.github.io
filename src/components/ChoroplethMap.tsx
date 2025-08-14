import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapIcon, TrendingUp, TrendingDown, Info } from "lucide-react";

interface RegionData {
  id: string;
  name: string;
  pricePerSF: number;
  change: number;
  trend: "up" | "down";
  volume: string;
  vacancy: number;
  capRate: number;
  currency: string;
}

interface ChoroplethMapProps {
  selectedRegion?: string;
  selectedTimeWindow?: string;
}

const ChoroplethMap = ({ selectedRegion = "all", selectedTimeWindow = "rolling-12" }: ChoroplethMapProps) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedMapRegion, setSelectedMapRegion] = useState<string | null>(null);

  // Sample regional data - in a real app this would come from your API
  const regionData: Record<string, RegionData> = {
    "north-america": {
      id: "north-america",
      name: "North America",
      pricePerSF: 485,
      change: 8.2,
      trend: "up",
      volume: "$892B",
      vacancy: 11.4,
      capRate: 6.2,
      currency: "USD"
    },
    "europe": {
      id: "europe", 
      name: "Europe",
      pricePerSF: 520,
      change: 5.7,
      trend: "up",
      volume: "$245B",
      vacancy: 9.8,
      capRate: 5.8,
      currency: "EUR"
    },
    "asia-pacific": {
      id: "asia-pacific",
      name: "Asia Pacific", 
      pricePerSF: 680,
      change: 12.3,
      trend: "up",
      volume: "$156B",
      vacancy: 7.2,
      capRate: 4.9,
      currency: "USD"
    },
    "latin-america": {
      id: "latin-america",
      name: "Latin America",
      pricePerSF: 195,
      change: -2.1,
      trend: "down",
      volume: "$45B",
      vacancy: 15.6,
      capRate: 8.4,
      currency: "USD"
    },
    "middle-east-africa": {
      id: "middle-east-africa",
      name: "Middle East & Africa",
      pricePerSF: 290,
      change: 6.8,
      trend: "up",
      volume: "$67B",
      vacancy: 12.3,
      capRate: 7.2,
      currency: "USD"
    }
  };

  // Color scale based on price per SF
  const getRegionColor = (pricePerSF: number, isHovered: boolean, isSelected: boolean) => {
    let baseColor = "";
    
    if (pricePerSF >= 600) baseColor = "#dc2626"; // High - Red
    else if (pricePerSF >= 400) baseColor = "#ea580c"; // Medium-High - Orange  
    else if (pricePerSF >= 300) baseColor = "#f59e0b"; // Medium - Amber
    else if (pricePerSF >= 200) baseColor = "#10b981"; // Medium-Low - Green
    else baseColor = "#06b6d4"; // Low - Cyan

    if (isSelected) return baseColor;
    if (isHovered) return baseColor + "CC"; // Add transparency on hover
    return baseColor + "99"; // Default transparency
  };

  const getStrokeColor = (regionId: string) => {
    if (selectedMapRegion === regionId) return "#1f2937";
    if (hoveredRegion === regionId) return "#374151";
    return "#6b7280";
  };

  const currentData = hoveredRegion ? regionData[hoveredRegion] : selectedMapRegion ? regionData[selectedMapRegion] : null;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-accent font-semibold text-foreground">Global Price Heat Map</h3>
          <Badge variant="outline" className="text-xs">
            {selectedTimeWindow.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </Badge>
        </div>
        <MapIcon className="w-5 h-5 text-primary" />
      </div>

      <div className="relative">
        {/* World Map SVG */}
        <svg 
          viewBox="0 0 1000 500" 
          className="w-full h-auto border rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800"
        >
          {/* North America */}
          <path
            d="M50 100 L280 80 L300 150 L250 200 L200 180 L150 220 L100 200 L70 160 Z"
            fill={getRegionColor(regionData["north-america"].pricePerSF, hoveredRegion === "north-america", selectedMapRegion === "north-america")}
            stroke={getStrokeColor("north-america")}
            strokeWidth="2"
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => setHoveredRegion("north-america")}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedMapRegion(selectedMapRegion === "north-america" ? null : "north-america")}
          />
          
          {/* Europe */}
          <path
            d="M400 120 L550 100 L570 140 L540 180 L480 170 L450 150 Z"
            fill={getRegionColor(regionData["europe"].pricePerSF, hoveredRegion === "europe", selectedMapRegion === "europe")}
            stroke={getStrokeColor("europe")}
            strokeWidth="2"
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => setHoveredRegion("europe")}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedMapRegion(selectedMapRegion === "europe" ? null : "europe")}
          />

          {/* Asia Pacific */}
          <path
            d="M600 80 L850 90 L900 140 L880 200 L800 220 L700 200 L650 160 L620 120 Z"
            fill={getRegionColor(regionData["asia-pacific"].pricePerSF, hoveredRegion === "asia-pacific", selectedMapRegion === "asia-pacific")}
            stroke={getStrokeColor("asia-pacific")}
            strokeWidth="2"
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => setHoveredRegion("asia-pacific")}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedMapRegion(selectedMapRegion === "asia-pacific" ? null : "asia-pacific")}
          />

          {/* Latin America */}
          <path
            d="M150 250 L280 240 L300 320 L250 380 L200 360 L170 300 Z"
            fill={getRegionColor(regionData["latin-america"].pricePerSF, hoveredRegion === "latin-america", selectedMapRegion === "latin-america")}
            stroke={getStrokeColor("latin-america")}
            strokeWidth="2"
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => setHoveredRegion("latin-america")}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedMapRegion(selectedMapRegion === "latin-america" ? null : "latin-america")}
          />

          {/* Middle East & Africa */}
          <path
            d="M450 200 L650 190 L680 280 L620 360 L520 350 L480 280 Z"
            fill={getRegionColor(regionData["middle-east-africa"].pricePerSF, hoveredRegion === "middle-east-africa", selectedMapRegion === "middle-east-africa")}
            stroke={getStrokeColor("middle-east-africa")}
            strokeWidth="2"
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => setHoveredRegion("middle-east-africa")}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedMapRegion(selectedMapRegion === "middle-east-africa" ? null : "middle-east-africa")}
          />

          {/* Region Labels */}
          <text x="165" y="150" textAnchor="middle" className="text-xs font-medium fill-slate-700 dark:fill-slate-300 pointer-events-none">
            North America
          </text>
          <text x="495" y="140" textAnchor="middle" className="text-xs font-medium fill-slate-700 dark:fill-slate-300 pointer-events-none">
            Europe
          </text>
          <text x="725" y="140" textAnchor="middle" className="text-xs font-medium fill-slate-700 dark:fill-slate-300 pointer-events-none">
            Asia Pacific
          </text>
          <text x="215" y="300" textAnchor="middle" className="text-xs font-medium fill-slate-700 dark:fill-slate-300 pointer-events-none">
            Latin America
          </text>
          <text x="550" y="280" textAnchor="middle" className="text-xs font-medium fill-slate-700 dark:fill-slate-300 pointer-events-none">
            MEA
          </text>
        </svg>

        {/* Color Legend */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border rounded-lg p-3">
          <div className="text-xs font-medium text-foreground mb-2">Price per SF ({regionData["north-america"].currency})</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#06b6d4" }}></div>
              <span className="text-xs text-muted-foreground">Low</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#10b981" }}></div>
              <span className="text-xs text-muted-foreground">Med-Low</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#f59e0b" }}></div>
              <span className="text-xs text-muted-foreground">Medium</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#ea580c" }}></div>
              <span className="text-xs text-muted-foreground">Med-High</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#dc2626" }}></div>
              <span className="text-xs text-muted-foreground">High</span>
            </div>
          </div>
        </div>

        {/* Data Tooltip */}
        {currentData && (
          <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm border rounded-lg p-4 min-w-[240px]">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">{currentData.name}</h4>
              <Badge variant={currentData.trend === "up" ? "default" : "destructive"} className="text-xs">
                {currentData.trend === "up" ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {currentData.change > 0 ? "+" : ""}{currentData.change}%
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Price/SF:</span>
                <span className="text-sm font-medium">${currentData.pricePerSF}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Volume:</span>
                <span className="text-sm font-medium">{currentData.volume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Vacancy:</span>
                <span className="text-sm font-medium">{currentData.vacancy}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Cap Rate:</span>
                <span className="text-sm font-medium">{currentData.capRate}%</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-border/50">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Info className="w-3 h-3" />
                <span>Click to select • {selectedTimeWindow.replace('-', ' ')}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats Row */}
      <div className="mt-4 grid grid-cols-5 gap-4 pt-4 border-t border-border/50">
        {Object.values(regionData).map((region) => (
          <div 
            key={region.id}
            className={`text-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedMapRegion === region.id 
                ? 'bg-primary/10 border border-primary/30' 
                : 'bg-muted/30 hover:bg-muted/50'
            }`}
            onClick={() => setSelectedMapRegion(selectedMapRegion === region.id ? null : region.id)}
          >
            <div className="text-lg font-bold text-foreground">${region.pricePerSF}</div>
            <div className="text-xs text-muted-foreground mb-1">{region.name}</div>
            <div className={`text-xs flex items-center justify-center gap-1 ${
              region.trend === "up" ? 'text-primary' : 'text-destructive'
            }`}>
              {region.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {region.change > 0 ? "+" : ""}{region.change}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ChoroplethMap;