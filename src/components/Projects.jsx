import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import { projects } from "../data/projects";

// Visual placeholder for project cards (gradient + icon)
function ProjectImage({ project }) {
  const icons = {
    carwash: "🚗",
    student: "🎓",
    dashboard: "📊",
    portfolio: "💼",
  };

  return (
    <div
      className={`relative h-48 rounded-xl bg-gradient-to-br ${project.gradient} overflow-hidden group`}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl opacity-80">{icons[project.image] || "🚀"}</span>
      </div>
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}

// Projects showcase with hover effects and links
export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
          description="A selection of projects I've built while learning and growing as a developer."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={project.id} delay={index * 0.1} className="!p-0 overflow-hidden">
              <ProjectImage project={project} />

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-stone-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-white hover:bg-white/10 transition-colors"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 text-stone-950 text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
