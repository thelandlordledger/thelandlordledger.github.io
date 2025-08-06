import { TrendingUp, TrendingDown, Home, Clock, DollarSign, Building, Users } from "lucide-react";

export const MarketTicker = () => {
  const marketData = [
    {
      label: "GLOBAL CRE DEALS",
      value: "$185B",
      change: "+34%",
      trend: "up",
      icon: DollarSign,
      description: "Q1 2025 commercial volumes"
    },
    {
      label: "US MORTGAGE RATES",
      value: "6.7%",
      change: "+20yr high",
      trend: "up",
      icon: Home,
      description: "30-year fixed rate mortgage"
    },
    {
      label: "CAPITAL FLOWS",
      value: "+57%",
      change: "YoY",
      trend: "up",
      icon: TrendingUp,
      description: "International real estate investment"
    },
    {
      label: "HOME LISTINGS",
      value: "+25%",
      change: "YoY",
      trend: "up",
      icon: Building,
      description: "US residential inventory"
    },
    {
      label: "PRIME RESIDENTIAL",
      value: "+2.8%",
      change: "Global",
      trend: "up",
      icon: Users,
      description: "Luxury market price growth"
    },
    {
      label: "SEOUL MARKET",
      value: "+18.4%",
      change: "YoY",
      trend: "up",
      icon: TrendingUp,
      description: "Fastest global city growth"
    }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50">
      <div className="relative overflow-hidden">
        {/* Animated ticker container */}
        <div className="flex animate-[scroll_45s_linear_infinite] whitespace-nowrap">
          {/* First set of data */}
          {marketData.map((data, index) => {
            const IconComponent = data.icon;
            const TrendIcon = data.trend === "up" ? TrendingUp : TrendingDown;
            
            return (
              <div key={`first-${index}`} className="flex items-center gap-6 px-8 py-3 min-w-fit">
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-full ${data.trend === "up" ? "bg-emerald-500/20" : "bg-red-500/20"}`}>
                    <IconComponent className="w-3 h-3 text-slate-300" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                      {data.label}
                    </span>
                    <span className="text-white font-bold text-sm">
                      {data.value}
                    </span>
                    <div className={`flex items-center gap-1 ${data.trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
                      <TrendIcon className="w-3 h-3" />
                      <span className="text-xs font-medium">{data.change}</span>
                    </div>
                  </div>
                </div>
                
                {/* Separator */}
                <div className="w-px h-4 bg-slate-600"></div>
              </div>
            );
          })}
          
          {/* Second set of data for seamless loop */}
          {marketData.map((data, index) => {
            const IconComponent = data.icon;
            const TrendIcon = data.trend === "up" ? TrendingUp : TrendingDown;
            
            return (
              <div key={`second-${index}`} className="flex items-center gap-6 px-8 py-3 min-w-fit">
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-full ${data.trend === "up" ? "bg-emerald-500/20" : "bg-red-500/20"}`}>
                    <IconComponent className="w-3 h-3 text-slate-300" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                      {data.label}
                    </span>
                    <span className="text-white font-bold text-sm">
                      {data.value}
                    </span>
                    <div className={`flex items-center gap-1 ${data.trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
                      <TrendIcon className="w-3 h-3" />
                      <span className="text-xs font-medium">{data.change}</span>
                    </div>
                  </div>
                </div>
                
                {/* Separator */}
                <div className="w-px h-4 bg-slate-600"></div>
              </div>
            );
          })}
        </div>
        
        {/* Live indicator */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-slate-300 text-xs font-medium">LIVE</span>
        </div>
      </div>
    </div>
  );
};