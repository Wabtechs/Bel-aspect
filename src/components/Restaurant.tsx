import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Utensils, ChefHat } from 'lucide-react'
import { belImages } from '../lib/belAspect'

const menuHighlights = [
  {
    name: 'Cuisine locale',
    description: 'Des plats congolais et des classiques appréciés au quotidien',
    image: belImages.restaurant.cards[0],
  },
  {
    name: 'Repas entre proches',
    description: 'Un cadre pratique pour déjeuner, dîner ou recevoir',
    image: belImages.restaurant.cards[1],
  },
  {
    name: 'Petit déjeuner',
    description: 'Une option utile pour bien commencer la journée',
    image: belImages.restaurant.cards[2],
  },
  {
    name: 'Boissons et cocktails',
    description: 'A savourer au restaurant ou côté lounge bar',
    image: belImages.restaurant.cards[3],
  },
]

export default function Restaurant() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="restaurant" className="relative overflow-hidden bg-[var(--card)] py-24 lg:py-32">
      <div className="absolute inset-0 opacity-30">
        <img
          src={belImages.restaurant.bg}
          alt="Bel Aspect Hotel Restaurant"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1280}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/95 to-[var(--background)]/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm tracking-[0.3em] text-[var(--gold)]"
            >
              RESTAURATION
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl"
            >
              Le <span className="text-gradient-gold">restaurant</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-6 h-px w-24 origin-left bg-[var(--gold)]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg leading-relaxed text-[var(--muted-foreground)]"
            >
              Bel Aspect vous accueille pour vos repas à Kalamu, dans un cadre
              confortable et animé. La table accompagne aussi bien les clients de
              l'hôtel que les visiteurs venus partager un moment à Kinshasa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { icon: Clock, label: 'Ouverture', value: 'Tous les jours' },
                { icon: Utensils, label: 'Cuisine', value: 'Locale & variée' },
                { icon: ChefHat, label: 'Cadre', value: 'Convivial' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gold)]/10">
                    <item.icon className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)]">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-[var(--foreground)]">{item.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--gold)] px-8 py-3 text-sm font-medium tracking-wide text-[var(--background)] transition-all hover:bg-[var(--gold-light)]"
            >
              Réserver une table
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {menuHighlights.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 ? 'col-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? 'h-64' : 'h-48'
                  }`}
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-serif text-lg text-[var(--foreground)]">{item.name}</h4>
                  <p className="mt-1 text-xs text-[var(--muted-foreground)]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
