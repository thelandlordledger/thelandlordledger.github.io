import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarketDashboard } from "@/components/MarketDashboard";
import { FeaturedAnalysis } from "@/components/FeaturedAnalysis";
import { ContentCategories } from "@/components/ContentCategories";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MarketDashboard />
        <FeaturedAnalysis />
        <ContentCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
