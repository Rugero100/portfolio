import { motion } from "framer-motion";

// Reusable glassmorphism card wrapper with hover animation
export default function GlassCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
