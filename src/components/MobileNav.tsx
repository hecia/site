import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export interface MobileNavProps {
  links?: { href: string; label: string }[]
}

const MobileNav: React.FC<MobileNavProps> = ({ links: propLinks }) => {
  const links = propLinks || [
    { href: "/", label: "Accueil" },
    { href: "/events", label: "Événements" },
    { href: "/projects", label: "Projets" },
    { href: "/blog", label: "Blog" },
    { href: "/news", label: "Actualités" },
    { href: "/gallery", label: "Galerie" },
  ]
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4 px-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
