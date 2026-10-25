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
import { SiTailwindcss, SiLaravel, SiMysql, SiApache } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import { skills } from "../data/portfolioData";

// Map skill keys to React Icons
const skillIconMap = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,
  tailwind: SiTailwindcss,
  php: FaPhp,
  laravel: SiLaravel,
  mysql: SiMysql,
  git: FaGitAlt,
  github: FaGithub,
  vscode: VscCode,
  xampp: SiApache,
};

const skillColors = {
  html: "text-orange-500",
  css: "text-amber-500",
  javascript: "text-yellow-400",
  react: "text-yellow-400",
  tailwind: "text-teal-400",
  php: "text-amber-400",
  laravel: "text-red-500",
  mysql: "text-amber-400",
  git: "text-orange-400",
  github: "text-stone-300",
  vscode: "text-amber-500",
  xampp: "text-orange-600",
};

function SkillCard({ skill, index }) {
  const Icon = skillIconMap[skill.icon];
  const color = skillColors[skill.icon] || "text-amber-400";

  return (
    <GlassCard delay={index * 0.05} className="group">
      <div className="flex flex-col items-center text-center gap-3">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className={`text-4xl ${color}`}
        >
          {Icon && <Icon />}
        </motion.div>
        <span className="font-medium text-stone-200 group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>
    </GlassCard>
  );
}

function SkillCategory({ title, items }) {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
        <span className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded" />
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

// Skills section with categorized animated cards
export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="My Skills"
          title="Technologies I Work With"
          description="Tools and frameworks I use to bring ideas to life."
        />

        <SkillCategory title="Frontend" items={skills.frontend} />
        <SkillCategory title="Backend" items={skills.backend} />
        <SkillCategory title="Tools" items={skills.tools} />
      </div>
    </section>
  );
}
