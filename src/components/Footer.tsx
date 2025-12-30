import { Link } from "@tanstack/react-router"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-accent/5">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-accent shadow-md">
                <span className="text-lg font-bold text-white font-playfair">SN</span>
              </div>
              <span className="text-lg font-bold font-playfair bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Silver Nails
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Experience luxury nail care in the heart of Rancho Cucamonga.
              Where elegance meets expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#manicure"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Luxury Manicure
                </Link>
              </li>
              <li>
                <Link
                  to="/services#pedicure"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Spa Pedicure
                </Link>
              </li>
              <li>
                <Link
                  to="/services#gel"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Gel Nails
                </Link>
              </li>
              <li>
                <Link
                  to="/services#acrylic"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Acrylic Extensions
                </Link>
              </li>
              <li>
                <Link
                  to="/services#nail-art"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nail Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Luxury Lane<br />
                  Rancho Cucamonga, CA 91730
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="tel:+19095551234"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (909) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:info@silvernails.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@silvernails.com
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-accent/20 rounded-lg">
              <p className="text-xs font-medium mb-1">Business Hours</p>
              <p className="text-xs text-muted-foreground">
                Mon-Sat: 9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Silver Nails. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
