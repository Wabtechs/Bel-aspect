import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { belAspect } from '../lib/belAspect'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Bel Aspect 1',
    content: belAspect.address1,
  },
  {
    icon: MapPin,
    title: 'Bel Aspect 2',
    content: belAspect.address2,
  },
  {
    icon: Phone,
    title: 'Téléphones',
    content: belAspect.phones.join('\n'),
  },
  {
    icon: Mail,
    title: 'Email',
    content: belAspect.email,
  },
  {
    icon: Clock,
    title: 'Réception',
    content: 'Disponible tous les jours',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nMessage: ${formData.message}`
    const phone = '243890120005'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--gold)]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 translate-x-1/2 rounded-full bg-[var(--burgundy)]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.3em] text-[var(--gold)]"
          >
            CONTACT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl"
          >
            Contactez <span className="text-gradient-gold">Bel Aspect</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 h-px w-24 bg-[var(--gold)]"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-8 font-serif text-2xl text-[var(--foreground)]">
              Informations pratiques
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10">
                    <item.icon className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-1 whitespace-pre-line text-sm text-[var(--muted-foreground)]">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 overflow-hidden rounded-2xl border border-[var(--border)]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15920.15!2d15.3!3d-4.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKalamu%2C%20Kinshasa!5e0!3m2!1sen!2scd!4v1635000000000!5m2!1sen!2scd"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Bel Aspect"
                className="grayscale"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
              <h3 className="mb-6 font-serif text-2xl text-[var(--foreground)]">
                Envoyer un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-[var(--muted-foreground)]">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gold)]"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-[var(--muted-foreground)]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gold)]"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm text-[var(--muted-foreground)]">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gold)]"
                      placeholder="+243..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-[var(--muted-foreground)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] outline-none transition-colors focus:border-[var(--gold)]"
                    placeholder="Votre demande de réservation ou d'information"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[var(--gold)] py-4 text-sm font-medium tracking-wide text-[var(--background)] transition-all hover:bg-[var(--gold-light)]"
                >
                  Envoyer via WhatsApp
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
