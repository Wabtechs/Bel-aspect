import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Hotel, Utensils, Wine, PartyPopper } from 'lucide-react'
import { belImages } from '../lib/belAspect'

const services = [
  {
    icon: Hotel,
    title: 'Hôtel',
    description: 'Des chambres accessibles pour se reposer à Kalamu, avec climatisation, Wi-Fi et accueil disponible.',
    image: belImages.services[0],
  },
  {
    icon: Utensils,
    title: 'Restaurant',
    description: 'Une restauration conviviale pour vos repas, rendez-vous et moments en famille ou entre amis.',
    image: belImages.services[1],
  },
  {
    icon: Wine,
    title: 'Lounge Bar',
    description: 'Cocktails, boissons et ambiance lounge pour profiter des soirées à Kinshasa.',
    image: belImages.services[2],
  },
  {
    icon: PartyPopper,
    title: 'Ambiance',
    description: 'Un cadre vivant pour vos sorties, célébrations et rencontres dans la commune de Kalamu.',
    image: belImages.services[3],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative overflow-hidden bg-[var(--card)] py-24 lg:py-32">
      {/* Background Accent */}
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--burgundy)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.3em] text-[var(--gold)]"
          >
            NOS SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl"
          >
            L'expérience <span className="text-gradient-gold">Bel Aspect</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 h-px w-24 bg-[var(--gold)]"
          />
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative flex min-h-[400px] flex-col justify-end p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)]/20 backdrop-blur-sm transition-all group-hover:bg-[var(--gold)]/30 group-hover:shadow-lg group-hover:shadow-[var(--gold)]/20">
                  <service.icon className="h-7 w-7 text-[var(--gold)]" />
                </div>
                
                <h3 className="font-serif text-2xl text-[var(--foreground)]">
                  {service.title}
                </h3>
                
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {service.description}
                </p>

                {/* Hover Line */}
                <div className="mt-4 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
