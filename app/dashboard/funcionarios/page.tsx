import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { EmployeesTable } from "@/components/dashboard/employees-table"
import { Plus } from "lucide-react"

export default function FuncionariosPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Funcionários" text="Gerencie os funcionários da sua concessionária">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Adicionar Funcionário
        </Button>
      </DashboardHeader>
      <EmployeesTable />
    </DashboardShell>
  )
}

