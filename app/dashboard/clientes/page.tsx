import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { CustomersTable } from "@/components/dashboard/customers-table"
import { Plus } from "lucide-react"

export default function ClientesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Clientes" text="Gerencie os clientes da sua concessionária">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Adicionar Cliente
        </Button>
      </DashboardHeader>
      <CustomersTable />
    </DashboardShell>
  )
}

