import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Chambres', href: '#rooms' },
  { name: 'Restaurant', href: '#restaurant' },
  { name: 'Lounge', href: '#lounge' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="group">
          <Logo size="sm" showText={true} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-light tracking-wide text-[var(--foreground)] transition-colors hover:text-[var(--gold)]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Theme toggle + CTA réservation */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-[var(--gold)] bg-[var(--gold)]/10 px-6 py-2 text-sm font-medium tracking-wide text-[var(--gold)] transition-all hover:bg-[var(--gold)] hover:text-[var(--background)]"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-[var(--foreground)]" />
          ) : (
            <Menu className="h-5 w-5 text-[var(--foreground)]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mt-3 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-[var(--foreground)] transition-colors hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-full border border-[var(--gold)] bg-[var(--gold)]/10 px-6 py-3 text-center text-sm font-medium tracking-wide text-[var(--gold)] transition-all hover:bg-[var(--gold)] hover:text-[var(--background)]"
              >
                Réserver
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
