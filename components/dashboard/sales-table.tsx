"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, FileText, MoreHorizontal, Search } from "lucide-react"
import { useState } from "react"

const sales = [
  {
    id: "1",
    customer: "João Silva",
    vehicle: "Honda Civic EXL 2023",
    date: "10/03/2023",
    value: "R$ 149.900",
    seller: "Carlos Silva",
    status: "Concluída",
  },
  {
    id: "2",
    customer: "Maria Oliveira",
    vehicle: "Toyota Corolla Altis Hybrid 2023",
    date: "05/05/2023",
    value: "R$ 189.900",
    seller: "Ana Oliveira",
    status: "Concluída",
  },
  {
    id: "3",
    customer: "Pedro Santos",
    vehicle: "Jeep Compass Limited 2022",
    date: "15/01/2023",
    value: "R$ 179.900",
    seller: "Carlos Silva",
    status: "Concluída",
  },
  {
    id: "4",
    customer: "Ana Costa",
    vehicle: "Volkswagen T-Cross 2023",
    date: "20/06/2023",
    value: "R$ 159.900",
    seller: "Ana Oliveira",
    status: "Em processamento",
  },
  {
    id: "5",
    customer: "Lucas Mendes",
    vehicle: "Hyundai Creta 2023",
    date: "02/07/2023",
    value: "R$ 169.900",
    seller: "Carlos Silva",
    status: "Pendente",
  },
]

export function SalesTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSales = sales.filter(
    (sale) =>
      sale.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.date.includes(searchTerm) ||
      sale.value.includes(searchTerm) ||
      sale.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar vendas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-9 w-[250px] lg:w-[300px]"
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Veículo</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Vendedor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSales.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{sale.customer}</TableCell>
                <TableCell>{sale.vehicle}</TableCell>
                <TableCell>{sale.date}</TableCell>
                <TableCell>{sale.value}</TableCell>
                <TableCell>{sale.seller}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      sale.status === "Concluída"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : sale.status === "Em processamento"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    }`}
                  >
                    {sale.status}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Editar</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Ver Detalhes</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

