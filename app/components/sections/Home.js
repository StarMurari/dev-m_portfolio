'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Download, ArrowRight } from 'lucide-react'

const Home = ({ setActiveSection }) => {
  const containerRef = useRef(null)
  const buttonsRef = useRef([])
  const mpRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---------------- MP BADGE ---------------- */
      gsap.from(mpRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.6,
        duration: 1,
        ease: 'power4.out',
        delay: 0.1,
      })

      /* ---------------- NAME ANIMATION ---------------- */
      gsap.from('.name-word', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.2,
        delay: 0.3,
      })

      // Extra elegance for "Kumar"
      gsap.fromTo(
        '.name-word.italic',
        { rotate: -4 },
        {
          rotate: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6,
        }
      )

      /* ---------------- HERO TEXT ---------------- */
      gsap.from('.hero-item', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.6,
      })

      /* ---------------- FLOATING BUTTONS ---------------- */
      gsap.to(buttonsRef.current, {
        y: -6,
        duration: 2.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])


  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center min-h-screen px-4 md:px-8"
    >
      <div className="max-w-4xl w-full text-center">

        {/* MP CIRCLE */}
        <div className="mb-6 flex justify-center">
          <div
            ref={mpRef}
            className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-xl"
          >
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary-500 via-purple-500 to-primary-400 animate-spin-slow blur-[1px]" />

            {/* Inner circle */}
            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-gray-900">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                MP
              </span>
            </div>
          </div>
        </div>

        <h1 className="hero-item text-5xl md:text-7xl font-bold mb-4 flex justify-center gap-4">
          <span className="name-word bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Murari
          </span>

          <span className="name-word bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Kumar
          </span>
        </h1>

        <h2 className="hero-item text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 italic">
          Full Stack Software Developer
        </h2>

        <p className="hero-item text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Crafting digital experiences with code. Passionate about building
          scalable, user-friendly applications that make a difference.
        </p>

        <div className="hero-item flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            ref={(el) => (buttonsRef.current[0] = el)}
            onClick={() => setActiveSection('contact')}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.a
            ref={(el) => (buttonsRef.current[1] = el)}
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold"
          >
            Download Resume
            <Download className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Home
