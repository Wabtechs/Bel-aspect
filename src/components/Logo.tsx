import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: { container: 'h-10 w-10', text: 'text-lg', crown: 12 },
    md: { container: 'h-14 w-14', text: 'text-xl', crown: 16 },
    lg: { container: 'h-20 w-20', text: 'text-3xl', crown: 24 },
  }

  const s = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        {/* Crown */}
        <motion.svg
          viewBox="0 0 24 12"
          className="absolute -top-2 left-1/2 -translate-x-1/2"
          style={{ width: s.crown, height: s.crown / 2 }}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <path
            d="M12 0L14 4L18 2L16 6L20 8L12 6L4 8L8 6L6 2L10 4L12 0Z"
            fill="var(--gold)"
          />
        </motion.svg>

        {/* Main Logo Circle with Laurel */}
        <motion.div
          className={`${s.container} relative flex items-center justify-center rounded-full border-2 border-[var(--gold)]/60`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {/* Laurel Wreath Left */}
          <svg
            viewBox="0 0 30 60"
            className="absolute -left-2 h-full opacity-80"
            style={{ transform: 'scaleX(-1)' }}
          >
            <path
              d="M25 30C25 30 20 25 22 18C24 11 28 8 28 8C28 8 26 15 24 20C22 25 25 30 25 30Z"
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1"
            />
            <path
              d="M22 35C22 35 17 32 18 26C19 20 23 18 23 18C23 18 21 24 20 28C19 32 22 35 22 35Z"
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1"
            />
            <path
              d="M18 42C18 42 14 40 14 34C14 28 17 26 17 26C17 26 16 31 15 35C14 39 18 42 18 42Z"
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1"
            />
            <path
              d="M14 50C14 50 10 48 10 42C10 36 13 34 13 34C13 34 12 39 11 43C10 47 14 50 14 50Z"
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1"
            />
          </svg>

          {/* Laurel Wreath Right */}
          <svg
            viewBox="0 0 30 60"
            className="absolute -right-2 h-full opacity-80"
          >
            <path
              d="M25 30C25 30 20 25 22 18C24 11 28 8 28 8C28 8 26 15 24 20C22 25 25 30 25 30Z"
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1"
            />
            <path
              d="M22 35C22 35 17 32 18 26C19 20 23 18 23 18C23 18 21 24 20 28C19 32 22 35 22 35Z"
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1"
            />
            <path
              d="M18 42C18 42 14 40 14 34C14 28 17 26 17 26C17 26 16 31 15 35C14 39 18 42 18 42Z"
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1"
            />
            <path
              d="M14 50C14 50 10 48 10 42C10 36 13 34 13 34C13 34 12 39 11 43C10 47 14 50 14 50Z"
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1"
            />
          </svg>

          {/* B and A Letters */}
          <div className="relative flex items-center justify-center">
            <span className={`font-serif ${s.text} font-bold text-[#C41E3A]`}>B</span>
            <span className={`font-serif ${s.text} -ml-1 font-bold text-[var(--foreground)]`}>A</span>
          </div>
        </motion.div>
      </div>

      {showText && (
        <div className="hidden sm:block">
          <h1 className="font-serif text-xl tracking-wide text-[var(--foreground)]">
            Bel Aspect
          </h1>
          <p className="text-[10px] tracking-[0.2em] text-[var(--muted-foreground)]">
            HOTEL • RESTAURANT • LOUNGE
          </p>
        </div>
      )}
    </div>
  )
}
