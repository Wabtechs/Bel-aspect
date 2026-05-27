import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bed, Wind, Wifi, Tv, Bath, Coffee } from 'lucide-react'
import { belImages } from '../lib/belAspect'

const rooms = [
  {
    name: 'Chambre Standard',
    price: 15,
    image: belImages.main,
    amenities: ['Lit simple', 'Climatisation', 'Wi-Fi'],
    description: 'Une option pratique et accessible pour un repos rapide ou une nuit à Kalamu.',
  },
  {
    name: 'Chambre Deluxe',
    price: 20,
    image: belImages.second,
    amenities: ['Lit double', 'Climatisation', 'Wi-Fi', 'TV'],
    description: 'Plus de confort pour vos séjours courts, déplacements ou moments de détente.',
  },
  {
    name: 'Chambre VIP',
    price: 25,
    image: belImages.main,
    amenities: ['Grand lit', 'Climatisation', 'Wi-Fi', 'TV', 'Douche privée'],
    description: 'La formule la plus confortable pour profiter pleinement de Bel Aspect.',
  },
]

const amenityIcons: Record<string, typeof Bed> = {
  'Lit simple': Bed,
  'Lit double': Bed,
  'Grand lit': Bed,
  'Climatisation': Wind,
  'Wi-Fi': Wifi,
  'TV': Tv,
  'Douche privée': Bath,
  'Petit déjeuner': Coffee,
}

export default function Rooms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleWhatsAppBooking = (roomName: string) => {
    const message = `Bonjour, je souhaite réserver ${roomName} au Bel Aspect Hotel - Restaurant.`
    const phone = '243890120005'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="rooms" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background)]" />
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--gold)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.3em] text-[var(--gold)]"
          >
            HEBERGEMENT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl"
          >
            Nos <span className="text-gradient-gold">chambres</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 h-px w-24 bg-[var(--gold)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-[var(--muted-foreground)]"
          >
            Des formules simples et accessibles, avec des tarifs clairs pour se reposer
            ou passer la nuit à Kalamu.
          </motion.p>
        </div>

        {/* Rest Option */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 overflow-hidden rounded-2xl border border-[var(--gold)]/20 bg-gradient-to-r from-[var(--burgundy)]/20 to-[var(--card)] p-6 md:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <span className="rounded-full bg-[var(--gold)]/20 px-3 py-1 text-xs font-medium text-[var(--gold)]">
                OFFRE REPOS
              </span>
              <h3 className="mt-3 font-serif text-2xl text-[var(--foreground)]">
                Formule repos en journée
              </h3>
              <p className="mt-2 text-[var(--muted-foreground)]">
                Besoin d'une pause rapide ? Profitez d'une chambre pour quelques heures.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-[var(--muted-foreground)]">A partir de</p>
              <p className="font-serif text-4xl text-[var(--gold)]">$15</p>
              <button
                onClick={() => handleWhatsAppBooking('la formule repos en journée')}
                className="mt-3 rounded-full bg-[var(--gold)] px-6 py-2 text-sm font-medium text-[var(--background)] transition-all hover:bg-[var(--gold-light)]"
              >
                Réserver
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grille des chambres */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-[var(--gold)] px-4 py-2">
                  <span className="text-lg font-bold text-[var(--background)]">${room.price}</span>
                  <span className="text-xs text-[var(--background)]/80">/nuit</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-[var(--foreground)]">{room.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{room.description}</p>

                {/* Amenities */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {room.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || Bed
                    return (
                      <div
                        key={amenity}
                        className="flex items-center gap-1.5 rounded-full bg-[var(--muted)] px-3 py-1"
                      >
                        <Icon className="h-3.5 w-3.5 text-[var(--gold)]" />
                        <span className="text-xs text-[var(--muted-foreground)]">{amenity}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Bouton de réservation */}
                <button
                  onClick={() => handleWhatsAppBooking(room.name)}
                  className="mt-6 w-full rounded-full border border-[var(--gold)] bg-[var(--gold)]/10 py-3 text-sm font-medium tracking-wide text-[var(--gold)] transition-all hover:bg-[var(--gold)] hover:text-[var(--background)]"
                >
                  Réserver via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
