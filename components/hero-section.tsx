import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-24 md:py-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Background pattern" fill className="object-cover" />
      </div>
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
                Encontre o carro dos seus sonhos
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-md">
                A maior seleção de veículos novos e seminovos com as melhores condições de financiamento do mercado.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/veiculos">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Ver veículos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/concessionarias">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Nossas concessionárias
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 text-primary-foreground/90">
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm">Concessionárias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm">Veículos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50k+</div>
                <div className="text-sm">Clientes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Carro de luxo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">Ofertas Especiais</div>
              <div className="text-lg">Até 20% de desconto</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

