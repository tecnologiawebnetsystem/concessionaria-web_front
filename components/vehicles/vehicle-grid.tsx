import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Fuel, Info, MapPin, GaugeIcon as Speedometer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function VehicleGrid() {
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
    {
      id: 4,
      title: "Volkswagen T-Cross Highline 2023",
      price: "R$ 159.900",
      image: "/placeholder.svg?height=200&width=400",
      location: "Curitiba, PR",
      mileage: "0 km",
      fuel: "Flex",
      dealership: "VW Curitiba",
    },
    {
      id: 5,
      title: "Hyundai Creta Ultimate 2023",
      price: "R$ 169.900",
      image: "/placeholder.svg?height=200&width=400",
      location: "Brasília, DF",
      mileage: "5.000 km",
      fuel: "Flex",
      dealership: "Hyundai Brasília",
    },
    {
      id: 6,
      title: "Chevrolet Tracker Premier 2023",
      price: "R$ 154.900",
      image: "/placeholder.svg?height=200&width=400",
      location: "Porto Alegre, RS",
      mileage: "0 km",
      fuel: "Flex",
      dealership: "Chevrolet Sul",
    },
    {
      id: 7,
      title: "Ford Bronco Sport Wildtrak 2023",
      price: "R$ 256.900",
      image: "/placeholder.svg?height=200&width=400",
      location: "Salvador, BA",
      mileage: "0 km",
      fuel: "Gasolina",
      dealership: "Ford Salvador",
    },
    {
      id: 8,
      title: "Fiat Pulse Impetus 2023",
      price: "R$ 129.900",
      image: "/placeholder.svg?height=200&width=400",
      location: "Recife, PE",
      mileage: "8.000 km",
      fuel: "Flex",
      dealership: "Fiat Recife",
    },
    {
      id: 9,
      title: "Nissan Kicks Exclusive 2023",
      price: "R$ 149.900",
      image: "/placeholder.svg?height=200&width=400",
      location: "Fortaleza, CE",
      mileage: "0 km",
      fuel: "Flex",
      dealership: "Nissan Nordeste",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Veículos Disponíveis</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Ordenar por:</span>
          <select className="h-8 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <option value="relevance">Relevância</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
            <option value="newest">Mais Recentes</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <div className="vehicle-image-container">
              <div className="price-tag">{vehicle.price}</div>
              <Image
                src={vehicle.image || "/placeholder.svg"}
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
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" disabled>
            <span className="sr-only">Página anterior</span>
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
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" aria-current="page">
            1
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            2
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            3
          </Button>
          <Button variant="outline" size="icon">
            <span className="sr-only">Próxima página</span>
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
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

