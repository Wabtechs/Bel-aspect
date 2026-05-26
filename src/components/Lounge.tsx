import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Music, Sparkles, GlassWater } from 'lucide-react'

export default function Lounge() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="lounge" className="relative min-h-screen overflow-hidden py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2029&auto=format&fit=crop"
          alt="Lounge atmosphere"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/50" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[var(--burgundy)]/30 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[var(--gold)]/20 blur-[100px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Content */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm tracking-[0.3em] text-[var(--gold)]"
            >
              NIGHTLIFE & ENTERTAINMENT
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 font-serif text-4xl font-light text-[var(--foreground)] md:text-6xl"
            >
              The <span className="text-gradient-gold">Lounge Bar</span>
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
              Where the night comes alive. Experience Kinshasa&apos;s finest 
              lounge atmosphere with premium cocktails, live DJ performances, 
              and an unforgettable ambiance.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {[
                { icon: GlassWater, label: 'Premium Cocktails' },
                { icon: Music, label: 'Live DJ Sets' },
                { icon: Sparkles, label: 'VIP Experience' },
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

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/5 p-6"
            >
              <p className="text-sm text-[var(--muted-foreground)]">OPENING HOURS</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-serif text-4xl text-[var(--gold)]">6 PM</span>
                <span className="mb-1 text-[var(--muted-foreground)]">—</span>
                <span className="font-serif text-4xl text-[var(--gold)]">Late</span>
              </div>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Thursday to Sunday • Special events on weekends
              </p>
            </motion.div>
          </div>

          {/* Right - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Image */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-[var(--gold)]/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-[var(--burgundy)]/20"
              />
              
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-2 border-[var(--gold)]/30 lg:h-96 lg:w-96">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                  alt="Cocktail"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -left-8 top-1/4 rounded-xl p-4"
              >
                <GlassWater className="h-8 w-8 text-[var(--gold)]" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
