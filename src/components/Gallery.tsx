import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X } from 'lucide-react'
import { belImages } from '../lib/belAspect'

const galleryImages = [
  { src: belImages.main, alt: 'Bel Aspect Hotel Restaurant', category: 'Hôtel' },
  { src: belImages.second, alt: 'Bel Aspect Kinshasa', category: 'Restaurant' },
  { src: belImages.main, alt: 'Identité Bel Aspect', category: 'Restaurant' },
  { src: belImages.second, alt: 'Bel Aspect Lounge Bar', category: 'Lounge' },
  { src: belImages.main, alt: 'Bel Aspect Hotel à Kalamu', category: 'Chambres' },
  { src: belImages.second, alt: 'Bel Aspect Hotel Restaurant Kinshasa', category: 'Ambiance' },
  { src: belImages.main, alt: 'Bel Aspect Lounge', category: 'Lounge' },
  { src: belImages.second, alt: 'Bel Aspect Restaurant', category: 'Sorties' },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.3em] text-[var(--gold)]"
          >
            GALERIE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl"
          >
            L'univers <span className="text-gradient-gold">Bel Aspect</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 h-px w-24 bg-[var(--gold)]"
          />
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="mb-4 break-inside-avoid"
            >
              <div
                onClick={() => setSelectedImage(image.src)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--background)]">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gold)]/20 text-[var(--foreground)] transition-colors hover:bg-[var(--gold)]/40"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Aperçu galerie Bel Aspect"
            loading="lazy"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
        </motion.div>
      )}
    </section>
  )
}
