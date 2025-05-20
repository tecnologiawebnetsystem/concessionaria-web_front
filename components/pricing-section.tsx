import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const plans = [
    {
      name: "Básico",
      description: "Para concessionárias pequenas que estão começando",
      price: "R$ 299",
      period: "/mês",
      features: [
        "Até 50 veículos no estoque",
        "Até 5 usuários",
        "Website responsivo",
        "Chatbot básico",
        "Relatórios mensais",
        "Suporte por email",
      ],
      cta: "Começar agora",
      href: "/registro?plano=basico",
      popular: false,
    },
    {
      name: "Profissional",
      description: "Para concessionárias em crescimento",
      price: "R$ 599",
      period: "/mês",
      features: [
        "Até 200 veículos no estoque",
        "Até 15 usuários",
        "Website responsivo personalizado",
        "Chatbot avançado com IA",
        "Relatórios semanais",
        "Integração com bancos",
        "Suporte prioritário",
      ],
      cta: "Começar agora",
      href: "/registro?plano=profissional",
      popular: true,
    },
    {
      name: "Empresarial",
      description: "Para redes de concessionárias",
      price: "R$ 1.299",
      period: "/mês",
      features: [
        "Veículos ilimitados",
        "Usuários ilimitados",
        "Múltiplas lojas",
        "Website premium personalizado",
        "Chatbot avançado com IA",
        "Relatórios em tempo real",
        "Integrações personalizadas",
        "Suporte 24/7 dedicado",
      ],
      cta: "Fale com vendas",
      href: "/contato",
      popular: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Planos para todos os tamanhos de concessionária
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio e comece a transformar sua concessionária hoje mesmo.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${plan.popular ? "border-primary shadow-lg relative" : "border-border"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
                    Mais popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={plan.href} className="w-full">
                  <Button size="lg" className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

