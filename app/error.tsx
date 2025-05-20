"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-destructive">Algo deu errado!</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.
        </p>
        <Button onClick={reset}>Tentar novamente</Button>
      </div>
    </div>
  )
}

