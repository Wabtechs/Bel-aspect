import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { belImages } from '../lib/belAspect'

const testimonials = [
  {
    name: 'Client hébergement',
    role: 'Séjour à Kalamu',
    content: 'Une adresse pratique pour se reposer à Kinshasa, avec une équipe disponible et un bon rapport qualité-prix.',
    rating: 5,
    image: belImages.testimonials[0],
  },
  {
    name: 'Client restaurant',
    role: 'Repas entre proches',
    content: 'Le restaurant est agréable pour partager un repas et prolonger la soirée dans une ambiance détendue.',
    rating: 5,
    image: belImages.testimonials[1],
  },
  {
    name: 'Client lounge',
    role: 'Sortie week-end',
    content: 'Le lounge bar donne une vraie énergie au lieu, idéal pour boire un verre et profiter de Kalamu.',
    rating: 5,
    image: belImages.testimonials[2],
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative overflow-hidden bg-[var(--card)] py-24 lg:py-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--gold)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.3em] text-[var(--gold)]"
          >
            AVIS CLIENTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl"
          >
            Ce qu'ils <span className="text-gradient-gold">apprécient</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 h-px w-24 bg-[var(--gold)]"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] p-8"
            >
              <Quote className="absolute -right-4 -top-4 h-24 w-24 rotate-180 text-[var(--gold)]/5" />

              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>

              <p className="relative text-lg leading-relaxed text-[var(--muted-foreground)]">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[var(--gold)]/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={96}
                    height={96}
                  />
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--gold)]">{testimonial.role}</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[var(--gold)] to-[var(--burgundy)] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
