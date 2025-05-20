import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Plus } from "lucide-react"
import { VehiclesTable } from "@/components/dashboard/vehicles-table"

export default function VeiculosPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Veículos" text="Gerencie o estoque de veículos da sua concessionária">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Adicionar Veículo
        </Button>
      </DashboardHeader>
      <VehiclesTable />
    </DashboardShell>
  )
}

