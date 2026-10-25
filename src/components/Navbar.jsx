import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, personalInfo } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

// Sticky navigation bar with mobile menu and active section highlighting
export default function Navbar({ activeSection, isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center font-bold text-white text-sm">
            RB
          </div>
          <span className="font-semibold text-white hidden sm:block">
            {personalInfo.name.split(" ")[0]}
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white bg-amber-600/30"
                    : "text-stone-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + mobile menu button */}
        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl glass text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto glass rounded-2xl overflow-hidden"
          >
            <ul className="py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={closeMenu}
                    className={`block px-6 py-3 text-sm font-medium cursor-pointer transition-colors ${
                      activeSection === link.id
                        ? "text-white bg-amber-600/20"
                        : "text-stone-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
