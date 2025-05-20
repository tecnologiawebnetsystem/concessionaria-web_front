"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RegistroRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/auth/registro")
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Redirecionando para a página de registro...</p>
    </div>
  )
}

