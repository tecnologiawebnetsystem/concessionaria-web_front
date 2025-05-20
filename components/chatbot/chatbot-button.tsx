"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import { useState } from "react"
import { ChatbotDialog } from "./chatbot-dialog"

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg z-50"
        size="icon"
        aria-label="Abrir chatbot"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>
      <ChatbotDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}

