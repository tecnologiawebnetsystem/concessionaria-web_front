import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AutoElite - Plataforma para Concessionárias de Veículos",
  description: "Sistema completo para gestão de concessionárias de veículos com website público e ERP interno",
  keywords: "concessionária, veículos, carros, gestão, ERP, vendas, automóveis",
  authors: [{ name: "AutoElite" }],
  openGraph: {
    title: "AutoElite - Plataforma para Concessionárias de Veículos",
    description: "Sistema completo para gestão de concessionárias de veículos com website público e ERP interno",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

