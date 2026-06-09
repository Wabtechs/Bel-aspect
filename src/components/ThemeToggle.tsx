import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/use-theme'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:bg-[var(--gold)]/10"
      aria-label="Changer le thème"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="h-4 w-4 text-[var(--gold)]" />
        ) : (
          <Moon className="h-4 w-4 text-[var(--gold)]" />
        )}
      </motion.div>
    </button>
  )
}
