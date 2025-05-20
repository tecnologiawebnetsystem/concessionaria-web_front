import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Sobre | Concessionária Web",
  description:
    "Conheça a história e missão da Concessionária Web, a plataforma líder para concessionárias de veículos.",
}

export default function SobrePage() {
  const stats = [
    { label: "Concessionárias", value: "150+" },
    { label: "Veículos", value: "10.000+" },
    { label: "Clientes", value: "50.000+" },
    { label: "Anos no mercado", value: "5+" },
  ]

  const team = [
    {
      name: "João Silva",
      role: "CEO & Fundador",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Com mais de 15 anos de experiência no setor automotivo, João fundou a Concessionária Web para transformar a maneira como as concessionárias gerenciam seus negócios.",
    },
    {
      name: "Maria Oliveira",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Especialista em tecnologia com passagens por grandes empresas de software, Maria lidera o desenvolvimento de nossa plataforma inovadora.",
    },
    {
      name: "Pedro Santos",
      role: "Diretor Comercial",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Com vasta experiência em vendas no setor automotivo, Pedro é responsável por estabelecer parcerias estratégicas com concessionárias em todo o Brasil.",
    },
    {
      name: "Ana Costa",
      role: "Diretora de Marketing",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Especialista em marketing digital, Ana desenvolve estratégias inovadoras para aumentar a visibilidade das concessionárias parceiras.",
    },
  ]

  const values = [
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Excelência",
      description:
        "Buscamos a excelência em tudo o que fazemos, desde o desenvolvimento da plataforma até o suporte ao cliente.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Colaboração",
      description:
        "Trabalhamos em estreita colaboração com nossas concessionárias parceiras para entender suas necessidades e oferecer soluções personalizadas.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Inovação",
      description:
        "Estamos constantemente inovando para oferecer as melhores ferramentas e recursos para nossas concessionárias parceiras.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Agilidade",
      description:
        "Valorizamos a agilidade em nossos processos para ajudar nossas concessionárias a se adaptarem rapidamente às mudanças do mercado.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Transformando o mercado de concessionárias
                </h1>
                <p className="mt-6 text-xl text-muted-foreground">
                  A Concessionária Web nasceu com a missão de transformar a maneira como as concessionárias gerenciam
                  seus negócios e se conectam com seus clientes.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/registro">
                    <Button size="lg">Começar agora</Button>
                  </Link>
                  <Link href="/contato">
                    <Button size="lg" variant="outline">
                      Fale conosco
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipe Concessionária Web"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossa História</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Fundada em 2018, a Concessionária Web surgiu da necessidade de modernizar o setor de concessionárias de
                veículos no Brasil, trazendo inovação e tecnologia para um mercado tradicional.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="História da Concessionária Web"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg">
                  Tudo começou quando nosso fundador, João Silva, percebeu que as concessionárias enfrentavam
                  dificuldades para gerenciar seus negócios de forma eficiente e se conectar com seus clientes no
                  ambiente digital.
                </p>
                <p className="text-lg">
                  Com uma equipe de especialistas em tecnologia e no setor automotivo, desenvolvemos uma plataforma
                  completa que integra website, ERP e ferramentas de marketing digital, tudo em uma única solução.
                </p>
                <p className="text-lg">
                  Hoje, a Concessionária Web é a plataforma líder no mercado, atendendo mais de 150 concessionárias em
                  todo o Brasil e ajudando-as a aumentar suas vendas e otimizar sua gestão.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos Números</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Crescemos rapidamente nos últimos anos, ajudando concessionárias a transformar seus negócios e alcançar
                resultados extraordinários.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-2 text-lg font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos Valores</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Nossos valores fundamentais guiam tudo o que fazemos e como nos relacionamos com nossos clientes e
                parceiros.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                      {value.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                    <p className="mt-2 text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossa Equipe</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Conheça os líderes por trás da Concessionária Web, uma equipe apaixonada por tecnologia e pelo setor
                automotivo.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary">{member.role}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

