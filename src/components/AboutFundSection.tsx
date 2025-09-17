import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Shield, TrendingUp, User, Globe, Award } from "lucide-react";

const AboutFundSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Sobre o Fundo
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              O fundo foi estruturado com base em mais de 15 anos de experiência na gestão de portfólios globais, 
              apresentando histórico consistente de resultados. Nos últimos cinco anos, a estratégia acumulou um 
              retorno superior a <span className="text-gold font-semibold">187,3%</span>, resultado de disciplina, 
              rigor analítico e eficiência na alocação de ativos.
            </p>
          </div>
        </div>

        {/* Estrutura */}
        <Card className="glass-card mb-12 p-8">
          <CardHeader className="text-center pb-6">
            <Building className="w-12 h-12 text-gold mx-auto mb-4" />
            <CardTitle className="text-2xl gradient-text">Estrutura Sólida</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              A estrutura está alicerçada em um <span className="text-gold font-semibold">Trust offshore</span> administrado 
              pelo <span className="text-gold font-semibold">Bank of America</span>, uma das instituições financeiras mais 
              sólidas e respeitadas do mundo. Essa configuração garante ao investidor segurança institucional e padrões 
              internacionais de excelência.
            </p>
          </CardContent>
        </Card>

        {/* Vantagens */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Principais Vantagens</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card hover-scale transition-smooth">
              <CardHeader className="text-center">
                <Shield className="w-10 h-10 text-gold mx-auto mb-4" />
                <CardTitle className="text-lg">Vantagens Jurídicas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Patrimônio fora do inventário, permitindo maior agilidade e segurança em processos de sucessão.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale transition-smooth">
              <CardHeader className="text-center">
                <TrendingUp className="w-10 h-10 text-gold mx-auto mb-4" />
                <CardTitle className="text-lg">Benefícios Tributários</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Diferimento de impostos e otimização fiscal, dentro dos marcos legais internacionais.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale transition-smooth">
              <CardHeader className="text-center">
                <Globe className="w-10 h-10 text-gold mx-auto mb-4" />
                <CardTitle className="text-lg">Diversificação Global</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Exposição a ativos em moeda forte, incluindo Bonds, Treasuries, REITs, ações e derivativos de alta liquidez.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale transition-smooth">
              <CardHeader className="text-center">
                <Shield className="w-10 h-10 text-gold mx-auto mb-4" />
                <CardTitle className="text-lg">Proteção Patrimonial</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Blindagem frente a riscos locais e eventuais sanções governamentais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gestor */}
        <Card className="glass-card mb-12 p-8">
          <CardHeader className="text-center pb-6">
            <User className="w-12 h-12 text-gold mx-auto mb-4" />
            <CardTitle className="text-2xl gradient-text">Gestão Especializada</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A gestão é conduzida por <span className="text-gold font-semibold">Thiago Herit Garcia de Deus</span>, 
              profissional com mais de 15 anos de experiência no mercado financeiro global e detentor das 
              certificações <span className="text-gold font-semibold">CGA e CFA</span>, reconhecidas 
              internacionalmente pela excelência técnica e pelo rigor ético.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium text-gold">CGA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium text-gold">CFA Charterholder</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Governança */}
        <Card className="glass-card p-8">
          <CardHeader className="text-center pb-6">
            <Building className="w-12 h-12 text-gold mx-auto mb-4" />
            <CardTitle className="text-2xl gradient-text">Governança e Administração</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A governança e a administração do fundo ficam sob responsabilidade do 
              <span className="text-gold font-semibold"> Bank of America</span>, assegurando padrões 
              internacionais de compliance, transparência e segurança.
            </p>
            <div className="p-6 glass-card rounded-lg border border-gold/20 max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground">
                Este modelo de Trust offshore combina solidez institucional, eficiência tributária e proteção patrimonial, 
                oferecendo ao investidor um veículo diferenciado de preservação e crescimento de capital no longo prazo.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutFundSection;