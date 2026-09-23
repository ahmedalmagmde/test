import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'

export default function Hero() {
  const [showForm, setShowForm] = useState(false)
  const [showCheck, setShowCheck] = useState(false)
  const [placeholderText, setPlaceholderText] = useState('')
  const [displayedText, setDisplayedText] = useState('')

  const fullPlaceholder = 'Enter Your Email Here For Early Access'
  const successPlaceholder = 'You Will Receive Notifications By Email'
  const targetText = showForm ? (showCheck ? successPlaceholder : fullPlaceholder) : ''

  // Typewriter effect
  useEffect(() => {
    if (!showForm) {
      setDisplayedText('')
      return
    }

    if (displayedText.length === targetText.length) {
      return
    }

    const timer = setTimeout(() => {
      setDisplayedText(targetText.slice(0, displayedText.length + 1))
    }, 60)

    return () => clearTimeout(timer)
  }, [displayedText, showForm, targetText])

  // Reset form and button after 4 seconds
  useEffect(() => {
    if (!showCheck) return

    const timer = setTimeout(() => {
      setShowCheck(false)
      setShowForm(false)
      setDisplayedText('')
    }, 4000)

    return () => clearTimeout(timer)
  }, [showCheck])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowCheck(true)
  }

  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-12">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white/80 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
        >
          BUILD A NO-CODE AI APP IN MINUTES
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl md:text-[64px] font-medium tracking-[-0.01em] leading-[1.1] mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl"
        >
          A new way to think{' '}
          <br className="hidden md:block" />
          and create with computers
        </motion.h1>

        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="min-h-[50px] mt-2"
        >
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.button
                key="button"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowForm(true)}
                className="px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm cursor-pointer whitespace-nowrap"
              >
                Get early access
              </motion.button>
            ) : (
              <motion.form
                key="form"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 text-[14px] font-medium border border-white/20 rounded-full bg-white/[0.02] backdrop-blur-sm w-full max-w-[320px] focus-within:border-white/40 transition-colors duration-300"
              >
                <input
                  type="email"
                  placeholder={displayedText}
                  autoFocus
                  required
                  className="flex-1 bg-transparent text-white placeholder-white/45 outline-none text-[14px]"
                />
                <button
                  type="submit"
                  className="p-2 hover:opacity-80 transition-opacity"
                >
                  {showCheck ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-white" />
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Play Video Demo Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-white/80 hover:text-white/40 transition-colors duration-300 text-[13px] font-medium tracking-wide cursor-pointer"
        >
          Play Video Demo
        </motion.div>
      </div>
    </section>
  )
}
