"use client"

import type React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { BarChart3, Car, CreditCard, FileText, Home, Package, Settings, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SideNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SideNav({ className, ...props }: SideNavProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Veículos",
      icon: Car,
      href: "/dashboard/veiculos",
      active: pathname === "/dashboard/veiculos",
    },
    {
      label: "Vendas",
      icon: ShoppingCart,
      href: "/dashboard/vendas",
      active: pathname === "/dashboard/vendas",
    },
    {
      label: "Clientes",
      icon: Users,
      href: "/dashboard/clientes",
      active: pathname === "/dashboard/clientes",
    },
    {
      label: "Funcionários",
      icon: Users,
      href: "/dashboard/funcionarios",
      active: pathname === "/dashboard/funcionarios",
    },
    {
      label: "Estoque",
      icon: Package,
      href: "/dashboard/estoque",
      active: pathname === "/dashboard/estoque",
    },
    {
      label: "Financeiro",
      icon: CreditCard,
      href: "/dashboard/financeiro",
      active: pathname === "/dashboard/financeiro",
    },
    {
      label: "Relatórios",
      icon: FileText,
      href: "/dashboard/relatorios",
      active: pathname === "/dashboard/relatorios",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/dashboard/analytics",
      active: pathname === "/dashboard/analytics",
    },
    {
      label: "Configurações",
      icon: Settings,
      href: "/dashboard/configuracoes",
      active: pathname === "/dashboard/configuracoes",
    },
  ]

  return (
    <div className={cn("pb-12 border-r bg-background", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Menu Principal</h2>
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <div className="space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    route.active ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  {route.label}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

