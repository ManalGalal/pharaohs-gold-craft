import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CollectionSection } from "@/components/CollectionSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CollectionSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
