'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Calendar, MapPin, Award } from 'lucide-react'

const educationData = [
  {
    degree: 'Master of Computer Application',
    institution: 'Sir M Visvesvaraya Institute of Technology',
    location: 'Bengaluru, Karnataka',
    period: '2021 - 2023',
    description:
      'Specialized in Web & Mobile App Development. Graduated with honors.',
    courses: [
      'Python',
      'Data Structures & Algorithms',
      'JavaScript',
      'Software Architecture',
    ],
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'M.L.T. College Saharsa',
    location: 'Saharsa, Bihar',
    period: '2017 - 2020',
    description:
      "Focus on Web Development and Database Systems.",
    courses: [
      'Data Structures',
      'Web Development',
      'Database Design',
      'Operating Systems',
    ],
  },
]

const Education = () => {
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading
      gsap.from('.edu-title', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Timeline vertical line grow
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top',
            duration: 1,
            ease: 'power3.out',
            delay: 0.2,
          }
        )
      }

      // Cards stagger
      gsap.from('.edu-card', {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.25,
        delay: 0.3,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="flex items-center justify-center min-h-screen px-4 md:px-8"
    >
      <div className="max-w-4xl w-full">
        <h2 className="edu-title text-4xl md:text-5xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-300 dark:bg-primary-700 hidden md:block"
          />

          <div className="space-y-14">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="edu-card relative"
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-6 md:left-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-950 z-10 hidden md:block shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: 'spring',
                    stiffness: 200,
                  }}
                />

                <div className="ml-0 md:ml-12 bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 transition-all duration-300 relative overflow-hidden">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                          {edu.degree}
                        </h3>

                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2">Relevant Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.08 }}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
