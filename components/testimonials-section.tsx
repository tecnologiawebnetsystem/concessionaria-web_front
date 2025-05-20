import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diretor, AutoMax Veículos",
      content:
        "Desde que implementamos a AutoElite, nossas vendas aumentaram em 35%. A plataforma é intuitiva e nossos vendedores adoram usar o sistema.",
      avatar: "/avatars/carlos.jpg",
      initials: "CS",
    },
    {
      name: "Ana Oliveira",
      role: "Gerente de Vendas, Prime Motors",
      content:
        "O chatbot da plataforma tem sido incrível para captar leads. Recebemos consultas 24/7 e nossos clientes adoram a experiência de compra online.",
      avatar: "/avatars/ana.jpg",
      initials: "AO",
    },
    {
      name: "Roberto Mendes",
      role: "Proprietário, Mendes Automóveis",
      content:
        "A gestão de estoque e a integração com bancos facilitaram muito nosso dia a dia. Conseguimos aprovar financiamentos muito mais rápido agora.",
      avatar: "/avatars/roberto.jpg",
      initials: "RM",
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Concessionárias de todo o Brasil já transformaram seus negócios com nossa plataforma.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover-effect border-2 border-border/50 h-full">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-primary/10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

