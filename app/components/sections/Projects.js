'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Built with modern technologies for scalability.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '🛒',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '✅',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics. Features clean, responsive design.',
    tech: ['React', 'API Integration', 'Chart.js', 'CSS3'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '☀️',
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics platform for tracking social media metrics, generating reports, and visualizing data trends. Built for marketing teams.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'D3.js', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '📊',
  },
  {
    title: 'Learning Management System',
    description: 'Complete LMS with course creation, student tracking, quizzes, and progress monitoring. Designed for educational institutions.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '📚',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with smooth animations and dark mode support. Built with Next.js and Framer Motion.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: '💼',
  },
]

export default function Projects() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50 overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 transition-all duration-300"
              >
                <motion.div 
                  className="p-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white text-6xl flex items-center justify-center h-32 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{project.image}</span>
                </motion.div>
                <div className="p-6 flex-1 flex flex-col">
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 + techIndex * 0.05 }}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Demo</span>
                    </motion.a>
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

