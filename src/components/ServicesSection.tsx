import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  FileText, 
  Lock,
  ArrowRight,
  Landmark
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Diversificação Global",
      description: "Acesso a mercados internacionais com exposição a múltiplas geografias e setores, reduzindo risco doméstico.",
      features: ["Mercados Desenvolvidos", "Economias Emergentes", "Múltiplas Moedas", "Hedge Cambial"]
    },
    {
      icon: Shield,
      title: "Estrutura Offshore",
      description: "Benefícios fiscais e proteção patrimonial através de jurisdições regulamentadas e estáveis.",
      features: ["Otimização Fiscal", "Proteção de Ativos", "Jurisdição Segura", "Compliance Total"]
    },
    {
      icon: TrendingUp,
      title: "Gestão Ativa",
      description: "Estratégias quantitativas e análise fundamental para maximizar retornos ajustados ao risco.",
      features: ["Modelos Quantitativos", "Research Próprio", "Risk Management", "Alpha Generation"]
    },
    {
      icon: Users,
      title: "Assessoria Exclusiva",
      description: "Suporte dedicado com especialistas em investimentos offshore e planejamento patrimonial.",
      features: ["Relationship Manager", "Relatórios Mensais", "Calls Trimestrais", "Suporte 24/7"]
    }
  ];

  const advantages = [
    {
      icon: Landmark,
      title: "Jurisdição Cayman Islands",
      subtitle: "Regulamentação robusta e ambiente estável"
    },
    {
      icon: Lock,
      title: "Segregação de Ativos",
      subtitle: "Proteção total dos investimentos"
    },
    {
      icon: FileText,
      title: "Transparência Total",
      subtitle: "Relatórios detalhados e auditoria Big 4"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de investimento offshore desenvolvidas para investidores 
            sofisticados que buscam diversificação e proteção patrimonial.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass-card p-8 hover:shadow-soft transition-smooth group">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-smooth">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <Card key={index} className="glass-card p-6 text-center hover:shadow-soft transition-smooth">
              <div className="inline-flex p-3 rounded-lg bg-gold/10 mb-4">
                <advantage.icon className="w-6 h-6 text-gold" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{advantage.title}</h4>
              <p className="text-sm text-muted-foreground">{advantage.subtitle}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para Diversificar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale com nossos especialistas e descubra como nosso fundo offshore 
              pode otimizar seu portfólio de investimentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" className="group">
                Agendar Consultoria
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                Download Factsheet
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;