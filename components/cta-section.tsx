import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Pronto para transformar sua concessionária?
          </h2>
          <p className="mt-4 text-xl text-primary-foreground/90 mb-8">
            Junte-se a centenas de concessionárias que já estão aumentando suas vendas e otimizando sua gestão com nossa
            plataforma.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/registro">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Começar agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/demonstracao">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Agendar demonstração
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

