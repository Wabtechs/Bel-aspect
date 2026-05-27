import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import Logo from './Logo'

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100064926300612', label: 'Bel Aspect 1' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100069724359663', label: 'Bel Aspect 2' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Rooms', href: '#rooms' },
  { name: 'Restaurant', href: '#restaurant' },
  { name: 'Lounge Bar', href: '#lounge' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--card)]">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[var(--gold)]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="group inline-block">
              <Logo size="sm" showText={true} />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
              Experience luxury and comfort in the heart of Kinshasa. Your perfect escape awaits at Bel Aspect.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wider text-[var(--foreground)]">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--gold)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wider text-[var(--foreground)]">
              CONTACT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span className="text-sm text-[var(--muted-foreground)]">
                  Rue Tumbumani No.1, Kalamu, Kinshasa
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span className="text-sm text-[var(--muted-foreground)]">
                  +243 890 120 005
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span className="text-sm text-[var(--muted-foreground)]">
                  belaspecthotel1@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wider text-[var(--foreground)]">
              STAY UPDATED
            </h4>
            <p className="text-sm text-[var(--muted-foreground)]">
              Subscribe to receive special offers and updates.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gold)]"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-all hover:bg-[var(--gold-light)]"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">
          <p className="text-center text-sm text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} Bel Aspect Hotel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--gold)]">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--gold)]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
