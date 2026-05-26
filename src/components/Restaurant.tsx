import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Utensils, ChefHat } from 'lucide-react'

const menuHighlights = [
  {
    name: 'Grilled Tilapia',
    description: 'Fresh local fish with traditional spices and sides',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Poulet Moambé',
    description: 'Authentic Congolese chicken in palm nut sauce',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2013&auto=format&fit=crop',
  },
  {
    name: 'Continental Breakfast',
    description: 'Fresh pastries, fruits, and hot beverages',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Signature Cocktails',
    description: 'Handcrafted drinks by our expert mixologists',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function Restaurant() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="restaurant" className="relative overflow-hidden bg-[var(--card)] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop"
          alt="Restaurant background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/95 to-[var(--background)]/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className="grid gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm tracking-[0.3em] text-[var(--gold)]"
            >
              CULINARY EXCELLENCE
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl"
            >
              The <span className="text-gradient-gold">Restaurant</span>
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
              Indulge in a culinary journey at our restaurant, where traditional 
              Congolese flavors meet international cuisine. Our talented chefs 
              use the freshest local ingredients to create unforgettable dishes.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { icon: Clock, label: 'Open Daily', value: '7AM - 11PM' },
                { icon: Utensils, label: 'Cuisine', value: 'Local & International' },
                { icon: ChefHat, label: 'Experience', value: 'Fine Dining' },
              ].map((item, index) => (
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
              Make a Reservation
            </motion.a>
          </div>

          {/* Right - Food Gallery */}
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
