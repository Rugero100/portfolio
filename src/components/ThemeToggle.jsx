import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";

// Dark / light mode toggle button
export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2.5 rounded-xl glass text-slate-300 hover:text-white transition-colors"
    >
      {isDark ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
    </motion.button>
  );
}
