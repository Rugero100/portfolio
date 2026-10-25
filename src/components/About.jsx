import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";
import profileImage from "../assets/profile.png";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import { personalInfo, stats, interests } from "../data/portfolioData";

const statIcons = {
  projects: FaCode,
  tech: FaLaptopCode,
  experience: FaGraduationCap,
};

// About Me section with biography, stats, and interests
export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="About Me"
          title="Who I Am"
          description="Passionate about code, design, and creating meaningful digital experiences."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="glass rounded-3xl p-3 max-w-md">
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Bio */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-stone-300 leading-relaxed mb-6 text-base md:text-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-white mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full glass text-sm text-amber-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = statIcons[stat.icon];
                return (
                  <GlassCard key={stat.label} delay={index * 0.1} hover={false}>
                    <div className="text-center">
                      <Icon className="text-2xl text-amber-400 mx-auto mb-2" />
                      <p className="text-2xl md:text-3xl font-bold gradient-text">
                        {stat.value}
                      </p>
                      <p className="text-xs text-stone-400 mt-1">{stat.label}</p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
