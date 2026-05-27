import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Music, Sparkles, GlassWater } from 'lucide-react'
import { belImages } from '../lib/belAspect'

export default function Lounge() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="lounge" className="relative min-h-screen overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src={belImages.main}
          alt="Ambiance Bel Aspect Lounge Bar"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1280}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/50" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm tracking-[0.3em] text-[var(--gold)]"
            >
              LOUNGE & SOIREES
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 font-serif text-4xl font-light text-[var(--foreground)] md:text-6xl"
            >
              Le <span className="text-gradient-gold">Lounge Bar</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-6 h-px w-32 origin-left bg-gradient-to-r from-[var(--gold)] to-[var(--burgundy)]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl leading-relaxed text-[var(--foreground)]/90"
            >
              Un espace pour se retrouver autour d'un verre, prolonger la soirée
              et profiter d'une ambiance lounge à Kalamu. Bel Aspect mélange
              détente, musique et convivialité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {[
                { icon: GlassWater, label: 'Cocktails & boissons' },
                { icon: Music, label: 'Ambiance musicale' },
                { icon: Sparkles, label: 'Soirées privées' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass flex items-center gap-3 rounded-full px-5 py-3"
                >
                  <item.icon className="h-5 w-5 text-[var(--gold)]" />
                  <span className="text-sm text-[var(--foreground)]">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/5 p-6"
            >
              <p className="text-sm text-[var(--muted-foreground)]">AMBIANCE</p>
              <div className="mt-3 flex flex-wrap items-end gap-2">
                <span className="font-serif text-4xl text-[var(--gold)]">Soirées</span>
                <span className="mb-1 text-[var(--muted-foreground)]">-</span>
                <span className="font-serif text-4xl text-[var(--gold)]">Week-end</span>
              </div>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Contactez l'équipe pour connaître la programmation et réserver.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-[var(--gold)]/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-[var(--burgundy)]/20"
              />

              <div className="relative h-80 w-80 overflow-hidden rounded-full border-2 border-[var(--gold)]/30 lg:h-96 lg:w-96">
                <img
                  src={belImages.second}
                  alt="Bel Aspect Lounge Bar Kinshasa"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={360}
                  height={360}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass absolute -left-8 top-1/4 rounded-xl p-4"
              >
                <GlassWater className="h-8 w-8 text-[var(--gold)]" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass absolute -right-8 bottom-1/4 rounded-xl p-4"
              >
                <Music className="h-8 w-8 text-[var(--burgundy)]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
