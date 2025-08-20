import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-lg font-bold">Green Haven</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/plants" className="text-sm hover:underline underline-offset-4">
            Plants
          </Link>
          <Link href="/about" className="text-sm hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Green Haven. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
