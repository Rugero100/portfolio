import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

// Full-screen loading animation shown on first visit
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-950"
        >
          {/* Animated logo / initials */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mb-8 shadow-lg shadow-amber-500/30"
          >
            <span className="text-3xl font-bold text-white">RB</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-white mb-2"
          >
            {personalInfo.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-stone-400 mb-8"
          >
            Loading portfolio...
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-1.5 bg-stone-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <span className="text-sm text-stone-500 mt-3">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
