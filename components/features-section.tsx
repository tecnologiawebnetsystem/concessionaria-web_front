import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Car, CreditCard, Headset, ShieldCheck, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Car className="h-10 w-10" />,
      title: "Gestão de Estoque",
      description: "Controle completo do seu inventário de veículos com fotos, especificações e histórico.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Gestão de Equipe",
      description: "Gerencie vendedores, mecânicos e administradores com controle de acesso e desempenho.",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Processamento de Pagamentos",
      description: "Integração com bancos e financeiras para facilitar a aprovação de crédito e pagamentos.",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Relatórios Avançados",
      description: "Dashboards e relatórios detalhados para acompanhar vendas, estoque e desempenho da equipe.",
    },
    {
      icon: <Headset className="h-10 w-10" />,
      title: "Atendimento ao Cliente",
      description: "Chatbot inteligente e ferramentas de comunicação para melhorar a experiência do cliente.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Segurança Avançada",
      description: "Proteção de dados e conformidade com as regulamentações de privacidade.",
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Recursos completos para sua concessionária
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma oferece tudo o que você precisa para gerenciar sua concessionária de forma eficiente e
            aumentar suas vendas.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover-effect border-2 border-border/50">
              <CardHeader>
                <div className="feature-icon mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

