import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { VehicleGrid } from "@/components/vehicles/vehicle-grid"

export default function DealershipDetailPage({ params }: { params: { id: string } }) {
  // Simulando dados da concessionária
  const dealership = {
    id: params.id,
    name: "Honda Prime",
    logo: "/logo.svg",
    cover: "/placeholder.svg?height=400&width=1200",
    address: "Av. Paulista, 1000",
    city: "São Paulo",
    state: "SP",
    zipCode: "01310-100",
    phone: "(11) 3456-7890",
    email: "contato@hondaprime.com.br",
    website: "www.hondaprime.com.br",
    description:
      "A Honda Prime é uma concessionária autorizada Honda com mais de 20 anos de experiência no mercado automotivo. Oferecemos uma ampla gama de veículos novos e seminovos, além de serviços de manutenção, peças e acessórios originais.",
    hours: [
      { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
      { day: "Sábado", hours: "09:00 - 14:00" },
      { day: "Domingo", hours: "Fechado" },
    ],
    services: [
      "Venda de veículos novos",
      "Venda de veículos seminovos",
      "Serviços de manutenção",
      "Peças e acessórios originais",
      "Financiamento",
      "Seguro",
      "Test drive",
    ],
    team: [
      { name: "Carlos Silva", role: "Gerente de Vendas", phone: "(11) 98765-4321", email: "carlos@hondaprime.com.br" },
      { name: "Ana Oliveira", role: "Consultora de Vendas", phone: "(11) 98765-4322", email: "ana@hondaprime.com.br" },
      {
        name: "Roberto Mendes",
        role: "Consultor de Vendas",
        phone: "(11) 98765-4323",
        email: "roberto@hondaprime.com.br",
      },
    ],
    rating: 4.8,
    reviews: 156,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative h-64 w-full overflow-hidden">
          <Image src={dealership.cover || "/placeholder.svg"} alt={dealership.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container flex items-center gap-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-md bg-white p-2">
                <Image
                  src={dealership.logo || "/placeholder.svg"}
                  alt={dealership.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{dealership.name}</h1>
                <div className="mt-1 flex items-center text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {dealership.address}, {dealership.city}, {dealership.state}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">Sobre</TabsTrigger>
                  <TabsTrigger value="vehicles">Veículos</TabsTrigger>
                  <TabsTrigger value="team">Equipe</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="space-y-6 pt-6">
                  <div>
                    <h2 className="text-xl font-semibold">Sobre a {dealership.name}</h2>
                    <p className="mt-2 text-muted-foreground">{dealership.description}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Serviços</h3>
                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {dealership.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-primary"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="vehicles" className="pt-6">
                  <VehicleGrid />
                </TabsContent>
                <TabsContent value="team" className="pt-6">
                  <h2 className="text-xl font-semibold">Nossa Equipe</h2>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {dealership.team.map((member, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-muted">
                              <div className="flex h-full items-center justify-center text-3xl font-semibold text-muted-foreground">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                            </div>
                            <h3 className="mt-2 font-semibold">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm">{member.phone}</p>
                              <p className="text-sm">{member.email}</p>
                            </div>
                            <Button className="mt-3 w-full" variant="outline" size="sm">
                              Contatar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold">Informações de Contato</h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <span>{dealership.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <span>{dealership.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <span>
                          {dealership.address}, {dealership.city}, {dealership.state}, {dealership.zipCode}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="h-5 w-5 text-muted-foreground" />
                        <Link href={`https://${dealership.website}`} className="text-primary hover:underline">
                          {dealership.website}
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button className="w-full">Entrar em contato</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Horário de Funcionamento</h3>
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="mt-4 space-y-2">
                      {dealership.hours.map((hour, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span>{hour.day}</span>
                          <span className="font-medium">{hour.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Avaliações</h3>
                      <div className="flex items-center">
                        <span className="mr-1 font-medium">{dealership.rating}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">Baseado em {dealership.reviews} avaliações</div>
                    <div className="mt-4">
                      <Button variant="outline" className="w-full">
                        Ver todas as avaliações
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

