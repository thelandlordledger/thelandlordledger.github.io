import { RealEstateAIChat } from "@/components/ui/real-estate-ai-chat";

export const MarketDashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* AI Chat Component */}
        <RealEstateAIChat />
      </div>
    </section>
  );
};