import { motion } from "framer-motion";

// Reusable section heading with subtitle and gradient accent
export default function SectionTitle({ subtitle, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14 md:mb-16"
    >
      {subtitle && (
        <span className="text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-stone-400 max-w-2xl mx-auto text-base md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
