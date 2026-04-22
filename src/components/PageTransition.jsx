import { motion } from 'motion/react'

const stripes = [0, 1, 2, 3, 4]

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="relative"
    >
      {/* Entry stripes */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none flex flex-col"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {stripes.map((i) => (
          <motion.div
            key={i}
            className="flex-1 bg-p5-red origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              times: [0, 0.4, 0.6, 1],
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
