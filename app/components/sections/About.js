'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading animation
      gsap.from('.about-title', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Paragraph stagger
      gsap.from('.about-text', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.2,
        delay: 0.2,
      })

      // Interests card
      gsap.from('.interests-box', {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.6,
      })

      // Interest items stagger
      gsap.from('.interest-item', {
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.8,
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="flex items-center justify-center min-h-screen px-4 md:px-8 py-10"
    >
      <div className="max-w-4xl w-full">
        <h2 className="about-title text-4xl md:text-5xl font-bold mb-10 text-center">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="about-text">
            Hello! I'm a passionate full-stack developer with over 1 years of
            experience building web applications. I love turning complex
            problems into simple, beautiful, and intuitive solutions.
          </p>

          <p className="about-text">
            My journey in software development started during my computer
            science studies, where I discovered my passion for creating digital
            solutions. Since then, I've worked with various technologies and
            frameworks, always striving to stay current with the latest industry
            trends.
          </p>

          <p className="about-text">
            Outside of regular development work, I spend time building personal projects, exploring new features in the JavaScript ecosystem, and improving system design and code quality. I enjoy learning through hands-on experimentation and real-world problem solving.
          </p>

          {/* Interests */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="interests-box mt-10 p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Interests</h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Web Development',
                'UI/UX Design',
                'Machine Learning',
                'React & Frontend Architecture',
                'Node.js & APIs',
                'Clean Code Practices'
              ].map((interest, index) => (
                <motion.li
                  key={index}
                  className="interest-item flex items-center gap-2"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  {interest}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;