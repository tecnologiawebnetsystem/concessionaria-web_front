import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Car,
  Fuel,
  GaugeIcon as Speedometer,
  MapPin,
  MessageSquare,
  Phone,
  Share2,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  // Simulando dados do veículo
  const vehicle = {
    id: params.id,
    title: "Honda Civic EXL 2023",
    price: "R$ 149.900",
    description:
      "O Honda Civic EXL 2023 é um sedã médio que combina design sofisticado, tecnologia avançada e desempenho excepcional. Com motor 2.0 flex de 155 cv, câmbio CVT, interior premium e pacote completo de segurança Honda Sensing.",
    images: [
      "/vehicles/civic.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    location: "São Paulo, SP",
    dealership: "Honda Prime",
    dealershipLogo: "/logo.svg",
    dealershipPhone: "(11) 3456-7890",
    specs: {
      year: "2023",
      mileage: "0 km",
      fuel: "Flex",
      transmission: "Automático",
      color: "Preto",
      engine: "2.0",
      doors: "4",
      features: [
        "Ar condicionado",
        "Direção elétrica",
        "Vidros elétricos",
        "Travas elétricas",
        "Airbags",
        "Freios ABS",
        "Controle de tração",
        "Controle de estabilidade",
        "Câmera de ré",
        "Sensores de estacionamento",
        "Central multimídia",
        "Bluetooth",
        "USB",
        "Bancos em couro",
        "Teto solar",
        "Rodas de liga leve",
        "Faróis de LED",
        "Piloto automático adaptativo",
        "Frenagem automática de emergência",
        "Alerta de ponto cego",
      ],
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{vehicle.title}</h1>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {vehicle.location} • {vehicle.dealership}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Compartilhar
                    </Button>
                    <Button variant="outline" size="sm">
                      <Star className="mr-2 h-4 w-4" />
                      Favoritar
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={vehicle.images[0] || "/placeholder.svg"}
                    alt={vehicle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {vehicle.images.slice(0, 5).map((image, index) => (
                    <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${vehicle.title} - Imagem ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Detalhes</TabsTrigger>
                    <TabsTrigger value="specs">Especificações</TabsTrigger>
                    <TabsTrigger value="features">Características</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="space-y-4 pt-4">
                    <div>
                      <h2 className="text-xl font-semibold">Descrição</h2>
                      <p className="mt-2 text-muted-foreground">{vehicle.description}</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="specs" className="pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Ano</p>
                          <p className="font-medium">{vehicle.specs.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Speedometer className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Quilometragem</p>
                          <p className="font-medium">{vehicle.specs.mileage}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Combustível</p>
                          <p className="font-medium">{vehicle.specs.fuel}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Transmissão</p>
                          <p className="font-medium">{vehicle.specs.transmission}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Motor</p>
                          <p className="font-medium">{vehicle.specs.engine}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Portas</p>
                          <p className="font-medium">{vehicle.specs.doors}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="pt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.specs.features.map((feature, index) => (
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
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <h2 className="text-3xl font-bold text-primary">{vehicle.price}</h2>
                        <p className="text-sm text-muted-foreground">Preço à vista</p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Button className="w-full">
                          <Phone className="mr-2 h-4 w-4" />
                          Ligar
                        </Button>
                        <Button className="w-full" variant="outline">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          WhatsApp
                        </Button>
                        <Link href={`/contato?veiculo=${vehicle.id}`} className="w-full">
                          <Button className="w-full" variant="secondary">
                            Enviar mensagem
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-md">
                        <Image
                          src={vehicle.dealershipLogo || "/placeholder.svg"}
                          alt={vehicle.dealership}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{vehicle.dealership}</h3>
                        <p className="text-sm text-muted-foreground">{vehicle.location}</p>
                        <p className="text-sm font-medium">{vehicle.dealershipPhone}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href={`/concessionarias/${vehicle.dealership.toLowerCase().replace(" ", "-")}`}>
                        <Button variant="outline" className="w-full">
                          Ver concessionária
                        </Button>
                      </Link>
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

