import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { Link } from "react-scroll";

// Floating button to scroll back to the top of the page
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-500/30 cursor-pointer hover:shadow-amber-500/50 transition-shadow"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="text-xl" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
