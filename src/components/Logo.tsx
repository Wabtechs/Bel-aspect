import { motion } from 'framer-motion'
import { belImages } from '../lib/belAspect'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const imgSizes = {
    sm: { img: 'h-10 w-10', text: 'text-lg' },
    md: { img: 'h-14 w-14', text: 'text-xl' },
    lg: { img: 'h-20 w-20', text: 'text-3xl' },
  }

  const s = imgSizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className={`${s.img} relative overflow-hidden rounded-full border-2 border-[var(--gold)]/60`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <img
          src={belImages.logo}
          alt="Bel Aspect Logo"
          className="h-full w-full object-cover"
          width={160}
          height={160}
        />
      </motion.div>

      {showText && (
        <div className="hidden sm:block">
          <h1 className="font-serif text-xl tracking-wide text-[var(--foreground)]">
            Bel Aspect
          </h1>
          <p className="text-[10px] tracking-[0.2em] text-[var(--muted-foreground)]">
            HOTEL - RESTAURANT - LOUNGE
          </p>
        </div>
      )}
    </div>
  )
}
