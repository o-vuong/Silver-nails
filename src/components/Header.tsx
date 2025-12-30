import { Link } from "@tanstack/react-router"
import { Menu, X, Calendar, User, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { cn } from "~/lib/utils"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 group">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-accent shadow-md group-hover:shadow-lg transition-all">
                <span className="text-xl font-bold text-white font-playfair">SN</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-playfair bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Silver Nails
                </span>
                <span className="text-xs text-muted-foreground tracking-wider">LUXURY NAIL CARE</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">
              <User className="h-4 w-4" />
              Sign In
            </Link>
          </Button>
          <Button variant="luxury" size="sm" asChild>
            <Link to="/booking">
              <Calendar className="h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="space-y-2 px-6 pb-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block rounded-lg px-3 py-2 text-base font-medium leading-7 text-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t border-border pt-4 space-y-2">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <User className="h-4 w-4" />
                Sign In
              </Link>
            </Button>
            <Button variant="luxury" size="sm" className="w-full" asChild>
              <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                <Calendar className="h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Top bar with contact info */}
      <div className="hidden md:block border-b border-border/40 bg-accent/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+19095551234"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                (909) 555-1234
              </a>
              <span className="text-muted-foreground">
                Mon-Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Rancho Cucamonga, CA</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
