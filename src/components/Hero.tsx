import { motion } from 'framer-motion'
import { ChevronDown, Star, MapPin } from 'lucide-react'
import { belAspect, belImages } from '../lib/belAspect'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={belImages.hero}
          alt="Bel Aspect Hotel Restaurant à Kalamu"
          className="h-full w-full object-cover"
          width={1280}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--background)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </div>

      {/* Floating Glass Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="glass-light absolute bottom-32 left-8 hidden rounded-2xl p-5 md:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gold)]/20">
            <Star className="h-6 w-6 text-[var(--gold)]" />
          </div>
          <div>
            <p className="text-2xl font-semibold text-[var(--foreground)]">400+</p>
            <p className="text-xs text-[var(--muted-foreground)]">abonnés Facebook</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="glass-light absolute right-8 top-32 hidden rounded-2xl p-5 md:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--burgundy)]/30">
            <MapPin className="h-6 w-6 text-[var(--gold-light)]" />
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--foreground)]">Kalamu</p>
            <p className="text-xs text-[var(--muted-foreground)]">Kinshasa, RDC</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 text-sm tracking-[0.4em] text-[var(--gold)]"
          >
            BIENVENUE AU
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-serif text-5xl font-light leading-tight tracking-wide text-[var(--foreground)] md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient-gold">Bel Aspect</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mx-auto my-6 h-px w-48 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-lg tracking-[0.3em] text-[var(--muted-foreground)]"
          >
            {belAspect.tagline.toUpperCase()}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--foreground)]/80"
          >
            Hébergement, restauration et ambiance lounge au coeur de Kalamu.
            Une adresse conviviale pour se poser, manger et sortir à Kinshasa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-medium tracking-wider text-[var(--background)] transition-all hover:shadow-lg hover:shadow-[var(--gold)]/30"
            >
              <span className="relative z-10">RESERVER MAINTENANT</span>
              <div className="absolute inset-0 -translate-x-full bg-[var(--gold-light)] transition-transform group-hover:translate-x-0" />
            </a>
            <a
              href="#rooms"
              className="rounded-full border border-[var(--foreground)]/30 px-8 py-4 text-sm font-medium tracking-wider text-[var(--foreground)] transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              DECOUVRIR LES CHAMBRES
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[var(--muted-foreground)] transition-colors hover:text-[var(--gold)]"
          >
            <span className="text-xs tracking-widest">DECOUVRIR</span>
            <ChevronDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
