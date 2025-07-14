import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedAnalysis } from "@/components/FeaturedAnalysis";
import { ContentCategories } from "@/components/ContentCategories";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      <main>
        <HeroSection />
        <FeaturedAnalysis />
        <ContentCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
