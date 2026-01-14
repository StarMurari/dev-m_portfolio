'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Software Developer',
    company: 'RodBez',
    location: 'Patna, Bihar',
    period: 'Aug 2024 - Aug 2025',
    tech: ['React', 'React Native', 'CSS', 'API Integration', 'Next.js'],
  },
  {
    title: 'Full Stack Software Developer',
    company: 'Unit of Navpallav Bharat Pvt. Ltd',
    location: 'Prayagraj, Uttar Pradesh',
    period: 'Sep 2025 - Oct 2025',
    tech: ['React', 'Next.js', 'Express', 'PostgreSQL', 'Github', 'Tailwind CSS'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Feosis Pvt. Ltd.',
    location: 'We Work, Business Galaxy Park, Noida Sector 62',
    period: 'Nov 2025 - Present',
    tech: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Github', 'Notion', 'Cursor'],
  },
]

export default function Experience() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 md:px-8 py-10">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  x: 4,
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:via-primary-500/5 group-hover:to-primary-500/5 transition-all duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {exp.title}
                      </h3>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                {/* <div className="mb-4">
                  <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li 
                        key={achIndex} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + 0.2 + achIndex * 0.05 }}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <motion.span 
                          className="text-primary-500 mt-1.5"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ delay: index * 0.15 + 0.2 + achIndex * 0.05, duration: 0.3 }}
                        >•</motion.span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div> */}
                  <div>
                  <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 + 0.3 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

