import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Globe, ArrowRight, Check } from 'lucide-react'
import HlsComponent from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <main className="relative bg-black h-screen w-screen flex flex-col overflow-hidden selection:bg-white selection:text-black shrink-0">
      <HlsComponent />
      <Navbar />
      <Hero />
    </main>
  )
}
