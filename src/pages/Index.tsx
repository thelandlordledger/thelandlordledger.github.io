import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarketDashboard } from "@/components/MarketDashboard";
import { FeaturedAnalysis } from "@/components/FeaturedAnalysis";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      <main>
        <HeroSection />
        <MarketDashboard />
        <FeaturedAnalysis />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
