import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Home,
  Building,
  BarChart3,
  RefreshCw
} from "lucide-react";

const marketMetrics = [
  {
    name: "National Home Price Index",
    value: "$425,000",
    change: "+3.2%",
    trend: "up",
    updated: "2025-01-10"
  },
  {
    name: "Mortgage Rates (30yr)",
    value: "6.75%",
    change: "-0.25%",
    trend: "down",
    updated: "2025-01-10"
  },
  {
    name: "Housing Inventory",
    value: "1.2M",
    change: "+8.5%",
    trend: "up",
    updated: "2025-01-09"
  },
  {
    name: "Days on Market",
    value: "28",
    change: "-5 days",
    trend: "down",
    updated: "2025-01-09"
  }
];

const regionalData = [
  {
    city: "New York",
    priceIndex: 678000,
    change: "+2.1%",
    inventory: "Low",
    trend: "up"
  },
  {
    city: "Los Angeles",
    priceIndex: 892000,
    change: "+1.8%",
    inventory: "Very Low",
    trend: "up"
  },
  {
    city: "Chicago",
    priceIndex: 324000,
    change: "+4.2%",
    inventory: "Medium",
    trend: "up"
  },
  {
    city: "Miami",
    priceIndex: 567000,
    change: "-0.5%",
    inventory: "Low",
    trend: "down"
  }
];

const majorDeals = [
  {
    property: "Manhattan Office Tower",
    price: "$1.2B",
    type: "Commercial",
    date: "2025-01-08",
    buyer: "Global Real Estate Fund"
  },
  {
    property: "Luxury Resort Portfolio",
    price: "$850M",
    type: "Hospitality",
    date: "2025-01-05",
    buyer: "Hotel Investment Group"
  },
  {
    property: "Industrial Logistics Center",
    price: "$445M",
    type: "Industrial",
    date: "2025-01-03",
    buyer: "Logistics REIT"
  }
];

export const MarketDataManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Market Data Management</h1>
          <p className="text-muted-foreground">
            Manage real estate market metrics, regional data, and major transactions
          </p>
        </div>
        <Button className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Sync Data
        </Button>
      </div>

      <Tabs defaultValue="metrics" className="space-y-6">
        <TabsList>
          <TabsTrigger value="metrics">Market Metrics</TabsTrigger>
          <TabsTrigger value="regional">Regional Data</TabsTrigger>
          <TabsTrigger value="deals">Major Deals</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>National Market Metrics</CardTitle>
              <CardDescription>
                Key performance indicators for the real estate market
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketMetrics.map((metric) => (
                  <Card key={metric.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {metric.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-600" />
                          )}
                          <span className="text-sm font-medium">{metric.name}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <div className="flex items-center justify-between text-sm">
                          <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>
                            {metric.change}
                          </span>
                          <span className="text-muted-foreground">
                            {new Date(metric.updated).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Update Market Data</CardTitle>
              <CardDescription>
                Manually update market metrics and indicators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="homePrice">Median Home Price</Label>
                  <Input id="homePrice" placeholder="$425,000" />
                </div>
                <div>
                  <Label htmlFor="mortgageRate">Mortgage Rate</Label>
                  <Input id="mortgageRate" placeholder="6.75%" />
                </div>
                <div>
                  <Label htmlFor="inventory">Housing Inventory</Label>
                  <Input id="inventory" placeholder="1.2M" />
                </div>
              </div>
              <Button className="mt-4">Update Metrics</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regional" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Regional Market Data</CardTitle>
              <CardDescription>
                City-specific market performance and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionalData.map((city) => (
                  <div key={city.city} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Building className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold">{city.city}</h3>
                        <p className="text-sm text-muted-foreground">
                          Median Price: ${city.priceIndex.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{city.inventory} Inventory</Badge>
                      <div className="flex items-center gap-1">
                        {city.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        <span className={`text-sm ${city.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {city.change}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Major Real Estate Transactions</CardTitle>
              <CardDescription>
                Track significant property deals and transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {majorDeals.map((deal, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <DollarSign className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold">{deal.property}</h3>
                        <p className="text-sm text-muted-foreground">
                          {deal.buyer} • {new Date(deal.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge>{deal.type}</Badge>
                      <div className="text-right">
                        <p className="font-bold text-lg">{deal.price}</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-4">Add New Deal</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Market Predictions & Forecasts</CardTitle>
              <CardDescription>
                AI-generated market predictions and trend analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <h3 className="font-semibold">Q2 2025 Forecast</h3>
                    </div>
                    <p className="text-sm">Home prices expected to rise 2.5-3.0% nationwide</p>
                    <Badge variant="outline" className="mt-2">High Confidence</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="h-5 w-5 text-red-600" />
                      <h3 className="font-semibold">Interest Rate Trend</h3>
                    </div>
                    <p className="text-sm">Mortgage rates may decrease 0.5% by summer</p>
                    <Badge variant="outline" className="mt-2">Medium Confidence</Badge>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};