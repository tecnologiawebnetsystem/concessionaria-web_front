import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Fuel, Info, MapPin, GaugeIcon as Speedometer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function VehicleShowcase() {
  const vehicles = [
    {
      id: 1,
      title: "Honda Civic EXL 2023",
      price: "R$ 149.900",
      image: "/vehicles/civic.jpg",
      location: "São Paulo, SP",
      mileage: "0 km",
      fuel: "Flex",
      dealership: "Honda Prime",
    },
    {
      id: 2,
      title: "Toyota Corolla Altis Hybrid 2023",
      price: "R$ 189.900",
      image: "/vehicles/corolla.jpg",
      location: "Rio de Janeiro, RJ",
      mileage: "0 km",
      fuel: "Híbrido",
      dealership: "Toyota Rio",
    },
    {
      id: 3,
      title: "Jeep Compass Limited 2022",
      price: "R$ 179.900",
      image: "/vehicles/compass.jpg",
      location: "Belo Horizonte, MG",
      mileage: "15.000 km",
      fuel: "Diesel",
      dealership: "Jeep BH",
    },
  ]

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Veículos em destaque</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como os veículos são apresentados em nossa plataforma, com todas as informações que os clientes
            precisam.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image-container">
                <div className="price-tag">{vehicle.price}</div>
                <Image
                  src={vehicle.image || `/placeholder.svg?height=200&width=400`}
                  alt={vehicle.title}
                  fill
                  className="object-cover vehicle-image"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{vehicle.title}</CardTitle>
                </div>
                <div className="text-sm text-muted-foreground flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {vehicle.location} • {vehicle.dealership}
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Speedometer className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{vehicle.mileage}</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{vehicle.fuel}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/veiculos/${vehicle.id}`}>
                  <Button variant="outline" size="sm">
                    <Info className="h-4 w-4 mr-2" />
                    Detalhes
                  </Button>
                </Link>
                <Link href={`/contato?veiculo=${vehicle.id}`}>
                  <Button size="sm" variant="secondary">
                    Contato
                  </Button>
                </Link>
              </CardFooter>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/veiculos">
            <Button size="lg" variant="outline">
              Ver todos os veículos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

