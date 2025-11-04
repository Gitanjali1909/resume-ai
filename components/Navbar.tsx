"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu as Menu, FiX as X } from "react-icons/fi"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const navLinks = [
    { name: "Analyze", id: "analyze" },
    { name: "Enhance", id: "enhance" },
    { name: "Build", id: "build" },
  ]

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      for (const link of navLinks) {
        const section = document.getElementById(link.id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(link.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            resume.ai
          </span>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              {link.name}
              <motion.span
                layoutId="activeIndicator"
                className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-blue-500 to-cyan-400 ${
                  activeSection === link.id ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                }`}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Right side - Theme toggle + Mobile menu */}
        <div className="flex items-center gap-4 relative">
          {/* Text Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 text-sm font-medium rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-14 right-0 bg-background border border-border rounded-lg shadow-lg min-w-48 overflow-hidden"
              >
                <div className="py-2 space-y-1">
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`block w-full text-left px-4 py-2 transition-colors ${
                        activeSection === link.id
                          ? "bg-blue-500/20 text-blue-500"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}

                  {/* Text toggle inside mobile menu */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => {
                      setTheme(theme === "dark" ? "light" : "dark")
                      setMobileMenuOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                  >
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}
