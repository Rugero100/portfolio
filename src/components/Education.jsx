import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { education } from "../data/portfolioData";

// Education & journey timeline section
export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="My Journey"
          title="Education & Growth"
          description="The path I'm taking to become a skilled full stack developer."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-yellow-500 to-transparent" />

          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-16 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 md:left-5 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <FaGraduationCap className="text-white text-xs" />
              </div>

              <div className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 mb-3">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
