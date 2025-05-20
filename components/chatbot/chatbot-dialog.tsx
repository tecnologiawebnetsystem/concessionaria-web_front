"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Car, Send, User } from "lucide-react"
import { useState } from "react"
import { VehicleCard } from "./vehicle-card"

interface ChatbotDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type MessageType = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  vehicles?: Vehicle[]
}

type Vehicle = {
  id: number
  title: string
  price: string
  image: string
  year: string
  mileage: string
  fuel: string
}

export function ChatbotDialog({ open, onOpenChange }: ChatbotDialogProps) {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "1",
      content: "Olá! Sou o assistente virtual da Concessionária Web. Como posso ajudar você hoje?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simular resposta do bot
    setTimeout(() => {
      let botResponse: MessageType

      if (inputValue.toLowerCase().includes("carro") || inputValue.toLowerCase().includes("veículo")) {
        const sampleVehicles: Vehicle[] = [
          {
            id: 1,
            title: "Honda Civic EXL 2023",
            price: "R$ 149.900",
            image: "/vehicles/civic.jpg",
            year: "2023",
            mileage: "0 km",
            fuel: "Flex",
          },
          {
            id: 2,
            title: "Toyota Corolla Altis Hybrid 2023",
            price: "R$ 189.900",
            image: "/vehicles/corolla.jpg",
            year: "2023",
            mileage: "0 km",
            fuel: "Híbrido",
          },
          {
            id: 3,
            title: "Jeep Compass Limited 2022",
            price: "R$ 179.900",
            image: "/vehicles/compass.jpg",
            year: "2022",
            mileage: "15.000 km",
            fuel: "Diesel",
          },
        ]

        botResponse = {
          id: Date.now().toString(),
          content: "Encontrei estes veículos que podem te interessar:",
          sender: "bot",
          timestamp: new Date(),
          vehicles: sampleVehicles,
        }
      } else {
        botResponse = {
          id: Date.now().toString(),
          content:
            "Posso ajudar com informações sobre nossos veículos, financiamento, agendamento de test drive ou outras dúvidas. O que você gostaria de saber?",
          sender: "bot",
          timestamp: new Date(),
        }
      }

      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] h-[600px] flex flex-col p-0 gap-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" />
            Assistente Concessionária Web
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-3 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                  <Avatar className="h-8 w-8">
                    {message.sender === "user" ? (
                      <>
                        <AvatarImage src="/avatars/user.jpg" />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarImage src="/logo.svg" />
                        <AvatarFallback>
                          <Car className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.vehicles && (
                      <div className="mt-3 space-y-3">
                        {message.vehicles.map((vehicle) => (
                          <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                      </div>
                    )}
                    <div
                      className={`text-xs text-muted-foreground mt-1 ${message.sender === "user" ? "text-right" : ""}`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t mt-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="flex gap-2"
          >
            <Input
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar mensagem</span>
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

