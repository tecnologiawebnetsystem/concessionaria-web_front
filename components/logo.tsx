import Image from "next/image"
import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative h-10 w-10 overflow-hidden">
        <Image src="/logo.svg" alt="AutoElite Logo" width={40} height={40} className="h-10 w-auto" />
      </div>
      <span className="font-bold text-xl text-primary-foreground">AutoElite</span>
    </Link>
  )
}

