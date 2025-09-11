import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-2xl">OF</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Offshore Capital</h3>
                <p className="text-sm text-muted-foreground">Investment Fund</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Fundo de investimento offshore especializado em diversificação global 
              e proteção patrimonial para investidores sofisticados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-gold transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Av. Brigadeiro Faria Lima, 3064<br />
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <p className="text-sm text-muted-foreground">+55 (11) 3048-3000</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <p className="text-sm text-muted-foreground">invest@offshore-capital.com</p>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Legal</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-muted-foreground hover:text-gold transition-smooth">
                Prospectus
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-gold transition-smooth">
                Termos e Condições
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-gold transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-gold transition-smooth">
                Compliance
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Offshore Capital Investment Fund. Todos os direitos reservados.
            </p>
            <div className="text-xs text-muted-foreground max-w-md text-center md:text-right">
              <p>
                Este fundo é destinado exclusivamente a investidores qualificados. 
                Rentabilidade passada não representa garantia de resultados futuros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;