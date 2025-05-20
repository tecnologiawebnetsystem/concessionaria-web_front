import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Contato | Concessionária Web",
  description: "Entre em contato com a Concessionária Web para dúvidas, suporte ou para conhecer nossos planos.",
}

export default function ContatoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-muted py-12">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Entre em Contato</h1>
              <p className="mt-4 max-w-3xl text-muted-foreground text-lg">
                Estamos aqui para ajudar. Entre em contato conosco para dúvidas, suporte ou para conhecer nossos planos.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" placeholder="(00) 00000-0000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Input id="subject" placeholder="Assunto da mensagem" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea id="message" placeholder="Digite sua mensagem aqui..." rows={6} />
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">Informações de Contato</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Telefone</p>
                          <p className="text-muted-foreground">(11) 3456-7890</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">E-mail</p>
                          <p className="text-muted-foreground">contato@concessionariaweb.com.br</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Endereço</p>
                          <p className="text-muted-foreground">
                            Av. Paulista, 1000, Bela Vista
                            <br />
                            São Paulo - SP, 01310-100
                            <br />
                            Brasil
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">Horário de Atendimento</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Segunda a Sexta</span>
                        <span className="font-medium">09:00 - 18:00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Sábado</span>
                        <span className="font-medium">09:00 - 13:00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Domingo</span>
                        <span className="font-medium">Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Nossa Localização</h3>
                <div className="relative h-[400px] w-full overflow-hidden rounded-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65390548502211!3d-23.563273284682373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1625058373074!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

