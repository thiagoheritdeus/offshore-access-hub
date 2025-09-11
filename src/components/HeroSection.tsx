import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-investment.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Offshore Investment Fund - Financial District"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">Regulated Offshore Fund</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Elite Investment</span>
            <span className="block gradient-text">Opportunities</span>
            <span className="block text-foreground">Offshore</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Discover exclusive offshore investment solutions designed for sophisticated investors seeking superior returns and portfolio diversification.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-gold" />
                <span className="text-2xl font-bold gradient-text">18.7%</span>
              </div>
              <p className="text-sm text-muted-foreground">Average Annual Return</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-gold" />
                <span className="text-2xl font-bold gradient-text">$2.8B</span>
              </div>
              <p className="text-sm text-muted-foreground">Assets Under Management</p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-2xl font-bold gradient-text">15+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="premium" size="lg" className="group">
              Start Your Investment Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Download Fund Prospectus
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;