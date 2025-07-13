import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Building2,
  TrendingUp,
  DollarSign,
  MapPin,
  Calculator,
  ArrowUpIcon,
  Paperclip,
  Bot,
  User,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  BarChart3,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isLoading?: boolean;
}

const AIChat = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const initialQuery = searchParams.get("q");

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle initial query
  useEffect(() => {
    if (initialQuery && messages.length === 0) {
      handleSubmit(initialQuery);
    }
  }, [initialQuery, messages.length]);

  // Mock AI responses based on query content
  const generateAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("market") || lowerQuery.includes("trend")) {
      return `# Market Analysis Report

Based on current data, here are the key market trends:

## 🏠 Residential Market
- **National median price**: $425,900 (+2.4% YoY)
- **Days on market**: 28 days (-5.2% from last month)
- **Inventory levels**: 3.2 months of supply

## 🏢 Commercial Sector
- **Cap rates**: 5.8% average across all property types
- **Investment volume**: $847.2B (+12.8% YoY)
- **Vacancy rates**: 8.3% office, 4.1% industrial

## 📈 Key Insights
1. **Sunbelt markets** showing strongest growth (Austin +15.2%, Tampa +12.8%)
2. **Industrial real estate** remains hot with 97% occupancy rates
3. **Interest rate stabilization** boosting buyer confidence

*Data updated in real-time from MLS, CoStar, and federal sources.*`;
    }

    if (lowerQuery.includes("price") || lowerQuery.includes("valuation") || lowerQuery.includes("value")) {
      return `# Property Valuation Analysis

## 🏡 Automated Valuation Model (AVM)

For accurate property valuation, I analyze multiple data points:

### Core Factors
- **Comparable sales** (last 6 months within 0.5 miles)
- **Property characteristics** (size, age, condition, features)
- **Market conditions** (supply/demand, seasonal trends)
- **Location premium** (schools, amenities, transportation)

### Sample Valuation Breakdown
- **Base value**: $450,000
- **Location adjustment**: +$35,000 (8%)
- **Condition premium**: +$15,000 (3%)
- **Market timing**: +$12,000 (2.7%)
- **Estimated value**: **$512,000**

### 📊 Confidence Metrics
- **Accuracy**: 94.2% (within 5% of actual sales)
- **Data freshness**: Updated daily
- **Comparable count**: 47 recent sales analyzed

*For a detailed property report, please provide the specific address.*`;
    }

    if (lowerQuery.includes("investment") || lowerQuery.includes("roi") || lowerQuery.includes("return")) {
      return `# Investment Opportunity Analysis

## 💰 High-Yield Investment Strategies

### 🏆 Top Performing Sectors
1. **Industrial REITs** - 12.3% annual returns
2. **Multifamily developments** - 9.8% cash-on-cash returns
3. **Data center properties** - 11.5% cap rates

### 📍 Emerging Markets
- **Austin, TX**: 15.2% appreciation, strong job growth
- **Tampa, FL**: 12.8% YoY growth, population influx
- **Nashville, TN**: 11.4% returns, entertainment hub expansion

### 🧮 Investment Calculator
**Example: $100k investment**
- **Down payment**: $25,000 (25%)
- **Monthly cash flow**: $485
- **Annual return**: 23.3% total return
- **Break-even**: 18 months

### Risk Assessment
- **Market volatility**: Low-Medium
- **Liquidity risk**: Medium
- **Interest rate sensitivity**: High

*Customize analysis for your specific investment criteria and risk tolerance.*`;
    }

    if (lowerQuery.includes("location") || lowerQuery.includes("neighborhood") || lowerQuery.includes("area")) {
      return `# Location Intelligence Report

## 🗺️ Neighborhood Analysis

### 📈 Growth Indicators
- **Population growth**: +3.2% annually
- **Median income**: $78,500 (+5.1% YoY)
- **Employment rate**: 96.8%
- **New construction**: 247 units planned

### 🏫 Quality of Life Metrics
- **School ratings**: 8.5/10 average
- **Crime rate**: 15% below national average
- **Walkability score**: 67/100
- **Transit access**: 4 bus routes, 1 metro line

### 🛍️ Local Amenities
- **Shopping**: 3 major centers within 2 miles
- **Dining**: 45+ restaurants, 12 coffee shops
- **Recreation**: 2 parks, community center, golf course
- **Healthcare**: Regional medical center 1.5 miles

### 💡 Investment Outlook
- **Appreciation forecast**: 8-12% over next 3 years
- **Rental demand**: High (95% occupancy rates)
- **Development pipeline**: $50M in planned infrastructure

*Detailed micro-market analysis available for specific zip codes.*`;
    }

    // Default response
    return `# Real Estate Intelligence

Thank you for your question! I'm your AI-powered real estate assistant with access to:

## 🔍 Comprehensive Data Sources
- **MLS databases** across 400+ markets
- **Commercial property data** from CoStar & LoopNet
- **Economic indicators** from federal agencies
- **Local market insights** from 50,000+ agents

## 🎯 What I Can Help With
- **Market analysis** and trend forecasting
- **Property valuations** using advanced algorithms
- **Investment strategies** and ROI calculations
- **Location research** and neighborhood insights
- **Deal analysis** and risk assessment

## 📊 Real-Time Capabilities
- Live market data updates every 15 minutes
- Predictive modeling with 94% accuracy
- Custom reports generated in seconds
- Integration with major real estate platforms

Feel free to ask me anything about real estate markets, specific properties, investment opportunities, or market trends!

*Ask me something specific like "What are the best investment opportunities in Austin?" or "Analyze the residential market trends in Q4 2024"*`;
  };

  const handleSubmit = async (query?: string) => {
    const messageContent = query || inputValue.trim();
    if (!messageContent) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateAIResponse(messageContent),
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const quickActions = [
    { icon: TrendingUp, label: "Market Trends", query: "What are the current real estate market trends?" },
    { icon: DollarSign, label: "Property Value", query: "How do I determine property value?" },
    { icon: MapPin, label: "Best Locations", query: "What are the best investment locations right now?" },
    { icon: Building2, label: "Investment Types", query: "What types of real estate investments should I consider?" },
    { icon: Calculator, label: "ROI Analysis", query: "How do I calculate ROI for real estate investments?" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-primary font-bold text-foreground">
                Real Estate AI Assistant
              </h1>
            </div>
            <p className="text-muted-foreground">
              Get expert insights on market trends, property values, and investment opportunities
            </p>
          </div>

          {/* Messages */}
          <div className="space-y-6 mb-8">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Ready to explore real estate intelligence?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ask me anything about markets, properties, or investments
                </p>
                
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSubmit(action.query)}
                      className="flex items-center gap-2"
                    >
                      <action.icon className="w-4 h-4" />
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-4",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
                
                <Card className={cn(
                  "max-w-3xl p-4",
                  message.role === "user" 
                    ? "bg-primary text-primary-foreground ml-12" 
                    : "bg-card"
                )}>
                  {message.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <div dangerouslySetInnerHTML={{ 
                        __html: message.content
                          .replace(/^# (.*$)/gm, '<h1 class="text-xl font-bold mb-3 text-foreground">$1</h1>')
                          .replace(/^## (.*$)/gm, '<h2 class="text-lg font-semibold mb-2 text-foreground">$1</h2>')
                          .replace(/^### (.*$)/gm, '<h3 class="text-base font-medium mb-2 text-foreground">$1</h3>')
                          .replace(/^\*\*(.*?)\*\*/gm, '<strong class="font-semibold text-foreground">$1</strong>')
                          .replace(/^\*(.*?)$/gm, '<em class="text-muted-foreground">$1</em>')
                          .replace(/^- (.*$)/gm, '<li class="text-foreground">$1</li>')
                          .replace(/^(\d+)\. (.*$)/gm, '<li class="text-foreground">$2</li>')
                          .replace(/\n/g, '<br/>')
                      }} />
                    </div>
                  ) : (
                    <p className="text-sm">{message.content}</p>
                  )}
                  
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </Card>

                {message.role === "user" && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary animate-pulse" />
                  </div>
                </div>
                <Card className="max-w-3xl p-4 bg-card">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">Analyzing market data...</span>
                  </div>
                </Card>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <Card className="p-4 sticky bottom-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about market trends, property values, investment strategies..."
                  className="min-h-[50px] max-h-32 resize-none border-0 bg-transparent focus-visible:ring-0 text-foreground"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Button 
                  onClick={() => handleSubmit()}
                  disabled={!inputValue.trim() || isLoading}
                  className="px-3 py-2"
                >
                  <ArrowUpIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIChat;