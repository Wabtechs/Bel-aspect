import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Hotel, Utensils, Wine, Calendar, Wifi, Car, Wind, Coffee } from 'lucide-react'
import { belAspect, belImages } from '../lib/belAspect'

const features = [
  { icon: Hotel, label: 'Chambres' },
  { icon: Utensils, label: 'Restaurant' },
  { icon: Wine, label: 'Lounge Bar' },
  { icon: Calendar, label: 'Sorties' },
  { icon: Wifi, label: 'Wi-Fi' },
  { icon: Car, label: 'Parking' },
  { icon: Wind, label: 'Climatisation' },
  { icon: Coffee, label: 'Petit déjeuner' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--gold)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="overflow-hidden rounded-2xl"
                >
                  <img
                    src={belImages.about[0]}
                    alt="Bel Aspect Hotel Restaurant - Accueil"
                    className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="overflow-hidden rounded-2xl"
                >
                  <img
                    src={belImages.about[1]}
                    alt="Bel Aspect Hotel Restaurant Kinshasa"
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                    width={360}
                    height={360}
                  />
                </motion.div>
              </div>
              <div className="mt-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="overflow-hidden rounded-2xl"
                >
                  <img
                    src={belImages.about[2]}
                    alt="Identité Bel Aspect à Kinshasa"
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                    width={360}
                    height={360}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="overflow-hidden rounded-2xl"
                >
                  <img
                    src={belImages.about[3]}
                    alt="Bel Aspect Hotel Restaurant Lounge"
                    className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="glass absolute -bottom-6 -right-6 rounded-2xl p-6 md:bottom-10 md:right-10"
            >
              <p className="text-4xl font-bold text-[var(--gold)]">1 743</p>
              <p className="text-sm text-[var(--muted-foreground)]">visites signalées</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm tracking-[0.3em] text-[var(--gold)]"
            >
              L'ADRESSE BEL ASPECT
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 font-serif text-4xl font-light leading-tight text-[var(--foreground)] md:text-5xl"
            >
              Un lieu complet à{' '}
              <span className="text-gradient-gold">Kalamu</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="my-6 h-px w-24 origin-left bg-[var(--gold)]"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg leading-relaxed text-[var(--muted-foreground)]"
            >
              {belAspect.name} est situé sur {belAspect.address1}. L'établissement
              associe hébergement, restauration et lounge bar dans une ambiance simple,
              moderne et chaleureuse au coeur de Kinshasa.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-4 text-lg leading-relaxed text-[var(--muted-foreground)]"
            >
              Que vous veniez pour une chambre, un repas, un verre entre proches ou une
              soirée, Bel Aspect propose une expérience pratique, accessible et vivante.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="glass-light group flex flex-col items-center gap-2 rounded-xl p-4 transition-all hover:bg-[var(--gold)]/10"
                >
                  <feature.icon className="h-6 w-6 text-[var(--gold)] transition-transform group-hover:scale-110" />
                  <span className="text-center text-xs text-[var(--muted-foreground)]">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
