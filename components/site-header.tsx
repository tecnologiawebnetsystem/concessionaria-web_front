"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"
import { MainNav } from "./main-nav"
import { ModeToggle } from "./mode-toggle"

export function SiteHeader() {
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <Logo />
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-4">
                <MainNav className="flex flex-col items-start space-y-4" />
                <div className="flex flex-col space-y-2">
                  <Link href="/login">
                    <Button variant="ghost" className="w-full justify-start">
                      Login
                    </Button>
                  </Link>
                  <Link href="/registro">
                    <Button variant="secondary" className="w-full">
                      Registrar
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <ModeToggle />
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/registro">
                <Button variant="secondary">Registrar</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

