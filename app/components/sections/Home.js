'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Download, ArrowRight } from 'lucide-react'

const Home = ({ setActiveSection }) => {
  const containerRef = useRef(null)
  const buttonsRef = useRef([])
  const ringRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---------------- HERO TEXT ---------------- */
      gsap.from('.hero-item', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
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

      /* ---------------- RING FADE ANIMATION ---------------- */
      gsap.fromTo(
        ringRef.current,
        { opacity: 0.35 },
        {
          opacity: 1,
          duration: 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        }
      )

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="hero-item text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Murari Kumar
            </span>
          </h1>

          <h2 className="hero-item text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 italic">
            Full Stack Software Developer
          </h2>

          <p className="hero-item text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            Crafting modern web and mobile applications using React, Next.js,
            Node.js, and PostgreSQL. Focused on performance, scalability, and
            great user experience.
          </p>

          <div className="hero-item flex flex-wrap gap-4">
            <motion.button
              ref={(el) => (buttonsRef.current[0] = el)}
              onClick={() => setActiveSection('contact')}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold"
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
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold"
            >
              Download Resume
              <Download className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-72 h-72">

            <div
              ref={ringRef}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-primary-400 blur-sm"
            />

            <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              <img
                src="/images/kumar.jpg"
                alt="Murari Kumar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home