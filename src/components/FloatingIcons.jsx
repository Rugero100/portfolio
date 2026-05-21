import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import { floatingTechIcons } from "../data/portfolioData";

const iconMap = {
  react: FaReact,
  javascript: FaJs,
  html: FaHtml5,
  css: FaCss3Alt,
  php: FaPhp,
  laravel: SiLaravel,
  git: FaGitAlt,
  github: FaGithub,
};

// Decorative floating tech icons in the background
export default function FloatingIcons() {
  const positions = [
    { top: "15%", left: "8%", delay: 0 },
    { top: "25%", right: "10%", delay: 1 },
    { top: "55%", left: "5%", delay: 2 },
    { top: "70%", right: "8%", delay: 0.5 },
    { top: "40%", left: "15%", delay: 1.5 },
    { top: "80%", left: "20%", delay: 2.5 },
    { top: "10%", right: "20%", delay: 3 },
    { top: "60%", right: "15%", delay: 1.2 },
  ];

  return (
    <div className="fixed inset-0 -z-[5] overflow-hidden pointer-events-none">
      {floatingTechIcons.map((iconKey, index) => {
        const Icon = iconMap[iconKey];
        const pos = positions[index % positions.length];
        if (!Icon) return null;

        return (
          <motion.div
            key={iconKey}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.12, 0.05],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              delay: pos.delay,
              ease: "easeInOut",
            }}
            style={{ top: pos.top, left: pos.left, right: pos.right }}
            className="absolute text-4xl md:text-5xl text-white/10"
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
}
