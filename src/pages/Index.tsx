import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PerformanceSection from "@/components/PerformanceSection";
import AboutFundSection from "@/components/AboutFundSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PerformanceSection />
        <AboutFundSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;