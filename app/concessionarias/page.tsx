import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Car, MapPin, Phone, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Concessionárias | Concessionária Web",
  description: "Encontre as melhores concessionárias parceiras em todo o Brasil.",
}

export default function ConcessionariasPage() {
  const dealerships = [
    {
      id: "honda-prime",
      name: "Honda Prime",
      logo: "/logo.svg",
      address: "Av. Paulista, 1000",
      city: "São Paulo",
      state: "SP",
      phone: "(11) 3456-7890",
      vehicles: 42,
      rating: 4.8,
    },
    {
      id: "toyota-rio",
      name: "Toyota Rio",
      logo: "/logo.svg",
      address: "Av. das Américas, 2000",
      city: "Rio de Janeiro",
      state: "RJ",
      phone: "(21) 3456-7890",
      vehicles: 38,
      rating: 4.7,
    },
    {
      id: "jeep-bh",
      name: "Jeep BH",
      logo: "/logo.svg",
      address: "Av. Afonso Pena, 3000",
      city: "Belo Horizonte",
      state: "MG",
      phone: "(31) 3456-7890",
      vehicles: 25,
      rating: 4.5,
    },
    {
      id: "vw-curitiba",
      name: "VW Curitiba",
      logo: "/logo.svg",
      address: "Av. Sete de Setembro, 4000",
      city: "Curitiba",
      state: "PR",
      phone: "(41) 3456-7890",
      vehicles: 30,
      rating: 4.6,
    },
    {
      id: "hyundai-brasilia",
      name: "Hyundai Brasília",
      logo: "/logo.svg",
      address: "Eixo Monumental, 5000",
      city: "Brasília",
      state: "DF",
      phone: "(61) 3456-7890",
      vehicles: 22,
      rating: 4.4,
    },
    {
      id: "chevrolet-sul",
      name: "Chevrolet Sul",
      logo: "/logo.svg",
      address: "Av. Ipiranga, 6000",
      city: "Porto Alegre",
      state: "RS",
      phone: "(51) 3456-7890",
      vehicles: 28,
      rating: 4.5,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Concessionárias Parceiras</h1>
              <p className="mt-4 max-w-3xl text-muted-foreground text-lg">
                Encontre as melhores concessionárias parceiras em todo o Brasil.
              </p>
              <div className="mt-6 w-full max-w-md flex gap-2">
                <Input placeholder="Buscar por cidade, estado..." className="h-10" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dealerships.map((dealership) => (
              <Card key={dealership.id} className="overflow-hidden hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                      <Image
                        src={dealership.logo || "/placeholder.svg"}
                        alt={dealership.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{dealership.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {dealership.city}, {dealership.state}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{dealership.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{dealership.vehicles} veículos</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={i < Math.floor(dealership.rating) ? "currentColor" : "none"}
                            stroke="currentColor"
                            className={`h-4 w-4 ${i < Math.floor(dealership.rating) ? "text-yellow-400" : "text-muted-foreground"}`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674z"
                            />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm">{dealership.rating}/5.0</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/concessionarias/${dealership.id}`} className="w-full">
                    <Button className="w-full">Ver concessionária</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

