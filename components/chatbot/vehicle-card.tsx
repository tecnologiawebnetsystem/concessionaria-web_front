import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Fuel, Info, GaugeIcon as Speedometer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface VehicleCardProps {
  vehicle: {
    id: number
    title: string
    price: string
    image: string
    year: string
    mileage: string
    fuel: string
  }
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32 w-full">
        <Image
          src={vehicle.image || `/placeholder.svg?height=150&width=300`}
          alt={vehicle.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-3">
        <h4 className="font-medium text-sm line-clamp-1">{vehicle.title}</h4>
        <p className="font-bold text-primary">{vehicle.price}</p>
        <div className="grid grid-cols-3 gap-1 mt-2 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Info className="h-3 w-3 mr-1" />
            {vehicle.year}
          </div>
          <div className="flex items-center">
            <Speedometer className="h-3 w-3 mr-1" />
            {vehicle.mileage}
          </div>
          <div className="flex items-center">
            <Fuel className="h-3 w-3 mr-1" />
            {vehicle.fuel}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Link href={`/veiculos/${vehicle.id}`} className="w-full">
          <Button size="sm" className="w-full">
            Ver detalhes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

