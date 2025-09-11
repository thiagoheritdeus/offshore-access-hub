import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Award, Calendar } from "lucide-react";

const PerformanceSection = () => {
  const performanceData = [
    { period: "2023", return: "24.3%", benchmark: "12.8%" },
    { period: "2022", return: "18.7%", benchmark: "8.2%" },
    { period: "2021", return: "31.2%", benchmark: "15.4%" },
    { period: "2020", return: "22.9%", benchmark: "9.7%" },
  ];

  const metrics = [
    {
      icon: TrendingUp,
      title: "Retorno Acumulado",
      value: "187.3%",
      subtitle: "Últimos 5 anos",
      color: "text-gold"
    },
    {
      icon: Target,
      title: "Volatilidade",
      value: "8.4%",
      subtitle: "Risco controlado",
      color: "text-emerald-400"
    },
    {
      icon: Award,
      title: "Sharpe Ratio",
      value: "2.43",
      subtitle: "Performance ajustada ao risco",
      color: "text-blue-400"
    },
    {
      icon: Calendar,
      title: "Meses Positivos",
      value: "89%",
      subtitle: "Consistência comprovada",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="performance" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Performance</span> Excepcional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso track record demonstra consistência e excelência em retornos, 
            superando benchmarks tradicionais com gestão de risco ativa.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="glass-card p-6 hover:shadow-soft transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-muted/20`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <h3 className="font-semibold text-foreground">{metric.title}</h3>
              </div>
              <div className="space-y-1">
                <p className={`text-3xl font-bold ${metric.color}`}>{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.subtitle}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Performance Table */}
        <Card className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-6 gradient-text">Histórico de Retornos Anuais</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-2 font-semibold text-foreground">Período</th>
                  <th className="text-left py-4 px-2 font-semibold text-foreground">Fundo Offshore</th>
                  <th className="text-left py-4 px-2 font-semibold text-foreground">Benchmark</th>
                  <th className="text-left py-4 px-2 font-semibold text-foreground">Outperformance</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((item, index) => {
                  const outperformance = (parseFloat(item.return) - parseFloat(item.benchmark)).toFixed(1);
                  return (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-smooth">
                      <td className="py-4 px-2 font-medium text-foreground">{item.period}</td>
                      <td className="py-4 px-2 text-gold font-semibold text-lg">{item.return}</td>
                      <td className="py-4 px-2 text-muted-foreground">{item.benchmark}</td>
                      <td className="py-4 px-2 text-emerald-400 font-semibold">+{outperformance}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {/* Chart Placeholder */}
          <div className="mt-8 h-64 glass-card rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
              <p className="text-muted-foreground">Gráfico de Performance</p>
              <p className="text-sm text-muted-foreground">Visualização detalhada disponível no portal</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PerformanceSection;