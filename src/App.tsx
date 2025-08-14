import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MarketTrends from "./pages/MarketTrends";
import KeyDeals from "./pages/KeyDeals";
import MarketComparisons from "./pages/MarketComparisons";
import Events from "./pages/Events";
import Admin from "./pages/Admin";
import MarketAnalysis from "./pages/MarketAnalysis";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/market-trends" element={<MarketTrends />} />
          <Route path="/key-deals" element={<KeyDeals />} />
          <Route path="/market-comparisons" element={<MarketComparisons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/article/:slugOrId" element={<ArticleDetail />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
