import { motion } from "framer-motion";

// Animated gradient orbs and blur effects for the page background
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base animated gradient */}
      <div className="absolute inset-0 animated-gradient opacity-90" />

      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-0 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 80, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-amber-500/6 rounded-full blur-3xl"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
