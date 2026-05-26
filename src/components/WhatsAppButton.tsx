import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = () => {
    const phone = '243890120005'
    const message = 'Hello! I would like to make a reservation at Bel Aspect Hotel.'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass absolute bottom-16 right-0 mb-4 w-72 rounded-2xl p-5"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-medium text-[var(--foreground)]">Bel Aspect</p>
                <p className="text-xs text-green-500">Online Now</p>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              Hi there! How can we help you? Click below to chat with us on WhatsApp.
            </p>
            
            <button
              onClick={handleWhatsApp}
              className="mt-4 w-full rounded-full bg-green-500 py-3 text-sm font-medium text-white transition-all hover:bg-green-600"
            >
              Start Conversation
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all hover:bg-green-600"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
              1
            </span>
          </>
        )}
      </motion.button>
    </div>
  )
}
