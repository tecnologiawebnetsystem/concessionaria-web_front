import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"

export function SiteFooter() {
  return (
    <footer className="bg-secondary">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-secondary-foreground">
              Plataforma completa para gestão de concessionárias de veículos com website público e ERP interno.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-secondary-foreground hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-secondary-foreground hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-secondary-foreground hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-secondary-foreground hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Plataforma</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Integrações
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Documentação
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Status
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-white">
                  Licenças
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground">
          <p>&copy; {new Date().getFullYear()} AutoElite. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

