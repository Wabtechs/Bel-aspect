import { motion } from 'framer-motion'
import { belImages } from '../lib/belAspect'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-6 h-16 w-16 rounded-full border-2 border-[var(--gold)] border-t-transparent"
        />
        <motion.img
          src={belImages.logo}
          alt="Bel Aspect Logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-[var(--gold)]/60 object-cover"
        />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-3xl tracking-wider text-[var(--gold)]"
        >
          Bel Aspect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-sm tracking-widest text-[var(--muted-foreground)]"
        >
          HOTEL - RESTAURANT - LOUNGE
        </motion.p>
      </motion.div>
    </div>
  )
}
