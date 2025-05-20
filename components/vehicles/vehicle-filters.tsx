"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface VehicleFiltersProps {
  className?: string
}

export function VehicleFilters({ className }: VehicleFiltersProps) {
  const [priceRange, setPriceRange] = useState([50000, 200000])
  const [yearRange, setYearRange] = useState([2018, 2023])

  const brands = [
    { id: "honda", label: "Honda" },
    { id: "toyota", label: "Toyota" },
    { id: "volkswagen", label: "Volkswagen" },
    { id: "jeep", label: "Jeep" },
    { id: "hyundai", label: "Hyundai" },
    { id: "chevrolet", label: "Chevrolet" },
    { id: "ford", label: "Ford" },
    { id: "bmw", label: "BMW" },
    { id: "mercedes", label: "Mercedes-Benz" },
    { id: "audi", label: "Audi" },
  ]

  const fuelTypes = [
    { id: "flex", label: "Flex" },
    { id: "gasoline", label: "Gasolina" },
    { id: "diesel", label: "Diesel" },
    { id: "electric", label: "Elétrico" },
    { id: "hybrid", label: "Híbrido" },
  ]

  return (
    <div className={cn("space-y-6", className)}>
      <Card>
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-lg">Filtros</CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4 pt-1">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium">Preço</h3>
              <div className="space-y-4">
                <Slider defaultValue={priceRange} max={500000} min={0} step={10000} onValueChange={setPriceRange} />
                <div className="flex items-center justify-between">
                  <Input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                    className="h-8 w-20"
                  />
                  <span className="text-muted-foreground">até</span>
                  <Input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="h-8 w-20"
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="font-medium">Ano</h3>
              <div className="space-y-4">
                <Slider defaultValue={yearRange} max={2023} min={2000} step={1} onValueChange={setYearRange} />
                <div className="flex items-center justify-between">
                  <Input
                    type="number"
                    value={yearRange[0]}
                    onChange={(e) => setYearRange([Number.parseInt(e.target.value), yearRange[1]])}
                    className="h-8 w-20"
                  />
                  <span className="text-muted-foreground">até</span>
                  <Input
                    type="number"
                    value={yearRange[1]}
                    onChange={(e) => setYearRange([yearRange[0], Number.parseInt(e.target.value)])}
                    className="h-8 w-20"
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="font-medium">Marca</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center space-x-2">
                    <Checkbox id={`brand-${brand.id}`} />
                    <Label htmlFor={`brand-${brand.id}`} className="text-sm font-normal">
                      {brand.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="font-medium">Combustível</h3>
              <RadioGroup defaultValue="all">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="fuel-all" />
                  <Label htmlFor="fuel-all" className="text-sm font-normal">
                    Todos
                  </Label>
                </div>
                {fuelTypes.map((fuel) => (
                  <div key={fuel.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={fuel.id} id={`fuel-${fuel.id}`} />
                    <Label htmlFor={`fuel-${fuel.id}`} className="text-sm font-normal">
                      {fuel.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <Separator />
            <Button className="w-full">Aplicar Filtros</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

