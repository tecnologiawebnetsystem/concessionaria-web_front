import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { SalesTable } from "@/components/dashboard/sales-table"
import { Plus } from "lucide-react"

export default function VendasPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Vendas" text="Gerencie as vendas da sua concessionária">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Registrar Venda
        </Button>
      </DashboardHeader>
      <SalesTable />
    </DashboardShell>
  )
}

