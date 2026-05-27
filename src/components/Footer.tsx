import { motion } from 'framer-motion'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import Logo from './Logo'
import { belAspect } from '../lib/belAspect'

const socialLinks = [
  { icon: Facebook, href: belAspect.facebook1, label: 'Bel Aspect 1' },
  { icon: Facebook, href: belAspect.facebook2, label: 'Bel Aspect 2' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const quickLinks = [
  { name: 'À propos', href: '#about' },
  { name: 'Chambres', href: '#rooms' },
  { name: 'Restaurant', href: '#restaurant' },
  { name: 'Lounge Bar', href: '#lounge' },
  { name: 'Galerie', href: '#gallery' },
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
              Hôtel, restaurant et lounge bar à Kalamu, Kinshasa. Un lieu pratique
              pour se reposer, manger et profiter de la soirée.
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
              NAVIGATION
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
                  {belAspect.address1}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span className="text-sm text-[var(--muted-foreground)]">
                  {belAspect.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span className="text-sm text-[var(--muted-foreground)]">
                  {belAspect.email}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wider text-[var(--foreground)]">
              RESERVATION
            </h4>
            <p className="text-sm text-[var(--muted-foreground)]">
              Laissez votre email ou contactez-nous directement sur WhatsApp.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gold)]"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-all hover:bg-[var(--gold-light)]"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">
          <p className="text-center text-sm text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} Bel Aspect Hotel - Restaurant. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--gold)]">
              Confidentialité
            </a>
            <a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--gold)]">
              Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
