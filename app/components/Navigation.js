'use client'

import { motion } from 'framer-motion'
import { Home, User, GraduationCap, Code, Briefcase, FolderKanban, Mail } from 'lucide-react'

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'projects', icon: FolderKanban, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' },
]

export default function Navigation({ activeSection, setActiveSection }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-20 flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-r border-gray-200 dark:border-gray-800 z-50">
        <div className="flex flex-col gap-4 relative">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = item.id === activeSection
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="relative p-3 rounded-lg transition-all duration-200 group"
                aria-label={item.label}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary-500 dark:bg-primary-600 rounded-lg"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                
                <Icon
                  className={`relative z-10 w-6 h-6 transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                  }`}
                />
              </button>
            )
          })}
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-50">
        <div className="flex items-center justify-around h-full relative">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = item.id === activeSection
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="relative flex flex-col items-center justify-center p-2 transition-all duration-200 group"
                aria-label={item.label}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicatorMobile"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary-500 dark:bg-primary-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                
                <Icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                  }`}
                />
                <span
                  className={`text-xs mt-0.5 transition-colors duration-200 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}

