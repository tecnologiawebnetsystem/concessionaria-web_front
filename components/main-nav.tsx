"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Início",
      active: pathname === "/",
    },
    {
      href: "/veiculos",
      label: "Veículos",
      active: pathname === "/veiculos",
    },
    {
      href: "/concessionarias",
      label: "Concessionárias",
      active: pathname === "/concessionarias",
    },
    {
      href: "/sobre",
      label: "Sobre",
      active: pathname === "/sobre",
    },
    {
      href: "/contato",
      label: "Contato",
      active: pathname === "/contato",
    },
  ]

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-primary" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

