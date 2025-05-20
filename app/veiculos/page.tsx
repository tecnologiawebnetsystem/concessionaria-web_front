import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { VehicleFilters } from "@/components/vehicles/vehicle-filters"
import { VehicleGrid } from "@/components/vehicles/vehicle-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export const metadata = {
  title: "Veículos | Concessionária Web",
  description: "Encontre o veículo ideal para você em nossa ampla seleção de carros novos e usados.",
}

export default function VeiculosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Encontre o veículo ideal para você
              </h1>
              <p className="mt-4 max-w-3xl text-muted-foreground text-lg">
                Explore nossa ampla seleção de veículos novos e usados das melhores marcas do mercado.
              </p>
              <div className="mt-6 w-full max-w-md flex gap-2">
                <Input placeholder="Buscar por marca, modelo..." className="h-10" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <VehicleFilters className="hidden md:block" />
            <div className="md:col-span-3">
              <VehicleGrid />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

